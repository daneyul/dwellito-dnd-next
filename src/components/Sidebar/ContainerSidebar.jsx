import React, { useContext } from 'react';
import style from './containerSidebar.module.scss';
import {
  COMPONENT_NAMES,
  COMPONENT_TYPES,
  CONTAINER_HIGH,
  CONTAINER_SIZE_10,
  CONTAINER_SIZE_40,
  CONTAINER_STANDARD,
  EXTERIOR,
  FLOORING,
  INTERIOR,
  SUPPLIER_NAMES,
} from '@/utils/constants/names/names';
import { componentData } from '@/utils/constants/componentData';
import { FLOORING_OPTIONS } from '@/utils/constants/components/flooringData';
import Logo from '../Logo';
import Subtitle from '../Subtitle/Subtitle';
import Selector from '../Selector/Selector';
import ContainerSingleSelect from '../SingleSelect/ContainerSingleSelect';
import AddElecOption from '../AddOption/AddElecOption';
import AddPartition from '../AddOption/AddPartition';
import { ContainerDataContext } from '@/utils/contexts/ContainerDataProvider';
import ContainerSaveOrder from '../SaveOrder/ContainerSaveOrder';
import ContainerLayouts from '../Layouts/ContainerLayouts';

const LogoSection = ({ supplier }) => {
  return (
    <>
      <div className={style.logo}>
        <Logo type={supplier} />
      </div>
      <div className={style.header}>Configure</div>
    </>
  );
};

const HeightSelector = ({
  canSelectContainerHeight,
  containerHeightIsStandard,
  setSelectedContainerHeight,
}) => (
  <div
    className={style.containerHeights}
    style={{ display: canSelectContainerHeight ? 'block' : 'none' }}
  >
    <Subtitle text='Select the height' />
    <div className={style.containerHeightSelectWrapper}>
      <button
        onClick={() => setSelectedContainerHeight(CONTAINER_STANDARD)}
        className={
          containerHeightIsStandard
            ? style.containerButtonSelected
            : style.containerButton
        }
      >
        <img src="/images/containers/thumbnails/heights/standard.png" alt='layout' className={style.layoutImg} />
        <div style={{ fontWeight: 700, width: "100%", }}>
          Standard (8' 5")
        </div>
      </button>
      <button
        onClick={() => setSelectedContainerHeight(CONTAINER_HIGH)}
        className={
          !containerHeightIsStandard
            ? style.containerButtonSelected
            : style.containerButton
        }
      >
        <img src="/images/containers/thumbnails/heights/high.png" alt='layout' className={style.layoutImg} />
        <div style={{ fontWeight: 700, width: "100%" }}>
          High Cube (9' 6")
        </div>
      </button>
    </div>
  </div>
);

const ExteriorSelector = ({ supplier }) => (
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
    <ContainerSingleSelect type={EXTERIOR} />
  </>
);

const InteriorSelector = () => {
  return (
    <>
      <div className={style.selectionTagName}>Interior Finishes</div>
      <Subtitle
        text='Select your wall finish'
        css={{ fontWeight: 400, marginBottom: '1rem' }}
      />
      <ContainerSingleSelect type={INTERIOR} />
    </>
  );
};

const PartitionsSelector = ({ partitions }) => {
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
};

const ContainerSidebar = () => {
  const {
    containerHeightIsStandard,
    setSelectedContainerHeight,
    selectedContainer,
    slug,
    supplier,
    containerSize,
  } = useContext(ContainerDataContext);

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

  const ContainerSelection = () => {
<<<<<<< HEAD
=======
<<<<<<< HEAD:src/components/Sidebar/ContainerSidebar.jsx
    if (supplier === SUPPLIER_SLUGS.AT_AND_S) {
      return (
        <>
          <Badges />
          <HeightSelector
            canSelectContainerHeight={canSelectContainerHeight}
            containerHeightIsStandard={containerHeightIsStandard}
            setSelectedContainerHeight={setSelectedContainerHeight}
          />
          <PriceSection containerPrice={containerPrice} supplier={supplier}/>
          <ContainerLayouts />
        </>
      );
    } else {
      return (
        <>
          <Badges />
          <PriceSection containerPrice={containerPrice} supplier={supplier} />
          <ContainerLayouts />
          <HeightSelector
            canSelectContainerHeight={canSelectContainerHeight}
            containerHeightIsStandard={containerHeightIsStandard}
            setSelectedContainerHeight={setSelectedContainerHeight}
          />
        </>
      );
    }
=======
>>>>>>> 83913fabfd9069d000f74ec30b0ea4fcee47c4bc
    return (
      <>
        <ContainerLayouts />
        <HeightSelector
          canSelectContainerHeight={canSelectContainerHeight}
          containerHeightIsStandard={containerHeightIsStandard}
          setSelectedContainerHeight={setSelectedContainerHeight}
        />
      </>
    );
<<<<<<< HEAD
=======
>>>>>>> 3d02b43e4bc330507c36a1a92ce683790abd4942:src/components/Sidebar/Sidebar.jsx
>>>>>>> 83913fabfd9069d000f74ec30b0ea4fcee47c4bc
  };

  return (
    <>
      <div className={style.desktopContainer}>
        <LogoSection supplier={supplier} />
        <ContainerSelection />
        <Selector />
        <ExteriorSelector supplier={supplier} />
        <InteriorSelector />
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
            <ContainerSingleSelect type={FLOORING} />
          </>
        )}
        <ContainerSaveOrder />
      </div>
    </>
  );
};

export default ContainerSidebar;
