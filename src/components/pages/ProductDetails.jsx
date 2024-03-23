import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { settingsState } from "../../store/settingsState";
import { displayState } from "../../store/displayState";
import useFetchSalesQuery from "../../hooks/useFetchSalesQuery";
import Loader from "../atoms/Loading/TherapistLoader";
import Prize from "../organisms/productDetails/Prize";
import useFetchQuery from "../../hooks/useFetchQuery";
import {unixTimestampToDateFormat} from "../../utils/commonFunctions";

export const ProductDetails = () => {
    const location = useLocation();
    console.log("locationDetail",location);
    const paramId = location.pathname.split("/").pop();
    console.log("paramId",paramId);
    const navigate = useNavigate();
    const [settingsStateStateValue, setSettingsStateState] = useRecoilState(settingsState);
    const [displayStateValue, setDisplayState] = useRecoilState(displayState);
    console.log(settingsStateStateValue);

    let pagePath = 'product-details';
    // let pageName = location.state?.data.name;
    let pageTitle = 'Product Details';

    //detail query
    const { data: productInfo , isLoading, refetchApi } = useFetchQuery(`/product-details/${paramId}`);
    console.log('productInfo', productInfo)

    useEffect(() => {
        localStorage.removeItem('cardWidth');
    }, []);

    useEffect(() => {
        window.history.pushState(null, '', window.location.href);
        setDisplayState((prevState) => ({
            ...prevState,
            pageTitle: pageTitle,
            pagePath: pagePath,
            // pageName: pageName,
        }))
    }, [location]);

    const productImgSrc = () => {
        if (productInfo.gachaTranslates?.length > 0) {
            return productInfo.gachaTranslates[0].gachaTranslateImageMain ?? null;
        }
        return null;
    }

    return (
        <div className="product-details-wrapper h-screen-minus-90 overflow-auto">
            {isLoading && <Loader />}
            <div className="product-info-wrapper">
                <div className="flex gap-10">
                    <div className="product-img-wrapper w-[360px] h-[240px] grow-0">
                        {
                            productImgSrc() ?
                                <img src={productImgSrc()} alt="" className="m-auto object-contain w-full h-full"/> :
                                <img alt="" className="m-auto object-contain w-full h-full"/>
                        }
                    </div>

                    <div className="product-info grow">
                        <h2 className="text-2xl font-medium border p-1 mb-2">{productInfo.gachaTranslates?.length > 0 ? productInfo.gachaTranslates[0].gachaTranslateName : ''}</h2>
                        <p className="mb-3">{productInfo.gachaTranslates?.length > 0 ? productInfo.gachaTranslates[0].gachaTranslateDescription : ''}</p>
                        <div className="flex text-left">
                            <table className="w-full">
                                <tr>
                                    <th className="py-1">登録日時</th>
                                    <td className="py-1">{unixTimestampToDateFormat(productInfo.gachaCreatedAt,true, false, true)}</td>
                                </tr>
                                <tr>
                                    <th className="py-1">編集日時</th>
                                    <td className="py-1">{unixTimestampToDateFormat(productInfo.gachaUpdatedAt,true, false, true)}</td>
                                </tr>
                                <tr>
                                    <th className="py-1">表示開始日時</th>
                                    <td className="py-1">{unixTimestampToDateFormat(productInfo.gachaPostStartDate,true, false, true)}</td>
                                </tr>
                                <tr>
                                    <th className="py-1">販売開始日時</th>
                                    <td className="py-1">{unixTimestampToDateFormat(productInfo.gachaStartDate,true, false, true)}</td>
                                </tr>
                                <tr>
                                    <th className="py-1">販売終了日時</th>
                                    <td className="py-1">{unixTimestampToDateFormat(productInfo.gachaEndDate,true, false, true)}</td>
                                </tr>
                            </table>
                            <table className="w-full">
                                <tr>
                                    <th className="py-1">総数</th>
                                    <td className="py-1">{productInfo.gachaTotalCount}</td>
                                </tr>
                                <tr>
                                    <th className="py-1">単発PT</th>
                                    <td className="py-1">{productInfo.gachaSinglePoint}</td>
                                </tr>
                                <tr>
                                    <th className="py-1">連続数</th>
                                    <td className="py-1">{productInfo.gachaConosecutiveCount}</td>
                                </tr>
                                <tr>
                                    <th className="py-1">天井数</th>
                                    <td className="py-1">{productInfo.gachaLimitCount}</td>
                                </tr>
                            </table>
                            <table className="w-full">
                                <tr>
                                    <th className="py-1">1人総回数制限</th>
                                    <td className="py-1">{productInfo.gachaLimitOnce}</td>
                                </tr>
                                <tr>
                                    <th className="py-1">1人１日制限</th>
                                    <td className="py-1">{productInfo.gachaLimitOncePerDay}</td>
                                </tr>
                                <tr>
                                    <th className="py-1">全員１日制限</th>
                                    <td className="py-1">{productInfo.gachaLimitEveryonePerDay}</td>
                                </tr>
                                <tr>
                                    <th className="py-1">残り全部引く</th>
                                    <td className="py-1">{productInfo.gachaAllRestCount}</td>
                                </tr>
                                <tr>
                                    <th className="py-1">キリ番</th>
                                    <td className="py-1">{productInfo.gachaLuckyNumber}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {
                productInfo.gachaPrizes?.map(prize => <Prize key={prize.gachaPrizeId} prize={prize} productInfo={productInfo}  />)
            }
        </div>
    );
};



