import Card from "./Card";
import PrizeSet from "./PrizeSet";
import {useEffect, useRef, useState} from "react";

export const Prize = ({ prize, productInfo }) => {
    const cardsContainerRef = useRef(null);

    useEffect(() => {
        if (cardsContainerRef.current) {
            const cardWidth = localStorage.getItem('cardWidth');

            const cards = cardsContainerRef.current.children;
            let maxWidth = 0;

            Array.from(cards).forEach((card) => {
                const cardWidth = card.clientWidth;
                maxWidth = Math.max(maxWidth, cardWidth);
            });

            if (cardWidth < maxWidth) {
                setCardWidth(maxWidth);
                localStorage.setItem('cardWidth', maxWidth);
            }
            else {
                setCardWidth(cardWidth);
            }
        }
    }, [])

    function setCardWidth (cardWidth) {
        const cardWrappers = document.querySelectorAll('.card-wrapper');

        for (let i = 0; i < cardWrappers.length; i++) {
            const cardWrapper = cardWrappers[i];
            cardWrapper.style.width = (cardWidth - 1)+'px'
        }
    }

    const timesCount = () => {
        switch (prize.gachaPrizeType) {
            // case 1:
            //     return prize.gachaPrizeEmissionsCount;
            case 2:
                if (productInfo.gachaLastOneFlag !== 0) {
                    return 1;
                } else {
                    return 0;
                }
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                return prize.matchedPositionCount;
            default:
                return prize.gachaPrizeEmissionsCount;
        }
    }

    return (
        <div className="prize-wrapper py-5">
            <h3 className="text-xl font-medium border p-1 my-3">{`${prize.gachaPrizeName}（${prize?.gachaPrizeSetItemData.length > 0 ? prize.gachaPrizePoint : 0}pt:${timesCount()}回）`}</h3>
            <PrizeSet type="videoList" title="動画" prizeSet={JSON.parse(prize.gachaPrizeSetVideo)} itemData={prize.gachaPrizeSetItemData} videoData={prize.gachaPrizeSetVideoData} />
            <PrizeSet type="itemList" title="アイテム" prizeSet={JSON.parse(prize.gachaPrizeSetItem)} itemData={prize.gachaPrizeSetItemData}  />
            <div ref={cardsContainerRef} className="flex flex-wrap gap-4 cards-list">
                {
                    prize?.gachaPrizeSetItemData?.map((item, i) => <Card key={i} item={item} />)
                }
            </div>
        </div>
    );
}
export default Prize;