'use client';
import { useContext } from 'react';
import Badges from '../Badges/Badges';
import BasePriceDesc from '../BasePriceDesc/BasePriceDesc';
import Selector from '../Selector/Selector';
import style from './sidebar.module.scss';
import { PageDataContext } from '@/components/Content/Content';
import SaveOrder from '../SaveOrder/SaveOrder';
import SingleSelect from '../SingleSelect/SingleSelect';
import { Library3dDataContext } from '@/utils/3D/3dLibraryContext';
import Layouts from '../Layouts/Layouts';
import Subtitle from '../Subtitle/Subtitle';
import {
  CONTAINER_10_SLUG,
  CONTAINER_HIGH,
  CONTAINER_STANDARD,
} from '@/utils/constants/names';
import OrderSummaryModal from '../OrderSummaryModal/OrderSummaryModal';

const Sidebar = () => {
  const {
    containerHeightIsStandard,
    setSelectedContainerHeight,
    selectedContainer,
    slug,
  } = useContext(PageDataContext);
  const { EXTERIOR, INTERIOR, FLOORING } = useContext(Library3dDataContext);
  const supplierName = 'Custom Cubes';

  const canSelectContainerHeight = slug !== CONTAINER_10_SLUG;
  const containerPrice = containerHeightIsStandard
    ? selectedContainer.priceSc
    : selectedContainer.priceHc;

  const NotYourOrder = () => {
    return (
      <>
        <div className={style.header}>{supplierName}</div>
        <div className={style.supplier}>By {supplierName}</div>
        <div className={style.description}>
          {supplierName} offers shipping containers for sale and modifications.
          Whether its for storage purposes or mobile office space we got it!
        </div>
        <Badges />
        <BasePriceDesc price={containerPrice} />
        <Layouts />
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
                High Container
              </span>
              <span>9' 6"</span>
            </button>
          </div>
        </div>
        <div className={style.selectionTagName} style={{ marginTop: '2rem' }}>
          Choose Exterior Paint
        </div>
        <Subtitle
          text='Select your desired material color'
          css={{ fontWeight: 400, marginBottom: '1rem' }}
        />
        <SingleSelect type={EXTERIOR} />
        <Selector />
        <div className={style.selectionTagName}>Interior Finishes</div>
        <Subtitle
          text='Select your wall finish'
          css={{ fontWeight: 400, marginBottom: '1rem' }}
        />
        <SingleSelect type={INTERIOR} />
        <div className={style.selectionTagName}>Flooring Options</div>
        <Subtitle
          text='Select your flooring'
          css={{ fontWeight: 400, marginBottom: '1rem' }}
        />
        <SingleSelect type={FLOORING} />
        <SaveOrder />
      </>
    );
  };

  return (
    <div className={style.container}>
      <NotYourOrder />
    </div>
  );
};

export default Sidebar;
