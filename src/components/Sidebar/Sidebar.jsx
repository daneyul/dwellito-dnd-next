import { memo, useContext } from 'react';
import style from './sidebar.module.scss';
import { PageDataContext } from '@/components/Content/Content';
import {
  COMPONENT_NAMES,
  COMPONENT_TYPES,
  CONTAINER_HIGH,
  CONTAINER_SIZE_10,
  CONTAINER_SIZE_40,
  CONTAINER_STANDARD,
  findSupplierName,
  EXTERIOR,
  FLOORING,
  INTERIOR,
  INTERIOR_TRIM,
  SUPPLIER_NAMES,
} from '@/utils/constants/names/names';
import { componentData } from '@/utils/constants/componentData';
import { INTERIOR_TRIM_OPTIONS } from '@/utils/constants/components/interiorTrimData';
import { FLOORING_OPTIONS } from '@/utils/constants/components/flooringData';
import Logo from '../Logo';
import Badges from '../Badges/Badges';
import BasePriceDesc from '../BasePriceDesc/BasePriceDesc';
import Layouts from '../Layouts/Layouts';
import Subtitle from '../Subtitle/Subtitle';
import Selector from '../Selector/Selector';
import SingleSelect from '../SingleSelect/SingleSelect';
import AddElecOption from '../AddOption/AddElecOption';
import AddPartition from '../AddOption/AddPartition';
import SaveOrder from '../SaveOrder/SaveOrder';

const LogoSection = memo(({ supplier }) => (
  <>
    <div className={style.logo}>
      <Logo type={supplier} />
    </div>
    <div className={style.header}>{findSupplierName(supplier)}</div>
    <div className={style.supplier}>By {findSupplierName(supplier)}</div>
    <div className={style.description}>
      {findSupplierName(supplier)} offers shipping containers for sale and
      modifications. Whether it's for storage purposes or mobile office space we
      got it!
    </div>
  </>
));

const PriceSection = memo(({ containerPrice }) => (
  <BasePriceDesc price={containerPrice} />
));

const HeightSelector = memo(
  ({
    canSelectContainerHeight,
    containerHeightIsStandard,
    setSelectedContainerHeight,
  }) => (
    <div
      className={style.containerHeights}
      style={{ display: canSelectContainerHeight ? 'block' : 'none' }}
    >
      <Subtitle text='Select the height' />
      <Subtitle
        text='Start with your ideal height.'
        css={{ fontWeight: 400, marginBottom: '1rem' }}
      />
      <div className={style.containerHeightSelectWrapper}>
        <button
          onClick={() => setSelectedContainerHeight(CONTAINER_STANDARD)}
          className={
            containerHeightIsStandard
              ? style.containerButtonSelected
              : style.containerButton
          }
        >
          <span style={{ fontWeight: 700, marginRight: '0.25rem' }}>
            Standard
          </span>
          <span>8' 5"</span>
        </button>
        <button
          onClick={() => setSelectedContainerHeight(CONTAINER_HIGH)}
          className={
            !containerHeightIsStandard
              ? style.containerButtonSelected
              : style.containerButton
          }
        >
          <span style={{ fontWeight: 700, marginRight: '0.25rem' }}>
            High Cube
          </span>
          <span>9' 6"</span>
        </button>
      </div>
    </div>
  )
);

const ExteriorSelector = memo(({ supplier }) => (
  <>
    <div className={style.selectionTagName} style={{ marginTop: '2rem' }}>
      Choose Exterior Paint
    </div>
    {supplier === SUPPLIER_NAMES.CUSTOM_CUBES && (
      <Subtitle
        text='Beige is our stock colour, we do often stock white and grey at no extra cost, your sales representative can confirm'
        css={{ fontWeight: 400, marginBottom: '1rem' }}
      />
    )}
    <SingleSelect type={EXTERIOR} />
  </>
));

const InteriorSelector = memo(() => {
  return (
    <>
      <div className={style.selectionTagName}>Interior Finishes</div>
      <Subtitle
        text='Select your wall finish'
        css={{ fontWeight: 400, marginBottom: '1rem' }}
      />
      <SingleSelect type={INTERIOR} />
    </>
  );
});

