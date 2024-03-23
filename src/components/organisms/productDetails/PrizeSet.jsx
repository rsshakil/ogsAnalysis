export const PrizeSet = ({ type, title, prizeSet, itemData = [], videoData = [] }) => {

    const getPrizeItem = (id) => {
        if (type === "itemList") {
            if (id.startsWith("tag-")) {
                const tagArr = id.split('-');
                const tagId = tagArr[1];

                let tagName = '';
                let itemName = '';
                itemData.forEach(item => {
                    const tagIds = item.tagId?.split(',');
                    const tagNames = item.tagName?.split(' ');
                    tagIds?.forEach((t, i) => {
                        if (t === tagId) {
                            tagName = tagNames[i];
                            itemName += item.itemTranslateName + ' ';
                        }
                    });
                });

                return `${tagName}（${itemName}）`;
            } else if (id.startsWith("item-")) {
                if (itemData.length > 0) {
                    const targetItem = itemData.find(item => item.id === id);
                    return `${targetItem.itemTranslateName}（${targetItem.tagName}）`;
                }
            }
        }
    }

    return (
        <div className="prize-set flex mb-5">
            <div className="prize-set-title font-bold mr-5 w-20" style={{minWidth: '80px'}}>{title}</div>
            <div className="prize-set-list">
                {
                    type === 'itemList' ?
                    (prizeSet && itemData.length > 0) && prizeSet.map((id, i) => (
                        <span key={i}>{getPrizeItem(id)}&nbsp;</span>
                    ))
                    :
                    (videoData && itemData.length > 0) && videoData.map((video, i) => (
                        <span key={i}>{video.videoName}&nbsp;</span>
                    ))
                }
            </div>
        </div>
    );
}
export default PrizeSet;