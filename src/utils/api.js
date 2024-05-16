import Airtable from "airtable";
import { cache } from "react";

Airtable.configure({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_TOKEN,
});

const base = Airtable.base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

// export const getOtherModelsFromSupplierData = cache(async ({ modelIds }) => {
//   const filterByFormula = `OR(${modelIds.map(id => `{Record ID} = "${id}"`).join(", ")})`;

//   const records = await base(process.env.NEXT_PUBLIC_AIRTABLE_MODEL_TABLE_ID)
//     .select({
//       filterByFormula,
//     })
//     .all();

//   return records.map(transformRecord);
// });

export const getModelData = cache(async ({ slug }) => {
  const records = await base(process.env.NEXT_PUBLIC_AIRTABLE_MODEL_TABLE_ID)
    .select({
      filterByFormula: `{slug} = "${slug}"`,
    })
    .all();

  return records.map(transformRecord);
});

export const getSupplierData = cache(async ({ slug }) => {
  const records = await base(process.env.NEXT_PUBLIC_AIRTABLE_SUPPLIER_TABLE_ID)
    .select({
      filterByFormula: `{slug} = "${slug}"`,
    })
    .all();

  return records.map(transformRecord);
});

export const getViewData = cache(async ({ selectionIds }) => {
  const filterByFormula = selectionIds
    .map((id) => `FIND("${id}", ARRAYJOIN({lookup_Selections}, ",")) > 0`)
    .join(", ");

  const fullFormula = `OR(${filterByFormula})`;

  const records = await base(process.env.NEXT_PUBLIC_AIRTABLE_VIEW_TABLE_ID)
    .select({
      filterByFormula: fullFormula,
    })
    .all();

  return records.map(transformRecord);
});

export const getSelectionData = cache(async ({ modelId }) => {
  const records = await base(
    process.env.NEXT_PUBLIC_AIRTABLE_SELECTION_TABLE_ID
  )
    .select({
      filterByFormula: `FIND("${modelId}", ARRAYJOIN({lookup_Model}, ",")) > 0`,
    })
    .all();

  return records.map(transformRecord);
});

export const getSelectedData = cache(async ({ selectedIds }) => {
  const formula = `OR(${selectedIds.map(id => `RECORD_ID() = '${id}'`).join(',')})`;
  
  const records = await base(
    process.env.NEXT_PUBLIC_AIRTABLE_SELECTION_TABLE_ID
  )
    .select({
      filterByFormula: formula,
    })
    .all();

  return records.map(transformRecord);
});

export const getSelectionGroupData = cache(async ({ selectionIds }) => {
  const filterByFormula = selectionIds
    .map((id) => `FIND("${id}", ARRAYJOIN({lookup_Selections}, ",")) > 0`)
    .join(", ");

  const fullFormula = `OR(${filterByFormula})`;

  const records = await base(
    process.env.NEXT_PUBLIC_AIRTABLE_SELECTION_GROUP_TABLE_ID
  )
    .select({
      filterByFormula: fullFormula,
    })
    .all();

  return records.map(transformRecord);
});

export const getAdditionalFieldsData = cache(async ({ supplierId }) => {
  const records = await base(
    process.env.NEXT_PUBLIC_AIRTABLE_ADDITIONAL_FIELDS_TABLE_ID
  )
    .select({
      filterByFormula: `FIND("${supplierId}", ARRAYJOIN({Record ID - supplier}, ",")) > 0`,
    })
    .all();

  return records.map(transformFields);
});