const InteriorTrimsSelector = memo(({ interiorTrims }) => {
  if (interiorTrims.length === 0) return null;
  return (
    <>
      <div className={style.selectionTagName}>Interior Trims</div>
      <Subtitle
        text='Select your interior trim'
        css={{ fontWeight: 400, marginBottom: '1rem' }}
      />
      <SingleSelect type={INTERIOR_TRIM} />
    </>
  );
});

const PartitionsSelector = memo(({ partitions }) => {
  if (partitions.length === 0) return null;
  return (
    <>
      <div className={style.selectionTagName}>Partitions</div>
      <Subtitle
        text='Select your partition walls'
        css={{ fontWeight: 400, marginBottom: '1rem' }}
      />
      <AddPartition options={partitions} />
    </>
  );
});

const Sidebar = memo(() => {
  const {
    containerHeightIsStandard,
    setSelectedContainerHeight,
    selectedContainer,
    slug,
    supplier,
    containerSize,
  } = useContext(PageDataContext);

  const canSelectContainerHeight = slug !== CONTAINER_SIZE_10;
  const containerPrice = containerHeightIsStandard
    ? selectedContainer.priceSc
    : selectedContainer.priceHc;

  const fixedElectricals = componentData.filter((item) => {
    if (containerSize() === CONTAINER_SIZE_40) {
      return (
        item.objType === COMPONENT_TYPES.ELECTRICAL &&
        item.name !== COMPONENT_NAMES.ELECTRICAL_PANEL_60_AMP &&
        item.fixed &&
        item.supplier === supplier
      );
    } else {
      return (
        item.objType === COMPONENT_TYPES.ELECTRICAL &&
        item.name !== COMPONENT_NAMES.ELECTRICAL_PANEL_100_AMP &&
        item.fixed &&
        item.supplier === supplier
      );
    }
  });

  const nonFixedElectricals = componentData.filter((item) => {
    if (containerSize() === CONTAINER_SIZE_40) {
      return (
        item.objType === COMPONENT_TYPES.ELECTRICAL &&
        item.name !== COMPONENT_NAMES.ELECTRICAL_PANEL_60_AMP &&
        !item.fixed &&
        item.supplier === supplier
      );
    } else {
      return (
        item.objType === COMPONENT_TYPES.ELECTRICAL &&
        item.name !== COMPONENT_NAMES.ELECTRICAL_PANEL_100_AMP &&
        !item.fixed &&
        item.supplier === supplier
      );
    }
  });

  const partitions = componentData.filter((item) => {
    if (containerHeightIsStandard) {
      return (
        item.objType === COMPONENT_TYPES.PARTITION &&
        !item.highContainerOnly &&
        item.supplier === supplier
      );
    } else {
      return (
        item.objType === COMPONENT_TYPES.PARTITION &&
        item.highContainerOnly &&
        item.supplier === supplier
      );
    }
  });

  const interiorTrims = INTERIOR_TRIM_OPTIONS.filter((item) => {
    return item.supplier === supplier;
  });

  return (
    <div className={style.container}>
      <LogoSection supplier={supplier} />
      <Badges />
      <PriceSection containerPrice={containerPrice} />
      <Layouts />
      <HeightSelector
        canSelectContainerHeight={canSelectContainerHeight}
        containerHeightIsStandard={containerHeightIsStandard}
        setSelectedContainerHeight={setSelectedContainerHeight}
      />
      <ExteriorSelector supplier={supplier} />
      <Selector />
      <InteriorSelector />
      <InteriorTrimsSelector interiorTrims={interiorTrims} />
      <PartitionsSelector partitions={partitions} />
      <Subtitle
        text='Select your electrical add-ons'
        css={{ fontWeight: 400, margin: '2rem 0 1rem 0' }}
      />
      <div className={style.fixedObjectContainer}>
        <AddElecOption options={fixedElectricals} />
        <AddElecOption options={nonFixedElectricals} />
      </div>
      {FLOORING_OPTIONS.filter((i) => i.supplier === supplier).length > 0 && (
        <>
          <div className={style.selectionTagName}>Flooring Options</div>
          <Subtitle
            text='Select your flooring'
            css={{ fontWeight: 400, marginBottom: '1rem' }}
          />
          <SingleSelect type={FLOORING} />
        </>
      )}
      <SaveOrder />
    </div>
  );
});

export default Sidebar;
