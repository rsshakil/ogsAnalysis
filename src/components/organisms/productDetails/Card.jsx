import {useRef} from "react";

export const Card = ({ item }) => {
    const cardRef = useRef(null);

    return (
        <table className="card-wrapper w-64 flex-grow border text-[13px]" ref={cardRef}>
                <tr>
                    <td colSpan="2">
                        <img className="m-auto object-contain h-[350px]" src={item.itemImagePath1} alt=""/>
                    </td>
                </tr>
                <tr>
                    <td className="w-1/2 border px-2">アイテム名</td>
                    <td className="w-1/2 border px-2">{item.itemTranslateName}</td>
                </tr>
                <tr>
                    <td className="w-1/2 border px-2">エキスパンション</td>
                    <td className="w-1/2 border px-2">{item.itemAttribute2}</td>
                </tr>
                <tr>
                    <td className="w-1/2 border px-2">シリアルNo.</td>
                    <td className="w-1/2 border px-2">{item.itemAttribute3}</td>
                </tr>
                <tr>
                    <td className="w-1/2 border px-2">レアリティ</td>
                    <td className="w-1/2 border px-2">{item.itemAttribute4}</td>
                </tr>
                <tr>
                    <td className="w-1/2 border px-2">鑑定</td>
                    <td className="w-1/2 border px-2">{item.itemAttribute5}</td>
                </tr>
                <tr>
                    <td colSpan="2">{item.tagName}</td>
                </tr>
            </table>
    );
}
export default Card;