import Airtable from "airtable";
import { cache } from "react";

Airtable.configure({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_TOKEN,
});

const base = Airtable.base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

export function transformRecord(record) {
  return {
    id: record.id,
    ...record.fields,
  };
}

export const getSupplierData = cache(async () => {
  const records = await base(process.env.NEXT_PUBLIC_AIRTABLE_SUPPLIER_TABLE_ID)
  .select()
  .all();

  return records.map(transformRecord);
});