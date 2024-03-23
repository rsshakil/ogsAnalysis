import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'
import { encode, decode } from 'js-base64';

// const { persistAtom } = recoilPersist({
//   key: 'recoil-persist', // this key is using to store data in local storage
//   storage: sessionStorage, // configurate which stroage will be used to store the data
// })

// 20230110 add'js-base64
const localStorageBase64 = () => {
  return {
    setItem: (key, value) => {
      sessionStorage.setItem(encode(key), encode(value))
    },
    getItem: (key) => {
      const getItem =  sessionStorage.getItem(encode(key))
      return getItem && decode(getItem) || {}
    },
    clear: () => {
      sessionStorage.clear()
    },
  }
}
const { persistAtom } = recoilPersist({ key: 'recoil-persist', storage: localStorageBase64() })

export const summaryChartDummyState = atom({
  key: 'summaryChartDummyState',
  // default: { row: [false,1,2,3,4,5] }
  // default: ['1111111'],
  default:  [
    {
        date: new Date('2023/10/01 0:00'),
        "ex-toreca": 400646,
        dopa: 2758272,
        "japan-toreca": 1031362,
        clove: 9475407,
        gacha24: 819344,
        iris: 3261856,
        oriparoad: 3261856,
        snkrdunk: 3261856,
        "ciel-toreca": 3261856,
        arcara: 3261856,
        poimani: 3261856,
        torebuil: 3261856,
        "on-tore": 3261856,
        "oripa-black": 3261856,
        "yk-oripa": 3261856,
    },
    {
        date: new Date('2023/10/01 1:00'),
        "ex-toreca": 3514051,
        dopa: 9444842,
        "japan-toreca": 9874703,
        clove: 1844918,
        gacha24: 7083793,
        iris: 3240089,
        oriparoad: 3261856,
        snkrdunk: 3261856,
        "ciel-toreca": 3261856,
        arcara: 3261856,
        poimani: 3261856,
        torebuil: 3261856,
        "on-tore": 3261856,
        "oripa-black": 3261856,
        "yk-oripa": 3261856,
    },
    {
        date: new Date('2023/10/01 2:00'),
        "ex-toreca": 2453773,
        dopa: 810316,
        "japan-toreca": 8300481,
        clove: 7566396,
        gacha24: 5392683,
        iris: 449717,
        oriparoad: 3261856,
        snkrdunk: 3261856,
        "ciel-toreca": 3261856,
        arcara: 3261856,
        poimani: 3261856,
        torebuil: 3261856,
        "on-tore": 3261856,
        "oripa-black": 3261856,
        "yk-oripa": 3261856,
    },
    {
        date: new Date('2023/10/01 3:00'),
        "ex-toreca": 8341749,
        dopa: 8819246,
        "japan-toreca": 1636210,
        clove: 7650705,
        gacha24: 553410,
        iris: 7528784,
        oriparoad: 3261856,
        snkrdunk: 3261856,
        "ciel-toreca": 3261856,
        arcara: 3261856,
        poimani: 3261856,
        torebuil: 3261856,
        "on-tore": 3261856,
        "oripa-black": 3261856,
        "yk-oripa": 3261856,
    },
    {
        date: new Date('2023/10/01 4:00'),
        "ex-toreca": 2979895,
        dopa: 3652338,
        "japan-toreca": 4159875,
        clove: 4984653,
        gacha24: 6981216,
        iris: 1284637,
        oriparoad: 3261856,
        snkrdunk: 3261856,
        "ciel-toreca": 3261856,
        arcara: 3261856,
        poimani: 3261856,
        torebuil: 3261856,
        "on-tore": 3261856,
        "oripa-black": 3261856,
        "yk-oripa": 3261856,
    },
    {
        date: new Date('2023/10/01 5:00'),
        "ex-toreca": 3046944,
        dopa: 1523711,
        "japan-toreca": 1968625,
        clove: 7107792,
        gacha24: 2309291,
        iris: 6798548,
        oriparoad: 3261856,
        snkrdunk: 3261856,
        "ciel-toreca": 3261856,
        arcara: 3261856,
        poimani: 3261856,
        torebuil: 3261856,
        "on-tore": 3261856,
        "oripa-black": 3261856,
        "yk-oripa": 3261856,
    },
    {
        date: new Date('2023/10/01 6:00'),
        "ex-toreca": 6666616,
        dopa: 3253900,
        "japan-toreca": 5574096,
        clove: 8373675,
        gacha24: 8906335,
        iris: 9578135,
        oriparoad: 3261856,
        snkrdunk: 3261856,
        "ciel-toreca": 3261856,
        arcara: 3261856,
        poimani: 3261856,
        torebuil: 3261856,
        "on-tore": 3261856,
        "oripa-black": 3261856,
        "yk-oripa": 3261856,
    },
    {
        date: new Date('2023/10/01 7:00'),
        "ex-toreca": 4737300,
        dopa: 4294252,
        "japan-toreca": 6714620,
        clove: 2129425,
        gacha24: 6941736,
        iris: 4042870,
        oriparoad: 3261856,
        snkrdunk: 3261856,
        "ciel-toreca": 3261856,
        arcara: 3261856,
        poimani: 3261856,
        torebuil: 3261856,
        "on-tore": 3261856,
        "oripa-black": 3261856,
        "yk-oripa": 3261856,
    },
    {
        date: new Date('2023/10/01 8:00'),
        "ex-toreca": 4222690,
        dopa: 3093759,
        "japan-toreca": 9794562,
        clove: 2306693,
        gacha24: 7151361,
        iris: 1674208,
        oriparoad: 3261856,
        snkrdunk: 3261856,
        "ciel-toreca": 3261856,
        arcara: 3261856,
        poimani: 3261856,
        torebuil: 3261856,
        "on-tore": 3261856,
        "oripa-black": 3261856,
        "yk-oripa": 3261856,
    },
    {
        date: new Date('2023/10/01 9:00'),
        "ex-toreca": 2867851,
        dopa: 6810120,
        "japan-toreca": 2076592,
        clove: 216278,
        gacha24: 4624417,
        iris: 8879590
    },
    {
        date: new Date('2023/10/01 10:00'),
        "ex-toreca": 6044842,
        dopa: 1404830,
        "japan-toreca": 5690626,
        clove: 329889,
        gacha24: 3200080,
        iris: 1668547
    },
    {
        date: new Date('2023/10/01 11:00'),
        "ex-toreca": 1519044,
        dopa: 5182481,
        "japan-toreca": 594129,
        clove: 1770004,
        gacha24: 7051822,
        iris: 771326
    },
    {
        date: new Date('2023/10/01 12:00'),
        "ex-toreca": 2661098,
        dopa: 7759691,
        "japan-toreca": 5098951,
        clove: 2144928,
        gacha24: 468808,
        iris: 761812
    },
    {
        date: new Date('2023/10/01 13:00'),
        "ex-toreca": 6165253,
        dopa: 1910981,
        "japan-toreca": 8442776,
        clove: 3997341,
        gacha24: 8811827,
        iris: 8570653
    },
    {
        date: new Date('2023/10/01 14:00'),
        "ex-toreca": 3808845,
        dopa: 81803,
        "japan-toreca": 7764219,
        clove: 2832372,
        gacha24: 4318869,
        iris: 6888759
    },
    {
        date: new Date('2023/10/01 15:00'),
        "ex-toreca": 8954302,
        dopa: 8007156,
        "japan-toreca": 5984436,
        clove: 3647667,
        gacha24: 5790245,
        iris: 168636
    },
    {
        date: new Date('2023/10/01 16:00'),
        "ex-toreca": 3028077,
        dopa: 7748527,
        "japan-toreca": 3836042,
        clove: 9605913,
        gacha24: 3016611,
        iris: 9320608
    },
    {
        date: new Date('2023/10/01 17:00'),
        "ex-toreca": 1471681,
        dopa: 5165032,
        "japan-toreca": 7945826,
        clove: 9163460,
        gacha24: 2725406,
        iris: 8937223
    },
    {
        date: new Date('2023/10/01 18:00'),
        "ex-toreca": 3872356,
        dopa: 8002179,
        "japan-toreca": 9261354,
        clove: 6991013,
        gacha24: 1277036,
        iris: 6348492
    },
    {
        date: new Date('2023/10/01 19:00'),
        "ex-toreca": 7120864,
        dopa: 7255047,
        "japan-toreca": 2116034,
        clove: 1726562,
        gacha24: 6116119,
        iris: 9101587
    },
    {
        date: new Date('2023/10/01 20:00'),
        "ex-toreca": 1898065,
        dopa: 3868330,
        "japan-toreca": 4348045,
        clove: 1512754,
        gacha24: 96679,
        iris: 1787085
    },
    {
        date: new Date('2023/10/01 21:00'),
        "ex-toreca": 4900245,
        dopa: 3749496,
        "japan-toreca": 6079543,
        clove: 3636297,
        gacha24: 6500036,
        iris: 7632066
    },
    {
        date: new Date('2023/10/01 22:00'),
        "ex-toreca": 8474778,
        dopa: 6829606,
        "japan-toreca": 6375912,
        clove: 4426423,
        gacha24: 7250547,
        iris: 1595719
    },
    {
        date: new Date('2023/10/01 23:00'),
        "ex-toreca": 2032946,
        dopa: 1344761,
        "japan-toreca": 5148057,
        clove: 8163661,
        gacha24: 2976703,
        iris: 9126346
    },
    {
        date: new Date('2023/10/02 0:00'),
        "ex-toreca": 1430600,
        dopa: 462454,
        "japan-toreca": 901488,
        clove: 6300667,
        gacha24: 3022512,
        iris: 4824690
    },
    {
        date: new Date('2023/10/02 1:00'),
        "ex-toreca": 6473270,
        dopa: 2465646,
        "japan-toreca": 9102913,
        clove: 7582098,
        gacha24: 6710527,
        iris: 8374407
    },
    {
        date: new Date('2023/10/02 2:00'),
        "ex-toreca": 3127971,
        dopa: 5880460,
        "japan-toreca": 4730942,
        clove: 7572202,
        gacha24: 5047030,
        iris: 2884849
    },
    {
        date: new Date('2023/10/02 3:00'),
        "ex-toreca": 8172439,
        dopa: 7194795,
        "japan-toreca": 545072,
        clove: 6531178,
        gacha24: 3880121,
        iris: 3572441
    },
    {
        date: new Date('2023/10/02 4:00'),
        "ex-toreca": 9903808,
        dopa: 3072283,
        "japan-toreca": 5878143,
        clove: 7606724,
        gacha24: 1005055,
        iris: 271892
    },
    {
        date: new Date('2023/10/02 5:00'),
        "ex-toreca": 2901322,
        dopa: 9430147,
        "japan-toreca": 8949155,
        clove: 256082,
        gacha24: 3081225,
        iris: 3501300
    },
    {
        date: new Date('2023/10/02 6:00'),
        "ex-toreca": 2887737,
        dopa: 9494990,
        "japan-toreca": 905449,
        clove: 4337511,
        gacha24: 7794863,
        iris: 5120589
    },
    {
        date: new Date('2023/10/02 7:00'),
        "ex-toreca": 6792023,
        dopa: 5177885,
        "japan-toreca": 5226995,
        clove: 1125984,
        gacha24: 1390837,
        iris: 5394805
    },
    {
        date: new Date('2023/10/02 8:00'),
        "ex-toreca": 8706846,
        dopa: 6793482,
        "japan-toreca": 345471,
        clove: 1103115,
        gacha24: 5450947,
        iris: 6732434
    },
    {
        date: new Date('2023/10/02 9:00'),
        "ex-toreca": 4150583,
        dopa: 1994163,
        "japan-toreca": 7535135,
        clove: 4886981,
        gacha24: 6035530,
        iris: 6838912
    },
    {
        date: new Date('2023/10/02 10:00'),
        "ex-toreca": 2665019,
        dopa: 2557660,
        "japan-toreca": 963889,
        clove: 3998821,
        gacha24: 6112371,
        iris: 3384328
    },
    {
        date: new Date('2023/10/02 11:00'),
        "ex-toreca": 7838319,
        dopa: 4533278,
        "japan-toreca": 9800635,
        clove: 6429438,
        gacha24: 9861783,
        iris: 3965482
    },
    {
        date: new Date('2023/10/02 12:00'),
        "ex-toreca": 3308884,
        dopa: 1598070,
        "japan-toreca": 4179514,
        clove: 2611540,
        gacha24: 8790152,
        iris: 8924541
    },
    {
        date: new Date('2023/10/02 13:00'),
        "ex-toreca": 1486119,
        dopa: 9628500,
        "japan-toreca": 355265,
        clove: 5455059,
        gacha24: 788564,
        iris: 989679
    },
    {
        date: new Date('2023/10/02 14:00'),
        "ex-toreca": 766055,
        dopa: 6938725,
        "japan-toreca": 8039526,
        clove: 2887106,
        gacha24: 7330478,
        iris: 9592086
    },
    {
        date: new Date('2023/10/02 15:00'),
        "ex-toreca": 4598669,
        dopa: 8038789,
        "japan-toreca": 4077996,
        clove: 8047303,
        gacha24: 2900323,
        iris: 1850886
    },
    {
        date: new Date('2023/10/02 16:00'),
        "ex-toreca": 7318177,
        dopa: 7378619,
        "japan-toreca": 7727403,
        clove: 7246746,
        gacha24: 7384112,
        iris: 9905028
    },
    {
        date: new Date('2023/10/02 17:00'),
        "ex-toreca": 2512556,
        dopa: 4711083,
        "japan-toreca": 5735694,
        clove: 1881124,
        gacha24: 974592,
        iris: 8241743
    },
    {
        date: new Date('2023/10/02 18:00'),
        "ex-toreca": 6913462,
        dopa: 5977390,
        "japan-toreca": 9037499,
        clove: 5597399,
        gacha24: 6606227,
        iris: 298540
    },
    {
        date: new Date('2023/10/02 19:00'),
        "ex-toreca": 935389,
        dopa: 7936073,
        "japan-toreca": 5614556,
        clove: 838700,
        gacha24: 9297568,
        iris: 5821692
    },
    {
        date: new Date('2023/10/02 20:00'),
        "ex-toreca": 6199093,
        dopa: 7447244,
        "japan-toreca": 5579249,
        clove: 7379901,
        gacha24: 8926739,
        iris: 6526410
    },
    {
        date: new Date('2023/10/02 21:00'),
        "ex-toreca": 861792,
        dopa: 449337,
        "japan-toreca": 1825751,
        clove: 8227974,
        gacha24: 5237869,
        iris: 3925581
    },
    {
        date: new Date('2023/10/02 22:00'),
        "ex-toreca": 828320,
        dopa: 3913283,
        "japan-toreca": 6881646,
        clove: 9927787,
        gacha24: 3915450,
        iris: 5450793
    },
    {
        date: new Date('2023/10/02 23:00'),
        "ex-toreca": 5426790,
        dopa: 2192015,
        "japan-toreca": 4155306,
        clove: 9109645,
        gacha24: 3825152,
        iris: 2233946
    },
    {
        date: new Date('2023/10/03 0:00'),
        "ex-toreca": 1753888,
        dopa: 7218646,
        "japan-toreca": 8586112,
        clove: 8371569,
        gacha24: 7745505,
        iris: 6807150
    },
    {
        date: new Date('2023/10/03 1:00'),
        "ex-toreca": 982332,
        dopa: 514134,
        "japan-toreca": 2413340,
        clove: 8239664,
        gacha24: 9412293,
        iris: 7788521
    },
    {
        date: new Date('2023/10/03 2:00'),
        "ex-toreca": 4399982,
        dopa: 6442459,
        "japan-toreca": 4040953,
        clove: 2212081,
        gacha24: 8350129,
        iris: 8068392
    },
    {
        date: new Date('2023/10/03 3:00'),
        "ex-toreca": 8353654,
        dopa: 3999168,
        "japan-toreca": 6446906,
        clove: 2187040,
        gacha24: 3086790,
        iris: 8432090
    },
    {
        date: new Date('2023/10/03 4:00'),
        "ex-toreca": 6817449,
        dopa: 858121,
        "japan-toreca": 3556474,
        clove: 6787888,
        gacha24: 9884838,
        iris: 3407156
    },
    {
        date: new Date('2023/10/03 5:00'),
        "ex-toreca": 4433090,
        dopa: 233119,
        "japan-toreca": 7466928,
        clove: 5149208,
        gacha24: 2876763,
        iris: 1259312
    },
    {
        date: new Date('2023/10/03 6:00'),
        "ex-toreca": 1146835,
        dopa: 97026,
        "japan-toreca": 2687468,
        clove: 9795662,
        gacha24: 3908408,
        iris: 2856192
    },
    {
        date: new Date('2023/10/03 7:00'),
        "ex-toreca": 1096939,
        dopa: 2994349,
        "japan-toreca": 8609642,
        clove: 478400,
        gacha24: 275141,
        iris: 5957159
    },
    {
        date: new Date('2023/10/03 8:00'),
        "ex-toreca": 4473549,
        dopa: 805025,
        "japan-toreca": 6996153,
        clove: 3224598,
        gacha24: 1125370,
        iris: 6816437
    },
    {
        date: new Date('2023/10/03 9:00'),
        "ex-toreca": 2868411,
        dopa: 1893399,
        "japan-toreca": 9853779,
        clove: 6707830,
        gacha24: 5438383,
        iris: 4310336
    },
    {
        date: new Date('2023/10/03 10:00'),
        "ex-toreca": 118834,
        dopa: 5982187,
        "japan-toreca": 5041456,
        clove: 4745344,
        gacha24: 2286958,
        iris: 2307450
    },
    {
        date: new Date('2023/10/03 11:00'),
        "ex-toreca": 6855762,
        dopa: 8036332,
        "japan-toreca": 1273920,
        clove: 5533293,
        gacha24: 7297896,
        iris: 9688955
    },
    {
        date: new Date('2023/10/03 12:00'),
        "ex-toreca": 8389644,
        dopa: 6765698,
        "japan-toreca": 8037017,
        clove: 6921312,
        gacha24: 7443532,
        iris: 4207745
    },
    {
        date: new Date('2023/10/03 13:00'),
        "ex-toreca": 856109,
        dopa: 6494273,
        "japan-toreca": 4969961,
        clove: 2693195,
        gacha24: 3470419,
        iris: 7042811
    },
    {
        date: new Date('2023/10/03 14:00'),
        "ex-toreca": 2475245,
        dopa: 1998594,
        "japan-toreca": 9405378,
        clove: 4635891,
        gacha24: 8879185,
        iris: 8878481
    },
    {
        date: new Date('2023/10/03 15:00'),
        "ex-toreca": 828139,
        dopa: 7509863,
        "japan-toreca": 9153562,
        clove: 6358003,
        gacha24: 1869549,
        iris: 2974452
    },
    {
        date: new Date('2023/10/03 16:00'),
        "ex-toreca": 7830563,
        dopa: 94386,
        "japan-toreca": 9724490,
        clove: 4247342,
        gacha24: 1836228,
        iris: 1028597
    },
    {
        date: new Date('2023/10/03 17:00'),
        "ex-toreca": 5101366,
        dopa: 9948793,
        "japan-toreca": 4247457,
        clove: 1976511,
        gacha24: 2302445,
        iris: 8687686
    },
    {
        date: new Date('2023/10/03 18:00'),
        "ex-toreca": 6916321,
        dopa: 9665698,
        "japan-toreca": 6470780,
        clove: 2649904,
        gacha24: 6382129,
        iris: 2496266
    },
    {
        date: new Date('2023/10/03 19:00'),
        "ex-toreca": 6644854,
        dopa: 4640889,
        "japan-toreca": 4256631,
        clove: 1273991,
        gacha24: 1163479,
        iris: 5016234
    },
    {
        date: new Date('2023/10/03 20:00'),
        "ex-toreca": 6610645,
        dopa: 1795498,
        "japan-toreca": 7773471,
        clove: 5058228,
        gacha24: 8839778,
        iris: 5846079
    },
    {
        date: new Date('2023/10/03 21:00'),
        "ex-toreca": 8350260,
        dopa: 2548535,
        "japan-toreca": 4267949,
        clove: 2707034,
        gacha24: 258597,
        iris: 9400830
    },
    {
        date: new Date('2023/10/03 22:00'),
        "ex-toreca": 7653503,
        dopa: 3114836,
        "japan-toreca": 3907775,
        clove: 1657912,
        gacha24: 7042291,
        iris: 3419280
    },
    {
        date: new Date('2023/10/03 23:00'),
        "ex-toreca": 8798740,
        dopa: 3170239,
        "japan-toreca": 5811142,
        clove: 8857100,
        gacha24: 6243666,
        iris: 4988857
    },
    {
        date: new Date('2023/10/04 0:00'),
        "ex-toreca": 5013633,
        dopa: 6630564,
        "japan-toreca": 8422471,
        clove: 6248512,
        gacha24: 5220006,
        iris: 2951948
    },
    {
        date: new Date('2023/10/04 1:00'),
        "ex-toreca": 4219068,
        dopa: 5196233,
        "japan-toreca": 9193318,
        clove: 7041955,
        gacha24: 7745606,
        iris: 6749474
    },
    {
        date: new Date('2023/10/04 2:00'),
        "ex-toreca": 9758784,
        dopa: 6592035,
        "japan-toreca": 8753071,
        clove: 7683359,
        gacha24: 5279129,
        iris: 2860745
    },
    {
        date: new Date('2023/10/04 3:00'),
        "ex-toreca": 3395843,
        dopa: 5333426,
        "japan-toreca": 5548881,
        clove: 9003187,
        gacha24: 4881052,
        iris: 6332606
    },
    {
        date: new Date('2023/10/04 4:00'),
        "ex-toreca": 8452886,
        dopa: 7979698,
        "japan-toreca": 5896208,
        clove: 9702370,
        gacha24: 5454713,
        iris: 3112779
    },
    {
        date: new Date('2023/10/04 5:00'),
        "ex-toreca": 6832789,
        dopa: 5938794,
        "japan-toreca": 8559754,
        clove: 2086705,
        gacha24: 8316362,
        iris: 8714376
    },
    {
        date: new Date('2023/10/04 6:00'),
        "ex-toreca": 6430044,
        dopa: 9159652,
        "japan-toreca": 1889815,
        clove: 6645666,
        gacha24: 4517511,
        iris: 6972215
    },
    {
        date: new Date('2023/10/04 7:00'),
        "ex-toreca": 7585508,
        dopa: 8306642,
        "japan-toreca": 718192,
        clove: 3076828,
        gacha24: 5734385,
        iris: 7269818
    },
    {
        date: new Date('2023/10/04 8:00'),
        "ex-toreca": 5346538,
        dopa: 4805325,
        "japan-toreca": 2764714,
        clove: 6061535,
        gacha24: 4844795,
        iris: 8984224
    },
    {
        date: new Date('2023/10/04 9:00'),
        "ex-toreca": 4854799,
        dopa: 6873361,
        "japan-toreca": 7364621,
        clove: 3116642,
        gacha24: 5218826,
        iris: 8594405
    },
    {
        date: new Date('2023/10/04 10:00'),
        "ex-toreca": 3648382,
        dopa: 8616611,
        "japan-toreca": 5462954,
        clove: 8232747,
        gacha24: 9853083,
        iris: 7138303
    },
    {
        date: new Date('2023/10/04 11:00'),
        "ex-toreca": 1493475,
        dopa: 8273487,
        "japan-toreca": 2711702,
        clove: 1478913,
        gacha24: 2331188,
        iris: 3866404
    },
    {
        date: new Date('2023/10/04 12:00'),
        "ex-toreca": 8555166,
        dopa: 6149984,
        "japan-toreca": 9196608,
        clove: 7976423,
        gacha24: 5677493,
        iris: 8220711
    },
    {
        date: new Date('2023/10/04 13:00'),
        "ex-toreca": 6976209,
        dopa: 6509141,
        "japan-toreca": 3581790,
        clove: 1142654,
        gacha24: 5994451,
        iris: 2075851
    },
    {
        date: new Date('2023/10/04 14:00'),
        "ex-toreca": 3587014,
        dopa: 8386812,
        "japan-toreca": 8512372,
        clove: 9159090,
        gacha24: 6385396,
        iris: 2767478
    },
    {
        date: new Date('2023/10/04 15:00'),
        "ex-toreca": 6829064,
        dopa: 5111950,
        "japan-toreca": 2021641,
        clove: 224839,
        gacha24: 7615813,
        iris: 7063737
    },
    {
        date: new Date('2023/10/04 16:00'),
        "ex-toreca": 5401177,
        dopa: 2001040,
        "japan-toreca": 7906469,
        clove: 6595544,
        gacha24: 4826618,
        iris: 3576792
    },
    {
        date: new Date('2023/10/04 17:00'),
        "ex-toreca": 9466370,
        dopa: 8832502,
        "japan-toreca": 8310986,
        clove: 5437287,
        gacha24: 3350330,
        iris: 9520695
    },
    {
        date: new Date('2023/10/04 18:00'),
        "ex-toreca": 4470639,
        dopa: 7687044,
        "japan-toreca": 3946319,
        clove: 9095741,
        gacha24: 4638228,
        iris: 7349907
    },
    {
        date: new Date('2023/10/04 19:00'),
        "ex-toreca": 5879273,
        dopa: 3915205,
        "japan-toreca": 8965178,
        clove: 3883036,
        gacha24: 7885027,
        iris: 6156347
    },
    {
        date: new Date('2023/10/04 20:00'),
        "ex-toreca": 5100674,
        dopa: 1361259,
        "japan-toreca": 5734622,
        clove: 8897697,
        gacha24: 896908,
        iris: 1320920
    },
    {
        date: new Date('2023/10/04 21:00'),
        "ex-toreca": 3236227,
        dopa: 8515680,
        "japan-toreca": 7118009,
        clove: 6740458,
        gacha24: 397542,
        iris: 209846
    },
    {
        date: new Date('2023/10/04 22:00'),
        "ex-toreca": 6872673,
        dopa: 6551971,
        "japan-toreca": 4384961,
        clove: 3777765,
        gacha24: 5504938,
        iris: 657385
    },
    {
        date: new Date('2023/10/04 23:00'),
        "ex-toreca": 6658815,
        dopa: 6698600,
        "japan-toreca": 5133107,
        clove: 25176,
        gacha24: 9811820,
        iris: 6525517
    },
    {
        date: new Date('2023/10/05 0:00'),
        "ex-toreca": 6634846,
        dopa: 2554236,
        "japan-toreca": 4755955,
        clove: 9940970,
        gacha24: 5582703,
        iris: 8473261
    },
    {
        date: new Date('2023/10/05 1:00'),
        "ex-toreca": 6493849,
        dopa: 361653,
        "japan-toreca": 8432780,
        clove: 1788993,
        gacha24: 1434850,
        iris: 3877189
    },
    {
        date: new Date('2023/10/05 2:00'),
        "ex-toreca": 7596056,
        dopa: 1423202,
        "japan-toreca": 4232882,
        clove: 286277,
        gacha24: 8822223,
        iris: 2649577
    },
    {
        date: new Date('2023/10/05 3:00'),
        "ex-toreca": 955941,
        dopa: 6030897,
        "japan-toreca": 1067550,
        clove: 6601574,
        gacha24: 5525685,
        iris: 9178311
    },
    {
        date: new Date('2023/10/05 4:00'),
        "ex-toreca": 3113316,
        dopa: 2124615,
        "japan-toreca": 2969342,
        clove: 6428165,
        gacha24: 7931608,
        iris: 9753375
    },
    {
        date: new Date('2023/10/05 5:00'),
        "ex-toreca": 8496989,
        dopa: 7116389,
        "japan-toreca": 9814131,
        clove: 6966682,
        gacha24: 6677062,
        iris: 4831208
    },
    {
        date: new Date('2023/10/05 6:00'),
        "ex-toreca": 1279727,
        dopa: 8288670,
        "japan-toreca": 9741492,
        clove: 7238296,
        gacha24: 8876490,
        iris: 7511624
    },
    {
        date: new Date('2023/10/05 7:00'),
        "ex-toreca": 4178347,
        dopa: 1798737,
        "japan-toreca": 413381,
        clove: 1091733,
        gacha24: 2536303,
        iris: 6938650
    },
    {
        date: new Date('2023/10/05 8:00'),
        "ex-toreca": 3717101,
        dopa: 9446020,
        "japan-toreca": 8885983,
        clove: 2923541,
        gacha24: 4214547,
        iris: 1765340
    },
    {
        date: new Date('2023/10/05 9:00'),
        "ex-toreca": 6625010,
        dopa: 1646752,
        "japan-toreca": 7380691,
        clove: 1174179,
        gacha24: 7783201,
        iris: 5012540
    },
    {
        date: new Date('2023/10/05 10:00'),
        "ex-toreca": 3730062,
        dopa: 2405464,
        "japan-toreca": 4958724,
        clove: 6347509,
        gacha24: 7470395,
        iris: 1796756
    },
    {
        date: new Date('2023/10/05 11:00'),
        "ex-toreca": 7853019,
        dopa: 8722471,
        "japan-toreca": 7182829,
        clove: 9250793,
        gacha24: 3181239,
        iris: 6219796
    },
    {
        date: new Date('2023/10/05 12:00'),
        "ex-toreca": 285209,
        dopa: 9881595,
        "japan-toreca": 7593002,
        clove: 4345604,
        gacha24: 350600,
        iris: 407275
    },
    {
        date: new Date('2023/10/05 13:00'),
        "ex-toreca": 1762656,
        dopa: 1853867,
        "japan-toreca": 9963565,
        clove: 7579984,
        gacha24: 6359558,
        iris: 6149681
    },
    {
        date: new Date('2023/10/05 14:00'),
        "ex-toreca": 7318383,
        dopa: 3278368,
        "japan-toreca": 9181243,
        clove: 5790550,
        gacha24: 2590463,
        iris: 1350986
    },
    {
        date: new Date('2023/10/05 15:00'),
        "ex-toreca": 2663285,
        dopa: 8906449,
        "japan-toreca": 1789244,
        clove: 3007913,
        gacha24: 9860564,
        iris: 2799040
    },
    {
        date: new Date('2023/10/05 16:00'),
        "ex-toreca": 1694916,
        dopa: 860937,
        "japan-toreca": 8674592,
        clove: 8820625,
        gacha24: 9835560,
        iris: 3948825
    },
    {
        date: new Date('2023/10/05 17:00'),
        "ex-toreca": 5854666,
        dopa: 5698940,
        "japan-toreca": 9094783,
        clove: 1637888,
        gacha24: 6381111,
        iris: 7773102
    },
    {
        date: new Date('2023/10/05 18:00'),
        "ex-toreca": 9072830,
        dopa: 8595293,
        "japan-toreca": 6695402,
        clove: 74581,
        gacha24: 5767676,
        iris: 9104337
    },
    {
        date: new Date('2023/10/05 19:00'),
        "ex-toreca": 4347784,
        dopa: 9038069,
        "japan-toreca": 9957415,
        clove: 8048881,
        gacha24: 5160035,
        iris: 8323515
    },
    {
        date: new Date('2023/10/05 20:00'),
        "ex-toreca": 8624753,
        dopa: 3365487,
        "japan-toreca": 5901524,
        clove: 5013457,
        gacha24: 3845326,
        iris: 5202494
    },
    {
        date: new Date('2023/10/05 21:00'),
        "ex-toreca": 1701562,
        dopa: 1249350,
        "japan-toreca": 5878815,
        clove: 4916005,
        gacha24: 2337342,
        iris: 1220235
    },
    {
        date: new Date('2023/10/05 22:00'),
        "ex-toreca": 7862495,
        dopa: 4434988,
        "japan-toreca": 6900710,
        clove: 1821340,
        gacha24: 7613169,
        iris: 210693
    },
    {
        date: new Date('2023/10/05 23:00'),
        "ex-toreca": 6803939,
        dopa: 6709504,
        "japan-toreca": 1723154,
        clove: 651516,
        gacha24: 9038656,
        iris: 1807128
    },
    {
        date: new Date('2023/10/06 0:00'),
        "ex-toreca": 9522266,
        dopa: 4650871,
        "japan-toreca": 6993275,
        clove: 6699804,
        gacha24: 1295328,
        iris: 7437383
    },
    {
        date: new Date('2023/10/06 1:00'),
        "ex-toreca": 9414470,
        dopa: 3688711,
        "japan-toreca": 3270079,
        clove: 6811804,
        gacha24: 2342353,
        iris: 1351773
    },
    {
        date: new Date('2023/10/06 2:00'),
        "ex-toreca": 5912477,
        dopa: 1090576,
        "japan-toreca": 8867411,
        clove: 4414594,
        gacha24: 3551313,
        iris: 2661528
    },
    {
        date: new Date('2023/10/06 3:00'),
        "ex-toreca": 897254,
        dopa: 8033922,
        "japan-toreca": 6366288,
        clove: 3065471,
        gacha24: 6340826,
        iris: 1069671
    },
    {
        date: new Date('2023/10/06 4:00'),
        "ex-toreca": 3895845,
        dopa: 4389103,
        "japan-toreca": 5776019,
        clove: 8308462,
        gacha24: 5510162,
        iris: 9799756
    },
    {
        date: new Date('2023/10/06 5:00'),
        "ex-toreca": 5623549,
        dopa: 6985981,
        "japan-toreca": 8716618,
        clove: 8215256,
        gacha24: 4294561,
        iris: 6036943
    },
    {
        date: new Date('2023/10/06 6:00'),
        "ex-toreca": 1566015,
        dopa: 4721164,
        "japan-toreca": 4313410,
        clove: 2274635,
        gacha24: 2786819,
        iris: 9077181
    },
    {
        date: new Date('2023/10/06 7:00'),
        "ex-toreca": 3861817,
        dopa: 2888282,
        "japan-toreca": 3962537,
        clove: 4338497,
        gacha24: 7020742,
        iris: 9156519
    },
    {
        date: new Date('2023/10/06 8:00'),
        "ex-toreca": 1333004,
        dopa: 6925939,
        "japan-toreca": 229069,
        clove: 3306516,
        gacha24: 2487756,
        iris: 1115183
    },
    {
        date: new Date('2023/10/06 9:00'),
        "ex-toreca": 2411650,
        dopa: 3038195,
        "japan-toreca": 1312085,
        clove: 2567518,
        gacha24: 8521513,
        iris: 8385983
    },
    {
        date: new Date('2023/10/06 10:00'),
        "ex-toreca": 2739536,
        dopa: 7982320,
        "japan-toreca": 9583960,
        clove: 5166921,
        gacha24: 993962,
        iris: 8740107
    },
    {
        date: new Date('2023/10/06 11:00'),
        "ex-toreca": 4641515,
        dopa: 4874374,
        "japan-toreca": 1544705,
        clove: 6337054,
        gacha24: 4711803,
        iris: 1136319
    },
    {
        date: new Date('2023/10/06 12:00'),
        "ex-toreca": 7933210,
        dopa: 7980361,
        "japan-toreca": 1205100,
        clove: 2134938,
        gacha24: 8564577,
        iris: 1599893
    },
    {
        date: new Date('2023/10/06 13:00'),
        "ex-toreca": 1971529,
        dopa: 9898189,
        "japan-toreca": 1878345,
        clove: 3740561,
        gacha24: 4193680,
        iris: 7655459
    },
    {
        date: new Date('2023/10/06 14:00'),
        "ex-toreca": 5117689,
        dopa: 8389366,
        "japan-toreca": 5154261,
        clove: 9368208,
        gacha24: 2387042,
        iris: 618673
    },
    {
        date: new Date('2023/10/06 15:00'),
        "ex-toreca": 9249411,
        dopa: 299921,
        "japan-toreca": 1592480,
        clove: 5463521,
        gacha24: 2731398,
        iris: 105914
    },
    {
        date: new Date('2023/10/06 16:00'),
        "ex-toreca": 3333703,
        dopa: 8534088,
        "japan-toreca": 6799917,
        clove: 9383204,
        gacha24: 7399951,
        iris: 2164335
    },
    {
        date: new Date('2023/10/06 17:00'),
        "ex-toreca": 4309831,
        dopa: 3025746,
        "japan-toreca": 7759271,
        clove: 954318,
        gacha24: 1442708,
        iris: 7732772
    },
    {
        date: new Date('2023/10/06 18:00'),
        "ex-toreca": 5397265,
        dopa: 8973262,
        "japan-toreca": 2515764,
        clove: 8044416,
        gacha24: 3078897,
        iris: 2324768
    },
    {
        date: new Date('2023/10/06 19:00'),
        "ex-toreca": 2395327,
        dopa: 3984535,
        "japan-toreca": 8573509,
        clove: 5704829,
        gacha24: 1631893,
        iris: 5684593
    },
    {
        date: new Date('2023/10/06 20:00'),
        "ex-toreca": 1437973,
        dopa: 8864768,
        "japan-toreca": 1341446,
        clove: 68013,
        gacha24: 8275047,
        iris: 4469246
    },
    {
        date: new Date('2023/10/06 21:00'),
        "ex-toreca": 3628700,
        dopa: 7067361,
        "japan-toreca": 3354646,
        clove: 591045,
        gacha24: 2373027,
        iris: 5721126
    },
    {
        date: new Date('2023/10/06 22:00'),
        "ex-toreca": 9301370,
        dopa: 2378125,
        "japan-toreca": 6735584,
        clove: 6811167,
        gacha24: 8992736,
        iris: 4354980
    },
    {
        date: new Date('2023/10/06 23:00'),
        "ex-toreca": 7456686,
        dopa: 1064718,
        "japan-toreca": 4459212,
        clove: 2627161,
        gacha24: 549721,
        iris: 6992160
    },
    {
        date: new Date('2023/10/07 0:00'),
        "ex-toreca": 508505,
        dopa: 7842504,
        "japan-toreca": 1259107,
        clove: 9976513,
        gacha24: 9477210,
        iris: 4097283
    },
    {
        date: new Date('2023/10/07 1:00'),
        "ex-toreca": 4116424,
        dopa: 531632,
        "japan-toreca": 8793818,
        clove: 8448005,
        gacha24: 9856921,
        iris: 9225806
    },
    {
        date: new Date('2023/10/07 2:00'),
        "ex-toreca": 3101271,
        dopa: 8263483,
        "japan-toreca": 3602963,
        clove: 2670349,
        gacha24: 6547337,
        iris: 1171405
    },
    {
        date: new Date('2023/10/07 3:00'),
        "ex-toreca": 622154,
        dopa: 4633662,
        "japan-toreca": 2772751,
        clove: 3053563,
        gacha24: 4393158,
        iris: 9637189
    },
    {
        date: new Date('2023/10/07 4:00'),
        "ex-toreca": 4641698,
        dopa: 5983344,
        "japan-toreca": 7416853,
        clove: 8641083,
        gacha24: 3512819,
        iris: 6629564
    },
    {
        date: new Date('2023/10/07 5:00'),
        "ex-toreca": 6466536,
        dopa: 7682533,
        "japan-toreca": 7584746,
        clove: 6070247,
        gacha24: 3741088,
        iris: 7481222
    },
    {
        date: new Date('2023/10/07 6:00'),
        "ex-toreca": 8756936,
        dopa: 1612998,
        "japan-toreca": 9235399,
        clove: 3241040,
        gacha24: 2549907,
        iris: 3393243
    },
    {
        date: new Date('2023/10/07 7:00'),
        "ex-toreca": 8171469,
        dopa: 1742657,
        "japan-toreca": 6974079,
        clove: 878887,
        gacha24: 8398736,
        iris: 6584963
    },
    {
        date: new Date('2023/10/07 8:00'),
        "ex-toreca": 2157718,
        dopa: 1566019,
        "japan-toreca": 165737,
        clove: 1492986,
        gacha24: 443938,
        iris: 6860282
    },
    {
        date: new Date('2023/10/07 9:00'),
        "ex-toreca": 2685314,
        dopa: 1137526,
        "japan-toreca": 8900227,
        clove: 1138464,
        gacha24: 718316,
        iris: 5140534
    },
    {
        date: new Date('2023/10/07 10:00'),
        "ex-toreca": 218557,
        dopa: 6614724,
        "japan-toreca": 285555,
        clove: 6318266,
        gacha24: 8787007,
        iris: 3109789
    },
    {
        date: new Date('2023/10/07 11:00'),
        "ex-toreca": 2055422,
        dopa: 4596748,
        "japan-toreca": 932904,
        clove: 7470637,
        gacha24: 6441211,
        iris: 6010061
    },
    {
        date: new Date('2023/10/07 12:00'),
        "ex-toreca": 2860392,
        dopa: 587180,
        "japan-toreca": 7949961,
        clove: 519873,
        gacha24: 1247388,
        iris: 4857136
    },
    {
        date: new Date('2023/10/07 13:00'),
        "ex-toreca": 1004912,
        dopa: 9215418,
        "japan-toreca": 838069,
        clove: 3405174,
        gacha24: 2946030,
        iris: 8843715
    },
    {
        date: new Date('2023/10/07 14:00'),
        "ex-toreca": 365254,
        dopa: 1065165,
        "japan-toreca": 9599504,
        clove: 3758506,
        gacha24: 2820640,
        iris: 7506982
    },
    {
        date: new Date('2023/10/07 15:00'),
        "ex-toreca": 4804771,
        dopa: 1680803,
        "japan-toreca": 1607757,
        clove: 417831,
        gacha24: 5395238,
        iris: 2043300
    },
    {
        date: new Date('2023/10/07 16:00'),
        "ex-toreca": 5807448,
        dopa: 896008,
        "japan-toreca": 6042035,
        clove: 7920352,
        gacha24: 1020036,
        iris: 7595128
    },
    {
        date: new Date('2023/10/07 17:00'),
        "ex-toreca": 269081,
        dopa: 8845085,
        "japan-toreca": 5947337,
        clove: 9515718,
        gacha24: 2992600,
        iris: 3676440
    },
    {
        date: new Date('2023/10/07 18:00'),
        "ex-toreca": 5810606,
        dopa: 8923496,
        "japan-toreca": 9841462,
        clove: 3846871,
        gacha24: 1777603,
        iris: 2659930
    },
    {
        date: new Date('2023/10/07 19:00'),
        "ex-toreca": 8086097,
        dopa: 7442151,
        "japan-toreca": 1275127,
        clove: 5257523,
        gacha24: 3312887,
        iris: 6557378
    },
    {
        date: new Date('2023/10/07 20:00'),
        "ex-toreca": 9309793,
        dopa: 8684993,
        "japan-toreca": 1324768,
        clove: 9065307,
        gacha24: 4765288,
        iris: 6946002
    },
    {
        date: new Date('2023/10/07 21:00'),
        "ex-toreca": 1883294,
        dopa: 3728793,
        "japan-toreca": 8144326,
        clove: 6708067,
        gacha24: 6117854,
        iris: 8910116
    },
    {
        date: new Date('2023/10/07 22:00'),
        "ex-toreca": 8110732,
        dopa: 3116604,
        "japan-toreca": 2825515,
        clove: 1738548,
        gacha24: 2757882,
        iris: 9790491
    },
    {
        date: new Date('2023/10/07 23:00'),
        "ex-toreca": 6344663,
        dopa: 1842332,
        "japan-toreca": 6995853,
        clove: 6636611,
        gacha24: 3710353,
        iris: 7888332
    },
    {
        date: new Date('2023/10/08 0:00'),
        "ex-toreca": 5100202,
        dopa: 7277198,
        "japan-toreca": 8718567,
        clove: 5486012,
        gacha24: 2863284,
        iris: 5485187
    },
    {
        date: new Date('2023/10/08 1:00'),
        "ex-toreca": 6228226,
        dopa: 5359409,
        "japan-toreca": 4049425,
        clove: 5885612,
        gacha24: 287853,
        iris: 2538173
    },
    {
        date: new Date('2023/10/08 2:00'),
        "ex-toreca": 6989783,
        dopa: 8335650,
        "japan-toreca": 3642835,
        clove: 4267310,
        gacha24: 443502,
        iris: 2838721
    },
    {
        date: new Date('2023/10/08 3:00'),
        "ex-toreca": 2096821,
        dopa: 9744206,
        "japan-toreca": 1218329,
        clove: 1991948,
        gacha24: 7528618,
        iris: 5076127
    },
    {
        date: new Date('2023/10/08 4:00'),
        "ex-toreca": 6564414,
        dopa: 5091040,
        "japan-toreca": 7875949,
        clove: 4622059,
        gacha24: 354692,
        iris: 6497210
    },
    {
        date: new Date('2023/10/08 5:00'),
        "ex-toreca": 766504,
        dopa: 3526308,
        "japan-toreca": 6973830,
        clove: 1167215,
        gacha24: 342204,
        iris: 6513002
    },
    {
        date: new Date('2023/10/08 6:00'),
        "ex-toreca": 2793731,
        dopa: 4711559,
        "japan-toreca": 8702163,
        clove: 3268038,
        gacha24: 3211334,
        iris: 8698682
    },
    {
        date: new Date('2023/10/08 7:00'),
        "ex-toreca": 6358509,
        dopa: 8153996,
        "japan-toreca": 5363310,
        clove: 4674747,
        gacha24: 8675882,
        iris: 8207901
    },
    {
        date: new Date('2023/10/08 8:00'),
        "ex-toreca": 2921849,
        dopa: 3071927,
        "japan-toreca": 6854785,
        clove: 4572224,
        gacha24: 8189099,
        iris: 8365752
    },
    {
        date: new Date('2023/10/08 9:00'),
        "ex-toreca": 2578867,
        dopa: 3226277,
        "japan-toreca": 6248397,
        clove: 4053191,
        gacha24: 3511182,
        iris: 8911546
    },
    {
        date: new Date('2023/10/08 10:00'),
        "ex-toreca": 9678614,
        dopa: 2318639,
        "japan-toreca": 9148510,
        clove: 8177936,
        gacha24: 481739,
        iris: 8508677
    },
    {
        date: new Date('2023/10/08 11:00'),
        "ex-toreca": 1563134,
        dopa: 3242217,
        "japan-toreca": 6098823,
        clove: 1346289,
        gacha24: 9733777,
        iris: 1752713
    },
    {
        date: new Date('2023/10/08 12:00'),
        "ex-toreca": 157772,
        dopa: 1325237,
        "japan-toreca": 8482172,
        clove: 2635510,
        gacha24: 2108245,
        iris: 3679908
    },
    {
        date: new Date('2023/10/08 13:00'),
        "ex-toreca": 4755828,
        dopa: 8240044,
        "japan-toreca": 5950924,
        clove: 7134069,
        gacha24: 4526416,
        iris: 5523271
    },
    {
        date: new Date('2023/10/08 14:00'),
        "ex-toreca": 9878523,
        dopa: 8880582,
        "japan-toreca": 2703986,
        clove: 1394458,
        gacha24: 8233642,
        iris: 993489
    },
    {
        date: new Date('2023/10/08 15:00'),
        "ex-toreca": 609080,
        dopa: 3815393,
        "japan-toreca": 680732,
        clove: 266303,
        gacha24: 7155662,
        iris: 8293368
    },
    {
        date: new Date('2023/10/08 16:00'),
        "ex-toreca": 5313829,
        dopa: 6384400,
        "japan-toreca": 2219497,
        clove: 439468,
        gacha24: 414667,
        iris: 2605197
    },
    {
        date: new Date('2023/10/08 17:00'),
        "ex-toreca": 819558,
        dopa: 7291989,
        "japan-toreca": 3126532,
        clove: 9656021,
        gacha24: 5531531,
        iris: 318319
    },
    {
        date: new Date('2023/10/08 18:00'),
        "ex-toreca": 9277484,
        dopa: 2830827,
        "japan-toreca": 1990083,
        clove: 2331178,
        gacha24: 8767784,
        iris: 9079952
    },
    {
        date: new Date('2023/10/08 19:00'),
        "ex-toreca": 332389,
        dopa: 3634127,
        "japan-toreca": 5379458,
        clove: 6262776,
        gacha24: 5864076,
        iris: 5746518
    },
    {
        date: new Date('2023/10/08 20:00'),
        "ex-toreca": 4531749,
        dopa: 8617157,
        "japan-toreca": 8102316,
        clove: 8180797,
        gacha24: 2887012,
        iris: 7878561
    },
    {
        date: new Date('2023/10/08 21:00'),
        "ex-toreca": 2502765,
        dopa: 9815280,
        "japan-toreca": 8720644,
        clove: 8242953,
        gacha24: 6727767,
        iris: 2434887
    },
    {
        date: new Date('2023/10/08 22:00'),
        "ex-toreca": 7180498,
        dopa: 6634566,
        "japan-toreca": 8213861,
        clove: 9696001,
        gacha24: 2524759,
        iris: 1702038
    },
    {
        date: new Date('2023/10/08 23:00'),
        "ex-toreca": 464475,
        dopa: 9147337,
        "japan-toreca": 9483984,
        clove: 2796232,
        gacha24: 4192783,
        iris: 4575720
    },
    {
        date: new Date('2023/10/09 0:00'),
        "ex-toreca": 6322442,
        dopa: 3069029,
        "japan-toreca": 1046755,
        clove: 8733597,
        gacha24: 5321101,
        iris: 1800356
    },
    {
        date: new Date('2023/10/09 1:00'),
        "ex-toreca": 9873751,
        dopa: 450537,
        "japan-toreca": 6590640,
        clove: 9975206,
        gacha24: 2727008,
        iris: 1242858
    },
    {
        date: new Date('2023/10/09 2:00'),
        "ex-toreca": 6396735,
        dopa: 156763,
        "japan-toreca": 9037515,
        clove: 6837610,
        gacha24: 648604,
        iris: 4071265
    },
    {
        date: new Date('2023/10/09 3:00'),
        "ex-toreca": 7765923,
        dopa: 4543712,
        "japan-toreca": 9274064,
        clove: 820852,
        gacha24: 7419775,
        iris: 1351829
    },
    {
        date: new Date('2023/10/09 4:00'),
        "ex-toreca": 4481499,
        dopa: 8757411,
        "japan-toreca": 9485720,
        clove: 465967,
        gacha24: 8133000,
        iris: 431472
    },
    {
        date: new Date('2023/10/09 5:00'),
        "ex-toreca": 8595269,
        dopa: 7547130,
        "japan-toreca": 2445505,
        clove: 4237103,
        gacha24: 7756886,
        iris: 4761491
    },
    {
        date: new Date('2023/10/09 6:00'),
        "ex-toreca": 2768485,
        dopa: 2762526,
        "japan-toreca": 1944492,
        clove: 5090908,
        gacha24: 6865470,
        iris: 5178222
    },
    {
        date: new Date('2023/10/09 7:00'),
        "ex-toreca": 4888767,
        dopa: 8797082,
        "japan-toreca": 9226995,
        clove: 3216412,
        gacha24: 2380810,
        iris: 2861225
    },
    {
        date: new Date('2023/10/09 8:00'),
        "ex-toreca": 7546590,
        dopa: 5656177,
        "japan-toreca": 668766,
        clove: 606346,
        gacha24: 9356558,
        iris: 1310566
    },
    {
        date: new Date('2023/10/09 9:00'),
        "ex-toreca": 6054604,
        dopa: 9789114,
        "japan-toreca": 3644628,
        clove: 731288,
        gacha24: 6828062,
        iris: 9365136
    },
    {
        date: new Date('2023/10/09 10:00'),
        "ex-toreca": 5248552,
        dopa: 8580035,
        "japan-toreca": 9461351,
        clove: 811141,
        gacha24: 1353935,
        iris: 7605924
    },
    {
        date: new Date('2023/10/09 11:00'),
        "ex-toreca": 661131,
        dopa: 3518763,
        "japan-toreca": 1072037,
        clove: 5781574,
        gacha24: 5985156,
        iris: 5564974
    },
    {
        date: new Date('2023/10/09 12:00'),
        "ex-toreca": 604257,
        dopa: 7495015,
        "japan-toreca": 8051374,
        clove: 1918386,
        gacha24: 8808527,
        iris: 5314622
    },
    {
        date: new Date('2023/10/09 13:00'),
        "ex-toreca": 5170873,
        dopa: 4710875,
        "japan-toreca": 5233594,
        clove: 137747,
        gacha24: 6921366,
        iris: 4657084
    },
    {
        date: new Date('2023/10/09 14:00'),
        "ex-toreca": 4973164,
        dopa: 3237170,
        "japan-toreca": 9615359,
        clove: 6618879,
        gacha24: 6863195,
        iris: 440245
    },
    {
        date: new Date('2023/10/09 15:00'),
        "ex-toreca": 580960,
        dopa: 595992,
        "japan-toreca": 8887483,
        clove: 3463601,
        gacha24: 1528423,
        iris: 9521223
    },
    {
        date: new Date('2023/10/09 16:00'),
        "ex-toreca": 5427103,
        dopa: 3308835,
        "japan-toreca": 713715,
        clove: 3955325,
        gacha24: 4852731,
        iris: 1458342
    },
    {
        date: new Date('2023/10/09 17:00'),
        "ex-toreca": 1636324,
        dopa: 853533,
        "japan-toreca": 1015648,
        clove: 8585171,
        gacha24: 7872642,
        iris: 1656542
    },
    {
        date: new Date('2023/10/09 18:00'),
        "ex-toreca": 8845994,
        dopa: 4138822,
        "japan-toreca": 360963,
        clove: 6264044,
        gacha24: 7776260,
        iris: 6243674
    },
    {
        date: new Date('2023/10/09 19:00'),
        "ex-toreca": 5005000,
        dopa: 3855803,
        "japan-toreca": 4154601,
        clove: 8003824,
        gacha24: 6309469,
        iris: 7393646
    },
    {
        date: new Date('2023/10/09 20:00'),
        "ex-toreca": 889426,
        dopa: 3605753,
        "japan-toreca": 1375032,
        clove: 7221001,
        gacha24: 6924061,
        iris: 4892151
    },
    {
        date: new Date('2023/10/09 21:00'),
        "ex-toreca": 3076678,
        dopa: 6222703,
        "japan-toreca": 5776229,
        clove: 6964160,
        gacha24: 6920650,
        iris: 7131576
    },
    {
        date: new Date('2023/10/09 22:00'),
        "ex-toreca": 1024125,
        dopa: 8525194,
        "japan-toreca": 7738144,
        clove: 2987855,
        gacha24: 865863,
        iris: 511968
    },
    {
        date: new Date('2023/10/09 23:00'),
        "ex-toreca": 3506591,
        dopa: 9810430,
        "japan-toreca": 1029594,
        clove: 7407729,
        gacha24: 3743524,
        iris: 7918771
    },
    {
        date: new Date('2023/10/10 0:00'),
        "ex-toreca": 8171037,
        dopa: 3477298,
        "japan-toreca": 999814,
        clove: 1446112,
        gacha24: 340794,
        iris: 6249573
    },
    {
        date: new Date('2023/10/10 1:00'),
        "ex-toreca": 7058756,
        dopa: 980390,
        "japan-toreca": 1312845,
        clove: 3986790,
        gacha24: 6598375,
        iris: 615931
    },
    {
        date: new Date('2023/10/10 2:00'),
        "ex-toreca": 9959790,
        dopa: 4629806,
        "japan-toreca": 7052597,
        clove: 1329732,
        gacha24: 1071473,
        iris: 6002735
    },
    {
        date: new Date('2023/10/10 3:00'),
        "ex-toreca": 3629373,
        dopa: 5307708,
        "japan-toreca": 7320932,
        clove: 8178831,
        gacha24: 7866760,
        iris: 2485716
    },
    {
        date: new Date('2023/10/10 4:00'),
        "ex-toreca": 8303048,
        dopa: 2112792,
        "japan-toreca": 4495205,
        clove: 6036094,
        gacha24: 157073,
        iris: 9373674
    },
    {
        date: new Date('2023/10/10 5:00'),
        "ex-toreca": 2830390,
        dopa: 6017648,
        "japan-toreca": 3709394,
        clove: 5692697,
        gacha24: 3152545,
        iris: 3887412
    },
    {
        date: new Date('2023/10/10 6:00'),
        "ex-toreca": 3077228,
        dopa: 8383319,
        "japan-toreca": 7002265,
        clove: 9271024,
        gacha24: 8727696,
        iris: 6897171
    },
    {
        date: new Date('2023/10/10 7:00'),
        "ex-toreca": 7349567,
        dopa: 2777608,
        "japan-toreca": 502813,
        clove: 2901604,
        gacha24: 1404623,
        iris: 73332
    },
    {
        date: new Date('2023/10/10 8:00'),
        "ex-toreca": 7175000,
        dopa: 4087374,
        "japan-toreca": 7141143,
        clove: 8992103,
        gacha24: 4176847,
        iris: 5440067
    },
    {
        date: new Date('2023/10/10 9:00'),
        "ex-toreca": 3043401,
        dopa: 5518349,
        "japan-toreca": 2537765,
        clove: 5865129,
        gacha24: 2159201,
        iris: 7697670
    },
    {
        date: new Date('2023/10/10 10:00'),
        "ex-toreca": 2696486,
        dopa: 9141775,
        "japan-toreca": 5569532,
        clove: 7221711,
        gacha24: 5432394,
        iris: 771166
    },
    {
        date: new Date('2023/10/10 11:00'),
        "ex-toreca": 2000078,
        dopa: 2045564,
        "japan-toreca": 3964280,
        clove: 6624938,
        gacha24: 4009706,
        iris: 1533062
    },
    {
        date: new Date('2023/10/10 12:00'),
        "ex-toreca": 9798347,
        dopa: 2464281,
        "japan-toreca": 9696732,
        clove: 1462474,
        gacha24: 7277717,
        iris: 3720749
    },
    {
        date: new Date('2023/10/10 13:00'),
        "ex-toreca": 7129230,
        dopa: 3970805,
        "japan-toreca": 6296062,
        clove: 5925865,
        gacha24: 153690,
        iris: 5916812
    },
    {
        date: new Date('2023/10/10 14:00'),
        "ex-toreca": 6282842,
        dopa: 8552578,
        "japan-toreca": 671276,
        clove: 360730,
        gacha24: 8813920,
        iris: 1792362
    },
    {
        date: new Date('2023/10/10 15:00'),
        "ex-toreca": 2173178,
        dopa: 8660442,
        "japan-toreca": 5802013,
        clove: 902700,
        gacha24: 1263088,
        iris: 8885290
    },
    {
        date: new Date('2023/10/10 16:00'),
        "ex-toreca": 8198484,
        dopa: 7650749,
        "japan-toreca": 3622396,
        clove: 8201554,
        gacha24: 5261140,
        iris: 7428841
    },
    {
        date: new Date('2023/10/10 17:00'),
        "ex-toreca": 1724162,
        dopa: 6365549,
        "japan-toreca": 6010726,
        clove: 8377470,
        gacha24: 9778780,
        iris: 9124160
    },
    {
        date: new Date('2023/10/10 18:00'),
        "ex-toreca": 5113399,
        dopa: 8672438,
        "japan-toreca": 933476,
        clove: 8503231,
        gacha24: 6093800,
        iris: 4581813
    },
    {
        date: new Date('2023/10/10 19:00'),
        "ex-toreca": 6400114,
        dopa: 4639239,
        "japan-toreca": 6519934,
        clove: 4051973,
        gacha24: 2209531,
        iris: 3234769
    },
    {
        date: new Date('2023/10/10 20:00'),
        "ex-toreca": 9061418,
        dopa: 450197,
        "japan-toreca": 9306414,
        clove: 9448386,
        gacha24: 4847016,
        iris: 2435600
    },
    {
        date: new Date('2023/10/10 21:00'),
        "ex-toreca": 2996105,
        dopa: 4798969,
        "japan-toreca": 4864161,
        clove: 3903298,
        gacha24: 4069897,
        iris: 7812566
    },
    {
        date: new Date('2023/10/10 22:00'),
        "ex-toreca": 2904455,
        dopa: 741722,
        "japan-toreca": 9520528,
        clove: 1505711,
        gacha24: 3721442,
        iris: 1634404
    },
    {
        date: new Date('2023/10/10 23:00'),
        "ex-toreca": 2150173,
        dopa: 6544154,
        "japan-toreca": 8353460,
        clove: 1527359,
        gacha24: 9744133,
        iris: 9653484
    },
    {
        date: new Date('2023/10/11 0:00'),
        "ex-toreca": 3929345,
        dopa: 9234738,
        "japan-toreca": 5620396,
        clove: 8211284,
        gacha24: 718189,
        iris: 4548292
    },
    {
        date: new Date('2023/10/11 1:00'),
        "ex-toreca": 5651897,
        dopa: 3088759,
        "japan-toreca": 6942148,
        clove: 8709030,
        gacha24: 2832926,
        iris: 8985934
    },
    {
        date: new Date('2023/10/11 2:00'),
        "ex-toreca": 5861247,
        dopa: 3362138,
        "japan-toreca": 8713063,
        clove: 405509,
        gacha24: 7178550,
        iris: 1174545
    },
    {
        date: new Date('2023/10/11 3:00'),
        "ex-toreca": 6603753,
        dopa: 4720450,
        "japan-toreca": 2582595,
        clove: 3747646,
        gacha24: 9510575,
        iris: 3743865
    },
    {
        date: new Date('2023/10/11 4:00'),
        "ex-toreca": 1343240,
        dopa: 1940151,
        "japan-toreca": 3087919,
        clove: 4857876,
        gacha24: 6627449,
        iris: 2412192
    },
    {
        date: new Date('2023/10/11 5:00'),
        "ex-toreca": 5608207,
        dopa: 8638762,
        "japan-toreca": 3797161,
        clove: 2261246,
        gacha24: 601599,
        iris: 994283
    },
    {
        date: new Date('2023/10/11 6:00'),
        "ex-toreca": 1349624,
        dopa: 3090353,
        "japan-toreca": 7934040,
        clove: 5620065,
        gacha24: 64437,
        iris: 2729441
    },
    {
        date: new Date('2023/10/11 7:00'),
        "ex-toreca": 1681152,
        dopa: 4585051,
        "japan-toreca": 38150,
        clove: 5708289,
        gacha24: 2523707,
        iris: 449962
    },
    {
        date: new Date('2023/10/11 8:00'),
        "ex-toreca": 6005609,
        dopa: 4466735,
        "japan-toreca": 5195638,
        clove: 3047838,
        gacha24: 5737933,
        iris: 4811703
    },
    {
        date: new Date('2023/10/11 9:00'),
        "ex-toreca": 2332127,
        dopa: 8396177,
        "japan-toreca": 3719945,
        clove: 2590840,
        gacha24: 6663695,
        iris: 6887463
    },
    {
        date: new Date('2023/10/11 10:00'),
        "ex-toreca": 1429926,
        dopa: 6438982,
        "japan-toreca": 6674065,
        clove: 8875798,
        gacha24: 7683359,
        iris: 4476302
    },
    {
        date: new Date('2023/10/11 11:00'),
        "ex-toreca": 9580128,
        dopa: 962987,
        "japan-toreca": 6989891,
        clove: 5516161,
        gacha24: 7472838,
        iris: 7879252
    },
    {
        date: new Date('2023/10/11 12:00'),
        "ex-toreca": 3342372,
        dopa: 7257907,
        "japan-toreca": 8722013,
        clove: 2927298,
        gacha24: 1210747,
        iris: 9247528
    },
    {
        date: new Date('2023/10/11 13:00'),
        "ex-toreca": 9451420,
        dopa: 7638468,
        "japan-toreca": 8762119,
        clove: 4595323,
        gacha24: 4906172,
        iris: 8302681
    },
    {
        date: new Date('2023/10/11 14:00'),
        "ex-toreca": 2038373,
        dopa: 7519816,
        "japan-toreca": 1041956,
        clove: 899234,
        gacha24: 9511817,
        iris: 586219
    },
    {
        date: new Date('2023/10/11 15:00'),
        "ex-toreca": 1498948,
        dopa: 305023,
        "japan-toreca": 4783630,
        clove: 5531065,
        gacha24: 2603595,
        iris: 486674
    },
    {
        date: new Date('2023/10/11 16:00'),
        "ex-toreca": 6194171,
        dopa: 9297932,
        "japan-toreca": 6476670,
        clove: 7212855,
        gacha24: 5454085,
        iris: 236508
    },
    {
        date: new Date('2023/10/11 17:00'),
        "ex-toreca": 2775911,
        dopa: 5352762,
        "japan-toreca": 6469689,
        clove: 5093870,
        gacha24: 9749987,
        iris: 4176738
    },
    {
        date: new Date('2023/10/11 18:00'),
        "ex-toreca": 4423178,
        dopa: 5059532,
        "japan-toreca": 4814604,
        clove: 616052,
        gacha24: 7555607,
        iris: 4595445
    },
    {
        date: new Date('2023/10/11 19:00'),
        "ex-toreca": 8231484,
        dopa: 461866,
        "japan-toreca": 630894,
        clove: 788614,
        gacha24: 4893967,
        iris: 365575
    },
    {
        date: new Date('2023/10/11 20:00'),
        "ex-toreca": 6187517,
        dopa: 4440993,
        "japan-toreca": 9230625,
        clove: 5895358,
        gacha24: 3991887,
        iris: 2093676
    },
    {
        date: new Date('2023/10/11 21:00'),
        "ex-toreca": 4542167,
        dopa: 496611,
        "japan-toreca": 6816649,
        clove: 7137202,
        gacha24: 6322279,
        iris: 8361496
    },
    {
        date: new Date('2023/10/11 22:00'),
        "ex-toreca": 5085770,
        dopa: 4651776,
        "japan-toreca": 3339931,
        clove: 1237158,
        gacha24: 7561227,
        iris: 2514812
    },
    {
        date: new Date('2023/10/11 23:00'),
        "ex-toreca": 7778625,
        dopa: 9242414,
        "japan-toreca": 8810046,
        clove: 6264965,
        gacha24: 2981181,
        iris: 6237472
    },
    {
        date: new Date('2023/10/12 0:00'),
        "ex-toreca": 8621686,
        dopa: 2337847,
        "japan-toreca": 7139934,
        clove: 401788,
        gacha24: 7244985,
        iris: 7276085
    },
    {
        date: new Date('2023/10/12 1:00'),
        "ex-toreca": 7719260,
        dopa: 1814162,
        "japan-toreca": 107896,
        clove: 2971908,
        gacha24: 4173762,
        iris: 4270545
    },
    {
        date: new Date('2023/10/12 2:00'),
        "ex-toreca": 9536654,
        dopa: 5100607,
        "japan-toreca": 245492,
        clove: 756786,
        gacha24: 4724990,
        iris: 8395729
    },
    {
        date: new Date('2023/10/12 3:00'),
        "ex-toreca": 292272,
        dopa: 880401,
        "japan-toreca": 6947447,
        clove: 2909409,
        gacha24: 2144952,
        iris: 3571316
    },
    {
        date: new Date('2023/10/12 4:00'),
        "ex-toreca": 5197427,
        dopa: 8382041,
        "japan-toreca": 4007706,
        clove: 4019077,
        gacha24: 3840081,
        iris: 8829325
    },
    {
        date: new Date('2023/10/12 5:00'),
        "ex-toreca": 3893534,
        dopa: 7102941,
        "japan-toreca": 1208394,
        clove: 1299184,
        gacha24: 3526409,
        iris: 8583372
    },
    {
        date: new Date('2023/10/12 6:00'),
        "ex-toreca": 5290507,
        dopa: 7099839,
        "japan-toreca": 507281,
        clove: 2722833,
        gacha24: 3299766,
        iris: 1785017
    },
    {
        date: new Date('2023/10/12 7:00'),
        "ex-toreca": 8577698,
        dopa: 4839726,
        "japan-toreca": 1660722,
        clove: 8596770,
        gacha24: 8827994,
        iris: 3083515
    },
    {
        date: new Date('2023/10/12 8:00'),
        "ex-toreca": 6051056,
        dopa: 2995206,
        "japan-toreca": 9174201,
        clove: 9436512,
        gacha24: 7081731,
        iris: 6599329
    },
    {
        date: new Date('2023/10/12 9:00'),
        "ex-toreca": 9752144,
        dopa: 8146273,
        "japan-toreca": 8871236,
        clove: 5206292,
        gacha24: 5898659,
        iris: 5211857
    },
    {
        date: new Date('2023/10/12 10:00'),
        "ex-toreca": 7004421,
        dopa: 3369082,
        "japan-toreca": 4205006,
        clove: 7773315,
        gacha24: 5138176,
        iris: 3576283
    },
    {
        date: new Date('2023/10/12 11:00'),
        "ex-toreca": 3896573,
        dopa: 4525391,
        "japan-toreca": 631270,
        clove: 3305571,
        gacha24: 1935516,
        iris: 652915
    },
    {
        date: new Date('2023/10/12 12:00'),
        "ex-toreca": 7590066,
        dopa: 4286065,
        "japan-toreca": 6645877,
        clove: 5564576,
        gacha24: 4913035,
        iris: 603748
    },
    {
        date: new Date('2023/10/12 13:00'),
        "ex-toreca": 8281726,
        dopa: 9407952,
        "japan-toreca": 8309444,
        clove: 2263845,
        gacha24: 6526681,
        iris: 482736
    },
    {
        date: new Date('2023/10/12 14:00'),
        "ex-toreca": 6311952,
        dopa: 4778028,
        "japan-toreca": 5450586,
        clove: 325481,
        gacha24: 1846886,
        iris: 4383393
    },
    {
        date: new Date('2023/10/12 15:00'),
        "ex-toreca": 5864492,
        dopa: 7771047,
        "japan-toreca": 820575,
        clove: 4579387,
        gacha24: 6563073,
        iris: 881004
    },
    {
        date: new Date('2023/10/12 16:00'),
        "ex-toreca": 3561225,
        dopa: 6816340,
        "japan-toreca": 8176047,
        clove: 9054357,
        gacha24: 103824,
        iris: 7018079
    },
    {
        date: new Date('2023/10/12 17:00'),
        "ex-toreca": 2663929,
        dopa: 783493,
        "japan-toreca": 6871666,
        clove: 9693407,
        gacha24: 4984240,
        iris: 1909162
    },
    {
        date: new Date('2023/10/12 18:00'),
        "ex-toreca": 4834492,
        dopa: 6695182,
        "japan-toreca": 2807821,
        clove: 7318267,
        gacha24: 1130655,
        iris: 9629456
    },
    {
        date: new Date('2023/10/12 19:00'),
        "ex-toreca": 7579110,
        dopa: 8516073,
        "japan-toreca": 6050831,
        clove: 3523040,
        gacha24: 442473,
        iris: 5830206
    },
    {
        date: new Date('2023/10/12 20:00'),
        "ex-toreca": 6518810,
        dopa: 3616449,
        "japan-toreca": 7325647,
        clove: 1678309,
        gacha24: 954657,
        iris: 7490384
    },
    {
        date: new Date('2023/10/12 21:00'),
        "ex-toreca": 6179895,
        dopa: 3171265,
        "japan-toreca": 4014102,
        clove: 314024,
        gacha24: 5639474,
        iris: 6388400
    },
    {
        date: new Date('2023/10/12 22:00'),
        "ex-toreca": 6043627,
        dopa: 5285978,
        "japan-toreca": 8470988,
        clove: 7336131,
        gacha24: 4269798,
        iris: 8518628
    },
    {
        date: new Date('2023/10/12 23:00'),
        "ex-toreca": 5075711,
        dopa: 2287235,
        "japan-toreca": 9823510,
        clove: 8211869,
        gacha24: 8679942,
        iris: 5813751
    },
    {
        date: new Date('2023/10/13 0:00'),
        "ex-toreca": 2659897,
        dopa: 6692300,
        "japan-toreca": 1844559,
        clove: 2881498,
        gacha24: 1450494,
        iris: 370296
    },
    {
        date: new Date('2023/10/13 1:00'),
        "ex-toreca": 8627334,
        dopa: 6577403,
        "japan-toreca": 5066704,
        clove: 1561955,
        gacha24: 3134172,
        iris: 2836854
    },
    {
        date: new Date('2023/10/13 2:00'),
        "ex-toreca": 243092,
        dopa: 330478,
        "japan-toreca": 221425,
        clove: 5401598,
        gacha24: 8239765,
        iris: 461706
    },
    {
        date: new Date('2023/10/13 3:00'),
        "ex-toreca": 8601987,
        dopa: 671755,
        "japan-toreca": 9845061,
        clove: 1291660,
        gacha24: 8648278,
        iris: 9304745
    },
    {
        date: new Date('2023/10/13 4:00'),
        "ex-toreca": 6815060,
        dopa: 621101,
        "japan-toreca": 9065935,
        clove: 6158959,
        gacha24: 6798366,
        iris: 3569138
    },
    {
        date: new Date('2023/10/13 5:00'),
        "ex-toreca": 4441320,
        dopa: 2135738,
        "japan-toreca": 6842630,
        clove: 5713943,
        gacha24: 2820397,
        iris: 5738730
    },
    {
        date: new Date('2023/10/13 6:00'),
        "ex-toreca": 8051799,
        dopa: 5330714,
        "japan-toreca": 6701809,
        clove: 2937403,
        gacha24: 2641423,
        iris: 9628694
    },
    {
        date: new Date('2023/10/13 7:00'),
        "ex-toreca": 4642297,
        dopa: 9618472,
        "japan-toreca": 4609213,
        clove: 5948410,
        gacha24: 3798937,
        iris: 951592
    },
    {
        date: new Date('2023/10/13 8:00'),
        "ex-toreca": 5223476,
        dopa: 1436783,
        "japan-toreca": 9743064,
        clove: 2431119,
        gacha24: 8713058,
        iris: 7995931
    },
    {
        date: new Date('2023/10/13 9:00'),
        "ex-toreca": 6532046,
        dopa: 8667937,
        "japan-toreca": 3713702,
        clove: 6259318,
        gacha24: 8669228,
        iris: 3853588
    },
    {
        date: new Date('2023/10/13 10:00'),
        "ex-toreca": 3082615,
        dopa: 8529168,
        "japan-toreca": 492131,
        clove: 7259217,
        gacha24: 271977,
        iris: 4987939
    },
    {
        date: new Date('2023/10/13 11:00'),
        "ex-toreca": 4033580,
        dopa: 1002413,
        "japan-toreca": 692481,
        clove: 911262,
        gacha24: 4796426,
        iris: 4628606
    },
    {
        date: new Date('2023/10/13 12:00'),
        "ex-toreca": 6729411,
        dopa: 6934959,
        "japan-toreca": 9088894,
        clove: 94212,
        gacha24: 9826713,
        iris: 7227288
    },
    {
        date: new Date('2023/10/13 13:00'),
        "ex-toreca": 8319828,
        dopa: 1132770,
        "japan-toreca": 586337,
        clove: 7104481,
        gacha24: 1107017,
        iris: 3364232
    },
    {
        date: new Date('2023/10/13 14:00'),
        "ex-toreca": 1053842,
        dopa: 9974093,
        "japan-toreca": 6083130,
        clove: 5415455,
        gacha24: 9554018,
        iris: 6169242
    },
    {
        date: new Date('2023/10/13 15:00'),
        "ex-toreca": 8316347,
        dopa: 5268594,
        "japan-toreca": 4823117,
        clove: 9338480,
        gacha24: 985016,
        iris: 3320863
    },
    {
        date: new Date('2023/10/13 16:00'),
        "ex-toreca": 1682950,
        dopa: 9756394,
        "japan-toreca": 3602529,
        clove: 2517227,
        gacha24: 5081397,
        iris: 5355702
    },
    {
        date: new Date('2023/10/13 17:00'),
        "ex-toreca": 1393278,
        dopa: 5250718,
        "japan-toreca": 9895957,
        clove: 1859419,
        gacha24: 6474047,
        iris: 8813440
    },
    {
        date: new Date('2023/10/13 18:00'),
        "ex-toreca": 7257746,
        dopa: 9726935,
        "japan-toreca": 8646988,
        clove: 8317746,
        gacha24: 9968742,
        iris: 4949315
    },
    {
        date: new Date('2023/10/13 19:00'),
        "ex-toreca": 7456666,
        dopa: 9778560,
        "japan-toreca": 2584901,
        clove: 6499075,
        gacha24: 2089568,
        iris: 8674060
    },
    {
        date: new Date('2023/10/13 20:00'),
        "ex-toreca": 2403180,
        dopa: 3518419,
        "japan-toreca": 8216606,
        clove: 7787737,
        gacha24: 1471651,
        iris: 4642809
    },
    {
        date: new Date('2023/10/13 21:00'),
        "ex-toreca": 9738502,
        dopa: 2700368,
        "japan-toreca": 4248173,
        clove: 9134269,
        gacha24: 4666821,
        iris: 8452584
    },
    {
        date: new Date('2023/10/13 22:00'),
        "ex-toreca": 1642723,
        dopa: 8869776,
        "japan-toreca": 587042,
        clove: 6407545,
        gacha24: 5307185,
        iris: 2646152
    },
    {
        date: new Date('2023/10/13 23:00'),
        "ex-toreca": 5938883,
        dopa: 1215746,
        "japan-toreca": 6256842,
        clove: 3621144,
        gacha24: 5680243,
        iris: 8881872
    },
    {
        date: new Date('2023/10/14 0:00'),
        "ex-toreca": 491753,
        dopa: 1112481,
        "japan-toreca": 5442181,
        clove: 271979,
        gacha24: 6878782,
        iris: 3696188
    },
    {
        date: new Date('2023/10/14 1:00'),
        "ex-toreca": 8629931,
        dopa: 8329491,
        "japan-toreca": 1213589,
        clove: 282812,
        gacha24: 7985111,
        iris: 7189347
    },
    {
        date: new Date('2023/10/14 2:00'),
        "ex-toreca": 6753740,
        dopa: 4999220,
        "japan-toreca": 2567152,
        clove: 4695727,
        gacha24: 1076273,
        iris: 690387
    },
    {
        date: new Date('2023/10/14 3:00'),
        "ex-toreca": 3119406,
        dopa: 121735,
        "japan-toreca": 6522736,
        clove: 2796258,
        gacha24: 974556,
        iris: 8191525
    },
    {
        date: new Date('2023/10/14 4:00'),
        "ex-toreca": 264777,
        dopa: 8362648,
        "japan-toreca": 6304515,
        clove: 8704260,
        gacha24: 9521438,
        iris: 6025653
    },
    {
        date: new Date('2023/10/14 5:00'),
        "ex-toreca": 6831868,
        dopa: 514186,
        "japan-toreca": 7759020,
        clove: 6531503,
        gacha24: 1453982,
        iris: 5304310
    },
    {
        date: new Date('2023/10/14 6:00'),
        "ex-toreca": 7565266,
        dopa: 3223805,
        "japan-toreca": 6804088,
        clove: 9959006,
        gacha24: 9372448,
        iris: 671432
    },
    {
        date: new Date('2023/10/14 7:00'),
        "ex-toreca": 1194573,
        dopa: 102106,
        "japan-toreca": 1046328,
        clove: 3211256,
        gacha24: 6126333,
        iris: 6585037
    },
    {
        date: new Date('2023/10/14 8:00'),
        "ex-toreca": 875431,
        dopa: 3491827,
        "japan-toreca": 3720287,
        clove: 8921831,
        gacha24: 3508527,
        iris: 8432418
    },
    {
        date: new Date('2023/10/14 9:00'),
        "ex-toreca": 247703,
        dopa: 9474559,
        "japan-toreca": 9474930,
        clove: 3504023,
        gacha24: 7752128,
        iris: 8563721
    },
    {
        date: new Date('2023/10/14 10:00'),
        "ex-toreca": 9054200,
        dopa: 8335841,
        "japan-toreca": 8795050,
        clove: 3136341,
        gacha24: 8887819,
        iris: 8560811
    },
    {
        date: new Date('2023/10/14 11:00'),
        "ex-toreca": 3203308,
        dopa: 4981541,
        "japan-toreca": 177226,
        clove: 3552240,
        gacha24: 1135170,
        iris: 9679812
    },
    {
        date: new Date('2023/10/14 12:00'),
        "ex-toreca": 2059642,
        dopa: 8110226,
        "japan-toreca": 787313,
        clove: 7893412,
        gacha24: 285114,
        iris: 7544695
    },
    {
        date: new Date('2023/10/14 13:00'),
        "ex-toreca": 1429417,
        dopa: 896975,
        "japan-toreca": 7877038,
        clove: 5114255,
        gacha24: 7767108,
        iris: 4200782
    },
    {
        date: new Date('2023/10/14 14:00'),
        "ex-toreca": 5350131,
        dopa: 1500322,
        "japan-toreca": 8047302,
        clove: 7339842,
        gacha24: 1638187,
        iris: 9369069
    },
    {
        date: new Date('2023/10/14 15:00'),
        "ex-toreca": 146764,
        dopa: 9800916,
        "japan-toreca": 7189269,
        clove: 3933634,
        gacha24: 6569048,
        iris: 2677329
    },
    {
        date: new Date('2023/10/14 16:00'),
        "ex-toreca": 2300513,
        dopa: 725919,
        "japan-toreca": 8430292,
        clove: 4198074,
        gacha24: 593354,
        iris: 3617280
    },
    {
        date: new Date('2023/10/14 17:00'),
        "ex-toreca": 7287697,
        dopa: 2666267,
        "japan-toreca": 2126715,
        clove: 9082331,
        gacha24: 6389329,
        iris: 5092219
    },
    {
        date: new Date('2023/10/14 18:00'),
        "ex-toreca": 4780370,
        dopa: 2648920,
        "japan-toreca": 5825701,
        clove: 7244339,
        gacha24: 9450202,
        iris: 7625783
    },
    {
        date: new Date('2023/10/14 19:00'),
        "ex-toreca": 887000,
        dopa: 787411,
        "japan-toreca": 3770436,
        clove: 3748825,
        gacha24: 3807447,
        iris: 568895
    },
    {
        date: new Date('2023/10/14 20:00'),
        "ex-toreca": 6137609,
        dopa: 9191246,
        "japan-toreca": 5591751,
        clove: 9138120,
        gacha24: 5846310,
        iris: 2069384
    },
    {
        date: new Date('2023/10/14 21:00'),
        "ex-toreca": 5600964,
        dopa: 78331,
        "japan-toreca": 6137310,
        clove: 2887316,
        gacha24: 3081674,
        iris: 8928960
    },
    {
        date: new Date('2023/10/14 22:00'),
        "ex-toreca": 2058996,
        dopa: 3662537,
        "japan-toreca": 8588785,
        clove: 6769670,
        gacha24: 9074684,
        iris: 6983576
    },
    {
        date: new Date('2023/10/14 23:00'),
        "ex-toreca": 1333451,
        dopa: 1511245,
        "japan-toreca": 5846210,
        clove: 4301723,
        gacha24: 8711968,
        iris: 3426813
    },
    {
        date: new Date('2023/10/15 0:00'),
        "ex-toreca": 445735,
        dopa: 8854471,
        "japan-toreca": 1910921,
        clove: 1891363,
        gacha24: 4390300,
        iris: 4828873
    },
    {
        date: new Date('2023/10/15 1:00'),
        "ex-toreca": 675456,
        dopa: 982458,
        "japan-toreca": 6809914,
        clove: 5425572,
        gacha24: 9387955,
        iris: 5336107
    },
    {
        date: new Date('2023/10/15 2:00'),
        "ex-toreca": 1314741,
        dopa: 9481960,
        "japan-toreca": 5281109,
        clove: 6651267,
        gacha24: 7977343,
        iris: 8463316
    },
    {
        date: new Date('2023/10/15 3:00'),
        "ex-toreca": 1950629,
        dopa: 343135,
        "japan-toreca": 6366223,
        clove: 9852561,
        gacha24: 7932257,
        iris: 7020383
    },
    {
        date: new Date('2023/10/15 4:00'),
        "ex-toreca": 4259153,
        dopa: 909281,
        "japan-toreca": 7836319,
        clove: 1204914,
        gacha24: 6624838,
        iris: 118458
    },
    {
        date: new Date('2023/10/15 5:00'),
        "ex-toreca": 841639,
        dopa: 1821107,
        "japan-toreca": 1827239,
        clove: 7777563,
        gacha24: 8756175,
        iris: 9642521
    },
    {
        date: new Date('2023/10/15 6:00'),
        "ex-toreca": 2307616,
        dopa: 8454338,
        "japan-toreca": 9588496,
        clove: 4005904,
        gacha24: 4321714,
        iris: 8704528
    },
    {
        date: new Date('2023/10/15 7:00'),
        "ex-toreca": 884448,
        dopa: 9503661,
        "japan-toreca": 3792221,
        clove: 7404005,
        gacha24: 5752812,
        iris: 2554308
    },
    {
        date: new Date('2023/10/15 8:00'),
        "ex-toreca": 9488670,
        dopa: 2382066,
        "japan-toreca": 1579737,
        clove: 1721926,
        gacha24: 8308274,
        iris: 9963510
    },
    {
        date: new Date('2023/10/15 9:00'),
        "ex-toreca": 9640159,
        dopa: 549225,
        "japan-toreca": 699429,
        clove: 2747123,
        gacha24: 7938670,
        iris: 367710
    },
    {
        date: new Date('2023/10/15 10:00'),
        "ex-toreca": 5874131,
        dopa: 544188,
        "japan-toreca": 2035656,
        clove: 5672606,
        gacha24: 8920661,
        iris: 8057335
    },
    {
        date: new Date('2023/10/15 11:00'),
        "ex-toreca": 503571,
        dopa: 4594081,
        "japan-toreca": 9620773,
        clove: 3698600,
        gacha24: 5229782,
        iris: 8527318
    },
    {
        date: new Date('2023/10/15 12:00'),
        "ex-toreca": 7273038,
        dopa: 2535920,
        "japan-toreca": 3802125,
        clove: 6248929,
        gacha24: 852567,
        iris: 3955420
    },
    {
        date: new Date('2023/10/15 13:00'),
        "ex-toreca": 1219411,
        dopa: 5383736,
        "japan-toreca": 4293474,
        clove: 8975927,
        gacha24: 145829,
        iris: 8246029
    },
    {
        date: new Date('2023/10/15 14:00'),
        "ex-toreca": 4528905,
        dopa: 5739468,
        "japan-toreca": 1016790,
        clove: 1147087,
        gacha24: 4536472,
        iris: 5191620
    },
    {
        date: new Date('2023/10/15 15:00'),
        "ex-toreca": 956523,
        dopa: 9398175,
        "japan-toreca": 7200499,
        clove: 8702405,
        gacha24: 9047858,
        iris: 3371222
    },
    {
        date: new Date('2023/10/15 16:00'),
        "ex-toreca": 8614985,
        dopa: 1549121,
        "japan-toreca": 641479,
        clove: 1056433,
        gacha24: 9510144,
        iris: 8145882
    },
    {
        date: new Date('2023/10/15 17:00'),
        "ex-toreca": 877724,
        dopa: 1981578,
        "japan-toreca": 2610489,
        clove: 5324273,
        gacha24: 7649263,
        iris: 7883521
    },
    {
        date: new Date('2023/10/15 18:00'),
        "ex-toreca": 5686779,
        dopa: 5469472,
        "japan-toreca": 6562839,
        clove: 472928,
        gacha24: 7018499,
        iris: 5810813
    },
    {
        date: new Date('2023/10/15 19:00'),
        "ex-toreca": 4154268,
        dopa: 3980891,
        "japan-toreca": 2556950,
        clove: 2354533,
        gacha24: 8917414,
        iris: 6525307
    },
    {
        date: new Date('2023/10/15 20:00'),
        "ex-toreca": 2411731,
        dopa: 731382,
        "japan-toreca": 9299064,
        clove: 8727232,
        gacha24: 3575281,
        iris: 2293744
    },
    {
        date: new Date('2023/10/15 21:00'),
        "ex-toreca": 5028562,
        dopa: 4598373,
        "japan-toreca": 9989880,
        clove: 6004990,
        gacha24: 796543,
        iris: 2286235
    },
    {
        date: new Date('2023/10/15 22:00'),
        "ex-toreca": 5074467,
        dopa: 1901439,
        "japan-toreca": 8313362,
        clove: 6166566,
        gacha24: 7817837,
        iris: 1917828
    },
    {
        date: new Date('2023/10/15 23:00'),
        "ex-toreca": 2762273,
        dopa: 1458413,
        "japan-toreca": 8412055,
        clove: 1847478,
        gacha24: 526833,
        iris: 9287086
    },
    {
        date: new Date('2023/10/16 0:00'),
        "ex-toreca": 6475198,
        dopa: 4421886,
        "japan-toreca": 2004360,
        clove: 4186447,
        gacha24: 4295609,
        iris: 6434942
    },
    {
        date: new Date('2023/10/16 1:00'),
        "ex-toreca": 2378618,
        dopa: 978407,
        "japan-toreca": 8978876,
        clove: 4146923,
        gacha24: 6736187,
        iris: 731918
    },
    {
        date: new Date('2023/10/16 2:00'),
        "ex-toreca": 973962,
        dopa: 9076638,
        "japan-toreca": 7828580,
        clove: 7040455,
        gacha24: 2715996,
        iris: 9225235
    },
    {
        date: new Date('2023/10/16 3:00'),
        "ex-toreca": 8066416,
        dopa: 1308763,
        "japan-toreca": 8608273,
        clove: 5752834,
        gacha24: 2443123,
        iris: 6957469
    },
    {
        date: new Date('2023/10/16 4:00'),
        "ex-toreca": 8228410,
        dopa: 1181773,
        "japan-toreca": 6217377,
        clove: 7868574,
        gacha24: 3761332,
        iris: 3412841
    },
    {
        date: new Date('2023/10/16 5:00'),
        "ex-toreca": 2013176,
        dopa: 325844,
        "japan-toreca": 7052842,
        clove: 7193222,
        gacha24: 942101,
        iris: 5179761
    },
    {
        date: new Date('2023/10/16 6:00'),
        "ex-toreca": 6011835,
        dopa: 4647703,
        "japan-toreca": 723036,
        clove: 3016404,
        gacha24: 5942491,
        iris: 320818
    },
    {
        date: new Date('2023/10/16 7:00'),
        "ex-toreca": 3093673,
        dopa: 2284878,
        "japan-toreca": 6802969,
        clove: 4771693,
        gacha24: 6046299,
        iris: 4386452
    },
    {
        date: new Date('2023/10/16 8:00'),
        "ex-toreca": 4052327,
        dopa: 9289154,
        "japan-toreca": 8058345,
        clove: 4578269,
        gacha24: 6678811,
        iris: 7603441
    },
    {
        date: new Date('2023/10/16 9:00'),
        "ex-toreca": 564111,
        dopa: 6551312,
        "japan-toreca": 6585145,
        clove: 7129819,
        gacha24: 9487377,
        iris: 689225
    },
    {
        date: new Date('2023/10/16 10:00'),
        "ex-toreca": 5547799,
        dopa: 760114,
        "japan-toreca": 9603882,
        clove: 9509957,
        gacha24: 2464597,
        iris: 2439970
    },
    {
        date: new Date('2023/10/16 11:00'),
        "ex-toreca": 4956955,
        dopa: 1692110,
        "japan-toreca": 527857,
        clove: 8900281,
        gacha24: 7144956,
        iris: 1004883
    },
    {
        date: new Date('2023/10/16 12:00'),
        "ex-toreca": 6539159,
        dopa: 67228,
        "japan-toreca": 8790770,
        clove: 7047659,
        gacha24: 7130381,
        iris: 8624016
    },
    {
        date: new Date('2023/10/16 13:00'),
        "ex-toreca": 2084894,
        dopa: 9858691,
        "japan-toreca": 5127063,
        clove: 230059,
        gacha24: 140741,
        iris: 2692393
    },
    {
        date: new Date('2023/10/16 14:00'),
        "ex-toreca": 6101554,
        dopa: 6696723,
        "japan-toreca": 5798737,
        clove: 337755,
        gacha24: 316740,
        iris: 3161092
    },
    {
        date: new Date('2023/10/16 15:00'),
        "ex-toreca": 6934360,
        dopa: 8896503,
        "japan-toreca": 7534071,
        clove: 5414853,
        gacha24: 1220070,
        iris: 3436962
    },
    {
        date: new Date('2023/10/16 16:00'),
        "ex-toreca": 2791829,
        dopa: 648815,
        "japan-toreca": 7805534,
        clove: 2601978,
        gacha24: 1109316,
        iris: 2512485
    },
    {
        date: new Date('2023/10/16 17:00'),
        "ex-toreca": 3789579,
        dopa: 1986344,
        "japan-toreca": 6573538,
        clove: 8740692,
        gacha24: 54954,
        iris: 9006487
    },
    {
        date: new Date('2023/10/16 18:00'),
        "ex-toreca": 4136866,
        dopa: 5530908,
        "japan-toreca": 8220081,
        clove: 4810495,
        gacha24: 9659097,
        iris: 4020425
    },
    {
        date: new Date('2023/10/16 19:00'),
        "ex-toreca": 3861071,
        dopa: 1791557,
        "japan-toreca": 3877373,
        clove: 7416316,
        gacha24: 7302593,
        iris: 8454172
    },
    {
        date: new Date('2023/10/16 20:00'),
        "ex-toreca": 12837,
        dopa: 1712539,
        "japan-toreca": 9142027,
        clove: 8623869,
        gacha24: 7334964,
        iris: 2199407
    },
    {
        date: new Date('2023/10/16 21:00'),
        "ex-toreca": 8632340,
        dopa: 3022929,
        "japan-toreca": 6337733,
        clove: 9081006,
        gacha24: 1905712,
        iris: 1709907
    },
    {
        date: new Date('2023/10/16 22:00'),
        "ex-toreca": 6974596,
        dopa: 9081246,
        "japan-toreca": 3803559,
        clove: 4534687,
        gacha24: 4351392,
        iris: 5292265
    },
    {
        date: new Date('2023/10/16 23:00'),
        "ex-toreca": 3037126,
        dopa: 896903,
        "japan-toreca": 6484642,
        clove: 6848105,
        gacha24: 1156799,
        iris: 3363606
    },
    {
        date: new Date('2023/10/17 0:00'),
        "ex-toreca": 8375232,
        dopa: 5745301,
        "japan-toreca": 2597253,
        clove: 876129,
        gacha24: 9498744,
        iris: 6635233
    },
    {
        date: new Date('2023/10/17 1:00'),
        "ex-toreca": 7930692,
        dopa: 8697973,
        "japan-toreca": 784267,
        clove: 1516231,
        gacha24: 487196,
        iris: 2373152
    },
    {
        date: new Date('2023/10/17 2:00'),
        "ex-toreca": 9526963,
        dopa: 8626596,
        "japan-toreca": 9906471,
        clove: 1009715,
        gacha24: 4300077,
        iris: 1064658
    },
    {
        date: new Date('2023/10/17 3:00'),
        "ex-toreca": 6877441,
        dopa: 969364,
        "japan-toreca": 4268070,
        clove: 7787882,
        gacha24: 7627461,
        iris: 3877730
    },
    {
        date: new Date('2023/10/17 4:00'),
        "ex-toreca": 1492167,
        dopa: 8433023,
        "japan-toreca": 1060103,
        clove: 7871455,
        gacha24: 1440249,
        iris: 142249
    },
    {
        date: new Date('2023/10/17 5:00'),
        "ex-toreca": 2576393,
        dopa: 6988559,
        "japan-toreca": 799380,
        clove: 5356572,
        gacha24: 7314522,
        iris: 4154836
    },
    {
        date: new Date('2023/10/17 6:00'),
        "ex-toreca": 4033449,
        dopa: 2980285,
        "japan-toreca": 1442296,
        clove: 3081539,
        gacha24: 7838899,
        iris: 8602524
    },
    {
        date: new Date('2023/10/17 7:00'),
        "ex-toreca": 3274648,
        dopa: 1814807,
        "japan-toreca": 8010702,
        clove: 6682593,
        gacha24: 5101528,
        iris: 4628083
    },
    {
        date: new Date('2023/10/17 8:00'),
        "ex-toreca": 6310556,
        dopa: 6399428,
        "japan-toreca": 5742179,
        clove: 6453216,
        gacha24: 20974,
        iris: 8091086
    },
    {
        date: new Date('2023/10/17 9:00'),
        "ex-toreca": 9754689,
        dopa: 9719251,
        "japan-toreca": 6633776,
        clove: 2433045,
        gacha24: 6784161,
        iris: 1283591
    },
    {
        date: new Date('2023/10/17 10:00'),
        "ex-toreca": 4434481,
        dopa: 1449315,
        "japan-toreca": 8237480,
        clove: 5982802,
        gacha24: 8725869,
        iris: 4816780
    },
    {
        date: new Date('2023/10/17 11:00'),
        "ex-toreca": 1239702,
        dopa: 2208860,
        "japan-toreca": 6480096,
        clove: 9723739,
        gacha24: 7425879,
        iris: 3685289
    },
    {
        date: new Date('2023/10/17 12:00'),
        "ex-toreca": 8466328,
        dopa: 6584546,
        "japan-toreca": 5550398,
        clove: 2550464,
        gacha24: 5865522,
        iris: 3122682
    },
    {
        date: new Date('2023/10/17 13:00'),
        "ex-toreca": 8124220,
        dopa: 7808042,
        "japan-toreca": 9091911,
        clove: 9925578,
        gacha24: 865523,
        iris: 3188488
    },
    {
        date: new Date('2023/10/17 14:00'),
        "ex-toreca": 9666836,
        dopa: 6915877,
        "japan-toreca": 6857617,
        clove: 1994854,
        gacha24: 717599,
        iris: 3474077
    },
    {
        date: new Date('2023/10/17 15:00'),
        "ex-toreca": 9102565,
        dopa: 1092563,
        "japan-toreca": 6436107,
        clove: 5420032,
        gacha24: 559084,
        iris: 2052741
    },
    {
        date: new Date('2023/10/17 16:00'),
        "ex-toreca": 9206902,
        dopa: 4712537,
        "japan-toreca": 4117373,
        clove: 63960,
        gacha24: 1881401,
        iris: 4841287
    },
    {
        date: new Date('2023/10/17 17:00'),
        "ex-toreca": 4350887,
        dopa: 4386337,
        "japan-toreca": 2930651,
        clove: 4084652,
        gacha24: 9092025,
        iris: 3040973
    },
    {
        date: new Date('2023/10/17 18:00'),
        "ex-toreca": 4579261,
        dopa: 503021,
        "japan-toreca": 7029880,
        clove: 4117698,
        gacha24: 8614670,
        iris: 8858457
    },
    {
        date: new Date('2023/10/17 19:00'),
        "ex-toreca": 5472766,
        dopa: 9497765,
        "japan-toreca": 2328606,
        clove: 7809433,
        gacha24: 3282711,
        iris: 955278
    },
    {
        date: new Date('2023/10/17 20:00'),
        "ex-toreca": 962669,
        dopa: 5612126,
        "japan-toreca": 8868417,
        clove: 364083,
        gacha24: 2775584,
        iris: 560778
    },
    {
        date: new Date('2023/10/17 21:00'),
        "ex-toreca": 4126355,
        dopa: 5496368,
        "japan-toreca": 6477316,
        clove: 1748939,
        gacha24: 49215,
        iris: 2662709
    },
    {
        date: new Date('2023/10/17 22:00'),
        "ex-toreca": 1832648,
        dopa: 4674053,
        "japan-toreca": 2006795,
        clove: 3346457,
        gacha24: 4686274,
        iris: 4625285
    },
    {
        date: new Date('2023/10/17 23:00'),
        "ex-toreca": 4612380,
        dopa: 4557076,
        "japan-toreca": 9380569,
        clove: 9961515,
        gacha24: 7351743,
        iris: 9388159
    },
    {
        date: new Date('2023/10/18 0:00'),
        "ex-toreca": 6263916,
        dopa: 4831310,
        "japan-toreca": 2347991,
        clove: 1300424,
        gacha24: 5356476,
        iris: 4147097
    },
    {
        date: new Date('2023/10/18 1:00'),
        "ex-toreca": 2916223,
        dopa: 8967553,
        "japan-toreca": 2054201,
        clove: 5337812,
        gacha24: 1158122,
        iris: 8131028
    },
    {
        date: new Date('2023/10/18 2:00'),
        "ex-toreca": 2031849,
        dopa: 6473774,
        "japan-toreca": 1175227,
        clove: 3866742,
        gacha24: 5358984,
        iris: 4775571
    },
    {
        date: new Date('2023/10/18 3:00'),
        "ex-toreca": 3646130,
        dopa: 7980081,
        "japan-toreca": 5050807,
        clove: 5235184,
        gacha24: 4946970,
        iris: 8145553
    },
    {
        date: new Date('2023/10/18 4:00'),
        "ex-toreca": 839118,
        dopa: 431100,
        "japan-toreca": 3004412,
        clove: 9607881,
        gacha24: 2431744,
        iris: 7209799
    },
    {
        date: new Date('2023/10/18 5:00'),
        "ex-toreca": 4999721,
        dopa: 6664675,
        "japan-toreca": 7892739,
        clove: 9012587,
        gacha24: 9885928,
        iris: 8821325
    },
    {
        date: new Date('2023/10/18 6:00'),
        "ex-toreca": 1609618,
        dopa: 1499541,
        "japan-toreca": 9014264,
        clove: 6433864,
        gacha24: 1253348,
        iris: 1881599
    },
    {
        date: new Date('2023/10/18 7:00'),
        "ex-toreca": 9587998,
        dopa: 8772332,
        "japan-toreca": 5035424,
        clove: 7409119,
        gacha24: 9723620,
        iris: 9873379
    },
    {
        date: new Date('2023/10/18 8:00'),
        "ex-toreca": 9582274,
        dopa: 5088689,
        "japan-toreca": 3388543,
        clove: 8292133,
        gacha24: 2347704,
        iris: 2413259
    },
    {
        date: new Date('2023/10/18 9:00'),
        "ex-toreca": 9475014,
        dopa: 7587003,
        "japan-toreca": 2216467,
        clove: 2137389,
        gacha24: 578102,
        iris: 3523829
    },
    {
        date: new Date('2023/10/18 10:00'),
        "ex-toreca": 59275,
        dopa: 8451841,
        "japan-toreca": 799143,
        clove: 2980691,
        gacha24: 8424370,
        iris: 3988635
    },
    {
        date: new Date('2023/10/18 11:00'),
        "ex-toreca": 316000,
        dopa: 7243350,
        "japan-toreca": 2281394,
        clove: 836265,
        gacha24: 8989757,
        iris: 1158613
    },
    {
        date: new Date('2023/10/18 12:00'),
        "ex-toreca": 574459,
        dopa: 9640063,
        "japan-toreca": 2262523,
        clove: 1772953,
        gacha24: 8291115,
        iris: 4119830
    },
    {
        date: new Date('2023/10/18 13:00'),
        "ex-toreca": 3890444,
        dopa: 5160077,
        "japan-toreca": 8732125,
        clove: 9750772,
        gacha24: 3140999,
        iris: 2048718
    },
    {
        date: new Date('2023/10/18 14:00'),
        "ex-toreca": 8456304,
        dopa: 8860831,
        "japan-toreca": 7178188,
        clove: 1927977,
        gacha24: 3877631,
        iris: 1552561
    },
    {
        date: new Date('2023/10/18 15:00'),
        "ex-toreca": 7942311,
        dopa: 1094369,
        "japan-toreca": 4450213,
        clove: 2480964,
        gacha24: 6699530,
        iris: 5052394
    },
    {
        date: new Date('2023/10/18 16:00'),
        "ex-toreca": 751849,
        dopa: 2058995,
        "japan-toreca": 7653232,
        clove: 247860,
        gacha24: 8293954,
        iris: 7889071
    },
    {
        date: new Date('2023/10/18 17:00'),
        "ex-toreca": 1688363,
        dopa: 7187064,
        "japan-toreca": 636052,
        clove: 3432745,
        gacha24: 7741880,
        iris: 7373537
    },
    {
        date: new Date('2023/10/18 18:00'),
        "ex-toreca": 9834708,
        dopa: 9637717,
        "japan-toreca": 7141255,
        clove: 9106518,
        gacha24: 8614039,
        iris: 7030834
    },
    {
        date: new Date('2023/10/18 19:00'),
        "ex-toreca": 1189183,
        dopa: 7667165,
        "japan-toreca": 8942340,
        clove: 5095184,
        gacha24: 7053764,
        iris: 3521695
    },
    {
        date: new Date('2023/10/18 20:00'),
        "ex-toreca": 847096,
        dopa: 8331842,
        "japan-toreca": 4660957,
        clove: 3845182,
        gacha24: 4394264,
        iris: 6782330
    },
    {
        date: new Date('2023/10/18 21:00'),
        "ex-toreca": 4455656,
        dopa: 5090219,
        "japan-toreca": 9949548,
        clove: 3429740,
        gacha24: 286373,
        iris: 8862732
    },
    {
        date: new Date('2023/10/18 22:00'),
        "ex-toreca": 2883612,
        dopa: 4372686,
        "japan-toreca": 4697246,
        clove: 352974,
        gacha24: 5176180,
        iris: 6795589
    },
    {
        date: new Date('2023/10/18 23:00'),
        "ex-toreca": 2062421,
        dopa: 486209,
        "japan-toreca": 6377201,
        clove: 3756904,
        gacha24: 8083698,
        iris: 783121
    },
    {
        date: new Date('2023/10/19 0:00'),
        "ex-toreca": 5188043,
        dopa: 4704788,
        "japan-toreca": 2567944,
        clove: 4109951,
        gacha24: 2360158,
        iris: 8044298
    },
    {
        date: new Date('2023/10/19 1:00'),
        "ex-toreca": 1868981,
        dopa: 5749127,
        "japan-toreca": 8965877,
        clove: 3791036,
        gacha24: 913650,
        iris: 344942
    },
    {
        date: new Date('2023/10/19 2:00'),
        "ex-toreca": 6732476,
        dopa: 772946,
        "japan-toreca": 3917654,
        clove: 8289976,
        gacha24: 4721780,
        iris: 226006
    },
    {
        date: new Date('2023/10/19 3:00'),
        "ex-toreca": 8748734,
        dopa: 5949333,
        "japan-toreca": 1845826,
        clove: 765199,
        gacha24: 484551,
        iris: 7203673
    },
    {
        date: new Date('2023/10/19 4:00'),
        "ex-toreca": 6519879,
        dopa: 2936750,
        "japan-toreca": 7137126,
        clove: 1505987,
        gacha24: 6871875,
        iris: 1812150
    },
    {
        date: new Date('2023/10/19 5:00'),
        "ex-toreca": 9102518,
        dopa: 7767061,
        "japan-toreca": 3732341,
        clove: 7743999,
        gacha24: 2106079,
        iris: 1560425
    },
    {
        date: new Date('2023/10/19 6:00'),
        "ex-toreca": 5063309,
        dopa: 3528981,
        "japan-toreca": 4269074,
        clove: 9691372,
        gacha24: 2934170,
        iris: 9203334
    },
    {
        date: new Date('2023/10/19 7:00'),
        "ex-toreca": 7359746,
        dopa: 6493774,
        "japan-toreca": 1487205,
        clove: 8918677,
        gacha24: 6259920,
        iris: 590751
    },
    {
        date: new Date('2023/10/19 8:00'),
        "ex-toreca": 1488834,
        dopa: 4302617,
        "japan-toreca": 7903676,
        clove: 8872021,
        gacha24: 6623129,
        iris: 4257011
    },
    {
        date: new Date('2023/10/19 9:00'),
        "ex-toreca": 1120026,
        dopa: 6741446,
        "japan-toreca": 7553244,
        clove: 8028693,
        gacha24: 1782286,
        iris: 2886821
    },
    {
        date: new Date('2023/10/19 10:00'),
        "ex-toreca": 378747,
        dopa: 1813247,
        "japan-toreca": 8533173,
        clove: 975623,
        gacha24: 2597642,
        iris: 9926794
    },
    {
        date: new Date('2023/10/19 11:00'),
        "ex-toreca": 4146745,
        dopa: 5940427,
        "japan-toreca": 7991325,
        clove: 1295188,
        gacha24: 8362906,
        iris: 555170
    },
    {
        date: new Date('2023/10/19 12:00'),
        "ex-toreca": 9564124,
        dopa: 1081844,
        "japan-toreca": 1207929,
        clove: 4936014,
        gacha24: 1410157,
        iris: 4741493
    },
    {
        date: new Date('2023/10/19 13:00'),
        "ex-toreca": 7615067,
        dopa: 6790300,
        "japan-toreca": 617926,
        clove: 5576347,
        gacha24: 6739468,
        iris: 850492
    },
    {
        date: new Date('2023/10/19 14:00'),
        "ex-toreca": 9900935,
        dopa: 6704634,
        "japan-toreca": 7560222,
        clove: 6970295,
        gacha24: 3826896,
        iris: 396421
    },
    {
        date: new Date('2023/10/19 15:00'),
        "ex-toreca": 3893502,
        dopa: 2372345,
        "japan-toreca": 1940167,
        clove: 5496767,
        gacha24: 8159940,
        iris: 120297
    },
    {
        date: new Date('2023/10/19 16:00'),
        "ex-toreca": 3881841,
        dopa: 5804504,
        "japan-toreca": 8341211,
        clove: 4326007,
        gacha24: 6076273,
        iris: 7283117
    },
    {
        date: new Date('2023/10/19 17:00'),
        "ex-toreca": 2554401,
        dopa: 7770112,
        "japan-toreca": 7775089,
        clove: 5643268,
        gacha24: 8305706,
        iris: 134089
    },
    {
        date: new Date('2023/10/19 18:00'),
        "ex-toreca": 7771817,
        dopa: 4314951,
        "japan-toreca": 4904660,
        clove: 9208785,
        gacha24: 8852450,
        iris: 7527144
    },
    {
        date: new Date('2023/10/19 19:00'),
        "ex-toreca": 4560322,
        dopa: 749610,
        "japan-toreca": 360330,
        clove: 7350939,
        gacha24: 565358,
        iris: 7705669
    },
    {
        date: new Date('2023/10/19 20:00'),
        "ex-toreca": 4442140,
        dopa: 341473,
        "japan-toreca": 7185917,
        clove: 4771255,
        gacha24: 530301,
        iris: 2034846
    },
    {
        date: new Date('2023/10/19 21:00'),
        "ex-toreca": 2428919,
        dopa: 1860015,
        "japan-toreca": 2206606,
        clove: 8712406,
        gacha24: 9242241,
        iris: 5836601
    },
    {
        date: new Date('2023/10/19 22:00'),
        "ex-toreca": 1466669,
        dopa: 7140752,
        "japan-toreca": 2030550,
        clove: 1222523,
        gacha24: 8072571,
        iris: 9756259
    },
    {
        date: new Date('2023/10/19 23:00'),
        "ex-toreca": 4027287,
        dopa: 2803685,
        "japan-toreca": 2380729,
        clove: 7175621,
        gacha24: 4047509,
        iris: 3505591
    },
    {
        date: new Date('2023/10/20 0:00'),
        "ex-toreca": 2709432,
        dopa: 7998275,
        "japan-toreca": 2145873,
        clove: 2478637,
        gacha24: 726709,
        iris: 3971889
    },
    {
        date: new Date('2023/10/20 1:00'),
        "ex-toreca": 1089590,
        dopa: 3425378,
        "japan-toreca": 6978379,
        clove: 5201307,
        gacha24: 3326034,
        iris: 6286441
    },
    {
        date: new Date('2023/10/20 2:00'),
        "ex-toreca": 1445997,
        dopa: 4336304,
        "japan-toreca": 3295563,
        clove: 8750607,
        gacha24: 4903569,
        iris: 4925276
    },
    {
        date: new Date('2023/10/20 3:00'),
        "ex-toreca": 2359304,
        dopa: 6126328,
        "japan-toreca": 2302800,
        clove: 4109646,
        gacha24: 8077333,
        iris: 7863926
    },
    {
        date: new Date('2023/10/20 4:00'),
        "ex-toreca": 4955139,
        dopa: 1570229,
        "japan-toreca": 2777388,
        clove: 7337124,
        gacha24: 7514979,
        iris: 6289728
    },
    {
        date: new Date('2023/10/20 5:00'),
        "ex-toreca": 2107123,
        dopa: 1561790,
        "japan-toreca": 1558624,
        clove: 3002009,
        gacha24: 3021939,
        iris: 7097456
    },
    {
        date: new Date('2023/10/20 6:00'),
        "ex-toreca": 6524391,
        dopa: 9518357,
        "japan-toreca": 4257597,
        clove: 282792,
        gacha24: 7533371,
        iris: 8810174
    },
    {
        date: new Date('2023/10/20 7:00'),
        "ex-toreca": 3866666,
        dopa: 4949648,
        "japan-toreca": 4635320,
        clove: 2787216,
        gacha24: 1790529,
        iris: 6422731
    },
    {
        date: new Date('2023/10/20 8:00'),
        "ex-toreca": 7880686,
        dopa: 7425855,
        "japan-toreca": 9108475,
        clove: 8411770,
        gacha24: 6514692,
        iris: 696849
    },
    {
        date: new Date('2023/10/20 9:00'),
        "ex-toreca": 1716058,
        dopa: 5205945,
        "japan-toreca": 8544560,
        clove: 5117157,
        gacha24: 855611,
        iris: 7793470
    },
    {
        date: new Date('2023/10/20 10:00'),
        "ex-toreca": 9029701,
        dopa: 1683844,
        "japan-toreca": 6639055,
        clove: 6096106,
        gacha24: 7108570,
        iris: 1289797
    },
    {
        date: new Date('2023/10/20 11:00'),
        "ex-toreca": 6693025,
        dopa: 2071598,
        "japan-toreca": 4660616,
        clove: 7918382,
        gacha24: 8569597,
        iris: 3618803
    },
    {
        date: new Date('2023/10/20 12:00'),
        "ex-toreca": 2862091,
        dopa: 4305186,
        "japan-toreca": 9927430,
        clove: 2603894,
        gacha24: 1510921,
        iris: 7657157
    },
    {
        date: new Date('2023/10/20 13:00'),
        "ex-toreca": 8060302,
        dopa: 3544311,
        "japan-toreca": 5403423,
        clove: 6382374,
        gacha24: 1048997,
        iris: 2248479
    },
    {
        date: new Date('2023/10/20 14:00'),
        "ex-toreca": 8972236,
        dopa: 1293254,
        "japan-toreca": 8018005,
        clove: 2835442,
        gacha24: 7538750,
        iris: 3062506
    },
    {
        date: new Date('2023/10/20 15:00'),
        "ex-toreca": 9894412,
        dopa: 3579587,
        "japan-toreca": 8114820,
        clove: 5807114,
        gacha24: 9593756,
        iris: 1730546
    },
    {
        date: new Date('2023/10/20 16:00'),
        "ex-toreca": 5080152,
        dopa: 41063,
        "japan-toreca": 7040127,
        clove: 6686606,
        gacha24: 5184606,
        iris: 8416219
    },
    {
        date: new Date('2023/10/20 17:00'),
        "ex-toreca": 6907779,
        dopa: 9164846,
        "japan-toreca": 7265644,
        clove: 2312201,
        gacha24: 5552747,
        iris: 7800662
    },
    {
        date: new Date('2023/10/20 18:00'),
        "ex-toreca": 8652495,
        dopa: 7063598,
        "japan-toreca": 7354747,
        clove: 7979065,
        gacha24: 7674523,
        iris: 2012808
    },
    {
        date: new Date('2023/10/20 19:00'),
        "ex-toreca": 3239357,
        dopa: 3508161,
        "japan-toreca": 6627909,
        clove: 5051782,
        gacha24: 3804949,
        iris: 5514976
    },
    {
        date: new Date('2023/10/20 20:00'),
        "ex-toreca": 4894186,
        dopa: 3813960,
        "japan-toreca": 4312640,
        clove: 7714512,
        gacha24: 9686395,
        iris: 5826019
    },
    {
        date: new Date('2023/10/20 21:00'),
        "ex-toreca": 1391903,
        dopa: 3069157,
        "japan-toreca": 7935647,
        clove: 6013045,
        gacha24: 4609599,
        iris: 7748940
    },
    {
        date: new Date('2023/10/20 22:00'),
        "ex-toreca": 9129320,
        dopa: 8109810,
        "japan-toreca": 7903829,
        clove: 7941643,
        gacha24: 2708432,
        iris: 908019
    },
    {
        date: new Date('2023/10/20 23:00'),
        "ex-toreca": 2154444,
        dopa: 4683740,
        "japan-toreca": 7595496,
        clove: 8711568,
        gacha24: 9899348,
        iris: 2143738
    },
    {
        date: new Date('2023/10/21 0:00'),
        "ex-toreca": 4056005,
        dopa: 4070073,
        "japan-toreca": 450006,
        clove: 5336353,
        gacha24: 6297218,
        iris: 2802028
    },
    {
        date: new Date('2023/10/21 1:00'),
        "ex-toreca": 5932719,
        dopa: 5989859,
        "japan-toreca": 1868269,
        clove: 4296902,
        gacha24: 7570599,
        iris: 2357887
    },
    {
        date: new Date('2023/10/21 2:00'),
        "ex-toreca": 3221479,
        dopa: 3393058,
        "japan-toreca": 2015466,
        clove: 262876,
        gacha24: 5274528,
        iris: 168997
    },
    {
        date: new Date('2023/10/21 3:00'),
        "ex-toreca": 3413211,
        dopa: 8052825,
        "japan-toreca": 9176390,
        clove: 9773787,
        gacha24: 9226085,
        iris: 987707
    },
    {
        date: new Date('2023/10/21 4:00'),
        "ex-toreca": 6592002,
        dopa: 6296350,
        "japan-toreca": 4983603,
        clove: 9507775,
        gacha24: 1652574,
        iris: 3449171
    },
    {
        date: new Date('2023/10/21 5:00'),
        "ex-toreca": 3881199,
        dopa: 5848726,
        "japan-toreca": 5463915,
        clove: 1901812,
        gacha24: 2892148,
        iris: 7191599
    },
    {
        date: new Date('2023/10/21 6:00'),
        "ex-toreca": 6412263,
        dopa: 2847290,
        "japan-toreca": 4190040,
        clove: 7258905,
        gacha24: 1758869,
        iris: 421957
    },
    {
        date: new Date('2023/10/21 7:00'),
        "ex-toreca": 6138047,
        dopa: 9280456,
        "japan-toreca": 9237829,
        clove: 6318356,
        gacha24: 9387236,
        iris: 7938451
    },
    {
        date: new Date('2023/10/21 8:00'),
        "ex-toreca": 3096337,
        dopa: 2627735,
        "japan-toreca": 3294127,
        clove: 7427478,
        gacha24: 928160,
        iris: 3343977
    },
    {
        date: new Date('2023/10/21 9:00'),
        "ex-toreca": 4013297,
        dopa: 3738411,
        "japan-toreca": 8557054,
        clove: 7019268,
        gacha24: 9763305,
        iris: 1982800
    },
    {
        date: new Date('2023/10/21 10:00'),
        "ex-toreca": 7934917,
        dopa: 7479413,
        "japan-toreca": 1307276,
        clove: 127243,
        gacha24: 2516000,
        iris: 9838672
    },
    {
        date: new Date('2023/10/21 11:00'),
        "ex-toreca": 1567765,
        dopa: 4413994,
        "japan-toreca": 231937,
        clove: 8677014,
        gacha24: 7021303,
        iris: 3924634
    },
    {
        date: new Date('2023/10/21 12:00'),
        "ex-toreca": 2445494,
        dopa: 2612978,
        "japan-toreca": 2110738,
        clove: 8657043,
        gacha24: 642826,
        iris: 7151303
    },
    {
        date: new Date('2023/10/21 13:00'),
        "ex-toreca": 8781998,
        dopa: 752819,
        "japan-toreca": 6393051,
        clove: 2845586,
        gacha24: 8117110,
        iris: 292412
    },
    {
        date: new Date('2023/10/21 14:00'),
        "ex-toreca": 2515813,
        dopa: 5502541,
        "japan-toreca": 5784223,
        clove: 7323735,
        gacha24: 3458851,
        iris: 7803598
    },
    {
        date: new Date('2023/10/21 15:00'),
        "ex-toreca": 6371884,
        dopa: 7106152,
        "japan-toreca": 9934580,
        clove: 8207786,
        gacha24: 4929263,
        iris: 716616
    },
    {
        date: new Date('2023/10/21 16:00'),
        "ex-toreca": 2364483,
        dopa: 2544472,
        "japan-toreca": 8078847,
        clove: 4517673,
        gacha24: 8268380,
        iris: 5335989
    },
    {
        date: new Date('2023/10/21 17:00'),
        "ex-toreca": 5348599,
        dopa: 2245425,
        "japan-toreca": 842896,
        clove: 2973653,
        gacha24: 978361,
        iris: 4145435
    },
    {
        date: new Date('2023/10/21 18:00'),
        "ex-toreca": 7963545,
        dopa: 3450907,
        "japan-toreca": 3880797,
        clove: 3483818,
        gacha24: 2813382,
        iris: 1116747
    },
    {
        date: new Date('2023/10/21 19:00'),
        "ex-toreca": 5934105,
        dopa: 7681248,
        "japan-toreca": 5217605,
        clove: 674858,
        gacha24: 1854560,
        iris: 1943014
    },
    {
        date: new Date('2023/10/21 20:00'),
        "ex-toreca": 5755361,
        dopa: 1541206,
        "japan-toreca": 7333759,
        clove: 5883976,
        gacha24: 1118967,
        iris: 8161810
    },
    {
        date: new Date('2023/10/21 21:00'),
        "ex-toreca": 4950131,
        dopa: 4133878,
        "japan-toreca": 3994798,
        clove: 860303,
        gacha24: 1939297,
        iris: 4462284
    },
    {
        date: new Date('2023/10/21 22:00'),
        "ex-toreca": 9259653,
        dopa: 2604767,
        "japan-toreca": 4535374,
        clove: 2580500,
        gacha24: 2703701,
        iris: 27016
    },
    {
        date: new Date('2023/10/21 23:00'),
        "ex-toreca": 3338007,
        dopa: 6350075,
        "japan-toreca": 8482239,
        clove: 1931154,
        gacha24: 8896395,
        iris: 4023832
    },
    {
        date: new Date('2023/10/22 0:00'),
        "ex-toreca": 4421734,
        dopa: 1077273,
        "japan-toreca": 5805025,
        clove: 1541870,
        gacha24: 5837584,
        iris: 201970
    },
    {
        date: new Date('2023/10/22 1:00'),
        "ex-toreca": 8430557,
        dopa: 4724255,
        "japan-toreca": 7895540,
        clove: 9559422,
        gacha24: 4298258,
        iris: 126833
    },
    {
        date: new Date('2023/10/22 2:00'),
        "ex-toreca": 6670652,
        dopa: 5844386,
        "japan-toreca": 1165165,
        clove: 2120839,
        gacha24: 8612991,
        iris: 4799283
    },
    {
        date: new Date('2023/10/22 3:00'),
        "ex-toreca": 1733046,
        dopa: 1378010,
        "japan-toreca": 2047721,
        clove: 5533715,
        gacha24: 7778856,
        iris: 8561478
    },
    {
        date: new Date('2023/10/22 4:00'),
        "ex-toreca": 255296,
        dopa: 4763357,
        "japan-toreca": 5371058,
        clove: 3132732,
        gacha24: 1599450,
        iris: 7196955
    },
    {
        date: new Date('2023/10/22 5:00'),
        "ex-toreca": 841360,
        dopa: 3330922,
        "japan-toreca": 4231310,
        clove: 6891973,
        gacha24: 9027068,
        iris: 1349445
    },
    {
        date: new Date('2023/10/22 6:00'),
        "ex-toreca": 1343524,
        dopa: 3581860,
        "japan-toreca": 1888055,
        clove: 1714433,
        gacha24: 994669,
        iris: 2585737
    },
    {
        date: new Date('2023/10/22 7:00'),
        "ex-toreca": 1252127,
        dopa: 3351422,
        "japan-toreca": 607390,
        clove: 8740854,
        gacha24: 4504317,
        iris: 3440828
    },
    {
        date: new Date('2023/10/22 8:00'),
        "ex-toreca": 6260475,
        dopa: 6940064,
        "japan-toreca": 831181,
        clove: 7549786,
        gacha24: 3859503,
        iris: 752044
    },
    {
        date: new Date('2023/10/22 9:00'),
        "ex-toreca": 406998,
        dopa: 7137152,
        "japan-toreca": 195184,
        clove: 6520676,
        gacha24: 9260680,
        iris: 3716602
    },
    {
        date: new Date('2023/10/22 10:00'),
        "ex-toreca": 1196431,
        dopa: 5629401,
        "japan-toreca": 4168706,
        clove: 6625955,
        gacha24: 6691371,
        iris: 2684986
    },
    {
        date: new Date('2023/10/22 11:00'),
        "ex-toreca": 3179458,
        dopa: 6271527,
        "japan-toreca": 6833300,
        clove: 4243058,
        gacha24: 8366633,
        iris: 633360
    },
    {
        date: new Date('2023/10/22 12:00'),
        "ex-toreca": 4388755,
        dopa: 8825291,
        "japan-toreca": 440367,
        clove: 2181190,
        gacha24: 3397352,
        iris: 4098747
    },
    {
        date: new Date('2023/10/22 13:00'),
        "ex-toreca": 7584998,
        dopa: 7588917,
        "japan-toreca": 3265500,
        clove: 2822888,
        gacha24: 1321848,
        iris: 8394405
    },
    {
        date: new Date('2023/10/22 14:00'),
        "ex-toreca": 1212759,
        dopa: 8443407,
        "japan-toreca": 4760372,
        clove: 3874266,
        gacha24: 5988816,
        iris: 3261230
    },
    {
        date: new Date('2023/10/22 15:00'),
        "ex-toreca": 6360620,
        dopa: 8300214,
        "japan-toreca": 3013098,
        clove: 8258913,
        gacha24: 3003670,
        iris: 3506158
    },
    {
        date: new Date('2023/10/22 16:00'),
        "ex-toreca": 9296377,
        dopa: 7089532,
        "japan-toreca": 3320745,
        clove: 7695909,
        gacha24: 7373057,
        iris: 6733280
    },
    {
        date: new Date('2023/10/22 17:00'),
        "ex-toreca": 3588345,
        dopa: 8475304,
        "japan-toreca": 9534753,
        clove: 7385540,
        gacha24: 5849192,
        iris: 6818914
    },
    {
        date: new Date('2023/10/22 18:00'),
        "ex-toreca": 6690881,
        dopa: 4354845,
        "japan-toreca": 5123176,
        clove: 5243381,
        gacha24: 9578589,
        iris: 6365552
    },
    {
        date: new Date('2023/10/22 19:00'),
        "ex-toreca": 3173660,
        dopa: 1626494,
        "japan-toreca": 2313842,
        clove: 9552112,
        gacha24: 8384346,
        iris: 9147425
    },
    {
        date: new Date('2023/10/22 20:00'),
        "ex-toreca": 2151894,
        dopa: 3560872,
        "japan-toreca": 2814720,
        clove: 839545,
        gacha24: 7941124,
        iris: 9412456
    },
    {
        date: new Date('2023/10/22 21:00'),
        "ex-toreca": 1290874,
        dopa: 1173080,
        "japan-toreca": 2281865,
        clove: 9071300,
        gacha24: 154900,
        iris: 7211798
    },
    {
        date: new Date('2023/10/22 22:00'),
        "ex-toreca": 7672900,
        dopa: 7970295,
        "japan-toreca": 2451164,
        clove: 891852,
        gacha24: 6239410,
        iris: 6126867
    },
    {
        date: new Date('2023/10/22 23:00'),
        "ex-toreca": 2985199,
        dopa: 5029331,
        "japan-toreca": 6562220,
        clove: 6289755,
        gacha24: 3073408,
        iris: 8743077
    },
    {
        date: new Date('2023/10/23 0:00'),
        "ex-toreca": 6410658,
        dopa: 9180388,
        "japan-toreca": 6639884,
        clove: 7928458,
        gacha24: 5090632,
        iris: 9441908
    },
    {
        date: new Date('2023/10/23 1:00'),
        "ex-toreca": 81864,
        dopa: 154450,
        "japan-toreca": 9218343,
        clove: 718595,
        gacha24: 6190714,
        iris: 6322625
    },
    {
        date: new Date('2023/10/23 2:00'),
        "ex-toreca": 3753119,
        dopa: 6936049,
        "japan-toreca": 8048429,
        clove: 6273013,
        gacha24: 995156,
        iris: 9258219
    },
    {
        date: new Date('2023/10/23 3:00'),
        "ex-toreca": 7963298,
        dopa: 3236685,
        "japan-toreca": 7074248,
        clove: 1823945,
        gacha24: 8287264,
        iris: 3574523
    },
    {
        date: new Date('2023/10/23 4:00'),
        "ex-toreca": 462164,
        dopa: 9347657,
        "japan-toreca": 4736824,
        clove: 9044542,
        gacha24: 5590538,
        iris: 5533714
    },
    {
        date: new Date('2023/10/23 5:00'),
        "ex-toreca": 482474,
        dopa: 8767961,
        "japan-toreca": 9404092,
        clove: 4367363,
        gacha24: 2646349,
        iris: 1303737
    },
    {
        date: new Date('2023/10/23 6:00'),
        "ex-toreca": 8321442,
        dopa: 3930483,
        "japan-toreca": 4784873,
        clove: 5762429,
        gacha24: 218604,
        iris: 4830155
    },
    {
        date: new Date('2023/10/23 7:00'),
        "ex-toreca": 101165,
        dopa: 8546445,
        "japan-toreca": 6129471,
        clove: 7023746,
        gacha24: 6462342,
        iris: 7715464
    },
    {
        date: new Date('2023/10/23 8:00'),
        "ex-toreca": 7142081,
        dopa: 2742423,
        "japan-toreca": 343017,
        clove: 1167820,
        gacha24: 8908899,
        iris: 4567080
    },
    {
        date: new Date('2023/10/23 9:00'),
        "ex-toreca": 5527073,
        dopa: 5046712,
        "japan-toreca": 73375,
        clove: 6931720,
        gacha24: 4081623,
        iris: 4285942
    },
    {
        date: new Date('2023/10/23 10:00'),
        "ex-toreca": 2945347,
        dopa: 394647,
        "japan-toreca": 9604852,
        clove: 3134043,
        gacha24: 8797331,
        iris: 1180820
    },
    {
        date: new Date('2023/10/23 11:00'),
        "ex-toreca": 7907130,
        dopa: 8137755,
        "japan-toreca": 7746683,
        clove: 9462143,
        gacha24: 9327565,
        iris: 7011175
    },
    {
        date: new Date('2023/10/23 12:00'),
        "ex-toreca": 852901,
        dopa: 3591458,
        "japan-toreca": 5781932,
        clove: 3142732,
        gacha24: 9549939,
        iris: 7810837
    },
    {
        date: new Date('2023/10/23 13:00'),
        "ex-toreca": 9652323,
        dopa: 1476464,
        "japan-toreca": 7396020,
        clove: 4988083,
        gacha24: 8314463,
        iris: 8352539
    },
    {
        date: new Date('2023/10/23 14:00'),
        "ex-toreca": 865232,
        dopa: 7909814,
        "japan-toreca": 6057449,
        clove: 4892028,
        gacha24: 9022807,
        iris: 4181251
    },
    {
        date: new Date('2023/10/23 15:00'),
        "ex-toreca": 2180490,
        dopa: 9896219,
        "japan-toreca": 5469389,
        clove: 3077128,
        gacha24: 3184274,
        iris: 2139524
    },
    {
        date: new Date('2023/10/23 16:00'),
        "ex-toreca": 7543243,
        dopa: 7350144,
        "japan-toreca": 9333925,
        clove: 2394839,
        gacha24: 8023489,
        iris: 9518924
    },
    {
        date: new Date('2023/10/23 17:00'),
        "ex-toreca": 6227014,
        dopa: 4496900,
        "japan-toreca": 3385447,
        clove: 9212521,
        gacha24: 9718332,
        iris: 6906970
    },
    {
        date: new Date('2023/10/23 18:00'),
        "ex-toreca": 779262,
        dopa: 7883227,
        "japan-toreca": 7322676,
        clove: 114683,
        gacha24: 7117272,
        iris: 1986282
    },
    {
        date: new Date('2023/10/23 19:00'),
        "ex-toreca": 4741244,
        dopa: 7007143,
        "japan-toreca": 4503312,
        clove: 8273368,
        gacha24: 9499447,
        iris: 9920025
    },
    {
        date: new Date('2023/10/23 20:00'),
        "ex-toreca": 6594172,
        dopa: 1741543,
        "japan-toreca": 149504,
        clove: 8659067,
        gacha24: 3688352,
        iris: 8328956
    },
    {
        date: new Date('2023/10/23 21:00'),
        "ex-toreca": 8208248,
        dopa: 6728859,
        "japan-toreca": 173289,
        clove: 46970,
        gacha24: 7545703,
        iris: 1899115
    },
    {
        date: new Date('2023/10/23 22:00'),
        "ex-toreca": 7195014,
        dopa: 6543836,
        "japan-toreca": 4342768,
        clove: 7055668,
        gacha24: 2187191,
        iris: 401679
    },
    {
        date: new Date('2023/10/23 23:00'),
        "ex-toreca": 6480694,
        dopa: 1923382,
        "japan-toreca": 2295663,
        clove: 6712678,
        gacha24: 8534716,
        iris: 9451716
    },
    {
        date: new Date('2023/10/24 0:00'),
        "ex-toreca": 7275375,
        dopa: 1407611,
        "japan-toreca": 6130745,
        clove: 1950820,
        gacha24: 3205035,
        iris: 2774916
    },
    {
        date: new Date('2023/10/24 1:00'),
        "ex-toreca": 4674849,
        dopa: 8985554,
        "japan-toreca": 3915416,
        clove: 7343278,
        gacha24: 3933708,
        iris: 3908074
    },
    {
        date: new Date('2023/10/24 2:00'),
        "ex-toreca": 3275689,
        dopa: 6256832,
        "japan-toreca": 3031003,
        clove: 4944532,
        gacha24: 5495934,
        iris: 6824927
    },
    {
        date: new Date('2023/10/24 3:00'),
        "ex-toreca": 2216079,
        dopa: 4922502,
        "japan-toreca": 6830690,
        clove: 7954012,
        gacha24: 5581688,
        iris: 9714744
    },
    {
        date: new Date('2023/10/24 4:00'),
        "ex-toreca": 7793062,
        dopa: 8099859,
        "japan-toreca": 6578035,
        clove: 3804974,
        gacha24: 4815344,
        iris: 8560442
    },
    {
        date: new Date('2023/10/24 5:00'),
        "ex-toreca": 7523431,
        dopa: 768469,
        "japan-toreca": 8701638,
        clove: 5461286,
        gacha24: 1655655,
        iris: 7645026
    },
    {
        date: new Date('2023/10/24 6:00'),
        "ex-toreca": 5054046,
        dopa: 1872281,
        "japan-toreca": 355166,
        clove: 3817200,
        gacha24: 6877097,
        iris: 8757690
    },
    {
        date: new Date('2023/10/24 7:00'),
        "ex-toreca": 1808058,
        dopa: 3060756,
        "japan-toreca": 3791136,
        clove: 2195150,
        gacha24: 8192195,
        iris: 6356753
    },
    {
        date: new Date('2023/10/24 8:00'),
        "ex-toreca": 7509560,
        dopa: 1216298,
        "japan-toreca": 4460657,
        clove: 7654460,
        gacha24: 7424624,
        iris: 3380512
    },
    {
        date: new Date('2023/10/24 9:00'),
        "ex-toreca": 4878866,
        dopa: 1890666,
        "japan-toreca": 7357608,
        clove: 5129096,
        gacha24: 9564707,
        iris: 4793900
    },
    {
        date: new Date('2023/10/24 10:00'),
        "ex-toreca": 9638930,
        dopa: 9170562,
        "japan-toreca": 3524989,
        clove: 5834278,
        gacha24: 3178451,
        iris: 2298264
    },
    {
        date: new Date('2023/10/24 11:00'),
        "ex-toreca": 9948484,
        dopa: 998350,
        "japan-toreca": 4201183,
        clove: 8167026,
        gacha24: 3319550,
        iris: 2913076
    },
    {
        date: new Date('2023/10/24 12:00'),
        "ex-toreca": 1405360,
        dopa: 8803927,
        "japan-toreca": 6947127,
        clove: 6603666,
        gacha24: 877636,
        iris: 796587
    },
    {
        date: new Date('2023/10/24 13:00'),
        "ex-toreca": 9632155,
        dopa: 8288916,
        "japan-toreca": 5431392,
        clove: 9402300,
        gacha24: 9342901,
        iris: 4014419
    },
    {
        date: new Date('2023/10/24 14:00'),
        "ex-toreca": 7060168,
        dopa: 7651887,
        "japan-toreca": 9529403,
        clove: 2667723,
        gacha24: 2568555,
        iris: 3160844
    },
    {
        date: new Date('2023/10/24 15:00'),
        "ex-toreca": 5149777,
        dopa: 8182082,
        "japan-toreca": 7730939,
        clove: 1035068,
        gacha24: 5518192,
        iris: 5643435
    },
    {
        date: new Date('2023/10/24 16:00'),
        "ex-toreca": 1456779,
        dopa: 6395808,
        "japan-toreca": 5286448,
        clove: 6041238,
        gacha24: 8363959,
        iris: 7868459
    },
    {
        date: new Date('2023/10/24 17:00'),
        "ex-toreca": 2042560,
        dopa: 2844497,
        "japan-toreca": 5086888,
        clove: 2743575,
        gacha24: 6586045,
        iris: 9216716
    },
    {
        date: new Date('2023/10/24 18:00'),
        "ex-toreca": 7711614,
        dopa: 1296511,
        "japan-toreca": 7316264,
        clove: 6299425,
        gacha24: 2529105,
        iris: 3521621
    },
    {
        date: new Date('2023/10/24 19:00'),
        "ex-toreca": 7043022,
        dopa: 4508135,
        "japan-toreca": 3826243,
        clove: 6336860,
        gacha24: 8260415,
        iris: 6479456
    },
    {
        date: new Date('2023/10/24 20:00'),
        "ex-toreca": 8649819,
        dopa: 6901914,
        "japan-toreca": 6223011,
        clove: 9644545,
        gacha24: 2572748,
        iris: 6945181
    },
    {
        date: new Date('2023/10/24 21:00'),
        "ex-toreca": 8149012,
        dopa: 5169883,
        "japan-toreca": 2423437,
        clove: 9095763,
        gacha24: 7111872,
        iris: 9582132
    },
    {
        date: new Date('2023/10/24 22:00'),
        "ex-toreca": 6935901,
        dopa: 5873028,
        "japan-toreca": 6991926,
        clove: 2914537,
        gacha24: 8108932,
        iris: 2687863
    },
    {
        date: new Date('2023/10/24 23:00'),
        "ex-toreca": 3073844,
        dopa: 7988410,
        "japan-toreca": 7110901,
        clove: 2876124,
        gacha24: 4786044,
        iris: 9983697
    },
    {
        date: new Date('2023/10/25 0:00'),
        "ex-toreca": 8711519,
        dopa: 1179845,
        "japan-toreca": 4132767,
        clove: 2228176,
        gacha24: 9912773,
        iris: 7648913
    },
    {
        date: new Date('2023/10/25 1:00'),
        "ex-toreca": 3688000,
        dopa: 5854268,
        "japan-toreca": 5271627,
        clove: 7032558,
        gacha24: 7155117,
        iris: 6939751
    },
    {
        date: new Date('2023/10/25 2:00'),
        "ex-toreca": 1315813,
        dopa: 2457980,
        "japan-toreca": 8222612,
        clove: 839164,
        gacha24: 8221665,
        iris: 3057651
    },
    {
        date: new Date('2023/10/25 3:00'),
        "ex-toreca": 7177464,
        dopa: 2239079,
        "japan-toreca": 1603358,
        clove: 6195635,
        gacha24: 3837819,
        iris: 2900453
    },
    {
        date: new Date('2023/10/25 4:00'),
        "ex-toreca": 41319,
        dopa: 5206295,
        "japan-toreca": 983244,
        clove: 7580743,
        gacha24: 7052555,
        iris: 674234
    },
    {
        date: new Date('2023/10/25 5:00'),
        "ex-toreca": 751476,
        dopa: 2631051,
        "japan-toreca": 3407907,
        clove: 7818201,
        gacha24: 1237557,
        iris: 1806066
    },
    {
        date: new Date('2023/10/25 6:00'),
        "ex-toreca": 491416,
        dopa: 5418995,
        "japan-toreca": 3281385,
        clove: 1126129,
        gacha24: 6204585,
        iris: 2562131
    },
    {
        date: new Date('2023/10/25 7:00'),
        "ex-toreca": 1508417,
        dopa: 1064626,
        "japan-toreca": 2929145,
        clove: 8741645,
        gacha24: 2902833,
        iris: 2759352
    },
    {
        date: new Date('2023/10/25 8:00'),
        "ex-toreca": 4834422,
        dopa: 6710385,
        "japan-toreca": 8794615,
        clove: 6469355,
        gacha24: 430617,
        iris: 6205962
    },
    {
        date: new Date('2023/10/25 9:00'),
        "ex-toreca": 2622739,
        dopa: 6689050,
        "japan-toreca": 9973413,
        clove: 8978542,
        gacha24: 4472704,
        iris: 6753248
    },
    {
        date: new Date('2023/10/25 10:00'),
        "ex-toreca": 273974,
        dopa: 6867940,
        "japan-toreca": 448682,
        clove: 2261496,
        gacha24: 5826089,
        iris: 1974894
    },
    {
        date: new Date('2023/10/25 11:00'),
        "ex-toreca": 3651453,
        dopa: 3632485,
        "japan-toreca": 4313172,
        clove: 17491,
        gacha24: 5539048,
        iris: 4427888
    },
    {
        date: new Date('2023/10/25 12:00'),
        "ex-toreca": 4727242,
        dopa: 7920671,
        "japan-toreca": 39310,
        clove: 4787178,
        gacha24: 4795896,
        iris: 5255121
    },
    {
        date: new Date('2023/10/25 13:00'),
        "ex-toreca": 1973630,
        dopa: 212992,
        "japan-toreca": 3759158,
        clove: 9878544,
        gacha24: 5370553,
        iris: 5360749
    },
    {
        date: new Date('2023/10/25 14:00'),
        "ex-toreca": 4699385,
        dopa: 1881722,
        "japan-toreca": 1867105,
        clove: 3187278,
        gacha24: 1115266,
        iris: 5910296
    },
    {
        date: new Date('2023/10/25 15:00'),
        "ex-toreca": 9156660,
        dopa: 4495238,
        "japan-toreca": 1269039,
        clove: 6001490,
        gacha24: 6401736,
        iris: 5870243
    },
    {
        date: new Date('2023/10/25 16:00'),
        "ex-toreca": 3208745,
        dopa: 9889790,
        "japan-toreca": 4565852,
        clove: 9334876,
        gacha24: 2655857,
        iris: 9430010
    },
    {
        date: new Date('2023/10/25 17:00'),
        "ex-toreca": 8103696,
        dopa: 5091654,
        "japan-toreca": 7776511,
        clove: 3338191,
        gacha24: 4286143,
        iris: 1912398
    },
    {
        date: new Date('2023/10/25 18:00'),
        "ex-toreca": 9147352,
        dopa: 8649439,
        "japan-toreca": 3522026,
        clove: 2275822,
        gacha24: 9930619,
        iris: 350477
    },
    {
        date: new Date('2023/10/25 19:00'),
        "ex-toreca": 133380,
        dopa: 9204164,
        "japan-toreca": 7274740,
        clove: 3013511,
        gacha24: 7930201,
        iris: 9840533
    },
    {
        date: new Date('2023/10/25 20:00'),
        "ex-toreca": 384052,
        dopa: 1943949,
        "japan-toreca": 7873557,
        clove: 6835742,
        gacha24: 3605970,
        iris: 7849158
    },
    {
        date: new Date('2023/10/25 21:00'),
        "ex-toreca": 7756862,
        dopa: 7944817,
        "japan-toreca": 292253,
        clove: 4323276,
        gacha24: 1848371,
        iris: 3547719
    },
    {
        date: new Date('2023/10/25 22:00'),
        "ex-toreca": 7877659,
        dopa: 4796533,
        "japan-toreca": 26084,
        clove: 6434138,
        gacha24: 1565797,
        iris: 739433
    },
    {
        date: new Date('2023/10/25 23:00'),
        "ex-toreca": 1527049,
        dopa: 529498,
        "japan-toreca": 4145282,
        clove: 5915664,
        gacha24: 3655972,
        iris: 5458336
    },
    {
        date: new Date('2023/10/26 0:00'),
        "ex-toreca": 6356026,
        dopa: 7959817,
        "japan-toreca": 843846,
        clove: 1492196,
        gacha24: 9792304,
        iris: 4692532
    },
    {
        date: new Date('2023/10/26 1:00'),
        "ex-toreca": 2356046,
        dopa: 6864536,
        "japan-toreca": 5900699,
        clove: 9818938,
        gacha24: 3471422,
        iris: 2687745
    },
    {
        date: new Date('2023/10/26 2:00'),
        "ex-toreca": 6744064,
        dopa: 5596188,
        "japan-toreca": 4431343,
        clove: 2919092,
        gacha24: 7164168,
        iris: 7918217
    },
    {
        date: new Date('2023/10/26 3:00'),
        "ex-toreca": 5180695,
        dopa: 5763441,
        "japan-toreca": 3801859,
        clove: 8979960,
        gacha24: 5238829,
        iris: 8658200
    },
    {
        date: new Date('2023/10/26 4:00'),
        "ex-toreca": 2704050,
        dopa: 2981817,
        "japan-toreca": 1604370,
        clove: 4594382,
        gacha24: 7290886,
        iris: 1844754
    },
    {
        date: new Date('2023/10/26 5:00'),
        "ex-toreca": 6663082,
        dopa: 1759999,
        "japan-toreca": 4069687,
        clove: 4026395,
        gacha24: 4191630,
        iris: 2614613
    },
    {
        date: new Date('2023/10/26 6:00'),
        "ex-toreca": 3360944,
        dopa: 9726216,
        "japan-toreca": 6954868,
        clove: 9567036,
        gacha24: 4736979,
        iris: 1712506
    },
    {
        date: new Date('2023/10/26 7:00'),
        "ex-toreca": 7252949,
        dopa: 5776840,
        "japan-toreca": 4874844,
        clove: 8129971,
        gacha24: 4894995,
        iris: 6515260
    },
    {
        date: new Date('2023/10/26 8:00'),
        "ex-toreca": 5816782,
        dopa: 7755385,
        "japan-toreca": 9201772,
        clove: 887602,
        gacha24: 8294206,
        iris: 5154328
    },
    {
        date: new Date('2023/10/26 9:00'),
        "ex-toreca": 5966933,
        dopa: 5782640,
        "japan-toreca": 9582408,
        clove: 9149288,
        gacha24: 9337177,
        iris: 6802223
    },
    {
        date: new Date('2023/10/26 10:00'),
        "ex-toreca": 1304968,
        dopa: 3838549,
        "japan-toreca": 5487283,
        clove: 812041,
        gacha24: 1096889,
        iris: 5657063
    },
    {
        date: new Date('2023/10/26 11:00'),
        "ex-toreca": 8884448,
        dopa: 2055740,
        "japan-toreca": 8911402,
        clove: 6828622,
        gacha24: 3441002,
        iris: 8800586
    },
    {
        date: new Date('2023/10/26 12:00'),
        "ex-toreca": 6294106,
        dopa: 9427216,
        "japan-toreca": 2713784,
        clove: 4714852,
        gacha24: 2555127,
        iris: 3140741
    },
    {
        date: new Date('2023/10/26 13:00'),
        "ex-toreca": 6576091,
        dopa: 6627654,
        "japan-toreca": 8911455,
        clove: 9192453,
        gacha24: 7583612,
        iris: 5494514
    },
    {
        date: new Date('2023/10/26 14:00'),
        "ex-toreca": 2210479,
        dopa: 4624217,
        "japan-toreca": 9104941,
        clove: 2922412,
        gacha24: 1727418,
        iris: 1523428
    },
    {
        date: new Date('2023/10/26 15:00'),
        "ex-toreca": 7048361,
        dopa: 837425,
        "japan-toreca": 2272559,
        clove: 3402460,
        gacha24: 3263996,
        iris: 4866121
    },
    {
        date: new Date('2023/10/26 16:00'),
        "ex-toreca": 142274,
        dopa: 9914350,
        "japan-toreca": 1992697,
        clove: 3847234,
        gacha24: 6042886,
        iris: 7934028
    },
    {
        date: new Date('2023/10/26 17:00'),
        "ex-toreca": 7796182,
        dopa: 626348,
        "japan-toreca": 5379726,
        clove: 1340477,
        gacha24: 4618309,
        iris: 2678736
    },
    {
        date: new Date('2023/10/26 18:00'),
        "ex-toreca": 9573282,
        dopa: 1071949,
        "japan-toreca": 7820977,
        clove: 6198206,
        gacha24: 4560760,
        iris: 2811589
    },
    {
        date: new Date('2023/10/26 19:00'),
        "ex-toreca": 4363964,
        dopa: 4005002,
        "japan-toreca": 5801522,
        clove: 6117832,
        gacha24: 422314,
        iris: 5936481
    },
    {
        date: new Date('2023/10/26 20:00'),
        "ex-toreca": 3836029,
        dopa: 6276170,
        "japan-toreca": 4812780,
        clove: 2689743,
        gacha24: 1908467,
        iris: 4150665
    },
    {
        date: new Date('2023/10/26 21:00'),
        "ex-toreca": 5466180,
        dopa: 4489211,
        "japan-toreca": 7941583,
        clove: 1982356,
        gacha24: 3712289,
        iris: 2896942
    },
    {
        date: new Date('2023/10/26 22:00'),
        "ex-toreca": 9833188,
        dopa: 5115710,
        "japan-toreca": 158978,
        clove: 1550484,
        gacha24: 3468195,
        iris: 2397130
    },
    {
        date: new Date('2023/10/26 23:00'),
        "ex-toreca": 463287,
        dopa: 2771545,
        "japan-toreca": 8235956,
        clove: 5072083,
        gacha24: 5658461,
        iris: 2921278
    },
    {
        date: new Date('2023/10/27 0:00'),
        "ex-toreca": 2123550,
        dopa: 8901185,
        "japan-toreca": 6616349,
        clove: 872147,
        gacha24: 5971866,
        iris: 7070966
    },
    {
        date: new Date('2023/10/27 1:00'),
        "ex-toreca": 3554471,
        dopa: 8374664,
        "japan-toreca": 4896258,
        clove: 3609543,
        gacha24: 7757436,
        iris: 3999357
    },
    {
        date: new Date('2023/10/27 2:00'),
        "ex-toreca": 1668676,
        dopa: 8063647,
        "japan-toreca": 9169184,
        clove: 8115550,
        gacha24: 6401116,
        iris: 4111533
    },
    {
        date: new Date('2023/10/27 3:00'),
        "ex-toreca": 9995056,
        dopa: 16414,
        "japan-toreca": 3596116,
        clove: 9091111,
        gacha24: 2647444,
        iris: 8090325
    },
    {
        date: new Date('2023/10/27 4:00'),
        "ex-toreca": 3121253,
        dopa: 9703525,
        "japan-toreca": 8708808,
        clove: 5923554,
        gacha24: 1751827,
        iris: 1619020
    },
    {
        date: new Date('2023/10/27 5:00'),
        "ex-toreca": 5216840,
        dopa: 1065862,
        "japan-toreca": 516604,
        clove: 5792590,
        gacha24: 2178960,
        iris: 6048213
    },
    {
        date: new Date('2023/10/27 6:00'),
        "ex-toreca": 7715613,
        dopa: 2986619,
        "japan-toreca": 8365281,
        clove: 9189702,
        gacha24: 5797575,
        iris: 7567721
    },
    {
        date: new Date('2023/10/27 7:00'),
        "ex-toreca": 3544432,
        dopa: 8679640,
        "japan-toreca": 7578379,
        clove: 4442830,
        gacha24: 5077308,
        iris: 2960593
    },
    {
        date: new Date('2023/10/27 8:00'),
        "ex-toreca": 4769009,
        dopa: 7452743,
        "japan-toreca": 1133683,
        clove: 4086869,
        gacha24: 9829011,
        iris: 5633454
    },
    {
        date: new Date('2023/10/27 9:00'),
        "ex-toreca": 1007001,
        dopa: 8821927,
        "japan-toreca": 9038635,
        clove: 535325,
        gacha24: 6462279,
        iris: 3168542
    },
    {
        date: new Date('2023/10/27 10:00'),
        "ex-toreca": 2817781,
        dopa: 7444997,
        "japan-toreca": 7192805,
        clove: 9924223,
        gacha24: 8451543,
        iris: 1991247
    },
    {
        date: new Date('2023/10/27 11:00'),
        "ex-toreca": 8266056,
        dopa: 1979837,
        "japan-toreca": 8482807,
        clove: 9115547,
        gacha24: 4372696,
        iris: 8239011
    },
    {
        date: new Date('2023/10/27 12:00'),
        "ex-toreca": 8865947,
        dopa: 2027641,
        "japan-toreca": 9125995,
        clove: 9872399,
        gacha24: 7919801,
        iris: 5378782
    },
    {
        date: new Date('2023/10/27 13:00'),
        "ex-toreca": 6882080,
        dopa: 692242,
        "japan-toreca": 5798471,
        clove: 2800845,
        gacha24: 8450383,
        iris: 4152628
    },
    {
        date: new Date('2023/10/27 14:00'),
        "ex-toreca": 565448,
        dopa: 9497738,
        "japan-toreca": 1618968,
        clove: 6192078,
        gacha24: 1053249,
        iris: 525477
    },
    {
        date: new Date('2023/10/27 15:00'),
        "ex-toreca": 6069159,
        dopa: 3260494,
        "japan-toreca": 4509098,
        clove: 3587701,
        gacha24: 4642319,
        iris: 4142288
    },
    {
        date: new Date('2023/10/27 16:00'),
        "ex-toreca": 9195984,
        dopa: 1225709,
        "japan-toreca": 1816931,
        clove: 8019785,
        gacha24: 9804478,
        iris: 9284510
    },
    {
        date: new Date('2023/10/27 17:00'),
        "ex-toreca": 9879296,
        dopa: 8222731,
        "japan-toreca": 9969970,
        clove: 6320512,
        gacha24: 7013428,
        iris: 7056211
    },
    {
        date: new Date('2023/10/27 18:00'),
        "ex-toreca": 1109071,
        dopa: 7513741,
        "japan-toreca": 274900,
        clove: 1021790,
        gacha24: 1324884,
        iris: 9197086
    },
    {
        date: new Date('2023/10/27 19:00'),
        "ex-toreca": 3309676,
        dopa: 5258161,
        "japan-toreca": 8031630,
        clove: 1237388,
        gacha24: 758335,
        iris: 4020003
    },
    {
        date: new Date('2023/10/27 20:00'),
        "ex-toreca": 1788633,
        dopa: 4749261,
        "japan-toreca": 4251363,
        clove: 3609253,
        gacha24: 2448357,
        iris: 6022626
    },
    {
        date: new Date('2023/10/27 21:00'),
        "ex-toreca": 6023319,
        dopa: 9627306,
        "japan-toreca": 8451335,
        clove: 1070774,
        gacha24: 1637579,
        iris: 6550358
    },
    {
        date: new Date('2023/10/27 22:00'),
        "ex-toreca": 4436890,
        dopa: 1570862,
        "japan-toreca": 7058816,
        clove: 2189464,
        gacha24: 2103130,
        iris: 8637377
    },
    {
        date: new Date('2023/10/27 23:00'),
        "ex-toreca": 7724602,
        dopa: 1786101,
        "japan-toreca": 1322163,
        clove: 1140743,
        gacha24: 298807,
        iris: 4622426
    },
    {
        date: new Date('2023/10/28 0:00'),
        "ex-toreca": 3763552,
        dopa: 5458326,
        "japan-toreca": 3824219,
        clove: 1808770,
        gacha24: 2800242,
        iris: 4247326
    },
    {
        date: new Date('2023/10/28 1:00'),
        "ex-toreca": 7841307,
        dopa: 5195515,
        "japan-toreca": 8935187,
        clove: 9047130,
        gacha24: 1054879,
        iris: 9601416
    },
    {
        date: new Date('2023/10/28 2:00'),
        "ex-toreca": 8636576,
        dopa: 4990010,
        "japan-toreca": 6792452,
        clove: 4634269,
        gacha24: 5928550,
        iris: 1129867
    },
    {
        date: new Date('2023/10/28 3:00'),
        "ex-toreca": 6052459,
        dopa: 7916439,
        "japan-toreca": 1895727,
        clove: 3242983,
        gacha24: 2058471,
        iris: 3274714
    },
    {
        date: new Date('2023/10/28 4:00'),
        "ex-toreca": 2227535,
        dopa: 5165308,
        "japan-toreca": 9147715,
        clove: 4259707,
        gacha24: 2535547,
        iris: 4044333
    },
    {
        date: new Date('2023/10/28 5:00'),
        "ex-toreca": 3384706,
        dopa: 2757308,
        "japan-toreca": 4917370,
        clove: 7655117,
        gacha24: 416324,
        iris: 3319985
    },
    {
        date: new Date('2023/10/28 6:00'),
        "ex-toreca": 4439533,
        dopa: 841332,
        "japan-toreca": 7192178,
        clove: 8992246,
        gacha24: 2418203,
        iris: 6612086
    },
    {
        date: new Date('2023/10/28 7:00'),
        "ex-toreca": 5004298,
        dopa: 3871989,
        "japan-toreca": 8903259,
        clove: 9797161,
        gacha24: 3964638,
        iris: 9500604
    },
    {
        date: new Date('2023/10/28 8:00'),
        "ex-toreca": 4327175,
        dopa: 8485590,
        "japan-toreca": 2038595,
        clove: 5539467,
        gacha24: 1185226,
        iris: 6538648
    },
    {
        date: new Date('2023/10/28 9:00'),
        "ex-toreca": 626257,
        dopa: 6152848,
        "japan-toreca": 4245909,
        clove: 9567717,
        gacha24: 2206094,
        iris: 8413033
    },
    {
        date: new Date('2023/10/28 10:00'),
        "ex-toreca": 1754726,
        dopa: 314771,
        "japan-toreca": 2119624,
        clove: 3485108,
        gacha24: 7628743,
        iris: 1740405
    },
    {
        date: new Date('2023/10/28 11:00'),
        "ex-toreca": 3812237,
        dopa: 9676157,
        "japan-toreca": 253654,
        clove: 3335752,
        gacha24: 1256945,
        iris: 1871753
    },
    {
        date: new Date('2023/10/28 12:00'),
        "ex-toreca": 380311,
        dopa: 3623924,
        "japan-toreca": 1661116,
        clove: 5291302,
        gacha24: 8189368,
        iris: 2861647
    },
    {
        date: new Date('2023/10/28 13:00'),
        "ex-toreca": 1051003,
        dopa: 8988184,
        "japan-toreca": 1337064,
        clove: 1339006,
        gacha24: 3467343,
        iris: 3037267
    },
    {
        date: new Date('2023/10/28 14:00'),
        "ex-toreca": 2392912,
        dopa: 8049646,
        "japan-toreca": 6732470,
        clove: 4467514,
        gacha24: 8447891,
        iris: 2059718
    },
    {
        date: new Date('2023/10/28 15:00'),
        "ex-toreca": 4612496,
        dopa: 6138686,
        "japan-toreca": 2958443,
        clove: 2473601,
        gacha24: 9376055,
        iris: 6475963
    },
    {
        date: new Date('2023/10/28 16:00'),
        "ex-toreca": 8007467,
        dopa: 172655,
        "japan-toreca": 5339853,
        clove: 974883,
        gacha24: 3795684,
        iris: 1541483
    },
    {
        date: new Date('2023/10/28 17:00'),
        "ex-toreca": 7381796,
        dopa: 3704790,
        "japan-toreca": 1717011,
        clove: 4016914,
        gacha24: 4483242,
        iris: 4124584
    },
    {
        date: new Date('2023/10/28 18:00'),
        "ex-toreca": 5268325,
        dopa: 3323740,
        "japan-toreca": 9220313,
        clove: 3160233,
        gacha24: 7668996,
        iris: 2983721
    },
    {
        date: new Date('2023/10/28 19:00'),
        "ex-toreca": 1939261,
        dopa: 2694675,
        "japan-toreca": 2240532,
        clove: 4969206,
        gacha24: 5710265,
        iris: 8715610
    },
    {
        date: new Date('2023/10/28 20:00'),
        "ex-toreca": 1431056,
        dopa: 9680295,
        "japan-toreca": 2578524,
        clove: 18394,
        gacha24: 2469966,
        iris: 7101035
    },
    {
        date: new Date('2023/10/28 21:00'),
        "ex-toreca": 8167622,
        dopa: 8401780,
        "japan-toreca": 4805492,
        clove: 9214895,
        gacha24: 1701576,
        iris: 7119083
    },
    {
        date: new Date('2023/10/28 22:00'),
        "ex-toreca": 8828233,
        dopa: 1529467,
        "japan-toreca": 7800567,
        clove: 1568292,
        gacha24: 2266717,
        iris: 9223809
    },
    {
        date: new Date('2023/10/28 23:00'),
        "ex-toreca": 2415582,
        dopa: 3668760,
        "japan-toreca": 8089478,
        clove: 9870168,
        gacha24: 5828576,
        iris: 2773559
    },
    {
        date: new Date('2023/10/29 0:00'),
        "ex-toreca": 7777398,
        dopa: 5197832,
        "japan-toreca": 4092585,
        clove: 5291238,
        gacha24: 1998003,
        iris: 6546853
    },
    {
        date: new Date('2023/10/29 1:00'),
        "ex-toreca": 103751,
        dopa: 7244278,
        "japan-toreca": 8255660,
        clove: 673112,
        gacha24: 8925956,
        iris: 4517503
    },
    {
        date: new Date('2023/10/29 2:00'),
        "ex-toreca": 5911458,
        dopa: 7296454,
        "japan-toreca": 2692820,
        clove: 3929502,
        gacha24: 9774861,
        iris: 1921963
    },
    {
        date: new Date('2023/10/29 3:00'),
        "ex-toreca": 5105771,
        dopa: 1693526,
        "japan-toreca": 4548857,
        clove: 6451172,
        gacha24: 2594271,
        iris: 7552330
    },
    {
        date: new Date('2023/10/29 4:00'),
        "ex-toreca": 9665477,
        dopa: 8369875,
        "japan-toreca": 867524,
        clove: 9999065,
        gacha24: 2640022,
        iris: 5531832
    },
    {
        date: new Date('2023/10/29 5:00'),
        "ex-toreca": 8025843,
        dopa: 8332514,
        "japan-toreca": 4384416,
        clove: 3754529,
        gacha24: 4759479,
        iris: 8545100
    },
    {
        date: new Date('2023/10/29 6:00'),
        "ex-toreca": 6251026,
        dopa: 3982521,
        "japan-toreca": 5546595,
        clove: 4030944,
        gacha24: 847320,
        iris: 284748
    },
    {
        date: new Date('2023/10/29 7:00'),
        "ex-toreca": 9249389,
        dopa: 7459981,
        "japan-toreca": 5626948,
        clove: 740522,
        gacha24: 2491225,
        iris: 8460677
    },
    {
        date: new Date('2023/10/29 8:00'),
        "ex-toreca": 5712681,
        dopa: 3271349,
        "japan-toreca": 4166907,
        clove: 8029007,
        gacha24: 9424574,
        iris: 5320377
    },
    {
        date: new Date('2023/10/29 9:00'),
        "ex-toreca": 5301074,
        dopa: 8777863,
        "japan-toreca": 8876253,
        clove: 5835687,
        gacha24: 1441034,
        iris: 573342
    },
    {
        date: new Date('2023/10/29 10:00'),
        "ex-toreca": 6603227,
        dopa: 3022654,
        "japan-toreca": 4495387,
        clove: 5464778,
        gacha24: 6027802,
        iris: 1702563
    },
    {
        date: new Date('2023/10/29 11:00'),
        "ex-toreca": 5010532,
        dopa: 8567487,
        "japan-toreca": 2796885,
        clove: 5950019,
        gacha24: 1614675,
        iris: 959860
    },
    {
        date: new Date('2023/10/29 12:00'),
        "ex-toreca": 1331116,
        dopa: 4008621,
        "japan-toreca": 1365087,
        clove: 5354359,
        gacha24: 5832636,
        iris: 621887
    },
    {
        date: new Date('2023/10/29 13:00'),
        "ex-toreca": 4783455,
        dopa: 2634041,
        "japan-toreca": 6184505,
        clove: 6719313,
        gacha24: 9520698,
        iris: 3346799
    },
    {
        date: new Date('2023/10/29 14:00'),
        "ex-toreca": 870782,
        dopa: 5843605,
        "japan-toreca": 7912197,
        clove: 2124975,
        gacha24: 8411749,
        iris: 3304206
    },
    {
        date: new Date('2023/10/29 15:00'),
        "ex-toreca": 9070756,
        dopa: 1558602,
        "japan-toreca": 3686506,
        clove: 3058127,
        gacha24: 1510988,
        iris: 7157681
    },
    {
        date: new Date('2023/10/29 16:00'),
        "ex-toreca": 1460972,
        dopa: 3804136,
        "japan-toreca": 545071,
        clove: 1321794,
        gacha24: 2478966,
        iris: 9043735
    },
    {
        date: new Date('2023/10/29 17:00'),
        "ex-toreca": 6130357,
        dopa: 8330947,
        "japan-toreca": 5365617,
        clove: 6517837,
        gacha24: 6905230,
        iris: 6663411
    },
    {
        date: new Date('2023/10/29 18:00'),
        "ex-toreca": 7491741,
        dopa: 3216141,
        "japan-toreca": 3075187,
        clove: 4213597,
        gacha24: 9019438,
        iris: 2917218
    },
    {
        date: new Date('2023/10/29 19:00'),
        "ex-toreca": 917626,
        dopa: 6261994,
        "japan-toreca": 4656153,
        clove: 9812867,
        gacha24: 9428962,
        iris: 157582
    },
    {
        date: new Date('2023/10/29 20:00'),
        "ex-toreca": 9306835,
        dopa: 6550912,
        "japan-toreca": 5929188,
        clove: 4307144,
        gacha24: 7041122,
        iris: 4141785
    },
    {
        date: new Date('2023/10/29 21:00'),
        "ex-toreca": 379718,
        dopa: 2245427,
        "japan-toreca": 8850386,
        clove: 259012,
        gacha24: 1213928,
        iris: 6633049
    },
    {
        date: new Date('2023/10/29 22:00'),
        "ex-toreca": 128677,
        dopa: 5717447,
        "japan-toreca": 9065755,
        clove: 466563,
        gacha24: 6147874,
        iris: 7564487
    },
    {
        date: new Date('2023/10/29 23:00'),
        "ex-toreca": 1771015,
        dopa: 4258999,
        "japan-toreca": 4287593,
        clove: 104533,
        gacha24: 6839621,
        iris: 6651452
    },
    {
        date: new Date('2023/10/30 0:00'),
        "ex-toreca": 3926622,
        dopa: 5768619,
        "japan-toreca": 2748844,
        clove: 7001206,
        gacha24: 3407229,
        iris: 7187339
    },
    {
        date: new Date('2023/10/30 1:00'),
        "ex-toreca": 7118151,
        dopa: 6829740,
        "japan-toreca": 6705067,
        clove: 1744308,
        gacha24: 8979030,
        iris: 4645325
    },
    {
        date: new Date('2023/10/30 2:00'),
        "ex-toreca": 2988291,
        dopa: 1247810,
        "japan-toreca": 8002759,
        clove: 2381291,
        gacha24: 2595112,
        iris: 2403299
    },
    {
        date: new Date('2023/10/30 3:00'),
        "ex-toreca": 3599281,
        dopa: 9360331,
        "japan-toreca": 3332462,
        clove: 7169553,
        gacha24: 5887834,
        iris: 6482185
    },
    {
        date: new Date('2023/10/30 4:00'),
        "ex-toreca": 1318325,
        dopa: 1418093,
        "japan-toreca": 7211413,
        clove: 4720448,
        gacha24: 5446913,
        iris: 1004410
    },
    {
        date: new Date('2023/10/30 5:00'),
        "ex-toreca": 4078091,
        dopa: 4610068,
        "japan-toreca": 9800606,
        clove: 8395362,
        gacha24: 8737715,
        iris: 5871019
    },
    {
        date: new Date('2023/10/30 6:00'),
        "ex-toreca": 6559519,
        dopa: 9119417,
        "japan-toreca": 705159,
        clove: 8083948,
        gacha24: 6139325,
        iris: 6164567
    },
    {
        date: new Date('2023/10/30 7:00'),
        "ex-toreca": 710805,
        dopa: 4432282,
        "japan-toreca": 3648965,
        clove: 8756294,
        gacha24: 1065742,
        iris: 3743699
    },
    {
        date: new Date('2023/10/30 8:00'),
        "ex-toreca": 9025262,
        dopa: 1897386,
        "japan-toreca": 5328797,
        clove: 1557810,
        gacha24: 4166762,
        iris: 7080270
    },
    {
        date: new Date('2023/10/30 9:00'),
        "ex-toreca": 8639193,
        dopa: 7714548,
        "japan-toreca": 3009469,
        clove: 208266,
        gacha24: 7403696,
        iris: 7909408
    },
    {
        date: new Date('2023/10/30 10:00'),
        "ex-toreca": 4134403,
        dopa: 9083077,
        "japan-toreca": 9630025,
        clove: 2525321,
        gacha24: 1321700,
        iris: 6128967
    },
    {
        date: new Date('2023/10/30 11:00'),
        "ex-toreca": 1155123,
        dopa: 5199398,
        "japan-toreca": 2342299,
        clove: 4761097,
        gacha24: 7527244,
        iris: 6678449
    },
    {
        date: new Date('2023/10/30 12:00'),
        "ex-toreca": 9249300,
        dopa: 8323270,
        "japan-toreca": 4243884,
        clove: 6189547,
        gacha24: 104238,
        iris: 9675204
    },
    {
        date: new Date('2023/10/30 13:00'),
        "ex-toreca": 9948317,
        dopa: 7147050,
        "japan-toreca": 2599409,
        clove: 5052167,
        gacha24: 4980467,
        iris: 7626919
    },
    {
        date: new Date('2023/10/30 14:00'),
        "ex-toreca": 27165,
        dopa: 638734,
        "japan-toreca": 573427,
        clove: 5066851,
        gacha24: 7665125,
        iris: 5423612
    },
    {
        date: new Date('2023/10/30 15:00'),
        "ex-toreca": 39301,
        dopa: 9020749,
        "japan-toreca": 6228352,
        clove: 8459714,
        gacha24: 7146224,
        iris: 7215895
    },
    {
        date: new Date('2023/10/30 16:00'),
        "ex-toreca": 4933254,
        dopa: 4573438,
        "japan-toreca": 7025169,
        clove: 8747198,
        gacha24: 1866995,
        iris: 2885830
    },
    {
        date: new Date('2023/10/30 17:00'),
        "ex-toreca": 6344662,
        dopa: 3640393,
        "japan-toreca": 5276194,
        clove: 5623928,
        gacha24: 1668891,
        iris: 4031298
    },
    {
        date: new Date('2023/10/30 18:00'),
        "ex-toreca": 9973243,
        dopa: 3703535,
        "japan-toreca": 9960236,
        clove: 1508583,
        gacha24: 8952591,
        iris: 8311919
    },
    {
        date: new Date('2023/10/30 19:00'),
        "ex-toreca": 9746819,
        dopa: 5129282,
        "japan-toreca": 9393793,
        clove: 4850446,
        gacha24: 7295406,
        iris: 1311370
    },
    {
        date: new Date('2023/10/30 20:00'),
        "ex-toreca": 6782454,
        dopa: 3426758,
        "japan-toreca": 74977,
        clove: 7521689,
        gacha24: 3925976,
        iris: 8947293
    },
    {
        date: new Date('2023/10/30 21:00'),
        "ex-toreca": 231517,
        dopa: 4585308,
        "japan-toreca": 3826980,
        clove: 3812123,
        gacha24: 6371585,
        iris: 4157897
    },
    {
        date: new Date('2023/10/30 22:00'),
        "ex-toreca": 508735,
        dopa: 8469489,
        "japan-toreca": 5564619,
        clove: 9309957,
        gacha24: 663366,
        iris: 3484792
    },
    {
        date: new Date('2023/10/30 23:00'),
        "ex-toreca": 97391,
        dopa: 3200644,
        "japan-toreca": 6994936,
        clove: 5652668,
        gacha24: 2172582,
        iris: 1896387
    },
    {
        date: new Date('2023/10/31 0:00'),
        "ex-toreca": 39107,
        dopa: 2790164,
        "japan-toreca": 1499745,
        clove: 991907,
        gacha24: 3021802,
        iris: 9180631
    },
    {
        date: new Date('2023/10/31 1:00'),
        "ex-toreca": 6121672,
        dopa: 8240078,
        "japan-toreca": 380617,
        clove: 770986,
        gacha24: 5953440,
        iris: 155499
    },
    {
        date: new Date('2023/10/31 2:00'),
        "ex-toreca": 5582060,
        dopa: 9284884,
        "japan-toreca": 3375294,
        clove: 8052057,
        gacha24: 8279146,
        iris: 734221
    },
    {
        date: new Date('2023/10/31 3:00'),
        "ex-toreca": 2455111,
        dopa: 567980,
        "japan-toreca": 7153979,
        clove: 7042605,
        gacha24: 6650498,
        iris: 5227259
    },
    {
        date: new Date('2023/10/31 4:00'),
        "ex-toreca": 3331227,
        dopa: 3618844,
        "japan-toreca": 4195115,
        clove: 413054,
        gacha24: 288477,
        iris: 8775368
    },
    {
        date: new Date('2023/10/31 5:00'),
        "ex-toreca": 7220694,
        dopa: 1895812,
        "japan-toreca": 9390409,
        clove: 9949885,
        gacha24: 730656,
        iris: 6094846
    },
    {
        date: new Date('2023/10/31 6:00'),
        "ex-toreca": 5350532,
        dopa: 2899239,
        "japan-toreca": 7748277,
        clove: 7484265,
        gacha24: 6282039,
        iris: 5319551
    },
    {
        date: new Date('2023/10/31 7:00'),
        "ex-toreca": 5704273,
        dopa: 3015886,
        "japan-toreca": 8965902,
        clove: 5419565,
        gacha24: 3481024,
        iris: 6624641
    },
    {
        date: new Date('2023/10/31 8:00'),
        "ex-toreca": 2969464,
        dopa: 3777633,
        "japan-toreca": 7105493,
        clove: 8586932,
        gacha24: 6044188,
        iris: 6719750
    },
    {
        date: new Date('2023/10/31 9:00'),
        "ex-toreca": 1405322,
        dopa: 7196124,
        "japan-toreca": 1094031,
        clove: 7019552,
        gacha24: 5698534,
        iris: 3219866
    },
    {
        date: new Date('2023/10/31 10:00'),
        "ex-toreca": 6778768,
        dopa: 6875585,
        "japan-toreca": 1117589,
        clove: 1922007,
        gacha24: 5554080,
        iris: 3360883
    },
    {
        date: new Date('2023/10/31 11:00'),
        "ex-toreca": 5822416,
        dopa: 2776185,
        "japan-toreca": 3536720,
        clove: 5285688,
        gacha24: 5486109,
        iris: 2605936
    },
    {
        date: new Date('2023/10/31 12:00'),
        "ex-toreca": 2225538,
        dopa: 4016393,
        "japan-toreca": 6279738,
        clove: 8166977,
        gacha24: 2072736,
        iris: 9192031
    },
    {
        date: new Date('2023/10/31 13:00'),
        "ex-toreca": 7968527,
        dopa: 9901947,
        "japan-toreca": 1916983,
        clove: 6509952,
        gacha24: 7500358,
        iris: 9220531
    },
    {
        date: new Date('2023/10/31 14:00'),
        "ex-toreca": 1630887,
        dopa: 470461,
        "japan-toreca": 5606718,
        clove: 7110254,
        gacha24: 7984984,
        iris: 5924970
    },
    {
        date: new Date('2023/10/31 15:00'),
        "ex-toreca": 7291531,
        dopa: 112579,
        "japan-toreca": 5572193,
        clove: 2685408,
        gacha24: 8414915,
        iris: 9819276
    },
    {
        date: new Date('2023/10/31 16:00'),
        "ex-toreca": 3274405,
        dopa: 9959790,
        "japan-toreca": 229552,
        clove: 778451,
        gacha24: 1337435,
        iris: 5303347
    },
    {
        date: new Date('2023/10/31 17:00'),
        "ex-toreca": 6846217,
        dopa: 3841630,
        "japan-toreca": 4420377,
        clove: 6224893,
        gacha24: 2522706,
        iris: 591226
    },
    {
        date: new Date('2023/10/31 18:00'),
        "ex-toreca": 4775842,
        dopa: 3625256,
        "japan-toreca": 8324026,
        clove: 3408892,
        gacha24: 6326661,
        iris: 2273422
    },
    {
        date: new Date('2023/10/31 19:00'),
        "ex-toreca": 3835902,
        dopa: 9699241,
        "japan-toreca": 251215,
        clove: 4998770,
        gacha24: 276617,
        iris: 6486863
    },
    {
        date: new Date('2023/10/31 20:00'),
        "ex-toreca": 6475214,
        dopa: 8248512,
        "japan-toreca": 2759548,
        clove: 8222455,
        gacha24: 846429,
        iris: 9333496
    },
    {
        date: new Date('2023/10/31 21:00'),
        "ex-toreca": 6055432,
        dopa: 3756334,
        "japan-toreca": 6886647,
        clove: 9505815,
        gacha24: 7570829,
        iris: 1390914
    },
    {
        date: new Date('2023/10/31 22:00'),
        "ex-toreca": 2906009,
        dopa: 6945687,
        "japan-toreca": 5935413,
        clove: 3805625,
        gacha24: 2811577,
        iris: 4358872
    },
    {
        date: new Date('2023/10/31 23:00'),
        "ex-toreca": 1032716,
        dopa: 9223256,
        "japan-toreca": 509224,
        clove: 5610371,
        gacha24: 7443454,
        iris: 7906285
    },
    // {
    //     date: new Date('2023/11/01 0:00'),
    //     "ex-toreca": 9585045,
    //     dopa: 5168987,
    //     "japan-toreca": 1478330,
    //     clove: 7321345,
    //     gacha24: 2887967,
    //     iris: 7787963
    // },
    // {
    //     date: new Date('2023/11/01 1:00'),
    //     "ex-toreca": 5731089,
    //     dopa: 9994915,
    //     "japan-toreca": 4140590,
    //     clove: 9788558,
    //     gacha24: 3208021,
    //     iris: 4506452
    // },
    // {
    //     date: new Date('2023/11/01 2:00'),
    //     "ex-toreca": 4925806,
    //     dopa: 3042628,
    //     "japan-toreca": 5339999,
    //     clove: 2050642,
    //     gacha24: 5448482,
    //     iris: 8179049
    // },
    // {
    //     date: new Date('2023/11/01 3:00'),
    //     "ex-toreca": 2013614,
    //     dopa: 6714440,
    //     "japan-toreca": 3149637,
    //     clove: 7907403,
    //     gacha24: 2226170,
    //     iris: 6587510
    // },
    // {
    //     date: new Date('2023/11/01 4:00'),
    //     "ex-toreca": 1457354,
    //     dopa: 4184881,
    //     "japan-toreca": 7448644,
    //     clove: 241695,
    //     gacha24: 3609889,
    //     iris: 5674159
    // },
    // {
    //     date: new Date('2023/11/01 5:00'),
    //     "ex-toreca": 1280266,
    //     dopa: 9161882,
    //     "japan-toreca": 1986308,
    //     clove: 7999078,
    //     gacha24: 5863026,
    //     iris: 2000604
    // },
    // {
    //     date: new Date('2023/11/01 6:00'),
    //     "ex-toreca": 1966362,
    //     dopa: 5667666,
    //     "japan-toreca": 8359081,
    //     clove: 7865296,
    //     gacha24: 2587533,
    //     iris: 8938017
    // },
    // {
    //     date: new Date('2023/11/01 7:00'),
    //     "ex-toreca": 386730,
    //     dopa: 9763598,
    //     "japan-toreca": 4898643,
    //     clove: 7986684,
    //     gacha24: 7405101,
    //     iris: 4328802
    // },
    // {
    //     date: new Date('2023/11/01 8:00'),
    //     "ex-toreca": 7277486,
    //     dopa: 2111188,
    //     "japan-toreca": 9512037,
    //     clove: 4250020,
    //     gacha24: 2851340,
    //     iris: 2764539
    // },
    // {
    //     date: new Date('2023/11/01 9:00'),
    //     "ex-toreca": 2185015,
    //     dopa: 6745039,
    //     "japan-toreca": 2456009,
    //     clove: 4060927,
    //     gacha24: 2521835,
    //     iris: 4962755
    // },
    // {
    //     date: new Date('2023/11/01 10:00'),
    //     "ex-toreca": 2783821,
    //     dopa: 8200526,
    //     "japan-toreca": 9804554,
    //     clove: 1123023,
    //     gacha24: 3384844,
    //     iris: 1379099
    // },
    // {
    //     date: new Date('2023/11/01 11:00'),
    //     "ex-toreca": 9590612,
    //     dopa: 1388726,
    //     "japan-toreca": 6683256,
    //     clove: 5874616,
    //     gacha24: 5824325,
    //     iris: 6670724
    // },
    // {
    //     date: new Date('2023/11/01 12:00'),
    //     "ex-toreca": 9302463,
    //     dopa: 5751774,
    //     "japan-toreca": 6731166,
    //     clove: 939615,
    //     gacha24: 6563822,
    //     iris: 1084114
    // },
    // {
    //     date: new Date('2023/11/01 13:00'),
    //     "ex-toreca": 2874242,
    //     dopa: 7893678,
    //     "japan-toreca": 4411884,
    //     clove: 7087872,
    //     gacha24: 4832513,
    //     iris: 5150008
    // },
    // {
    //     date: new Date('2023/11/01 14:00'),
    //     "ex-toreca": 9918977,
    //     dopa: 72341,
    //     "japan-toreca": 8643629,
    //     clove: 8343259,
    //     gacha24: 5693979,
    //     iris: 9812866
    // },
    // {
    //     date: new Date('2023/11/01 15:00'),
    //     "ex-toreca": 4110196,
    //     dopa: 7768645,
    //     "japan-toreca": 224775,
    //     clove: 9693309,
    //     gacha24: 3822114,
    //     iris: 6823447
    // },
    // {
    //     date: new Date('2023/11/01 16:00'),
    //     "ex-toreca": 7985231,
    //     dopa: 9422959,
    //     "japan-toreca": 3872866,
    //     clove: 7086247,
    //     gacha24: 5010465,
    //     iris: 6002093
    // },
    // {
    //     date: new Date('2023/11/01 17:00'),
    //     "ex-toreca": 8267501,
    //     dopa: 981986,
    //     "japan-toreca": 6349078,
    //     clove: 967980,
    //     gacha24: 4449826,
    //     iris: 3777468
    // },
    // {
    //     date: new Date('2023/11/01 18:00'),
    //     "ex-toreca": 4052218,
    //     dopa: 6515593,
    //     "japan-toreca": 1468941,
    //     clove: 5111912,
    //     gacha24: 1480244,
    //     iris: 1327121
    // },
    // {
    //     date: new Date('2023/11/01 19:00'),
    //     "ex-toreca": 9477214,
    //     dopa: 709262,
    //     "japan-toreca": 7785211,
    //     clove: 760688,
    //     gacha24: 1818864,
    //     iris: 3451437
    // },
    // {
    //     date: new Date('2023/11/01 20:00'),
    //     "ex-toreca": 854755,
    //     dopa: 1254990,
    //     "japan-toreca": 4184056,
    //     clove: 4801210,
    //     gacha24: 6428715,
    //     iris: 5418931
    // },
    // {
    //     date: new Date('2023/11/01 21:00'),
    //     "ex-toreca": 5935818,
    //     dopa: 9276754,
    //     "japan-toreca": 9886699,
    //     clove: 9604493,
    //     gacha24: 3485907,
    //     iris: 4064530
    // },
    // {
    //     date: new Date('2023/11/01 22:00'),
    //     "ex-toreca": 3707730,
    //     dopa: 1587827,
    //     "japan-toreca": 818829,
    //     clove: 2092394,
    //     gacha24: 5503450,
    //     iris: 1444979
    // },
    // {
    //     date: new Date('2023/11/01 23:00'),
    //     "ex-toreca": 8464731,
    //     dopa: 6909000,
    //     "japan-toreca": 1692839,
    //     clove: 9757934,
    //     gacha24: 8922251,
    //     iris: 3409515
    // },
    // {
    //     date: new Date('2023/11/02 0:00'),
    //     "ex-toreca": 8680234,
    //     dopa: 5979622,
    //     "japan-toreca": 7953270,
    //     clove: 1854992,
    //     gacha24: 4798157,
    //     iris: 4078836
    // },
    // {
    //     date: new Date('2023/11/02 1:00'),
    //     "ex-toreca": 5027548,
    //     dopa: 6954868,
    //     "japan-toreca": 3153049,
    //     clove: 9438376,
    //     gacha24: 8864734,
    //     iris: 1357292
    // },
    // {
    //     date: new Date('2023/11/02 2:00'),
    //     "ex-toreca": 9587603,
    //     dopa: 9371675,
    //     "japan-toreca": 6618042,
    //     clove: 1973390,
    //     gacha24: 839954,
    //     iris: 2161937
    // },
    // {
    //     date: new Date('2023/11/02 3:00'),
    //     "ex-toreca": 7909126,
    //     dopa: 8032278,
    //     "japan-toreca": 4517819,
    //     clove: 7580893,
    //     gacha24: 5103635,
    //     iris: 8057538
    // },
    // {
    //     date: new Date('2023/11/02 4:00'),
    //     "ex-toreca": 3829993,
    //     dopa: 6066193,
    //     "japan-toreca": 7884654,
    //     clove: 2577789,
    //     gacha24: 3318975,
    //     iris: 1531514
    // },
    // {
    //     date: new Date('2023/11/02 5:00'),
    //     "ex-toreca": 5719371,
    //     dopa: 5488695,
    //     "japan-toreca": 3436335,
    //     clove: 587398,
    //     gacha24: 3392753,
    //     iris: 6381041
    // },
    // {
    //     date: new Date('2023/11/02 6:00'),
    //     "ex-toreca": 1527145,
    //     dopa: 858085,
    //     "japan-toreca": 9547197,
    //     clove: 5892810,
    //     gacha24: 7813032,
    //     iris: 3885944
    // },
    // {
    //     date: new Date('2023/11/02 7:00'),
    //     "ex-toreca": 3487797,
    //     dopa: 466088,
    //     "japan-toreca": 7064580,
    //     clove: 8754194,
    //     gacha24: 7654684,
    //     iris: 2408348
    // },
    // {
    //     date: new Date('2023/11/02 8:00'),
    //     "ex-toreca": 7965250,
    //     dopa: 4905746,
    //     "japan-toreca": 4073137,
    //     clove: 5171200,
    //     gacha24: 9284578,
    //     iris: 8297377
    // },
    // {
    //     date: new Date('2023/11/02 9:00'),
    //     "ex-toreca": 8393039,
    //     dopa: 1621332,
    //     "japan-toreca": 4714619,
    //     clove: 5141768,
    //     gacha24: 9731068,
    //     iris: 1974989
    // },
    // {
    //     date: new Date('2023/11/02 10:00'),
    //     "ex-toreca": 6188266,
    //     dopa: 3823746,
    //     "japan-toreca": 4292410,
    //     clove: 649348,
    //     gacha24: 8507275,
    //     iris: 7630963
    // },
    // {
    //     date: new Date('2023/11/02 11:00'),
    //     "ex-toreca": 5214375,
    //     dopa: 9703902,
    //     "japan-toreca": 9959045,
    //     clove: 5500527,
    //     gacha24: 9467442,
    //     iris: 2989481
    // },
    // {
    //     date: new Date('2023/11/02 12:00'),
    //     "ex-toreca": 7391027,
    //     dopa: 6943581,
    //     "japan-toreca": 7522102,
    //     clove: 482143,
    //     gacha24: 2523715,
    //     iris: 1942881
    // },
    // {
    //     date: new Date('2023/11/02 13:00'),
    //     "ex-toreca": 3903832,
    //     dopa: 5768507,
    //     "japan-toreca": 821489,
    //     clove: 3401607,
    //     gacha24: 6332053,
    //     iris: 7059060
    // },
    // {
    //     date: new Date('2023/11/02 14:00'),
    //     "ex-toreca": 2692858,
    //     dopa: 6632054,
    //     "japan-toreca": 6809714,
    //     clove: 9356391,
    //     gacha24: 8255653,
    //     iris: 8944066
    // },
    // {
    //     date: new Date('2023/11/02 15:00'),
    //     "ex-toreca": 9849891,
    //     dopa: 9889669,
    //     "japan-toreca": 8763406,
    //     clove: 283353,
    //     gacha24: 5505250,
    //     iris: 3601058
    // },
    // {
    //     date: new Date('2023/11/02 16:00'),
    //     "ex-toreca": 4563663,
    //     dopa: 9002380,
    //     "japan-toreca": 4100057,
    //     clove: 6627950,
    //     gacha24: 4194002,
    //     iris: 3049342
    // },
    // {
    //     date: new Date('2023/11/02 17:00'),
    //     "ex-toreca": 5656609,
    //     dopa: 4221660,
    //     "japan-toreca": 1698290,
    //     clove: 7761418,
    //     gacha24: 1614734,
    //     iris: 7943365
    // },
    // {
    //     date: new Date('2023/11/02 18:00'),
    //     "ex-toreca": 3816090,
    //     dopa: 404361,
    //     "japan-toreca": 9700707,
    //     clove: 46204,
    //     gacha24: 9271713,
    //     iris: 2939979
    // },
    // {
    //     date: new Date('2023/11/02 19:00'),
    //     "ex-toreca": 8645078,
    //     dopa: 8348445,
    //     "japan-toreca": 5934457,
    //     clove: 2061212,
    //     gacha24: 6136907,
    //     iris: 3921773
    // },
    // {
    //     date: new Date('2023/11/02 20:00'),
    //     "ex-toreca": 4956226,
    //     dopa: 4474469,
    //     "japan-toreca": 4332408,
    //     clove: 2763072,
    //     gacha24: 3825452,
    //     iris: 1740422
    // },
    // {
    //     date: new Date('2023/11/02 21:00'),
    //     "ex-toreca": 3480259,
    //     dopa: 7976838,
    //     "japan-toreca": 6501979,
    //     clove: 6986769,
    //     gacha24: 6373249,
    //     iris: 6547102
    // },
    // {
    //     date: new Date('2023/11/02 22:00'),
    //     "ex-toreca": 7593190,
    //     dopa: 5931243,
    //     "japan-toreca": 9477986,
    //     clove: 7472719,
    //     gacha24: 5951689,
    //     iris: 3176330
    // },
    // {
    //     date: new Date('2023/11/02 23:00'),
    //     "ex-toreca": 8881945,
    //     dopa: 8915215,
    //     "japan-toreca": 2082159,
    //     clove: 8134991,
    //     gacha24: 212252,
    //     iris: 7202789
    // },
    // {
    //     date: new Date('2023/11/03 0:00'),
    //     "ex-toreca": 1206042,
    //     dopa: 8804602,
    //     "japan-toreca": 6087178,
    //     clove: 186698,
    //     gacha24: 6424229,
    //     iris: 5036028
    // },
    // {
    //     date: new Date('2023/11/03 1:00'),
    //     "ex-toreca": 6117665,
    //     dopa: 8232903,
    //     "japan-toreca": 2478083,
    //     clove: 5409110,
    //     gacha24: 8370778,
    //     iris: 2796712
    // },
    // {
    //     date: new Date('2023/11/03 2:00'),
    //     "ex-toreca": 1749137,
    //     dopa: 6393931,
    //     "japan-toreca": 9424167,
    //     clove: 6096604,
    //     gacha24: 9729651,
    //     iris: 8645042
    // },
    // {
    //     date: new Date('2023/11/03 3:00'),
    //     "ex-toreca": 2878687,
    //     dopa: 1081970,
    //     "japan-toreca": 9601466,
    //     clove: 3002251,
    //     gacha24: 6407761,
    //     iris: 5676119
    // },
    // {
    //     date: new Date('2023/11/03 4:00'),
    //     "ex-toreca": 4548043,
    //     dopa: 8990359,
    //     "japan-toreca": 4463152,
    //     clove: 6556556,
    //     gacha24: 6625161,
    //     iris: 6477005
    // },
    // {
    //     date: new Date('2023/11/03 5:00'),
    //     "ex-toreca": 4409192,
    //     dopa: 3033960,
    //     "japan-toreca": 9135370,
    //     clove: 4818616,
    //     gacha24: 2407837,
    //     iris: 305538
    // },
    // {
    //     date: new Date('2023/11/03 6:00'),
    //     "ex-toreca": 9513177,
    //     dopa: 4247073,
    //     "japan-toreca": 5840659,
    //     clove: 9660041,
    //     gacha24: 8409157,
    //     iris: 9113626
    // },
    // {
    //     date: new Date('2023/11/03 7:00'),
    //     "ex-toreca": 9095862,
    //     dopa: 259319,
    //     "japan-toreca": 9267844,
    //     clove: 3566917,
    //     gacha24: 1560980,
    //     iris: 4969405
    // },
    // {
    //     date: new Date('2023/11/03 8:00'),
    //     "ex-toreca": 8477423,
    //     dopa: 6781400,
    //     "japan-toreca": 7437236,
    //     clove: 9237715,
    //     gacha24: 3595177,
    //     iris: 8020372
    // },
    // {
    //     date: new Date('2023/11/03 9:00'),
    //     "ex-toreca": 8178374,
    //     dopa: 1309558,
    //     "japan-toreca": 483322,
    //     clove: 8957170,
    //     gacha24: 521454,
    //     iris: 7562885
    // },
    // {
    //     date: new Date('2023/11/03 10:00'),
    //     "ex-toreca": 5853774,
    //     dopa: 9652052,
    //     "japan-toreca": 6836812,
    //     clove: 2411986,
    //     gacha24: 1446008,
    //     iris: 9435992
    // },
    // {
    //     date: new Date('2023/11/03 11:00'),
    //     "ex-toreca": 9865795,
    //     dopa: 5823272,
    //     "japan-toreca": 8282530,
    //     clove: 5845620,
    //     gacha24: 3211897,
    //     iris: 798582
    // },
    // {
    //     date: new Date('2023/11/03 12:00'),
    //     "ex-toreca": 8372061,
    //     dopa: 3979394,
    //     "japan-toreca": 1447870,
    //     clove: 1329024,
    //     gacha24: 4142448,
    //     iris: 1889931
    // },
    // {
    //     date: new Date('2023/11/03 13:00'),
    //     "ex-toreca": 5805967,
    //     dopa: 2247949,
    //     "japan-toreca": 5654591,
    //     clove: 4037687,
    //     gacha24: 6635244,
    //     iris: 7805558
    // },
    // {
    //     date: new Date('2023/11/03 14:00'),
    //     "ex-toreca": 4464752,
    //     dopa: 9963648,
    //     "japan-toreca": 3714016,
    //     clove: 5298207,
    //     gacha24: 8668589,
    //     iris: 3792752
    // },
    // {
    //     date: new Date('2023/11/03 15:00'),
    //     "ex-toreca": 9019042,
    //     dopa: 4614552,
    //     "japan-toreca": 120691,
    //     clove: 2019405,
    //     gacha24: 98899,
    //     iris: 5064996
    // },
    // {
    //     date: new Date('2023/11/03 16:00'),
    //     "ex-toreca": 8374430,
    //     dopa: 5831858,
    //     "japan-toreca": 9267611,
    //     clove: 7437857,
    //     gacha24: 6059513,
    //     iris: 5801883
    // },
    // {
    //     date: new Date('2023/11/03 17:00'),
    //     "ex-toreca": 3259014,
    //     dopa: 3126929,
    //     "japan-toreca": 4337764,
    //     clove: 1746695,
    //     gacha24: 1134046,
    //     iris: 3502915
    // },
    // {
    //     date: new Date('2023/11/03 18:00'),
    //     "ex-toreca": 2703115,
    //     dopa: 1017421,
    //     "japan-toreca": 9972078,
    //     clove: 4593250,
    //     gacha24: 1011395,
    //     iris: 7777272
    // },
    // {
    //     date: new Date('2023/11/03 19:00'),
    //     "ex-toreca": 2923398,
    //     dopa: 9509973,
    //     "japan-toreca": 6432696,
    //     clove: 1058259,
    //     gacha24: 4623634,
    //     iris: 5792301
    // },
    // {
    //     date: new Date('2023/11/03 20:00'),
    //     "ex-toreca": 5979613,
    //     dopa: 2143488,
    //     "japan-toreca": 3203482,
    //     clove: 3107694,
    //     gacha24: 4582401,
    //     iris: 265987
    // },
    // {
    //     date: new Date('2023/11/03 21:00'),
    //     "ex-toreca": 4917198,
    //     dopa: 80586,
    //     "japan-toreca": 7868275,
    //     clove: 8188667,
    //     gacha24: 5161449,
    //     iris: 5832805
    // },
    // {
    //     date: new Date('2023/11/03 22:00'),
    //     "ex-toreca": 506341,
    //     dopa: 7931677,
    //     "japan-toreca": 2675729,
    //     clove: 7624164,
    //     gacha24: 7683055,
    //     iris: 3552958
    // },
    // {
    //     date: new Date('2023/11/03 23:00'),
    //     "ex-toreca": 1886631,
    //     dopa: 3432796,
    //     "japan-toreca": 1199711,
    //     clove: 4119817,
    //     gacha24: 8628532,
    //     iris: 6934891
    // },
    // {
    //     date: new Date('2023/11/04 0:00'),
    //     "ex-toreca": 3761217,
    //     dopa: 3683415,
    //     "japan-toreca": 6654005,
    //     clove: 6956864,
    //     gacha24: 8551265,
    //     iris: 9267234
    // },
    // {
    //     date: new Date('2023/11/04 1:00'),
    //     "ex-toreca": 7646464,
    //     dopa: 7015295,
    //     "japan-toreca": 7695871,
    //     clove: 8313174,
    //     gacha24: 7711636,
    //     iris: 3580948
    // },
    // {
    //     date: new Date('2023/11/04 2:00'),
    //     "ex-toreca": 6398906,
    //     dopa: 5091985,
    //     "japan-toreca": 3341843,
    //     clove: 6529313,
    //     gacha24: 2573685,
    //     iris: 9554961
    // },
    // {
    //     date: new Date('2023/11/04 3:00'),
    //     "ex-toreca": 7971421,
    //     dopa: 2560883,
    //     "japan-toreca": 1076711,
    //     clove: 6790187,
    //     gacha24: 8553090,
    //     iris: 69060
    // },
    // {
    //     date: new Date('2023/11/04 4:00'),
    //     "ex-toreca": 560723,
    //     dopa: 5260599,
    //     "japan-toreca": 8949694,
    //     clove: 6982594,
    //     gacha24: 6847654,
    //     iris: 8374513
    // },
    // {
    //     date: new Date('2023/11/04 5:00'),
    //     "ex-toreca": 8904509,
    //     dopa: 4800915,
    //     "japan-toreca": 4309901,
    //     clove: 8220377,
    //     gacha24: 5877732,
    //     iris: 875608
    // },
    // {
    //     date: new Date('2023/11/04 6:00'),
    //     "ex-toreca": 546107,
    //     dopa: 3033678,
    //     "japan-toreca": 7886915,
    //     clove: 305625,
    //     gacha24: 9657587,
    //     iris: 9173563
    // },
    // {
    //     date: new Date('2023/11/04 7:00'),
    //     "ex-toreca": 3943221,
    //     dopa: 4085022,
    //     "japan-toreca": 5451881,
    //     clove: 9109664,
    //     gacha24: 919430,
    //     iris: 6265190
    // },
    // {
    //     date: new Date('2023/11/04 8:00'),
    //     "ex-toreca": 8809026,
    //     dopa: 8520358,
    //     "japan-toreca": 1723339,
    //     clove: 3936104,
    //     gacha24: 9488833,
    //     iris: 4983321
    // },
    // {
    //     date: new Date('2023/11/04 9:00'),
    //     "ex-toreca": 6581220,
    //     dopa: 5761369,
    //     "japan-toreca": 8379281,
    //     clove: 2125853,
    //     gacha24: 5214807,
    //     iris: 9984605
    // },
    // {
    //     date: new Date('2023/11/04 10:00'),
    //     "ex-toreca": 8031206,
    //     dopa: 2805861,
    //     "japan-toreca": 9470535,
    //     clove: 3533937,
    //     gacha24: 4431744,
    //     iris: 9283016
    // },
    // {
    //     date: new Date('2023/11/04 11:00'),
    //     "ex-toreca": 2432151,
    //     dopa: 8360331,
    //     "japan-toreca": 6828673,
    //     clove: 5075162,
    //     gacha24: 7744163,
    //     iris: 1371606
    // },
    // {
    //     date: new Date('2023/11/04 12:00'),
    //     "ex-toreca": 6432917,
    //     dopa: 875241,
    //     "japan-toreca": 284951,
    //     clove: 6776588,
    //     gacha24: 8881284,
    //     iris: 6690617
    // },
    // {
    //     date: new Date('2023/11/04 13:00'),
    //     "ex-toreca": 7866225,
    //     dopa: 8095365,
    //     "japan-toreca": 9816614,
    //     clove: 1474117,
    //     gacha24: 5013396,
    //     iris: 4472561
    // },
    // {
    //     date: new Date('2023/11/04 14:00'),
    //     "ex-toreca": 3678825,
    //     dopa: 9267347,
    //     "japan-toreca": 7693921,
    //     clove: 6448714,
    //     gacha24: 1257184,
    //     iris: 5234801
    // },
    // {
    //     date: new Date('2023/11/04 15:00'),
    //     "ex-toreca": 6678099,
    //     dopa: 9770389,
    //     "japan-toreca": 2529099,
    //     clove: 5973955,
    //     gacha24: 2189330,
    //     iris: 2051355
    // },
    // {
    //     date: new Date('2023/11/04 16:00'),
    //     "ex-toreca": 7456444,
    //     dopa: 8003555,
    //     "japan-toreca": 2383922,
    //     clove: 4643335,
    //     gacha24: 754318,
    //     iris: 3541603
    // },
    // {
    //     date: new Date('2023/11/04 17:00'),
    //     "ex-toreca": 105240,
    //     dopa: 6969320,
    //     "japan-toreca": 8315131,
    //     clove: 9230227,
    //     gacha24: 2092401,
    //     iris: 1463425
    // },
    // {
    //     date: new Date('2023/11/04 18:00'),
    //     "ex-toreca": 8457868,
    //     dopa: 799287,
    //     "japan-toreca": 945683,
    //     clove: 672739,
    //     gacha24: 567599,
    //     iris: 1168933
    // },
    // {
    //     date: new Date('2023/11/04 19:00'),
    //     "ex-toreca": 2444391,
    //     dopa: 6965022,
    //     "japan-toreca": 1675424,
    //     clove: 6199525,
    //     gacha24: 2241953,
    //     iris: 2370058
    // },
    // {
    //     date: new Date('2023/11/04 20:00'),
    //     "ex-toreca": 3790203,
    //     dopa: 6957224,
    //     "japan-toreca": 5635434,
    //     clove: 2671008,
    //     gacha24: 6655310,
    //     iris: 7532281
    // },
    // {
    //     date: new Date('2023/11/04 21:00'),
    //     "ex-toreca": 6508375,
    //     dopa: 3252567,
    //     "japan-toreca": 9103685,
    //     clove: 1027603,
    //     gacha24: 4866209,
    //     iris: 8906473
    // },
    // {
    //     date: new Date('2023/11/04 22:00'),
    //     "ex-toreca": 5555258,
    //     dopa: 6351842,
    //     "japan-toreca": 4080661,
    //     clove: 8261975,
    //     gacha24: 7867934,
    //     iris: 358157
    // },
    // {
    //     date: new Date('2023/11/04 23:00'),
    //     "ex-toreca": 1284475,
    //     dopa: 8301649,
    //     "japan-toreca": 45466,
    //     clove: 7224764,
    //     gacha24: 3047389,
    //     iris: 1512387
    // },
    // {
    //     date: new Date('2023/11/05 0:00'),
    //     "ex-toreca": 2867463,
    //     dopa: 2503460,
    //     "japan-toreca": 9501977,
    //     clove: 392959,
    //     gacha24: 8791392,
    //     iris: 2195212
    // },
    // {
    //     date: new Date('2023/11/05 1:00'),
    //     "ex-toreca": 8355904,
    //     dopa: 1856835,
    //     "japan-toreca": 1235986,
    //     clove: 5947980,
    //     gacha24: 4355841,
    //     iris: 9042111
    // },
    // {
    //     date: new Date('2023/11/05 2:00'),
    //     "ex-toreca": 6745363,
    //     dopa: 9407316,
    //     "japan-toreca": 2844172,
    //     clove: 7556332,
    //     gacha24: 4759568,
    //     iris: 2164689
    // },
    // {
    //     date: new Date('2023/11/05 3:00'),
    //     "ex-toreca": 8890898,
    //     dopa: 377991,
    //     "japan-toreca": 1348084,
    //     clove: 1787973,
    //     gacha24: 7864632,
    //     iris: 5653460
    // },
    // {
    //     date: new Date('2023/11/05 4:00'),
    //     "ex-toreca": 3371666,
    //     dopa: 8775870,
    //     "japan-toreca": 327404,
    //     clove: 8268569,
    //     gacha24: 5819804,
    //     iris: 6047569
    // },
    // {
    //     date: new Date('2023/11/05 5:00'),
    //     "ex-toreca": 4387365,
    //     dopa: 5469971,
    //     "japan-toreca": 6896401,
    //     clove: 3458595,
    //     gacha24: 439799,
    //     iris: 703303
    // },
    // {
    //     date: new Date('2023/11/05 6:00'),
    //     "ex-toreca": 8015181,
    //     dopa: 6659393,
    //     "japan-toreca": 1359801,
    //     clove: 5691275,
    //     gacha24: 4718012,
    //     iris: 5286864
    // },
    // {
    //     date: new Date('2023/11/05 7:00'),
    //     "ex-toreca": 9345113,
    //     dopa: 5214212,
    //     "japan-toreca": 622077,
    //     clove: 5801297,
    //     gacha24: 4017032,
    //     iris: 6478312
    // },
    // {
    //     date: new Date('2023/11/05 8:00'),
    //     "ex-toreca": 1586909,
    //     dopa: 7499816,
    //     "japan-toreca": 3200562,
    //     clove: 8092251,
    //     gacha24: 2068205,
    //     iris: 9867472
    // },
    // {
    //     date: new Date('2023/11/05 9:00'),
    //     "ex-toreca": 8630153,
    //     dopa: 3899929,
    //     "japan-toreca": 5257501,
    //     clove: 5917741,
    //     gacha24: 6499106,
    //     iris: 3481880
    // },
    // {
    //     date: new Date('2023/11/05 10:00'),
    //     "ex-toreca": 8142399,
    //     dopa: 2036263,
    //     "japan-toreca": 6450023,
    //     clove: 6699693,
    //     gacha24: 9054105,
    //     iris: 8633395
    // },
    // {
    //     date: new Date('2023/11/05 11:00'),
    //     "ex-toreca": 4238197,
    //     dopa: 4803947,
    //     "japan-toreca": 4475003,
    //     clove: 6251358,
    //     gacha24: 7118013,
    //     iris: 4739150
    // },
    // {
    //     date: new Date('2023/11/05 12:00'),
    //     "ex-toreca": 7653145,
    //     dopa: 4104343,
    //     "japan-toreca": 5632540,
    //     clove: 9208383,
    //     gacha24: 6254178,
    //     iris: 7644395
    // },
    // {
    //     date: new Date('2023/11/05 13:00'),
    //     "ex-toreca": 7390234,
    //     dopa: 1742012,
    //     "japan-toreca": 1572673,
    //     clove: 7351336,
    //     gacha24: 7408465,
    //     iris: 2192364
    // },
    // {
    //     date: new Date('2023/11/05 14:00'),
    //     "ex-toreca": 4561289,
    //     dopa: 8666329,
    //     "japan-toreca": 9962541,
    //     clove: 3207827,
    //     gacha24: 5216088,
    //     iris: 2128779
    // },
    // {
    //     date: new Date('2023/11/05 15:00'),
    //     "ex-toreca": 6031230,
    //     dopa: 964530,
    //     "japan-toreca": 3369819,
    //     clove: 3531000,
    //     gacha24: 1440171,
    //     iris: 1524596
    // },
    // {
    //     date: new Date('2023/11/05 16:00'),
    //     "ex-toreca": 9694967,
    //     dopa: 2402708,
    //     "japan-toreca": 9358365,
    //     clove: 9894780,
    //     gacha24: 3195514,
    //     iris: 2130721
    // },
    // {
    //     date: new Date('2023/11/05 17:00'),
    //     "ex-toreca": 5238170,
    //     dopa: 1643517,
    //     "japan-toreca": 1408890,
    //     clove: 8712809,
    //     gacha24: 9224900,
    //     iris: 8370539
    // },
    // {
    //     date: new Date('2023/11/05 18:00'),
    //     "ex-toreca": 8053474,
    //     dopa: 305506,
    //     "japan-toreca": 5744654,
    //     clove: 4000725,
    //     gacha24: 5887421,
    //     iris: 4734951
    // },
    // {
    //     date: new Date('2023/11/05 19:00'),
    //     "ex-toreca": 3565259,
    //     dopa: 5996160,
    //     "japan-toreca": 1317682,
    //     clove: 158600,
    //     gacha24: 893263,
    //     iris: 3188749
    // },
    // {
    //     date: new Date('2023/11/05 20:00'),
    //     "ex-toreca": 8731924,
    //     dopa: 7424113,
    //     "japan-toreca": 2329866,
    //     clove: 6717903,
    //     gacha24: 7475322,
    //     iris: 628673
    // },
    // {
    //     date: new Date('2023/11/05 21:00'),
    //     "ex-toreca": 9583463,
    //     dopa: 8701705,
    //     "japan-toreca": 2193789,
    //     clove: 6961687,
    //     gacha24: 8100248,
    //     iris: 1105605
    // },
    // {
    //     date: new Date('2023/11/05 22:00'),
    //     "ex-toreca": 8785440,
    //     dopa: 5033389,
    //     "japan-toreca": 3781526,
    //     clove: 6654411,
    //     gacha24: 6168357,
    //     iris: 4636338
    // },
    // {
    //     date: new Date('2023/11/05 23:00'),
    //     "ex-toreca": 3427173,
    //     dopa: 5480866,
    //     "japan-toreca": 5554717,
    //     clove: 2425955,
    //     gacha24: 3507170,
    //     iris: 4118935
    // },
    // {
    //     date: new Date('2023/11/06 0:00'),
    //     "ex-toreca": 3381768,
    //     dopa: 5617581,
    //     "japan-toreca": 233596,
    //     clove: 5544239,
    //     gacha24: 7045582,
    //     iris: 7590531
    // },
    // {
    //     date: new Date('2023/11/06 1:00'),
    //     "ex-toreca": 452858,
    //     dopa: 6969410,
    //     "japan-toreca": 7026096,
    //     clove: 1347748,
    //     gacha24: 9837087,
    //     iris: 5166930
    // },
    // {
    //     date: new Date('2023/11/06 2:00'),
    //     "ex-toreca": 7005660,
    //     dopa: 9870330,
    //     "japan-toreca": 3041609,
    //     clove: 5849213,
    //     gacha24: 7506548,
    //     iris: 4544666
    // },
    // {
    //     date: new Date('2023/11/06 3:00'),
    //     "ex-toreca": 7472551,
    //     dopa: 6994318,
    //     "japan-toreca": 7225339,
    //     clove: 1123779,
    //     gacha24: 5739303,
    //     iris: 4419417
    // },
    // {
    //     date: new Date('2023/11/06 4:00'),
    //     "ex-toreca": 4345739,
    //     dopa: 618267,
    //     "japan-toreca": 3380804,
    //     clove: 2721513,
    //     gacha24: 1865236,
    //     iris: 4506847
    // },
    // {
    //     date: new Date('2023/11/06 5:00'),
    //     "ex-toreca": 1331685,
    //     dopa: 6348698,
    //     "japan-toreca": 1075452,
    //     clove: 2923272,
    //     gacha24: 2514406,
    //     iris: 4440748
    // },
    // {
    //     date: new Date('2023/11/06 6:00'),
    //     "ex-toreca": 3381401,
    //     dopa: 2407214,
    //     "japan-toreca": 9304665,
    //     clove: 2502211,
    //     gacha24: 2251103,
    //     iris: 8399629
    // },
    // {
    //     date: new Date('2023/11/06 7:00'),
    //     "ex-toreca": 1046036,
    //     dopa: 8637631,
    //     "japan-toreca": 344188,
    //     clove: 3564447,
    //     gacha24: 7142462,
    //     iris: 3481586
    // },
    // {
    //     date: new Date('2023/11/06 8:00'),
    //     "ex-toreca": 4130584,
    //     dopa: 9604940,
    //     "japan-toreca": 3458081,
    //     clove: 9823390,
    //     gacha24: 5486385,
    //     iris: 1271166
    // },
    // {
    //     date: new Date('2023/11/06 9:00'),
    //     "ex-toreca": 8068070,
    //     dopa: 779801,
    //     "japan-toreca": 1359703,
    //     clove: 4365041,
    //     gacha24: 3927676,
    //     iris: 1435852
    // },
    // {
    //     date: new Date('2023/11/06 10:00'),
    //     "ex-toreca": 7532976,
    //     dopa: 1356753,
    //     "japan-toreca": 5522198,
    //     clove: 8575441,
    //     gacha24: 5894997,
    //     iris: 2813474
    // },
    // {
    //     date: new Date('2023/11/06 11:00'),
    //     "ex-toreca": 9358878,
    //     dopa: 9807626,
    //     "japan-toreca": 8936924,
    //     clove: 5877051,
    //     gacha24: 9504304,
    //     iris: 2309661
    // },
    // {
    //     date: new Date('2023/11/06 12:00'),
    //     "ex-toreca": 9832137,
    //     dopa: 1866435,
    //     "japan-toreca": 5938238,
    //     clove: 4380566,
    //     gacha24: 6677462,
    //     iris: 3279028
    // },
    // {
    //     date: new Date('2023/11/06 13:00'),
    //     "ex-toreca": 3932670,
    //     dopa: 7339586,
    //     "japan-toreca": 3105600,
    //     clove: 3908499,
    //     gacha24: 4877660,
    //     iris: 8847290
    // },
    // {
    //     date: new Date('2023/11/06 14:00'),
    //     "ex-toreca": 7463220,
    //     dopa: 6517239,
    //     "japan-toreca": 9908927,
    //     clove: 3886415,
    //     gacha24: 1610053,
    //     iris: 1866361
    // },
    // {
    //     date: new Date('2023/11/06 15:00'),
    //     "ex-toreca": 8591784,
    //     dopa: 5668558,
    //     "japan-toreca": 4345983,
    //     clove: 7224845,
    //     gacha24: 3086559,
    //     iris: 5847177
    // },
    // {
    //     date: new Date('2023/11/06 16:00'),
    //     "ex-toreca": 6029936,
    //     dopa: 6219866,
    //     "japan-toreca": 5762212,
    //     clove: 594579,
    //     gacha24: 2420937,
    //     iris: 2931655
    // },
    // {
    //     date: new Date('2023/11/06 17:00'),
    //     "ex-toreca": 5461175,
    //     dopa: 8343640,
    //     "japan-toreca": 5382843,
    //     clove: 971885,
    //     gacha24: 2850382,
    //     iris: 7155418
    // },
    // {
    //     date: new Date('2023/11/06 18:00'),
    //     "ex-toreca": 6767198,
    //     dopa: 2469428,
    //     "japan-toreca": 7476417,
    //     clove: 6499954,
    //     gacha24: 2740131,
    //     iris: 4946448
    // },
    // {
    //     date: new Date('2023/11/06 19:00'),
    //     "ex-toreca": 9697706,
    //     dopa: 9404096,
    //     "japan-toreca": 7028088,
    //     clove: 6395422,
    //     gacha24: 1337488,
    //     iris: 5166306
    // },
    // {
    //     date: new Date('2023/11/06 20:00'),
    //     "ex-toreca": 585704,
    //     dopa: 461024,
    //     "japan-toreca": 7046849,
    //     clove: 1114308,
    //     gacha24: 5080771,
    //     iris: 9425008
    // },
    // {
    //     date: new Date('2023/11/06 21:00'),
    //     "ex-toreca": 5148980,
    //     dopa: 5938617,
    //     "japan-toreca": 7671057,
    //     clove: 1184087,
    //     gacha24: 1675486,
    //     iris: 9943520
    // },
    // {
    //     date: new Date('2023/11/06 22:00'),
    //     "ex-toreca": 4685577,
    //     dopa: 7859256,
    //     "japan-toreca": 8758479,
    //     clove: 3316504,
    //     gacha24: 7476766,
    //     iris: 1012088
    // },
    // {
    //     date: new Date('2023/11/06 23:00'),
    //     "ex-toreca": 7093187,
    //     dopa: 6480492,
    //     "japan-toreca": 4116684,
    //     clove: 6766937,
    //     gacha24: 7523173,
    //     iris: 4189821
    // },
    // {
    //     date: new Date('2023/11/07 0:00'),
    //     "ex-toreca": 7740519,
    //     dopa: 6070109,
    //     "japan-toreca": 3115231,
    //     clove: 5072004,
    //     gacha24: 1495516,
    //     iris: 7109995
    // },
    // {
    //     date: new Date('2023/11/07 1:00'),
    //     "ex-toreca": 3272255,
    //     dopa: 4097058,
    //     "japan-toreca": 1842379,
    //     clove: 2880194,
    //     gacha24: 2833748,
    //     iris: 3650546
    // },
    // {
    //     date: new Date('2023/11/07 2:00'),
    //     "ex-toreca": 4644651,
    //     dopa: 1642529,
    //     "japan-toreca": 113247,
    //     clove: 8347148,
    //     gacha24: 9492551,
    //     iris: 2550758
    // },
    // {
    //     date: new Date('2023/11/07 3:00'),
    //     "ex-toreca": 4801731,
    //     dopa: 8654816,
    //     "japan-toreca": 657811,
    //     clove: 2727675,
    //     gacha24: 8505252,
    //     iris: 2938071
    // },
    // {
    //     date: new Date('2023/11/07 4:00'),
    //     "ex-toreca": 190754,
    //     dopa: 9762746,
    //     "japan-toreca": 3896988,
    //     clove: 8008798,
    //     gacha24: 971417,
    //     iris: 7777237
    // },
    // {
    //     date: new Date('2023/11/07 5:00'),
    //     "ex-toreca": 8891440,
    //     dopa: 2455499,
    //     "japan-toreca": 5584390,
    //     clove: 3750165,
    //     gacha24: 9014981,
    //     iris: 3532226
    // },
    // {
    //     date: new Date('2023/11/07 6:00'),
    //     "ex-toreca": 6965647,
    //     dopa: 6697701,
    //     "japan-toreca": 1267988,
    //     clove: 5649557,
    //     gacha24: 4886312,
    //     iris: 68209
    // },
    // {
    //     date: new Date('2023/11/07 7:00'),
    //     "ex-toreca": 4717077,
    //     dopa: 6489610,
    //     "japan-toreca": 9653785,
    //     clove: 1449013,
    //     gacha24: 4145825,
    //     iris: 6916309
    // },
    // {
    //     date: new Date('2023/11/07 8:00'),
    //     "ex-toreca": 4868353,
    //     dopa: 6114720,
    //     "japan-toreca": 1709318,
    //     clove: 799886,
    //     gacha24: 2138269,
    //     iris: 2528066
    // },
    // {
    //     date: new Date('2023/11/07 9:00'),
    //     "ex-toreca": 5614527,
    //     dopa: 2142732,
    //     "japan-toreca": 8490401,
    //     clove: 5459440,
    //     gacha24: 9102964,
    //     iris: 1189946
    // },
    // {
    //     date: new Date('2023/11/07 10:00'),
    //     "ex-toreca": 1205469,
    //     dopa: 5792037,
    //     "japan-toreca": 4746364,
    //     clove: 5743003,
    //     gacha24: 9400995,
    //     iris: 5867183
    // },
    // {
    //     date: new Date('2023/11/07 11:00'),
    //     "ex-toreca": 7112331,
    //     dopa: 6248939,
    //     "japan-toreca": 8621417,
    //     clove: 117856,
    //     gacha24: 4923531,
    //     iris: 6133561
    // },
    // {
    //     date: new Date('2023/11/07 12:00'),
    //     "ex-toreca": 8547642,
    //     dopa: 2074165,
    //     "japan-toreca": 6320316,
    //     clove: 688590,
    //     gacha24: 8621238,
    //     iris: 7604689
    // },
    // {
    //     date: new Date('2023/11/07 13:00'),
    //     "ex-toreca": 7088204,
    //     dopa: 1849749,
    //     "japan-toreca": 2664896,
    //     clove: 8082038,
    //     gacha24: 1550638,
    //     iris: 6591490
    // },
    // {
    //     date: new Date('2023/11/07 14:00'),
    //     "ex-toreca": 1993592,
    //     dopa: 1160911,
    //     "japan-toreca": 2178292,
    //     clove: 6635122,
    //     gacha24: 1865753,
    //     iris: 3237548
    // },
    // {
    //     date: new Date('2023/11/07 15:00'),
    //     "ex-toreca": 7998510,
    //     dopa: 4983763,
    //     "japan-toreca": 5354149,
    //     clove: 6905555,
    //     gacha24: 6367708,
    //     iris: 2621680
    // },
    // {
    //     date: new Date('2023/11/07 16:00'),
    //     "ex-toreca": 7220322,
    //     dopa: 1777618,
    //     "japan-toreca": 9613190,
    //     clove: 6296258,
    //     gacha24: 9830892,
    //     iris: 1203302
    // },
    // {
    //     date: new Date('2023/11/07 17:00'),
    //     "ex-toreca": 383601,
    //     dopa: 2209413,
    //     "japan-toreca": 7823338,
    //     clove: 9671236,
    //     gacha24: 7956357,
    //     iris: 7293276
    // },
    // {
    //     date: new Date('2023/11/07 18:00'),
    //     "ex-toreca": 4648243,
    //     dopa: 5869002,
    //     "japan-toreca": 3301848,
    //     clove: 4907220,
    //     gacha24: 9791113,
    //     iris: 6790402
    // },
    // {
    //     date: new Date('2023/11/07 19:00'),
    //     "ex-toreca": 6317657,
    //     dopa: 6389401,
    //     "japan-toreca": 7283197,
    //     clove: 7539483,
    //     gacha24: 6023018,
    //     iris: 9879387
    // },
    // {
    //     date: new Date('2023/11/07 20:00'),
    //     "ex-toreca": 5997467,
    //     dopa: 6751857,
    //     "japan-toreca": 1342015,
    //     clove: 3071068,
    //     gacha24: 4709896,
    //     iris: 413161
    // },
    // {
    //     date: new Date('2023/11/07 21:00'),
    //     "ex-toreca": 7209186,
    //     dopa: 5196753,
    //     "japan-toreca": 6773111,
    //     clove: 8526210,
    //     gacha24: 3764424,
    //     iris: 9986066
    // },
    // {
    //     date: new Date('2023/11/07 22:00'),
    //     "ex-toreca": 6800556,
    //     dopa: 4650816,
    //     "japan-toreca": 468650,
    //     clove: 7586634,
    //     gacha24: 402261,
    //     iris: 2759243
    // },
    // {
    //     date: new Date('2023/11/07 23:00'),
    //     "ex-toreca": 2786668,
    //     dopa: 1297856,
    //     "japan-toreca": 404549,
    //     clove: 1416645,
    //     gacha24: 1096230,
    //     iris: 8566566
    // },
    // {
    //     date: new Date('2023/11/08 0:00'),
    //     "ex-toreca": 5207018,
    //     dopa: 172349,
    //     "japan-toreca": 6877194,
    //     clove: 735710,
    //     gacha24: 2568629,
    //     iris: 6915079
    // },
    // {
    //     date: new Date('2023/11/08 1:00'),
    //     "ex-toreca": 1028065,
    //     dopa: 3982436,
    //     "japan-toreca": 3306512,
    //     clove: 9096752,
    //     gacha24: 3447671,
    //     iris: 9407344
    // },
    // {
    //     date: new Date('2023/11/08 2:00'),
    //     "ex-toreca": 3781888,
    //     dopa: 8614420,
    //     "japan-toreca": 1348050,
    //     clove: 2946015,
    //     gacha24: 7976756,
    //     iris: 8126703
    // },
    // {
    //     date: new Date('2023/11/08 3:00'),
    //     "ex-toreca": 7864684,
    //     dopa: 6003540,
    //     "japan-toreca": 5269429,
    //     clove: 5739079,
    //     gacha24: 2590446,
    //     iris: 5591030
    // },
    // {
    //     date: new Date('2023/11/08 4:00'),
    //     "ex-toreca": 4250985,
    //     dopa: 5677285,
    //     "japan-toreca": 4071039,
    //     clove: 5655183,
    //     gacha24: 2335737,
    //     iris: 1313902
    // },
    // {
    //     date: new Date('2023/11/08 5:00'),
    //     "ex-toreca": 5502409,
    //     dopa: 3486269,
    //     "japan-toreca": 346714,
    //     clove: 1741911,
    //     gacha24: 7951722,
    //     iris: 2938645
    // },
    // {
    //     date: new Date('2023/11/08 6:00'),
    //     "ex-toreca": 6895210,
    //     dopa: 5652606,
    //     "japan-toreca": 169999,
    //     clove: 9186017,
    //     gacha24: 6917842,
    //     iris: 1755915
    // },
    // {
    //     date: new Date('2023/11/08 7:00'),
    //     "ex-toreca": 6536765,
    //     dopa: 7750244,
    //     "japan-toreca": 7040259,
    //     clove: 5792422,
    //     gacha24: 3582121,
    //     iris: 1569411
    // },
    // {
    //     date: new Date('2023/11/08 8:00'),
    //     "ex-toreca": 6561160,
    //     dopa: 1712057,
    //     "japan-toreca": 5724425,
    //     clove: 8206225,
    //     gacha24: 1987698,
    //     iris: 2531833
    // },
    // {
    //     date: new Date('2023/11/08 9:00'),
    //     "ex-toreca": 2380061,
    //     dopa: 2365621,
    //     "japan-toreca": 5388552,
    //     clove: 4887683,
    //     gacha24: 1546343,
    //     iris: 9805588
    // },
    // {
    //     date: new Date('2023/11/08 10:00'),
    //     "ex-toreca": 6230455,
    //     dopa: 43578,
    //     "japan-toreca": 5512485,
    //     clove: 8217906,
    //     gacha24: 2761214,
    //     iris: 7896126
    // },
    // {
    //     date: new Date('2023/11/08 11:00'),
    //     "ex-toreca": 5371018,
    //     dopa: 5414234,
    //     "japan-toreca": 7701603,
    //     clove: 9773543,
    //     gacha24: 371999,
    //     iris: 4995399
    // },
    // {
    //     date: new Date('2023/11/08 12:00'),
    //     "ex-toreca": 5304640,
    //     dopa: 4643304,
    //     "japan-toreca": 9622735,
    //     clove: 2466885,
    //     gacha24: 9110751,
    //     iris: 3332913
    // },
    // {
    //     date: new Date('2023/11/08 13:00'),
    //     "ex-toreca": 6958037,
    //     dopa: 3132946,
    //     "japan-toreca": 1781937,
    //     clove: 538375,
    //     gacha24: 5083683,
    //     iris: 8432904
    // },
    // {
    //     date: new Date('2023/11/08 14:00'),
    //     "ex-toreca": 311485,
    //     dopa: 7952693,
    //     "japan-toreca": 8006593,
    //     clove: 1025113,
    //     gacha24: 4516195,
    //     iris: 5209012
    // },
    // {
    //     date: new Date('2023/11/08 15:00'),
    //     "ex-toreca": 6744625,
    //     dopa: 870331,
    //     "japan-toreca": 8405481,
    //     clove: 7392972,
    //     gacha24: 7533030,
    //     iris: 6864134
    // },
    // {
    //     date: new Date('2023/11/08 16:00'),
    //     "ex-toreca": 9059409,
    //     dopa: 388060,
    //     "japan-toreca": 6698739,
    //     clove: 6391986,
    //     gacha24: 947163,
    //     iris: 565922
    // },
    // {
    //     date: new Date('2023/11/08 17:00'),
    //     "ex-toreca": 7468493,
    //     dopa: 3684494,
    //     "japan-toreca": 7570199,
    //     clove: 437959,
    //     gacha24: 1719986,
    //     iris: 2730847
    // },
    // {
    //     date: new Date('2023/11/08 18:00'),
    //     "ex-toreca": 5587321,
    //     dopa: 3305656,
    //     "japan-toreca": 5355718,
    //     clove: 7314254,
    //     gacha24: 752199,
    //     iris: 1285366
    // },
    // {
    //     date: new Date('2023/11/08 19:00'),
    //     "ex-toreca": 8236348,
    //     dopa: 1859169,
    //     "japan-toreca": 2294320,
    //     clove: 4794749,
    //     gacha24: 271632,
    //     iris: 8100692
    // },
    // {
    //     date: new Date('2023/11/08 20:00'),
    //     "ex-toreca": 779354,
    //     dopa: 2693906,
    //     "japan-toreca": 9417786,
    //     clove: 7723247,
    //     gacha24: 8164336,
    //     iris: 1796104
    // },
    // {
    //     date: new Date('2023/11/08 21:00'),
    //     "ex-toreca": 9070731,
    //     dopa: 5763600,
    //     "japan-toreca": 3241230,
    //     clove: 4958840,
    //     gacha24: 8012264,
    //     iris: 1835007
    // },
    // {
    //     date: new Date('2023/11/08 22:00'),
    //     "ex-toreca": 7690665,
    //     dopa: 5791405,
    //     "japan-toreca": 8229628,
    //     clove: 1652776,
    //     gacha24: 3613938,
    //     iris: 3964240
    // },
    // {
    //     date: new Date('2023/11/08 23:00'),
    //     "ex-toreca": 2717946,
    //     dopa: 9734216,
    //     "japan-toreca": 2012097,
    //     clove: 6962906,
    //     gacha24: 6382231,
    //     iris: 9048096
    // },
    // {
    //     date: new Date('2023/11/09 0:00'),
    //     "ex-toreca": 5016988,
    //     dopa: 2165190,
    //     "japan-toreca": 9002630,
    //     clove: 2734197,
    //     gacha24: 5122291,
    //     iris: 9102036
    // },
    // {
    //     date: new Date('2023/11/09 1:00'),
    //     "ex-toreca": 5640276,
    //     dopa: 1485318,
    //     "japan-toreca": 9122309,
    //     clove: 3219086,
    //     gacha24: 5037970,
    //     iris: 8710745
    // },
    // {
    //     date: new Date('2023/11/09 2:00'),
    //     "ex-toreca": 216520,
    //     dopa: 5565742,
    //     "japan-toreca": 12940,
    //     clove: 3934105,
    //     gacha24: 1350739,
    //     iris: 8442563
    // },
    // {
    //     date: new Date('2023/11/09 3:00'),
    //     "ex-toreca": 7027242,
    //     dopa: 4078708,
    //     "japan-toreca": 2909743,
    //     clove: 6115194,
    //     gacha24: 3637974,
    //     iris: 889045
    // },
    // {
    //     date: new Date('2023/11/09 4:00'),
    //     "ex-toreca": 8118360,
    //     dopa: 4041213,
    //     "japan-toreca": 4862756,
    //     clove: 6705214,
    //     gacha24: 8020080,
    //     iris: 5794116
    // },
    // {
    //     date: new Date('2023/11/09 5:00'),
    //     "ex-toreca": 6488614,
    //     dopa: 5151550,
    //     "japan-toreca": 6290703,
    //     clove: 4971724,
    //     gacha24: 8506495,
    //     iris: 2497190
    // },
    // {
    //     date: new Date('2023/11/09 6:00'),
    //     "ex-toreca": 3841556,
    //     dopa: 7789362,
    //     "japan-toreca": 5541619,
    //     clove: 2008617,
    //     gacha24: 4136100,
    //     iris: 7869368
    // },
    // {
    //     date: new Date('2023/11/09 7:00'),
    //     "ex-toreca": 2207411,
    //     dopa: 8923257,
    //     "japan-toreca": 5384196,
    //     clove: 2266288,
    //     gacha24: 657412,
    //     iris: 6958187
    // },
    // {
    //     date: new Date('2023/11/09 8:00'),
    //     "ex-toreca": 9078543,
    //     dopa: 7853296,
    //     "japan-toreca": 8337286,
    //     clove: 1203014,
    //     gacha24: 3165061,
    //     iris: 4510347
    // },
    // {
    //     date: new Date('2023/11/09 9:00'),
    //     "ex-toreca": 9965291,
    //     dopa: 9498549,
    //     "japan-toreca": 4183114,
    //     clove: 8466677,
    //     gacha24: 3858025,
    //     iris: 3215823
    // },
    // {
    //     date: new Date('2023/11/09 10:00'),
    //     "ex-toreca": 5177497,
    //     dopa: 7642328,
    //     "japan-toreca": 6225688,
    //     clove: 723681,
    //     gacha24: 2307122,
    //     iris: 6536464
    // },
    // {
    //     date: new Date('2023/11/09 11:00'),
    //     "ex-toreca": 6073803,
    //     dopa: 4165499,
    //     "japan-toreca": 1838023,
    //     clove: 8715341,
    //     gacha24: 8803928,
    //     iris: 8630882
    // },
    // {
    //     date: new Date('2023/11/09 12:00'),
    //     "ex-toreca": 7044817,
    //     dopa: 6436043,
    //     "japan-toreca": 7687032,
    //     clove: 9844267,
    //     gacha24: 4694834,
    //     iris: 7736764
    // },
    // {
    //     date: new Date('2023/11/09 13:00'),
    //     "ex-toreca": 8789686,
    //     dopa: 6625985,
    //     "japan-toreca": 2183486,
    //     clove: 424477,
    //     gacha24: 9763261,
    //     iris: 1619604
    // },
    // {
    //     date: new Date('2023/11/09 14:00'),
    //     "ex-toreca": 5006262,
    //     dopa: 7261367,
    //     "japan-toreca": 5353991,
    //     clove: 314319,
    //     gacha24: 7110463,
    //     iris: 2561372
    // },
    // {
    //     date: new Date('2023/11/09 15:00'),
    //     "ex-toreca": 6991476,
    //     dopa: 3046335,
    //     "japan-toreca": 119240,
    //     clove: 6509979,
    //     gacha24: 2514086,
    //     iris: 4738224
    // },
    // {
    //     date: new Date('2023/11/09 16:00'),
    //     "ex-toreca": 1831355,
    //     dopa: 5169325,
    //     "japan-toreca": 8463297,
    //     clove: 2942158,
    //     gacha24: 326848,
    //     iris: 1295795
    // },
    // {
    //     date: new Date('2023/11/09 17:00'),
    //     "ex-toreca": 4260677,
    //     dopa: 1129865,
    //     "japan-toreca": 5173119,
    //     clove: 8234697,
    //     gacha24: 8614802,
    //     iris: 3728034
    // },
    // {
    //     date: new Date('2023/11/09 18:00'),
    //     "ex-toreca": 775637,
    //     dopa: 1495904,
    //     "japan-toreca": 4296674,
    //     clove: 1053862,
    //     gacha24: 7737853,
    //     iris: 3604468
    // },
    // {
    //     date: new Date('2023/11/09 19:00'),
    //     "ex-toreca": 8035524,
    //     dopa: 8536546,
    //     "japan-toreca": 672311,
    //     clove: 393361,
    //     gacha24: 3660821,
    //     iris: 1190867
    // },
    // {
    //     date: new Date('2023/11/09 20:00'),
    //     "ex-toreca": 2736686,
    //     dopa: 4043641,
    //     "japan-toreca": 3870893,
    //     clove: 7915439,
    //     gacha24: 4262612,
    //     iris: 8687982
    // },
    // {
    //     date: new Date('2023/11/09 21:00'),
    //     "ex-toreca": 6494620,
    //     dopa: 6225131,
    //     "japan-toreca": 871532,
    //     clove: 4242241,
    //     gacha24: 7041494,
    //     iris: 8944682
    // },
    // {
    //     date: new Date('2023/11/09 22:00'),
    //     "ex-toreca": 1814815,
    //     dopa: 3093831,
    //     "japan-toreca": 665579,
    //     clove: 2953327,
    //     gacha24: 9260881,
    //     iris: 3868721
    // },
    // {
    //     date: new Date('2023/11/09 23:00'),
    //     "ex-toreca": 4628093,
    //     dopa: 4120092,
    //     "japan-toreca": 3214144,
    //     clove: 8930987,
    //     gacha24: 6581214,
    //     iris: 1075356
    // },
    // {
    //     date: new Date('2023/11/10 0:00'),
    //     "ex-toreca": 1237516,
    //     dopa: 3520439,
    //     "japan-toreca": 4665343,
    //     clove: 6817428,
    //     gacha24: 4846793,
    //     iris: 2326898
    // },
    // {
    //     date: new Date('2023/11/10 1:00'),
    //     "ex-toreca": 7674215,
    //     dopa: 1220286,
    //     "japan-toreca": 3791692,
    //     clove: 8851657,
    //     gacha24: 9960787,
    //     iris: 4680512
    // },
    // {
    //     date: new Date('2023/11/10 2:00'),
    //     "ex-toreca": 6802138,
    //     dopa: 4454610,
    //     "japan-toreca": 1668762,
    //     clove: 6388865,
    //     gacha24: 1513662,
    //     iris: 5377603
    // },
    // {
    //     date: new Date('2023/11/10 3:00'),
    //     "ex-toreca": 5534929,
    //     dopa: 8739121,
    //     "japan-toreca": 1059992,
    //     clove: 9120311,
    //     gacha24: 4201391,
    //     iris: 2051076
    // },
    // {
    //     date: new Date('2023/11/10 4:00'),
    //     "ex-toreca": 932366,
    //     dopa: 4156480,
    //     "japan-toreca": 6492622,
    //     clove: 2722083,
    //     gacha24: 9640560,
    //     iris: 6782007
    // },
    // {
    //     date: new Date('2023/11/10 5:00'),
    //     "ex-toreca": 6275379,
    //     dopa: 722491,
    //     "japan-toreca": 2331524,
    //     clove: 3372735,
    //     gacha24: 7018968,
    //     iris: 2198787
    // },
    // {
    //     date: new Date('2023/11/10 6:00'),
    //     "ex-toreca": 5105372,
    //     dopa: 5877017,
    //     "japan-toreca": 7165519,
    //     clove: 4439699,
    //     gacha24: 1453217,
    //     iris: 9968002
    // },
    // {
    //     date: new Date('2023/11/10 7:00'),
    //     "ex-toreca": 7469359,
    //     dopa: 134768,
    //     "japan-toreca": 2299161,
    //     clove: 8181584,
    //     gacha24: 1773617,
    //     iris: 570436
    // },
    // {
    //     date: new Date('2023/11/10 8:00'),
    //     "ex-toreca": 4050210,
    //     dopa: 5168727,
    //     "japan-toreca": 9218204,
    //     clove: 9585683,
    //     gacha24: 6658328,
    //     iris: 5925137
    // },
    // {
    //     date: new Date('2023/11/10 9:00'),
    //     "ex-toreca": 7825708,
    //     dopa: 1682308,
    //     "japan-toreca": 5412602,
    //     clove: 4907245,
    //     gacha24: 3665658,
    //     iris: 716196
    // },
    // {
    //     date: new Date('2023/11/10 10:00'),
    //     "ex-toreca": 9586567,
    //     dopa: 1663710,
    //     "japan-toreca": 9931406,
    //     clove: 645799,
    //     gacha24: 848325,
    //     iris: 7858365
    // },
    // {
    //     date: new Date('2023/11/10 11:00'),
    //     "ex-toreca": 8530639,
    //     dopa: 6143130,
    //     "japan-toreca": 3459159,
    //     clove: 2018832,
    //     gacha24: 8708364,
    //     iris: 6202766
    // },
    // {
    //     date: new Date('2023/11/10 12:00'),
    //     "ex-toreca": 6606216,
    //     dopa: 1223721,
    //     "japan-toreca": 1807207,
    //     clove: 7110868,
    //     gacha24: 5081290,
    //     iris: 3287605
    // },
    // {
    //     date: new Date('2023/11/10 13:00'),
    //     "ex-toreca": 8447873,
    //     dopa: 1038854,
    //     "japan-toreca": 9577897,
    //     clove: 2428582,
    //     gacha24: 5287970,
    //     iris: 1253213
    // },
    // {
    //     date: new Date('2023/11/10 14:00'),
    //     "ex-toreca": 5538365,
    //     dopa: 2028401,
    //     "japan-toreca": 4887058,
    //     clove: 8430125,
    //     gacha24: 2188111,
    //     iris: 1690313
    // },
    // {
    //     date: new Date('2023/11/10 15:00'),
    //     "ex-toreca": 3406305,
    //     dopa: 9428591,
    //     "japan-toreca": 7390034,
    //     clove: 8135522,
    //     gacha24: 9752941,
    //     iris: 1737331
    // },
    // {
    //     date: new Date('2023/11/10 16:00'),
    //     "ex-toreca": 2813093,
    //     dopa: 9209474,
    //     "japan-toreca": 3690035,
    //     clove: 6481203,
    //     gacha24: 7447635,
    //     iris: 8893431
    // },
    // {
    //     date: new Date('2023/11/10 17:00'),
    //     "ex-toreca": 4546661,
    //     dopa: 5145550,
    //     "japan-toreca": 518634,
    //     clove: 3655003,
    //     gacha24: 6090742,
    //     iris: 2349392
    // },
    // {
    //     date: new Date('2023/11/10 18:00'),
    //     "ex-toreca": 8344190,
    //     dopa: 2429495,
    //     "japan-toreca": 6255881,
    //     clove: 6506385,
    //     gacha24: 5690409,
    //     iris: 3875553
    // },
    // {
    //     date: new Date('2023/11/10 19:00'),
    //     "ex-toreca": 5245192,
    //     dopa: 1508201,
    //     "japan-toreca": 2716882,
    //     clove: 2883973,
    //     gacha24: 2527030,
    //     iris: 5246357
    // },
    // {
    //     date: new Date('2023/11/10 20:00'),
    //     "ex-toreca": 1259167,
    //     dopa: 788736,
    //     "japan-toreca": 7704425,
    //     clove: 6893334,
    //     gacha24: 3797461,
    //     iris: 7033001
    // },
    // {
    //     date: new Date('2023/11/10 21:00'),
    //     "ex-toreca": 53362,
    //     dopa: 6245030,
    //     "japan-toreca": 9544662,
    //     clove: 6308425,
    //     gacha24: 3563615,
    //     iris: 8623292
    // },
    // {
    //     date: new Date('2023/11/10 22:00'),
    //     "ex-toreca": 3020941,
    //     dopa: 2630839,
    //     "japan-toreca": 3531694,
    //     clove: 6930753,
    //     gacha24: 5427027,
    //     iris: 8095239
    // },
    // {
    //     date: new Date('2023/11/10 23:00'),
    //     "ex-toreca": 4539186,
    //     dopa: 4165983,
    //     "japan-toreca": 4635308,
    //     clove: 379534,
    //     gacha24: 7061616,
    //     iris: 8075640
    // },
    // {
    //     date: new Date('2023/11/11 0:00'),
    //     "ex-toreca": 1820134,
    //     dopa: 9324541,
    //     "japan-toreca": 6009232,
    //     clove: 6719463,
    //     gacha24: 3356339,
    //     iris: 541197
    // },
    // {
    //     date: new Date('2023/11/11 1:00'),
    //     "ex-toreca": 7392815,
    //     dopa: 7898163,
    //     "japan-toreca": 9356702,
    //     clove: 5392380,
    //     gacha24: 5058059,
    //     iris: 2019070
    // },
    // {
    //     date: new Date('2023/11/11 2:00'),
    //     "ex-toreca": 1076827,
    //     dopa: 1671739,
    //     "japan-toreca": 8491568,
    //     clove: 3231455,
    //     gacha24: 8935474,
    //     iris: 8001365
    // },
    // {
    //     date: new Date('2023/11/11 3:00'),
    //     "ex-toreca": 2258716,
    //     dopa: 435258,
    //     "japan-toreca": 8286374,
    //     clove: 9069725,
    //     gacha24: 2037683,
    //     iris: 8250548
    // },
    // {
    //     date: new Date('2023/11/11 4:00'),
    //     "ex-toreca": 5446869,
    //     dopa: 7901393,
    //     "japan-toreca": 6127843,
    //     clove: 6514246,
    //     gacha24: 2988297,
    //     iris: 2923296
    // },
    // {
    //     date: new Date('2023/11/11 5:00'),
    //     "ex-toreca": 1442628,
    //     dopa: 3277322,
    //     "japan-toreca": 5359259,
    //     clove: 6905267,
    //     gacha24: 1589110,
    //     iris: 313388
    // },
    // {
    //     date: new Date('2023/11/11 6:00'),
    //     "ex-toreca": 6808506,
    //     dopa: 5272019,
    //     "japan-toreca": 6904287,
    //     clove: 8697251,
    //     gacha24: 3577161,
    //     iris: 6804527
    // },
    // {
    //     date: new Date('2023/11/11 7:00'),
    //     "ex-toreca": 7459087,
    //     dopa: 1715809,
    //     "japan-toreca": 2638217,
    //     clove: 8207420,
    //     gacha24: 8147998,
    //     iris: 9560545
    // },
    // {
    //     date: new Date('2023/11/11 8:00'),
    //     "ex-toreca": 7119810,
    //     dopa: 716070,
    //     "japan-toreca": 6000628,
    //     clove: 6449982,
    //     gacha24: 26848,
    //     iris: 2285023
    // },
    // {
    //     date: new Date('2023/11/11 9:00'),
    //     "ex-toreca": 8064682,
    //     dopa: 9337173,
    //     "japan-toreca": 5666348,
    //     clove: 4268133,
    //     gacha24: 2310129,
    //     iris: 2375438
    // },
    // {
    //     date: new Date('2023/11/11 10:00'),
    //     "ex-toreca": 2354746,
    //     dopa: 6552112,
    //     "japan-toreca": 8150839,
    //     clove: 6483121,
    //     gacha24: 4241029,
    //     iris: 3220186
    // },
    // {
    //     date: new Date('2023/11/11 11:00'),
    //     "ex-toreca": 399765,
    //     dopa: 534947,
    //     "japan-toreca": 5531433,
    //     clove: 5223549,
    //     gacha24: 4364068,
    //     iris: 4191550
    // },
    // {
    //     date: new Date('2023/11/11 12:00'),
    //     "ex-toreca": 3327652,
    //     dopa: 4509312,
    //     "japan-toreca": 437210,
    //     clove: 8851388,
    //     gacha24: 6818535,
    //     iris: 5034582
    // },
    // {
    //     date: new Date('2023/11/11 13:00'),
    //     "ex-toreca": 6993896,
    //     dopa: 7910079,
    //     "japan-toreca": 9297537,
    //     clove: 3080415,
    //     gacha24: 3393489,
    //     iris: 5032773
    // },
    // {
    //     date: new Date('2023/11/11 14:00'),
    //     "ex-toreca": 1043830,
    //     dopa: 3269739,
    //     "japan-toreca": 9792468,
    //     clove: 4525117,
    //     gacha24: 6678258,
    //     iris: 4236430
    // },
    // {
    //     date: new Date('2023/11/11 15:00'),
    //     "ex-toreca": 2240776,
    //     dopa: 5030172,
    //     "japan-toreca": 7043880,
    //     clove: 5201128,
    //     gacha24: 5481471,
    //     iris: 3437303
    // },
    // {
    //     date: new Date('2023/11/11 16:00'),
    //     "ex-toreca": 5657680,
    //     dopa: 4242980,
    //     "japan-toreca": 9092488,
    //     clove: 4151601,
    //     gacha24: 5191870,
    //     iris: 498548
    // },
    // {
    //     date: new Date('2023/11/11 17:00'),
    //     "ex-toreca": 8813795,
    //     dopa: 2467817,
    //     "japan-toreca": 7372012,
    //     clove: 9747492,
    //     gacha24: 1881873,
    //     iris: 2119370
    // },
    // {
    //     date: new Date('2023/11/11 18:00'),
    //     "ex-toreca": 330630,
    //     dopa: 4504608,
    //     "japan-toreca": 6437566,
    //     clove: 8474929,
    //     gacha24: 4060981,
    //     iris: 5292393
    // },
    // {
    //     date: new Date('2023/11/11 19:00'),
    //     "ex-toreca": 6753385,
    //     dopa: 4337741,
    //     "japan-toreca": 2190651,
    //     clove: 8698887,
    //     gacha24: 958048,
    //     iris: 1333751
    // },
    // {
    //     date: new Date('2023/11/11 20:00'),
    //     "ex-toreca": 7125575,
    //     dopa: 3524515,
    //     "japan-toreca": 6718523,
    //     clove: 6003625,
    //     gacha24: 9152757,
    //     iris: 2756968
    // },
    // {
    //     date: new Date('2023/11/11 21:00'),
    //     "ex-toreca": 4558100,
    //     dopa: 5458610,
    //     "japan-toreca": 6386373,
    //     clove: 9484507,
    //     gacha24: 9838455,
    //     iris: 3994592
    // },
    // {
    //     date: new Date('2023/11/11 22:00'),
    //     "ex-toreca": 4693550,
    //     dopa: 7944987,
    //     "japan-toreca": 2354887,
    //     clove: 9467983,
    //     gacha24: 3795577,
    //     iris: 8505409
    // },
    // {
    //     date: new Date('2023/11/11 23:00'),
    //     "ex-toreca": 9834045,
    //     dopa: 3353503,
    //     "japan-toreca": 7399401,
    //     clove: 5800048,
    //     gacha24: 1694838,
    //     iris: 5931472
    // },
    // {
    //     date: new Date('2023/11/12 0:00'),
    //     "ex-toreca": 9588040,
    //     dopa: 2948884,
    //     "japan-toreca": 6167859,
    //     clove: 3731957,
    //     gacha24: 5015498,
    //     iris: 798602
    // },
    // {
    //     date: new Date('2023/11/12 1:00'),
    //     "ex-toreca": 4992724,
    //     dopa: 6184102,
    //     "japan-toreca": 3969853,
    //     clove: 3004303,
    //     gacha24: 550701,
    //     iris: 2954795
    // },
    // {
    //     date: new Date('2023/11/12 2:00'),
    //     "ex-toreca": 988376,
    //     dopa: 3419899,
    //     "japan-toreca": 2206190,
    //     clove: 7134615,
    //     gacha24: 6227761,
    //     iris: 3542587
    // },
    // {
    //     date: new Date('2023/11/12 3:00'),
    //     "ex-toreca": 5528305,
    //     dopa: 6008298,
    //     "japan-toreca": 2407753,
    //     clove: 1398944,
    //     gacha24: 8882362,
    //     iris: 1879777
    // },
    // {
    //     date: new Date('2023/11/12 4:00'),
    //     "ex-toreca": 9818607,
    //     dopa: 6021476,
    //     "japan-toreca": 3466627,
    //     clove: 3387815,
    //     gacha24: 93385,
    //     iris: 3991751
    // },
    // {
    //     date: new Date('2023/11/12 5:00'),
    //     "ex-toreca": 6212970,
    //     dopa: 5873234,
    //     "japan-toreca": 8854903,
    //     clove: 6941702,
    //     gacha24: 1442333,
    //     iris: 8321239
    // },
    // {
    //     date: new Date('2023/11/12 6:00'),
    //     "ex-toreca": 1187740,
    //     dopa: 786065,
    //     "japan-toreca": 2105187,
    //     clove: 9681783,
    //     gacha24: 4832942,
    //     iris: 7788275
    // },
    // {
    //     date: new Date('2023/11/12 7:00'),
    //     "ex-toreca": 7893627,
    //     dopa: 336749,
    //     "japan-toreca": 1110897,
    //     clove: 6446630,
    //     gacha24: 1658943,
    //     iris: 3305641
    // },
    // {
    //     date: new Date('2023/11/12 8:00'),
    //     "ex-toreca": 1003784,
    //     dopa: 287481,
    //     "japan-toreca": 8902247,
    //     clove: 9768908,
    //     gacha24: 1013995,
    //     iris: 1245400
    // },
    // {
    //     date: new Date('2023/11/12 9:00'),
    //     "ex-toreca": 1590071,
    //     dopa: 9261243,
    //     "japan-toreca": 9422920,
    //     clove: 7062566,
    //     gacha24: 4019272,
    //     iris: 2775137
    // },
    // {
    //     date: new Date('2023/11/12 10:00'),
    //     "ex-toreca": 3231828,
    //     dopa: 8937343,
    //     "japan-toreca": 8608610,
    //     clove: 7185049,
    //     gacha24: 9373677,
    //     iris: 6748291
    // },
    // {
    //     date: new Date('2023/11/12 11:00'),
    //     "ex-toreca": 5788723,
    //     dopa: 9776166,
    //     "japan-toreca": 6580544,
    //     clove: 563167,
    //     gacha24: 5159477,
    //     iris: 2159256
    // },
    // {
    //     date: new Date('2023/11/12 12:00'),
    //     "ex-toreca": 1004691,
    //     dopa: 943885,
    //     "japan-toreca": 9849860,
    //     clove: 1379842,
    //     gacha24: 5559698,
    //     iris: 8294199
    // },
    // {
    //     date: new Date('2023/11/12 13:00'),
    //     "ex-toreca": 8918915,
    //     dopa: 9714945,
    //     "japan-toreca": 8431162,
    //     clove: 9801714,
    //     gacha24: 8306042,
    //     iris: 6900272
    // },
    // {
    //     date: new Date('2023/11/12 14:00'),
    //     "ex-toreca": 558468,
    //     dopa: 3263809,
    //     "japan-toreca": 9917418,
    //     clove: 464403,
    //     gacha24: 4410632,
    //     iris: 3206058
    // },
    // {
    //     date: new Date('2023/11/12 15:00'),
    //     "ex-toreca": 2511386,
    //     dopa: 9130191,
    //     "japan-toreca": 3068449,
    //     clove: 248579,
    //     gacha24: 8605078,
    //     iris: 1839675
    // },
    // {
    //     date: new Date('2023/11/12 16:00'),
    //     "ex-toreca": 2109066,
    //     dopa: 3237925,
    //     "japan-toreca": 3327300,
    //     clove: 6365108,
    //     gacha24: 6686742,
    //     iris: 7586789
    // },
    // {
    //     date: new Date('2023/11/12 17:00'),
    //     "ex-toreca": 7071283,
    //     dopa: 3003019,
    //     "japan-toreca": 4362145,
    //     clove: 6167364,
    //     gacha24: 8363254,
    //     iris: 33919
    // },
    // {
    //     date: new Date('2023/11/12 18:00'),
    //     "ex-toreca": 8323699,
    //     dopa: 6779467,
    //     "japan-toreca": 4524173,
    //     clove: 4709661,
    //     gacha24: 5523273,
    //     iris: 6581655
    // },
    // {
    //     date: new Date('2023/11/12 19:00'),
    //     "ex-toreca": 1785325,
    //     dopa: 5126662,
    //     "japan-toreca": 5049882,
    //     clove: 5224499,
    //     gacha24: 1211495,
    //     iris: 3967094
    // },
    // {
    //     date: new Date('2023/11/12 20:00'),
    //     "ex-toreca": 2662089,
    //     dopa: 4918100,
    //     "japan-toreca": 9242121,
    //     clove: 3231435,
    //     gacha24: 3463328,
    //     iris: 6969230
    // },
    // {
    //     date: new Date('2023/11/12 21:00'),
    //     "ex-toreca": 8864683,
    //     dopa: 9504938,
    //     "japan-toreca": 7717731,
    //     clove: 1387642,
    //     gacha24: 3870970,
    //     iris: 1437254
    // },
    // {
    //     date: new Date('2023/11/12 22:00'),
    //     "ex-toreca": 5042826,
    //     dopa: 9557261,
    //     "japan-toreca": 942257,
    //     clove: 3981331,
    //     gacha24: 7480993,
    //     iris: 7434047
    // },
    // {
    //     date: new Date('2023/11/12 23:00'),
    //     "ex-toreca": 2295943,
    //     dopa: 4268154,
    //     "japan-toreca": 8185181,
    //     clove: 6731872,
    //     gacha24: 5864582,
    //     iris: 2921175
    // },
    // {
    //     date: new Date('2023/11/13 0:00'),
    //     "ex-toreca": 9661069,
    //     dopa: 1826984,
    //     "japan-toreca": 3658498,
    //     clove: 6268273,
    //     gacha24: 4360076,
    //     iris: 9051261
    // },
    // {
    //     date: new Date('2023/11/13 1:00'),
    //     "ex-toreca": 481565,
    //     dopa: 2366803,
    //     "japan-toreca": 2973609,
    //     clove: 8274474,
    //     gacha24: 7918161,
    //     iris: 506246
    // },
    // {
    //     date: new Date('2023/11/13 2:00'),
    //     "ex-toreca": 9497923,
    //     dopa: 488167,
    //     "japan-toreca": 7609312,
    //     clove: 7297761,
    //     gacha24: 9498811,
    //     iris: 6480889
    // },
    // {
    //     date: new Date('2023/11/13 3:00'),
    //     "ex-toreca": 9834434,
    //     dopa: 8549201,
    //     "japan-toreca": 2427805,
    //     clove: 6300112,
    //     gacha24: 1562519,
    //     iris: 6536691
    // },
    // {
    //     date: new Date('2023/11/13 4:00'),
    //     "ex-toreca": 362595,
    //     dopa: 5986444,
    //     "japan-toreca": 514524,
    //     clove: 6221443,
    //     gacha24: 1417485,
    //     iris: 8409742
    // },
    // {
    //     date: new Date('2023/11/13 5:00'),
    //     "ex-toreca": 1572416,
    //     dopa: 8529856,
    //     "japan-toreca": 2451315,
    //     clove: 2435463,
    //     gacha24: 5872866,
    //     iris: 8645764
    // },
    // {
    //     date: new Date('2023/11/13 6:00'),
    //     "ex-toreca": 6820678,
    //     dopa: 4432700,
    //     "japan-toreca": 150751,
    //     clove: 6666360,
    //     gacha24: 8807893,
    //     iris: 9729473
    // },
    // {
    //     date: new Date('2023/11/13 7:00'),
    //     "ex-toreca": 9032915,
    //     dopa: 4599398,
    //     "japan-toreca": 7154968,
    //     clove: 395531,
    //     gacha24: 2060113,
    //     iris: 1909555
    // },
    // {
    //     date: new Date('2023/11/13 8:00'),
    //     "ex-toreca": 4706247,
    //     dopa: 4006920,
    //     "japan-toreca": 364691,
    //     clove: 2512007,
    //     gacha24: 1798145,
    //     iris: 7392882
    // },
    // {
    //     date: new Date('2023/11/13 9:00'),
    //     "ex-toreca": 7942576,
    //     dopa: 6156800,
    //     "japan-toreca": 3469672,
    //     clove: 8770180,
    //     gacha24: 2380967,
    //     iris: 3733883
    // },
    // {
    //     date: new Date('2023/11/13 10:00'),
    //     "ex-toreca": 2786100,
    //     dopa: 4721565,
    //     "japan-toreca": 5295580,
    //     clove: 2912876,
    //     gacha24: 6953395,
    //     iris: 6423196
    // },
    // {
    //     date: new Date('2023/11/13 11:00'),
    //     "ex-toreca": 5090375,
    //     dopa: 2495908,
    //     "japan-toreca": 9611701,
    //     clove: 1076375,
    //     gacha24: 8429386,
    //     iris: 7850712
    // },
    // {
    //     date: new Date('2023/11/13 12:00'),
    //     "ex-toreca": 1149820,
    //     dopa: 6021372,
    //     "japan-toreca": 2963242,
    //     clove: 6664123,
    //     gacha24: 4856483,
    //     iris: 897442
    // },
    // {
    //     date: new Date('2023/11/13 13:00'),
    //     "ex-toreca": 9092096,
    //     dopa: 6425759,
    //     "japan-toreca": 3113928,
    //     clove: 6624746,
    //     gacha24: 3382778,
    //     iris: 4589634
    // },
    // {
    //     date: new Date('2023/11/13 14:00'),
    //     "ex-toreca": 6445855,
    //     dopa: 3854838,
    //     "japan-toreca": 8252486,
    //     clove: 4943542,
    //     gacha24: 594168,
    //     iris: 539472
    // },
    // {
    //     date: new Date('2023/11/13 15:00'),
    //     "ex-toreca": 8596653,
    //     dopa: 9012740,
    //     "japan-toreca": 7437158,
    //     clove: 1613317,
    //     gacha24: 5608192,
    //     iris: 114151
    // },
    // {
    //     date: new Date('2023/11/13 16:00'),
    //     "ex-toreca": 9871072,
    //     dopa: 5957836,
    //     "japan-toreca": 3652908,
    //     clove: 4877063,
    //     gacha24: 2999670,
    //     iris: 3095843
    // },
    // {
    //     date: new Date('2023/11/13 17:00'),
    //     "ex-toreca": 8607426,
    //     dopa: 4609803,
    //     "japan-toreca": 459514,
    //     clove: 994012,
    //     gacha24: 355340,
    //     iris: 5803492
    // },
    // {
    //     date: new Date('2023/11/13 18:00'),
    //     "ex-toreca": 710848,
    //     dopa: 2496877,
    //     "japan-toreca": 594633,
    //     clove: 1820991,
    //     gacha24: 9681836,
    //     iris: 7653043
    // },
    // {
    //     date: new Date('2023/11/13 19:00'),
    //     "ex-toreca": 8487238,
    //     dopa: 2621013,
    //     "japan-toreca": 9352320,
    //     clove: 9073805,
    //     gacha24: 3425036,
    //     iris: 6261754
    // },
    // {
    //     date: new Date('2023/11/13 20:00'),
    //     "ex-toreca": 2689480,
    //     dopa: 1233681,
    //     "japan-toreca": 5619363,
    //     clove: 8273193,
    //     gacha24: 775049,
    //     iris: 7473973
    // },
    // {
    //     date: new Date('2023/11/13 21:00'),
    //     "ex-toreca": 5740823,
    //     dopa: 3776825,
    //     "japan-toreca": 5042358,
    //     clove: 762099,
    //     gacha24: 1456645,
    //     iris: 2767583
    // },
    // {
    //     date: new Date('2023/11/13 22:00'),
    //     "ex-toreca": 2966010,
    //     dopa: 8265379,
    //     "japan-toreca": 547362,
    //     clove: 455456,
    //     gacha24: 1199347,
    //     iris: 4935456
    // },
    // {
    //     date: new Date('2023/11/13 23:00'),
    //     "ex-toreca": 3729149,
    //     dopa: 4718324,
    //     "japan-toreca": 3563141,
    //     clove: 2281615,
    //     gacha24: 1687842,
    //     iris: 990224
    // },
    // {
    //     date: new Date('2023/11/14 0:00'),
    //     "ex-toreca": 7020903,
    //     dopa: 1851704,
    //     "japan-toreca": 6959710,
    //     clove: 4449112,
    //     gacha24: 4726297,
    //     iris: 1263818
    // },
    // {
    //     date: new Date('2023/11/14 1:00'),
    //     "ex-toreca": 505377,
    //     dopa: 311499,
    //     "japan-toreca": 7372558,
    //     clove: 5619347,
    //     gacha24: 4784856,
    //     iris: 8179345
    // },
    // {
    //     date: new Date('2023/11/14 2:00'),
    //     "ex-toreca": 8348103,
    //     dopa: 5666953,
    //     "japan-toreca": 3515612,
    //     clove: 1245855,
    //     gacha24: 5064275,
    //     iris: 2388334
    // },
    // {
    //     date: new Date('2023/11/14 3:00'),
    //     "ex-toreca": 5058898,
    //     dopa: 8231154,
    //     "japan-toreca": 2612546,
    //     clove: 8164283,
    //     gacha24: 5262380,
    //     iris: 9402318
    // },
    // {
    //     date: new Date('2023/11/14 4:00'),
    //     "ex-toreca": 1960195,
    //     dopa: 1557110,
    //     "japan-toreca": 3124872,
    //     clove: 7931890,
    //     gacha24: 5391353,
    //     iris: 9461886
    // },
    // {
    //     date: new Date('2023/11/14 5:00'),
    //     "ex-toreca": 8091807,
    //     dopa: 9696724,
    //     "japan-toreca": 7320744,
    //     clove: 1421814,
    //     gacha24: 7906683,
    //     iris: 2685483
    // },
    // {
    //     date: new Date('2023/11/14 6:00'),
    //     "ex-toreca": 8647173,
    //     dopa: 5406288,
    //     "japan-toreca": 5506949,
    //     clove: 1427224,
    //     gacha24: 9582509,
    //     iris: 7558447
    // },
    // {
    //     date: new Date('2023/11/14 7:00'),
    //     "ex-toreca": 7445750,
    //     dopa: 263015,
    //     "japan-toreca": 7522445,
    //     clove: 5256844,
    //     gacha24: 6431548,
    //     iris: 5266758
    // },
    // {
    //     date: new Date('2023/11/14 8:00'),
    //     "ex-toreca": 3517685,
    //     dopa: 1773810,
    //     "japan-toreca": 4292805,
    //     clove: 5228536,
    //     gacha24: 8853715,
    //     iris: 3391121
    // },
    // {
    //     date: new Date('2023/11/14 9:00'),
    //     "ex-toreca": 825480,
    //     dopa: 1197018,
    //     "japan-toreca": 4895906,
    //     clove: 3116934,
    //     gacha24: 2758705,
    //     iris: 8205744
    // },
    // {
    //     date: new Date('2023/11/14 10:00'),
    //     "ex-toreca": 3883819,
    //     dopa: 2673963,
    //     "japan-toreca": 3999476,
    //     clove: 8305357,
    //     gacha24: 6480454,
    //     iris: 312968
    // },
    // {
    //     date: new Date('2023/11/14 11:00'),
    //     "ex-toreca": 9578308,
    //     dopa: 9480183,
    //     "japan-toreca": 2000494,
    //     clove: 2723718,
    //     gacha24: 5812394,
    //     iris: 9070059
    // },
    // {
    //     date: new Date('2023/11/14 12:00'),
    //     "ex-toreca": 4200037,
    //     dopa: 2221799,
    //     "japan-toreca": 3095557,
    //     clove: 1126665,
    //     gacha24: 810680,
    //     iris: 390900
    // },
    // {
    //     date: new Date('2023/11/14 13:00'),
    //     "ex-toreca": 6518646,
    //     dopa: 8666339,
    //     "japan-toreca": 4776495,
    //     clove: 2272888,
    //     gacha24: 256491,
    //     iris: 5579515
    // },
    // {
    //     date: new Date('2023/11/14 14:00'),
    //     "ex-toreca": 9283103,
    //     dopa: 1839515,
    //     "japan-toreca": 2356039,
    //     clove: 9151255,
    //     gacha24: 4204260,
    //     iris: 6155558
    // },
    // {
    //     date: new Date('2023/11/14 15:00'),
    //     "ex-toreca": 6105571,
    //     dopa: 2291028,
    //     "japan-toreca": 1200695,
    //     clove: 3224665,
    //     gacha24: 3032898,
    //     iris: 7018438
    // },
    // {
    //     date: new Date('2023/11/14 16:00'),
    //     "ex-toreca": 7317043,
    //     dopa: 8498146,
    //     "japan-toreca": 5509738,
    //     clove: 9050985,
    //     gacha24: 5995148,
    //     iris: 1697454
    // },
    // {
    //     date: new Date('2023/11/14 17:00'),
    //     "ex-toreca": 5572256,
    //     dopa: 5862690,
    //     "japan-toreca": 7904100,
    //     clove: 2084751,
    //     gacha24: 406297,
    //     iris: 989816
    // },
    // {
    //     date: new Date('2023/11/14 18:00'),
    //     "ex-toreca": 6861332,
    //     dopa: 5183335,
    //     "japan-toreca": 3730809,
    //     clove: 6158015,
    //     gacha24: 2957063,
    //     iris: 2357628
    // },
    // {
    //     date: new Date('2023/11/14 19:00'),
    //     "ex-toreca": 237179,
    //     dopa: 9835446,
    //     "japan-toreca": 9897675,
    //     clove: 4686203,
    //     gacha24: 6508607,
    //     iris: 2845832
    // },
    // {
    //     date: new Date('2023/11/14 20:00'),
    //     "ex-toreca": 9166230,
    //     dopa: 4287986,
    //     "japan-toreca": 5859306,
    //     clove: 5079677,
    //     gacha24: 9700868,
    //     iris: 207456
    // },
    // {
    //     date: new Date('2023/11/14 21:00'),
    //     "ex-toreca": 2460583,
    //     dopa: 6973778,
    //     "japan-toreca": 1693937,
    //     clove: 693640,
    //     gacha24: 3406231,
    //     iris: 3480995
    // },
    // {
    //     date: new Date('2023/11/14 22:00'),
    //     "ex-toreca": 6440656,
    //     dopa: 6855690,
    //     "japan-toreca": 4748226,
    //     clove: 4066529,
    //     gacha24: 4395428,
    //     iris: 4210224
    // },
    // {
    //     date: new Date('2023/11/14 23:00'),
    //     "ex-toreca": 4102155,
    //     dopa: 1656208,
    //     "japan-toreca": 9973274,
    //     clove: 2502605,
    //     gacha24: 107344,
    //     iris: 7132144
    // },
    // {
    //     date: new Date('2023/11/15 0:00'),
    //     "ex-toreca": 3004000,
    //     dopa: 9878546,
    //     "japan-toreca": 2392608,
    //     clove: 6063541,
    //     gacha24: 4327571,
    //     iris: 6336693
    // },
    // {
    //     date: new Date('2023/11/15 1:00'),
    //     "ex-toreca": 2832536,
    //     dopa: 4990577,
    //     "japan-toreca": 2672743,
    //     clove: 6482870,
    //     gacha24: 806436,
    //     iris: 75377
    // },
    // {
    //     date: new Date('2023/11/15 2:00'),
    //     "ex-toreca": 873075,
    //     dopa: 8638769,
    //     "japan-toreca": 9977979,
    //     clove: 4838244,
    //     gacha24: 8805952,
    //     iris: 5955923
    // },
    // {
    //     date: new Date('2023/11/15 3:00'),
    //     "ex-toreca": 1541610,
    //     dopa: 2412340,
    //     "japan-toreca": 5181757,
    //     clove: 5472556,
    //     gacha24: 9126996,
    //     iris: 4912958
    // },
    // {
    //     date: new Date('2023/11/15 4:00'),
    //     "ex-toreca": 3561542,
    //     dopa: 9046548,
    //     "japan-toreca": 4856110,
    //     clove: 1359621,
    //     gacha24: 4701875,
    //     iris: 5157238
    // },
    // {
    //     date: new Date('2023/11/15 5:00'),
    //     "ex-toreca": 743773,
    //     dopa: 3513436,
    //     "japan-toreca": 5540062,
    //     clove: 6847824,
    //     gacha24: 7510967,
    //     iris: 2631649
    // },
    // {
    //     date: new Date('2023/11/15 6:00'),
    //     "ex-toreca": 742787,
    //     dopa: 746545,
    //     "japan-toreca": 6297646,
    //     clove: 1947379,
    //     gacha24: 7585678,
    //     iris: 522103
    // },
    // {
    //     date: new Date('2023/11/15 7:00'),
    //     "ex-toreca": 7749813,
    //     dopa: 4750727,
    //     "japan-toreca": 3810214,
    //     clove: 1288293,
    //     gacha24: 1108363,
    //     iris: 4683875
    // },
    // {
    //     date: new Date('2023/11/15 8:00'),
    //     "ex-toreca": 2047617,
    //     dopa: 1509046,
    //     "japan-toreca": 3920757,
    //     clove: 4331651,
    //     gacha24: 68806,
    //     iris: 3112962
    // },
    // {
    //     date: new Date('2023/11/15 9:00'),
    //     "ex-toreca": 3974763,
    //     dopa: 6927527,
    //     "japan-toreca": 235180,
    //     clove: 9680804,
    //     gacha24: 468292,
    //     iris: 7713612
    // },
    // {
    //     date: new Date('2023/11/15 10:00'),
    //     "ex-toreca": 9810767,
    //     dopa: 5021060,
    //     "japan-toreca": 4189021,
    //     clove: 7958458,
    //     gacha24: 1012175,
    //     iris: 7256120
    // },
    // {
    //     date: new Date('2023/11/15 11:00'),
    //     "ex-toreca": 9641374,
    //     dopa: 4552088,
    //     "japan-toreca": 1482842,
    //     clove: 1438124,
    //     gacha24: 5495849,
    //     iris: 8901253
    // },
    // {
    //     date: new Date('2023/11/15 12:00'),
    //     "ex-toreca": 8756631,
    //     dopa: 1434930,
    //     "japan-toreca": 1469523,
    //     clove: 7567242,
    //     gacha24: 8236033,
    //     iris: 7813227
    // },
    // {
    //     date: new Date('2023/11/15 13:00'),
    //     "ex-toreca": 6507325,
    //     dopa: 9173115,
    //     "japan-toreca": 2443930,
    //     clove: 9902094,
    //     gacha24: 6226879,
    //     iris: 1095779
    // },
    // {
    //     date: new Date('2023/11/15 14:00'),
    //     "ex-toreca": 4591985,
    //     dopa: 3043699,
    //     "japan-toreca": 6119754,
    //     clove: 1915303,
    //     gacha24: 6239495,
    //     iris: 4651142
    // },
    // {
    //     date: new Date('2023/11/15 15:00'),
    //     "ex-toreca": 8427390,
    //     dopa: 7047141,
    //     "japan-toreca": 6715014,
    //     clove: 6089221,
    //     gacha24: 909181,
    //     iris: 6653775
    // },
    // {
    //     date: new Date('2023/11/15 16:00'),
    //     "ex-toreca": 969593,
    //     dopa: 7645103,
    //     "japan-toreca": 9932629,
    //     clove: 1922311,
    //     gacha24: 3383308,
    //     iris: 5230949
    // },
    // {
    //     date: new Date('2023/11/15 17:00'),
    //     "ex-toreca": 8078462,
    //     dopa: 2485486,
    //     "japan-toreca": 9809108,
    //     clove: 8705913,
    //     gacha24: 201382,
    //     iris: 1157044
    // },
    // {
    //     date: new Date('2023/11/15 18:00'),
    //     "ex-toreca": 2095195,
    //     dopa: 485288,
    //     "japan-toreca": 678038,
    //     clove: 6179890,
    //     gacha24: 2059573,
    //     iris: 1194190
    // },
    // {
    //     date: new Date('2023/11/15 19:00'),
    //     "ex-toreca": 18526,
    //     dopa: 1740453,
    //     "japan-toreca": 5196739,
    //     clove: 6559100,
    //     gacha24: 710182,
    //     iris: 9857329
    // },
    // {
    //     date: new Date('2023/11/15 20:00'),
    //     "ex-toreca": 9578808,
    //     dopa: 3750720,
    //     "japan-toreca": 579983,
    //     clove: 9930940,
    //     gacha24: 8388802,
    //     iris: 8462600
    // },
    // {
    //     date: new Date('2023/11/15 21:00'),
    //     "ex-toreca": 8065446,
    //     dopa: 4496884,
    //     "japan-toreca": 6147909,
    //     clove: 9546288,
    //     gacha24: 3930093,
    //     iris: 6601176
    // },
    // {
    //     date: new Date('2023/11/15 22:00'),
    //     "ex-toreca": 4744090,
    //     dopa: 6611952,
    //     "japan-toreca": 8825321,
    //     clove: 4548251,
    //     gacha24: 1122201,
    //     iris: 5762101
    // },
    // {
    //     date: new Date('2023/11/15 23:00'),
    //     "ex-toreca": 5688067,
    //     dopa: 4699464,
    //     "japan-toreca": 4389307,
    //     clove: 1267630,
    //     gacha24: 3594944,
    //     iris: 6235458
    // },
    // {
    //     date: new Date('2023/11/16 0:00'),
    //     "ex-toreca": 4347735,
    //     dopa: 8485075,
    //     "japan-toreca": 7581729,
    //     clove: 8827323,
    //     gacha24: 9810929,
    //     iris: 7217639
    // },
    // {
    //     date: new Date('2023/11/16 1:00'),
    //     "ex-toreca": 3825204,
    //     dopa: 7543106,
    //     "japan-toreca": 3741985,
    //     clove: 3439378,
    //     gacha24: 4714032,
    //     iris: 6142244
    // },
    // {
    //     date: new Date('2023/11/16 2:00'),
    //     "ex-toreca": 9694898,
    //     dopa: 7230264,
    //     "japan-toreca": 8495443,
    //     clove: 8602521,
    //     gacha24: 1109970,
    //     iris: 7401467
    // },
    // {
    //     date: new Date('2023/11/16 3:00'),
    //     "ex-toreca": 5474214,
    //     dopa: 6433784,
    //     "japan-toreca": 7060799,
    //     clove: 7740277,
    //     gacha24: 7445148,
    //     iris: 3198831
    // },
    // {
    //     date: new Date('2023/11/16 4:00'),
    //     "ex-toreca": 5345287,
    //     dopa: 5202805,
    //     "japan-toreca": 1878644,
    //     clove: 666966,
    //     gacha24: 4023365,
    //     iris: 2107724
    // },
    // {
    //     date: new Date('2023/11/16 5:00'),
    //     "ex-toreca": 2426184,
    //     dopa: 7963403,
    //     "japan-toreca": 3154623,
    //     clove: 3195032,
    //     gacha24: 5608592,
    //     iris: 3315253
    // },
    // {
    //     date: new Date('2023/11/16 6:00'),
    //     "ex-toreca": 4258799,
    //     dopa: 4432957,
    //     "japan-toreca": 2501029,
    //     clove: 8877079,
    //     gacha24: 9229576,
    //     iris: 4163077
    // },
    // {
    //     date: new Date('2023/11/16 7:00'),
    //     "ex-toreca": 499350,
    //     dopa: 2917618,
    //     "japan-toreca": 7925343,
    //     clove: 2516398,
    //     gacha24: 9683349,
    //     iris: 8718425
    // },
    // {
    //     date: new Date('2023/11/16 8:00'),
    //     "ex-toreca": 5571573,
    //     dopa: 7950846,
    //     "japan-toreca": 637706,
    //     clove: 785347,
    //     gacha24: 4630032,
    //     iris: 9953639
    // },
    // {
    //     date: new Date('2023/11/16 9:00'),
    //     "ex-toreca": 195070,
    //     dopa: 8186101,
    //     "japan-toreca": 9997364,
    //     clove: 6845060,
    //     gacha24: 7858569,
    //     iris: 30311
    // },
    // {
    //     date: new Date('2023/11/16 10:00'),
    //     "ex-toreca": 3964301,
    //     dopa: 2321399,
    //     "japan-toreca": 9046425,
    //     clove: 3042459,
    //     gacha24: 6255992,
    //     iris: 3497475
    // },
    // {
    //     date: new Date('2023/11/16 11:00'),
    //     "ex-toreca": 7772669,
    //     dopa: 2650340,
    //     "japan-toreca": 6711185,
    //     clove: 63577,
    //     gacha24: 5854891,
    //     iris: 6170142
    // },
    // {
    //     date: new Date('2023/11/16 12:00'),
    //     "ex-toreca": 1682194,
    //     dopa: 6210280,
    //     "japan-toreca": 2397522,
    //     clove: 204672,
    //     gacha24: 3951916,
    //     iris: 7957786
    // },
    // {
    //     date: new Date('2023/11/16 13:00'),
    //     "ex-toreca": 471161,
    //     dopa: 9830654,
    //     "japan-toreca": 3311068,
    //     clove: 1019458,
    //     gacha24: 221613,
    //     iris: 6561668
    // },
    // {
    //     date: new Date('2023/11/16 14:00'),
    //     "ex-toreca": 1488093,
    //     dopa: 9700302,
    //     "japan-toreca": 4884116,
    //     clove: 8663227,
    //     gacha24: 1352543,
    //     iris: 3569787
    // },
    // {
    //     date: new Date('2023/11/16 15:00'),
    //     "ex-toreca": 252551,
    //     dopa: 3404862,
    //     "japan-toreca": 8294417,
    //     clove: 3288148,
    //     gacha24: 141129,
    //     iris: 9017573
    // },
    // {
    //     date: new Date('2023/11/16 16:00'),
    //     "ex-toreca": 5826887,
    //     dopa: 8858365,
    //     "japan-toreca": 2835138,
    //     clove: 537070,
    //     gacha24: 1148515,
    //     iris: 6116383
    // },
    // {
    //     date: new Date('2023/11/16 17:00'),
    //     "ex-toreca": 3892546,
    //     dopa: 4917337,
    //     "japan-toreca": 7056523,
    //     clove: 1567748,
    //     gacha24: 5688927,
    //     iris: 1497007
    // },
    // {
    //     date: new Date('2023/11/16 18:00'),
    //     "ex-toreca": 2533009,
    //     dopa: 6451414,
    //     "japan-toreca": 5136674,
    //     clove: 404541,
    //     gacha24: 2018877,
    //     iris: 7165376
    // },
    // {
    //     date: new Date('2023/11/16 19:00'),
    //     "ex-toreca": 6153619,
    //     dopa: 945750,
    //     "japan-toreca": 8706357,
    //     clove: 46379,
    //     gacha24: 3166760,
    //     iris: 8936619
    // },
    // {
    //     date: new Date('2023/11/16 20:00'),
    //     "ex-toreca": 9251785,
    //     dopa: 1672539,
    //     "japan-toreca": 838187,
    //     clove: 9237615,
    //     gacha24: 9686775,
    //     iris: 3510143
    // },
    // {
    //     date: new Date('2023/11/16 21:00'),
    //     "ex-toreca": 534837,
    //     dopa: 2555804,
    //     "japan-toreca": 6770584,
    //     clove: 5245109,
    //     gacha24: 9507594,
    //     iris: 2129412
    // },
    // {
    //     date: new Date('2023/11/16 22:00'),
    //     "ex-toreca": 4964699,
    //     dopa: 6592798,
    //     "japan-toreca": 1778412,
    //     clove: 7661123,
    //     gacha24: 6933684,
    //     iris: 3348694
    // },
    // {
    //     date: new Date('2023/11/16 23:00'),
    //     "ex-toreca": 9588076,
    //     dopa: 8740979,
    //     "japan-toreca": 4339925,
    //     clove: 444094,
    //     gacha24: 367366,
    //     iris: 3610363
    // },
    // {
    //     date: new Date('2023/11/17 0:00'),
    //     "ex-toreca": 2403164,
    //     dopa: 9547910,
    //     "japan-toreca": 9926712,
    //     clove: 4157408,
    //     gacha24: 9141941,
    //     iris: 7618128
    // },
    // {
    //     date: new Date('2023/11/17 1:00'),
    //     "ex-toreca": 7690115,
    //     dopa: 9157611,
    //     "japan-toreca": 22690,
    //     clove: 4800114,
    //     gacha24: 1971385,
    //     iris: 3068288
    // },
    // {
    //     date: new Date('2023/11/17 2:00'),
    //     "ex-toreca": 259693,
    //     dopa: 2967352,
    //     "japan-toreca": 8626356,
    //     clove: 3227140,
    //     gacha24: 6216469,
    //     iris: 1561843
    // },
    // {
    //     date: new Date('2023/11/17 3:00'),
    //     "ex-toreca": 5925925,
    //     dopa: 9943373,
    //     "japan-toreca": 5305136,
    //     clove: 2363742,
    //     gacha24: 6060479,
    //     iris: 4277616
    // },
    // {
    //     date: new Date('2023/11/17 4:00'),
    //     "ex-toreca": 7146081,
    //     dopa: 7561716,
    //     "japan-toreca": 8917118,
    //     clove: 2101387,
    //     gacha24: 3778689,
    //     iris: 2973684
    // },
    // {
    //     date: new Date('2023/11/17 5:00'),
    //     "ex-toreca": 9916424,
    //     dopa: 8928908,
    //     "japan-toreca": 928989,
    //     clove: 1894766,
    //     gacha24: 2533149,
    //     iris: 7925422
    // },
    // {
    //     date: new Date('2023/11/17 6:00'),
    //     "ex-toreca": 4489974,
    //     dopa: 4360541,
    //     "japan-toreca": 7246055,
    //     clove: 4263221,
    //     gacha24: 7916309,
    //     iris: 8222890
    // },
    // {
    //     date: new Date('2023/11/17 7:00'),
    //     "ex-toreca": 4233869,
    //     dopa: 2291800,
    //     "japan-toreca": 8641250,
    //     clove: 4440445,
    //     gacha24: 816068,
    //     iris: 1875645
    // },
    // {
    //     date: new Date('2023/11/17 8:00'),
    //     "ex-toreca": 6420834,
    //     dopa: 9836122,
    //     "japan-toreca": 3666049,
    //     clove: 2779856,
    //     gacha24: 2460718,
    //     iris: 5789703
    // },
    // {
    //     date: new Date('2023/11/17 9:00'),
    //     "ex-toreca": 3171287,
    //     dopa: 1354462,
    //     "japan-toreca": 6210286,
    //     clove: 6371313,
    //     gacha24: 5488134,
    //     iris: 8384941
    // },
    // {
    //     date: new Date('2023/11/17 10:00'),
    //     "ex-toreca": 5386040,
    //     dopa: 8533594,
    //     "japan-toreca": 2637183,
    //     clove: 2545769,
    //     gacha24: 4104922,
    //     iris: 8288609
    // },
    // {
    //     date: new Date('2023/11/17 11:00'),
    //     "ex-toreca": 7720717,
    //     dopa: 9692941,
    //     "japan-toreca": 1184239,
    //     clove: 5285818,
    //     gacha24: 9771833,
    //     iris: 6418543
    // },
    // {
    //     date: new Date('2023/11/17 12:00'),
    //     "ex-toreca": 6903446,
    //     dopa: 7194850,
    //     "japan-toreca": 4359778,
    //     clove: 4104239,
    //     gacha24: 6596636,
    //     iris: 833145
    // },
    // {
    //     date: new Date('2023/11/17 13:00'),
    //     "ex-toreca": 8169272,
    //     dopa: 9361538,
    //     "japan-toreca": 1175996,
    //     clove: 5133139,
    //     gacha24: 2438173,
    //     iris: 3178093
    // },
    // {
    //     date: new Date('2023/11/17 14:00'),
    //     "ex-toreca": 1145551,
    //     dopa: 1458600,
    //     "japan-toreca": 674432,
    //     clove: 628199,
    //     gacha24: 2697202,
    //     iris: 2410120
    // },
    // {
    //     date: new Date('2023/11/17 15:00'),
    //     "ex-toreca": 5767147,
    //     dopa: 9886575,
    //     "japan-toreca": 7486801,
    //     clove: 1214401,
    //     gacha24: 4711901,
    //     iris: 7531766
    // },
    // {
    //     date: new Date('2023/11/17 16:00'),
    //     "ex-toreca": 610777,
    //     dopa: 1378109,
    //     "japan-toreca": 8010598,
    //     clove: 9838749,
    //     gacha24: 2535558,
    //     iris: 6847540
    // },
    // {
    //     date: new Date('2023/11/17 17:00'),
    //     "ex-toreca": 7898271,
    //     dopa: 8607829,
    //     "japan-toreca": 3458388,
    //     clove: 5515544,
    //     gacha24: 8784859,
    //     iris: 304245
    // },
    // {
    //     date: new Date('2023/11/17 18:00'),
    //     "ex-toreca": 9156761,
    //     dopa: 418040,
    //     "japan-toreca": 1216050,
    //     clove: 92491,
    //     gacha24: 5669531,
    //     iris: 7569894
    // },
    // {
    //     date: new Date('2023/11/17 19:00'),
    //     "ex-toreca": 6061612,
    //     dopa: 2805924,
    //     "japan-toreca": 8971107,
    //     clove: 5271531,
    //     gacha24: 5159241,
    //     iris: 5851400
    // },
    // {
    //     date: new Date('2023/11/17 20:00'),
    //     "ex-toreca": 154943,
    //     dopa: 6021164,
    //     "japan-toreca": 5501509,
    //     clove: 6309166,
    //     gacha24: 109541,
    //     iris: 9403132
    // },
    // {
    //     date: new Date('2023/11/17 21:00'),
    //     "ex-toreca": 6649494,
    //     dopa: 9546291,
    //     "japan-toreca": 3197672,
    //     clove: 9920138,
    //     gacha24: 4803742,
    //     iris: 8689472
    // },
    // {
    //     date: new Date('2023/11/17 22:00'),
    //     "ex-toreca": 4090952,
    //     dopa: 5530992,
    //     "japan-toreca": 3409737,
    //     clove: 9050975,
    //     gacha24: 4719581,
    //     iris: 6686984
    // },
    // {
    //     date: new Date('2023/11/17 23:00'),
    //     "ex-toreca": 1697134,
    //     dopa: 7294512,
    //     "japan-toreca": 3836301,
    //     clove: 8921321,
    //     gacha24: 7747235,
    //     iris: 6301565
    // },
    // {
    //     date: new Date('2023/11/18 0:00'),
    //     "ex-toreca": 114057,
    //     dopa: 2223962,
    //     "japan-toreca": 726429,
    //     clove: 4364885,
    //     gacha24: 1091656,
    //     iris: 1085659
    // },
    // {
    //     date: new Date('2023/11/18 1:00'),
    //     "ex-toreca": 9276041,
    //     dopa: 2436821,
    //     "japan-toreca": 5784447,
    //     clove: 5250372,
    //     gacha24: 4110205,
    //     iris: 2786607
    // },
    // {
    //     date: new Date('2023/11/18 2:00'),
    //     "ex-toreca": 8776548,
    //     dopa: 5159787,
    //     "japan-toreca": 6008828,
    //     clove: 4904639,
    //     gacha24: 1449440,
    //     iris: 703127
    // },
    // {
    //     date: new Date('2023/11/18 3:00'),
    //     "ex-toreca": 7763524,
    //     dopa: 2159872,
    //     "japan-toreca": 2282049,
    //     clove: 8561739,
    //     gacha24: 9065636,
    //     iris: 7189753
    // },
    // {
    //     date: new Date('2023/11/18 4:00'),
    //     "ex-toreca": 8497805,
    //     dopa: 2506791,
    //     "japan-toreca": 6374390,
    //     clove: 3779402,
    //     gacha24: 8943291,
    //     iris: 7712556
    // },
    // {
    //     date: new Date('2023/11/18 5:00'),
    //     "ex-toreca": 835905,
    //     dopa: 3883855,
    //     "japan-toreca": 1116975,
    //     clove: 5240431,
    //     gacha24: 2375841,
    //     iris: 9543360
    // },
    // {
    //     date: new Date('2023/11/18 6:00'),
    //     "ex-toreca": 3457447,
    //     dopa: 6416839,
    //     "japan-toreca": 9232377,
    //     clove: 2656360,
    //     gacha24: 291086,
    //     iris: 5238918
    // },
    // {
    //     date: new Date('2023/11/18 7:00'),
    //     "ex-toreca": 3588706,
    //     dopa: 7168751,
    //     "japan-toreca": 5270239,
    //     clove: 4495989,
    //     gacha24: 743763,
    //     iris: 3175071
    // },
    // {
    //     date: new Date('2023/11/18 8:00'),
    //     "ex-toreca": 5077976,
    //     dopa: 2504543,
    //     "japan-toreca": 5239973,
    //     clove: 804978,
    //     gacha24: 2525898,
    //     iris: 7461632
    // },
    // {
    //     date: new Date('2023/11/18 9:00'),
    //     "ex-toreca": 8732025,
    //     dopa: 5991604,
    //     "japan-toreca": 9336977,
    //     clove: 6434364,
    //     gacha24: 4659390,
    //     iris: 6482866
    // },
    // {
    //     date: new Date('2023/11/18 10:00'),
    //     "ex-toreca": 3246583,
    //     dopa: 3570645,
    //     "japan-toreca": 9367750,
    //     clove: 9801794,
    //     gacha24: 1232957,
    //     iris: 5927743
    // },
    // {
    //     date: new Date('2023/11/18 11:00'),
    //     "ex-toreca": 800363,
    //     dopa: 1497201,
    //     "japan-toreca": 6612130,
    //     clove: 6511019,
    //     gacha24: 2311467,
    //     iris: 1157924
    // },
    // {
    //     date: new Date('2023/11/18 12:00'),
    //     "ex-toreca": 1747480,
    //     dopa: 6404168,
    //     "japan-toreca": 4955876,
    //     clove: 9717130,
    //     gacha24: 4553100,
    //     iris: 3773255
    // },
    // {
    //     date: new Date('2023/11/18 13:00'),
    //     "ex-toreca": 3291498,
    //     dopa: 9032259,
    //     "japan-toreca": 6705292,
    //     clove: 5214752,
    //     gacha24: 5950240,
    //     iris: 7306125
    // },
    // {
    //     date: new Date('2023/11/18 14:00'),
    //     "ex-toreca": 8304409,
    //     dopa: 7273389,
    //     "japan-toreca": 8790993,
    //     clove: 6282985,
    //     gacha24: 400033,
    //     iris: 2921513
    // },
    // {
    //     date: new Date('2023/11/18 15:00'),
    //     "ex-toreca": 8460231,
    //     dopa: 959497,
    //     "japan-toreca": 3246267,
    //     clove: 1219337,
    //     gacha24: 7366107,
    //     iris: 6912980
    // },
    // {
    //     date: new Date('2023/11/18 16:00'),
    //     "ex-toreca": 3294165,
    //     dopa: 7712111,
    //     "japan-toreca": 5193359,
    //     clove: 1321652,
    //     gacha24: 4631852,
    //     iris: 4718512
    // },
    // {
    //     date: new Date('2023/11/18 17:00'),
    //     "ex-toreca": 1183720,
    //     dopa: 7085372,
    //     "japan-toreca": 5507646,
    //     clove: 2486476,
    //     gacha24: 3391455,
    //     iris: 800182
    // },
    // {
    //     date: new Date('2023/11/18 18:00'),
    //     "ex-toreca": 970949,
    //     dopa: 303117,
    //     "japan-toreca": 2761563,
    //     clove: 1023079,
    //     gacha24: 9403108,
    //     iris: 8865921
    // },
    // {
    //     date: new Date('2023/11/18 19:00'),
    //     "ex-toreca": 8998397,
    //     dopa: 1827240,
    //     "japan-toreca": 3320252,
    //     clove: 8131582,
    //     gacha24: 9732688,
    //     iris: 2686197
    // },
    // {
    //     date: new Date('2023/11/18 20:00'),
    //     "ex-toreca": 2492324,
    //     dopa: 6383424,
    //     "japan-toreca": 5978099,
    //     clove: 5238843,
    //     gacha24: 165424,
    //     iris: 4556154
    // },
    // {
    //     date: new Date('2023/11/18 21:00'),
    //     "ex-toreca": 407215,
    //     dopa: 3475008,
    //     "japan-toreca": 2286546,
    //     clove: 5049872,
    //     gacha24: 7601860,
    //     iris: 2412383
    // },
    // {
    //     date: new Date('2023/11/18 22:00'),
    //     "ex-toreca": 1927183,
    //     dopa: 7181783,
    //     "japan-toreca": 6444793,
    //     clove: 8818433,
    //     gacha24: 446637,
    //     iris: 9702681
    // },
    // {
    //     date: new Date('2023/11/18 23:00'),
    //     "ex-toreca": 9250025,
    //     dopa: 7391939,
    //     "japan-toreca": 943701,
    //     clove: 4794229,
    //     gacha24: 876806,
    //     iris: 4115241
    // },
    // {
    //     date: new Date('2023/11/19 0:00'),
    //     "ex-toreca": 3941840,
    //     dopa: 8739741,
    //     "japan-toreca": 9739305,
    //     clove: 1986780,
    //     gacha24: 6919525,
    //     iris: 8684295
    // },
    // {
    //     date: new Date('2023/11/19 1:00'),
    //     "ex-toreca": 689235,
    //     dopa: 8015129,
    //     "japan-toreca": 1240825,
    //     clove: 4443403,
    //     gacha24: 7303956,
    //     iris: 6684601
    // },
    // {
    //     date: new Date('2023/11/19 2:00'),
    //     "ex-toreca": 8562428,
    //     dopa: 504346,
    //     "japan-toreca": 2066976,
    //     clove: 9674898,
    //     gacha24: 2543994,
    //     iris: 799653
    // },
    // {
    //     date: new Date('2023/11/19 3:00'),
    //     "ex-toreca": 9162208,
    //     dopa: 7790257,
    //     "japan-toreca": 5291274,
    //     clove: 608246,
    //     gacha24: 6511574,
    //     iris: 260459
    // },
    // {
    //     date: new Date('2023/11/19 4:00'),
    //     "ex-toreca": 4305173,
    //     dopa: 7804865,
    //     "japan-toreca": 4358537,
    //     clove: 8147051,
    //     gacha24: 7673291,
    //     iris: 2304766
    // },
    // {
    //     date: new Date('2023/11/19 5:00'),
    //     "ex-toreca": 4184233,
    //     dopa: 4351995,
    //     "japan-toreca": 6391472,
    //     clove: 942960,
    //     gacha24: 4478689,
    //     iris: 793636
    // },
    // {
    //     date: new Date('2023/11/19 6:00'),
    //     "ex-toreca": 3655948,
    //     dopa: 4558542,
    //     "japan-toreca": 9936711,
    //     clove: 7357626,
    //     gacha24: 9141061,
    //     iris: 5279883
    // },
    // {
    //     date: new Date('2023/11/19 7:00'),
    //     "ex-toreca": 3402235,
    //     dopa: 4394960,
    //     "japan-toreca": 6459161,
    //     clove: 886370,
    //     gacha24: 2772884,
    //     iris: 8004054
    // },
    // {
    //     date: new Date('2023/11/19 8:00'),
    //     "ex-toreca": 9495627,
    //     dopa: 5286347,
    //     "japan-toreca": 1663067,
    //     clove: 349467,
    //     gacha24: 5139521,
    //     iris: 9023128
    // },
    // {
    //     date: new Date('2023/11/19 9:00'),
    //     "ex-toreca": 941363,
    //     dopa: 661037,
    //     "japan-toreca": 4961672,
    //     clove: 7769672,
    //     gacha24: 9521260,
    //     iris: 8379121
    // },
    // {
    //     date: new Date('2023/11/19 10:00'),
    //     "ex-toreca": 9039846,
    //     dopa: 9910075,
    //     "japan-toreca": 2169999,
    //     clove: 962521,
    //     gacha24: 4796142,
    //     iris: 6506515
    // },
    // {
    //     date: new Date('2023/11/19 11:00'),
    //     "ex-toreca": 8325272,
    //     dopa: 6495823,
    //     "japan-toreca": 7513172,
    //     clove: 1250689,
    //     gacha24: 1672276,
    //     iris: 849916
    // },
    // {
    //     date: new Date('2023/11/19 12:00'),
    //     "ex-toreca": 7351119,
    //     dopa: 1710839,
    //     "japan-toreca": 1142215,
    //     clove: 2785643,
    //     gacha24: 7680666,
    //     iris: 1559983
    // },
    // {
    //     date: new Date('2023/11/19 13:00'),
    //     "ex-toreca": 2518690,
    //     dopa: 3749521,
    //     "japan-toreca": 137387,
    //     clove: 6778907,
    //     gacha24: 3345448,
    //     iris: 6800796
    // },
    // {
    //     date: new Date('2023/11/19 14:00'),
    //     "ex-toreca": 1765247,
    //     dopa: 4365489,
    //     "japan-toreca": 6565161,
    //     clove: 1586442,
    //     gacha24: 7053393,
    //     iris: 7170481
    // },
    // {
    //     date: new Date('2023/11/19 15:00'),
    //     "ex-toreca": 9488514,
    //     dopa: 6665657,
    //     "japan-toreca": 3155728,
    //     clove: 1029622,
    //     gacha24: 8402900,
    //     iris: 6586188
    // },
    // {
    //     date: new Date('2023/11/19 16:00'),
    //     "ex-toreca": 9354251,
    //     dopa: 6718063,
    //     "japan-toreca": 2412200,
    //     clove: 8906683,
    //     gacha24: 2454475,
    //     iris: 2389489
    // },
    // {
    //     date: new Date('2023/11/19 17:00'),
    //     "ex-toreca": 172086,
    //     dopa: 1411162,
    //     "japan-toreca": 1305838,
    //     clove: 2170462,
    //     gacha24: 6255967,
    //     iris: 9864284
    // },
    // {
    //     date: new Date('2023/11/19 18:00'),
    //     "ex-toreca": 3791938,
    //     dopa: 6518667,
    //     "japan-toreca": 9818627,
    //     clove: 1887431,
    //     gacha24: 5953568,
    //     iris: 8274268
    // },
    // {
    //     date: new Date('2023/11/19 19:00'),
    //     "ex-toreca": 1257071,
    //     dopa: 7031291,
    //     "japan-toreca": 8450520,
    //     clove: 6496698,
    //     gacha24: 3329722,
    //     iris: 785970
    // },
    // {
    //     date: new Date('2023/11/19 20:00'),
    //     "ex-toreca": 1999838,
    //     dopa: 6196636,
    //     "japan-toreca": 6610927,
    //     clove: 5978401,
    //     gacha24: 6220717,
    //     iris: 9745070
    // },
    // {
    //     date: new Date('2023/11/19 21:00'),
    //     "ex-toreca": 1712508,
    //     dopa: 8595583,
    //     "japan-toreca": 9227513,
    //     clove: 5296946,
    //     gacha24: 5909580,
    //     iris: 4649484
    // },
    // {
    //     date: new Date('2023/11/19 22:00'),
    //     "ex-toreca": 5438057,
    //     dopa: 5368367,
    //     "japan-toreca": 9500863,
    //     clove: 5024332,
    //     gacha24: 6563651,
    //     iris: 5193424
    // },
    // {
    //     date: new Date('2023/11/19 23:00'),
    //     "ex-toreca": 4524655,
    //     dopa: 293171,
    //     "japan-toreca": 1091308,
    //     clove: 2051102,
    //     gacha24: 6451030,
    //     iris: 6618705
    // },
    // {
    //     date: new Date('2023/11/20 0:00'),
    //     "ex-toreca": 5217294,
    //     dopa: 653354,
    //     "japan-toreca": 7161737,
    //     clove: 9209597,
    //     gacha24: 7615489,
    //     iris: 9489254
    // },
    // {
    //     date: new Date('2023/11/20 1:00'),
    //     "ex-toreca": 249259,
    //     dopa: 4982545,
    //     "japan-toreca": 9141306,
    //     clove: 9018264,
    //     gacha24: 7969760,
    //     iris: 4991460
    // },
    // {
    //     date: new Date('2023/11/20 2:00'),
    //     "ex-toreca": 9790620,
    //     dopa: 8075274,
    //     "japan-toreca": 5624071,
    //     clove: 4023598,
    //     gacha24: 7076915,
    //     iris: 4051753
    // },
    // {
    //     date: new Date('2023/11/20 3:00'),
    //     "ex-toreca": 3093014,
    //     dopa: 5000887,
    //     "japan-toreca": 4023907,
    //     clove: 8326011,
    //     gacha24: 8893880,
    //     iris: 6241422
    // },
    // {
    //     date: new Date('2023/11/20 4:00'),
    //     "ex-toreca": 5782917,
    //     dopa: 2174371,
    //     "japan-toreca": 6226979,
    //     clove: 690136,
    //     gacha24: 9970610,
    //     iris: 5660700
    // },
    // {
    //     date: new Date('2023/11/20 5:00'),
    //     "ex-toreca": 3680625,
    //     dopa: 4439437,
    //     "japan-toreca": 8511352,
    //     clove: 454942,
    //     gacha24: 2488037,
    //     iris: 4322118
    // },
    // {
    //     date: new Date('2023/11/20 6:00'),
    //     "ex-toreca": 8667098,
    //     dopa: 7037091,
    //     "japan-toreca": 8327937,
    //     clove: 4610763,
    //     gacha24: 44036,
    //     iris: 4588225
    // },
    // {
    //     date: new Date('2023/11/20 7:00'),
    //     "ex-toreca": 815677,
    //     dopa: 2073080,
    //     "japan-toreca": 1164850,
    //     clove: 4986965,
    //     gacha24: 7432381,
    //     iris: 2925465
    // },
    // {
    //     date: new Date('2023/11/20 8:00'),
    //     "ex-toreca": 5291675,
    //     dopa: 2268011,
    //     "japan-toreca": 1820659,
    //     clove: 3732103,
    //     gacha24: 4777738,
    //     iris: 724130
    // },
    // {
    //     date: new Date('2023/11/20 9:00'),
    //     "ex-toreca": 1277508,
    //     dopa: 3066923,
    //     "japan-toreca": 9342582,
    //     clove: 2838451,
    //     gacha24: 8182813,
    //     iris: 179772
    // },
    // {
    //     date: new Date('2023/11/20 10:00'),
    //     "ex-toreca": 4777696,
    //     dopa: 6233670,
    //     "japan-toreca": 3707074,
    //     clove: 1043283,
    //     gacha24: 6632185,
    //     iris: 8919157
    // },
    // {
    //     date: new Date('2023/11/20 11:00'),
    //     "ex-toreca": 1245643,
    //     dopa: 2914543,
    //     "japan-toreca": 8023961,
    //     clove: 128341,
    //     gacha24: 9449021,
    //     iris: 7871876
    // },
    // {
    //     date: new Date('2023/11/20 12:00'),
    //     "ex-toreca": 1088738,
    //     dopa: 8080464,
    //     "japan-toreca": 7748962,
    //     clove: 235358,
    //     gacha24: 4007332,
    //     iris: 3682651
    // },
    // {
    //     date: new Date('2023/11/20 13:00'),
    //     "ex-toreca": 7631253,
    //     dopa: 3281989,
    //     "japan-toreca": 7837297,
    //     clove: 7584712,
    //     gacha24: 6435559,
    //     iris: 7524868
    // },
    // {
    //     date: new Date('2023/11/20 14:00'),
    //     "ex-toreca": 9116370,
    //     dopa: 9658344,
    //     "japan-toreca": 2720399,
    //     clove: 9997141,
    //     gacha24: 9732895,
    //     iris: 3647055
    // },
    // {
    //     date: new Date('2023/11/20 15:00'),
    //     "ex-toreca": 2462779,
    //     dopa: 9705490,
    //     "japan-toreca": 3881442,
    //     clove: 1471715,
    //     gacha24: 1170286,
    //     iris: 1125652
    // },
    // {
    //     date: new Date('2023/11/20 16:00'),
    //     "ex-toreca": 3924320,
    //     dopa: 3899645,
    //     "japan-toreca": 7353060,
    //     clove: 2330743,
    //     gacha24: 4770151,
    //     iris: 655379
    // },
    // {
    //     date: new Date('2023/11/20 17:00'),
    //     "ex-toreca": 4372662,
    //     dopa: 7379825,
    //     "japan-toreca": 9538054,
    //     clove: 3247807,
    //     gacha24: 3280661,
    //     iris: 9989860
    // },
    // {
    //     date: new Date('2023/11/20 18:00'),
    //     "ex-toreca": 5955067,
    //     dopa: 5777352,
    //     "japan-toreca": 8808584,
    //     clove: 3451044,
    //     gacha24: 2600947,
    //     iris: 7188168
    // },
    // {
    //     date: new Date('2023/11/20 19:00'),
    //     "ex-toreca": 6686103,
    //     dopa: 4399850,
    //     "japan-toreca": 2311520,
    //     clove: 9638943,
    //     gacha24: 2116385,
    //     iris: 7970288
    // },
    // {
    //     date: new Date('2023/11/20 20:00'),
    //     "ex-toreca": 7822775,
    //     dopa: 3999352,
    //     "japan-toreca": 4177616,
    //     clove: 6619116,
    //     gacha24: 9840105,
    //     iris: 154113
    // },
    // {
    //     date: new Date('2023/11/20 21:00'),
    //     "ex-toreca": 2113596,
    //     dopa: 2591505,
    //     "japan-toreca": 9720649,
    //     clove: 5753103,
    //     gacha24: 4246778,
    //     iris: 3668240
    // },
    // {
    //     date: new Date('2023/11/20 22:00'),
    //     "ex-toreca": 9567886,
    //     dopa: 8122340,
    //     "japan-toreca": 7335620,
    //     clove: 3373657,
    //     gacha24: 5899713,
    //     iris: 4730462
    // },
    // {
    //     date: new Date('2023/11/20 23:00'),
    //     "ex-toreca": 407244,
    //     dopa: 7516995,
    //     "japan-toreca": 785327,
    //     clove: 2711583,
    //     gacha24: 7899846,
    //     iris: 4081302
    // },
    // {
    //     date: new Date('2023/11/21 0:00'),
    //     "ex-toreca": 6060422,
    //     dopa: 4607131,
    //     "japan-toreca": 6631842,
    //     clove: 7906804,
    //     gacha24: 983882,
    //     iris: 7518085
    // },
    // {
    //     date: new Date('2023/11/21 1:00'),
    //     "ex-toreca": 3848919,
    //     dopa: 1361202,
    //     "japan-toreca": 7741891,
    //     clove: 5638239,
    //     gacha24: 7012504,
    //     iris: 1527206
    // },
    // {
    //     date: new Date('2023/11/21 2:00'),
    //     "ex-toreca": 3083951,
    //     dopa: 2731512,
    //     "japan-toreca": 2667947,
    //     clove: 6663354,
    //     gacha24: 1006013,
    //     iris: 7855041
    // },
    // {
    //     date: new Date('2023/11/21 3:00'),
    //     "ex-toreca": 1173994,
    //     dopa: 3690919,
    //     "japan-toreca": 1362667,
    //     clove: 220331,
    //     gacha24: 3552654,
    //     iris: 8366331
    // },
    // {
    //     date: new Date('2023/11/21 4:00'),
    //     "ex-toreca": 6070802,
    //     dopa: 4798283,
    //     "japan-toreca": 5171994,
    //     clove: 1982782,
    //     gacha24: 2810871,
    //     iris: 5911055
    // },
    // {
    //     date: new Date('2023/11/21 5:00'),
    //     "ex-toreca": 853736,
    //     dopa: 455814,
    //     "japan-toreca": 9058933,
    //     clove: 868585,
    //     gacha24: 3437112,
    //     iris: 3368772
    // },
    // {
    //     date: new Date('2023/11/21 6:00'),
    //     "ex-toreca": 6190999,
    //     dopa: 9721888,
    //     "japan-toreca": 4566844,
    //     clove: 5623414,
    //     gacha24: 9691497,
    //     iris: 5663458
    // },
    // {
    //     date: new Date('2023/11/21 7:00'),
    //     "ex-toreca": 7299791,
    //     dopa: 4529206,
    //     "japan-toreca": 131988,
    //     clove: 4437295,
    //     gacha24: 2873878,
    //     iris: 4665687
    // },
    // {
    //     date: new Date('2023/11/21 8:00'),
    //     "ex-toreca": 9133935,
    //     dopa: 98566,
    //     "japan-toreca": 7838890,
    //     clove: 907303,
    //     gacha24: 9159632,
    //     iris: 6205241
    // },
    // {
    //     date: new Date('2023/11/21 9:00'),
    //     "ex-toreca": 7355636,
    //     dopa: 9935139,
    //     "japan-toreca": 4159382,
    //     clove: 3006952,
    //     gacha24: 3118255,
    //     iris: 3485745
    // },
    // {
    //     date: new Date('2023/11/21 10:00'),
    //     "ex-toreca": 7620544,
    //     dopa: 6505242,
    //     "japan-toreca": 2779152,
    //     clove: 4645715,
    //     gacha24: 8430033,
    //     iris: 5902702
    // },
    // {
    //     date: new Date('2023/11/21 11:00'),
    //     "ex-toreca": 3470444,
    //     dopa: 1568474,
    //     "japan-toreca": 4448051,
    //     clove: 8442095,
    //     gacha24: 2170377,
    //     iris: 9728362
    // },
    // {
    //     date: new Date('2023/11/21 12:00'),
    //     "ex-toreca": 5548683,
    //     dopa: 6469027,
    //     "japan-toreca": 5843091,
    //     clove: 8828663,
    //     gacha24: 7846414,
    //     iris: 9263584
    // },
    // {
    //     date: new Date('2023/11/21 13:00'),
    //     "ex-toreca": 3372473,
    //     dopa: 3033434,
    //     "japan-toreca": 3634578,
    //     clove: 779211,
    //     gacha24: 8604481,
    //     iris: 5136189
    // },
    // {
    //     date: new Date('2023/11/21 14:00'),
    //     "ex-toreca": 7775236,
    //     dopa: 9083652,
    //     "japan-toreca": 528093,
    //     clove: 3187367,
    //     gacha24: 9107485,
    //     iris: 2906769
    // },
    // {
    //     date: new Date('2023/11/21 15:00'),
    //     "ex-toreca": 6572441,
    //     dopa: 854056,
    //     "japan-toreca": 5041653,
    //     clove: 8536729,
    //     gacha24: 9850499,
    //     iris: 7952041
    // },
    // {
    //     date: new Date('2023/11/21 16:00'),
    //     "ex-toreca": 8857690,
    //     dopa: 5865984,
    //     "japan-toreca": 9880982,
    //     clove: 5517480,
    //     gacha24: 2938039,
    //     iris: 4534488
    // },
    // {
    //     date: new Date('2023/11/21 17:00'),
    //     "ex-toreca": 4809938,
    //     dopa: 8855672,
    //     "japan-toreca": 5208186,
    //     clove: 1698565,
    //     gacha24: 298811,
    //     iris: 4306293
    // },
    // {
    //     date: new Date('2023/11/21 18:00'),
    //     "ex-toreca": 1999922,
    //     dopa: 1572301,
    //     "japan-toreca": 6007896,
    //     clove: 1047228,
    //     gacha24: 5906682,
    //     iris: 5464708
    // },
    // {
    //     date: new Date('2023/11/21 19:00'),
    //     "ex-toreca": 9855746,
    //     dopa: 4079707,
    //     "japan-toreca": 9362765,
    //     clove: 2817737,
    //     gacha24: 6782810,
    //     iris: 225956
    // },
    // {
    //     date: new Date('2023/11/21 20:00'),
    //     "ex-toreca": 1834474,
    //     dopa: 2464912,
    //     "japan-toreca": 8571087,
    //     clove: 676364,
    //     gacha24: 850120,
    //     iris: 6905223
    // },
    // {
    //     date: new Date('2023/11/21 21:00'),
    //     "ex-toreca": 3282156,
    //     dopa: 7665346,
    //     "japan-toreca": 4000128,
    //     clove: 2820341,
    //     gacha24: 3951114,
    //     iris: 4218147
    // },
    // {
    //     date: new Date('2023/11/21 22:00'),
    //     "ex-toreca": 5323049,
    //     dopa: 7073549,
    //     "japan-toreca": 2616946,
    //     clove: 2198747,
    //     gacha24: 882621,
    //     iris: 298803
    // },
    // {
    //     date: new Date('2023/11/21 23:00'),
    //     "ex-toreca": 3583183,
    //     dopa: 6204672,
    //     "japan-toreca": 7631127,
    //     clove: 5652470,
    //     gacha24: 4990592,
    //     iris: 5524967
    // },
    // {
    //     date: new Date('2023/11/22 0:00'),
    //     "ex-toreca": 3265982,
    //     dopa: 2612338,
    //     "japan-toreca": 1947395,
    //     clove: 8584755,
    //     gacha24: 5481752,
    //     iris: 829382
    // },
    // {
    //     date: new Date('2023/11/22 1:00'),
    //     "ex-toreca": 4841196,
    //     dopa: 6291069,
    //     "japan-toreca": 7752997,
    //     clove: 5506340,
    //     gacha24: 1057881,
    //     iris: 9644392
    // },
    // {
    //     date: new Date('2023/11/22 2:00'),
    //     "ex-toreca": 6034028,
    //     dopa: 39108,
    //     "japan-toreca": 971158,
    //     clove: 2902622,
    //     gacha24: 3579745,
    //     iris: 6951807
    // },
    // {
    //     date: new Date('2023/11/22 3:00'),
    //     "ex-toreca": 8815992,
    //     dopa: 5934751,
    //     "japan-toreca": 3260245,
    //     clove: 6263056,
    //     gacha24: 4373429,
    //     iris: 3594086
    // },
    // {
    //     date: new Date('2023/11/22 4:00'),
    //     "ex-toreca": 190739,
    //     dopa: 1894704,
    //     "japan-toreca": 7583118,
    //     clove: 6831962,
    //     gacha24: 5869140,
    //     iris: 2478411
    // },
    // {
    //     date: new Date('2023/11/22 5:00'),
    //     "ex-toreca": 5583783,
    //     dopa: 4351276,
    //     "japan-toreca": 3180453,
    //     clove: 9586065,
    //     gacha24: 5753749,
    //     iris: 3649370
    // },
    // {
    //     date: new Date('2023/11/22 6:00'),
    //     "ex-toreca": 8457931,
    //     dopa: 5088877,
    //     "japan-toreca": 8711342,
    //     clove: 2663139,
    //     gacha24: 6553639,
    //     iris: 8425326
    // },
    // {
    //     date: new Date('2023/11/22 7:00'),
    //     "ex-toreca": 8415376,
    //     dopa: 3782039,
    //     "japan-toreca": 1965033,
    //     clove: 9179388,
    //     gacha24: 6472655,
    //     iris: 2660082
    // },
    // {
    //     date: new Date('2023/11/22 8:00'),
    //     "ex-toreca": 1101952,
    //     dopa: 5676303,
    //     "japan-toreca": 1684478,
    //     clove: 7093013,
    //     gacha24: 9958217,
    //     iris: 9577477
    // },
    // {
    //     date: new Date('2023/11/22 9:00'),
    //     "ex-toreca": 9247008,
    //     dopa: 7741229,
    //     "japan-toreca": 6227438,
    //     clove: 7613268,
    //     gacha24: 9450370,
    //     iris: 2951298
    // },
    // {
    //     date: new Date('2023/11/22 10:00'),
    //     "ex-toreca": 9940289,
    //     dopa: 8581498,
    //     "japan-toreca": 5170979,
    //     clove: 2842633,
    //     gacha24: 5759221,
    //     iris: 502587
    // },
    // {
    //     date: new Date('2023/11/22 11:00'),
    //     "ex-toreca": 8942031,
    //     dopa: 1519379,
    //     "japan-toreca": 99060,
    //     clove: 2916619,
    //     gacha24: 159320,
    //     iris: 3430646
    // },
    // {
    //     date: new Date('2023/11/22 12:00'),
    //     "ex-toreca": 5353038,
    //     dopa: 5398558,
    //     "japan-toreca": 965850,
    //     clove: 2143716,
    //     gacha24: 561243,
    //     iris: 8497371
    // },
    // {
    //     date: new Date('2023/11/22 13:00'),
    //     "ex-toreca": 1669037,
    //     dopa: 4885966,
    //     "japan-toreca": 3103045,
    //     clove: 2137932,
    //     gacha24: 1550288,
    //     iris: 8649951
    // },
    // {
    //     date: new Date('2023/11/22 14:00'),
    //     "ex-toreca": 5860381,
    //     dopa: 1914810,
    //     "japan-toreca": 3017398,
    //     clove: 1344252,
    //     gacha24: 46816,
    //     iris: 2596596
    // },
    // {
    //     date: new Date('2023/11/22 15:00'),
    //     "ex-toreca": 2298051,
    //     dopa: 5827134,
    //     "japan-toreca": 6233545,
    //     clove: 4996504,
    //     gacha24: 8943360,
    //     iris: 4460758
    // },
    // {
    //     date: new Date('2023/11/22 16:00'),
    //     "ex-toreca": 7301191,
    //     dopa: 3489170,
    //     "japan-toreca": 4719420,
    //     clove: 4985447,
    //     gacha24: 3340429,
    //     iris: 8553566
    // },
    // {
    //     date: new Date('2023/11/22 17:00'),
    //     "ex-toreca": 1725727,
    //     dopa: 5298491,
    //     "japan-toreca": 9859559,
    //     clove: 8023537,
    //     gacha24: 2031942,
    //     iris: 4210116
    // },
    // {
    //     date: new Date('2023/11/22 18:00'),
    //     "ex-toreca": 1477268,
    //     dopa: 5882000,
    //     "japan-toreca": 420680,
    //     clove: 1634638,
    //     gacha24: 9105685,
    //     iris: 3185554
    // },
    // {
    //     date: new Date('2023/11/22 19:00'),
    //     "ex-toreca": 9930717,
    //     dopa: 7469954,
    //     "japan-toreca": 2905333,
    //     clove: 2674354,
    //     gacha24: 3274087,
    //     iris: 2240610
    // },
    // {
    //     date: new Date('2023/11/22 20:00'),
    //     "ex-toreca": 8459241,
    //     dopa: 3711817,
    //     "japan-toreca": 5522938,
    //     clove: 6279812,
    //     gacha24: 6309927,
    //     iris: 6976293
    // },
    // {
    //     date: new Date('2023/11/22 21:00'),
    //     "ex-toreca": 9085808,
    //     dopa: 7841302,
    //     "japan-toreca": 7995400,
    //     clove: 6954106,
    //     gacha24: 8829210,
    //     iris: 1255147
    // },
    // {
    //     date: new Date('2023/11/22 22:00'),
    //     "ex-toreca": 1731487,
    //     dopa: 446943,
    //     "japan-toreca": 3360817,
    //     clove: 8766504,
    //     gacha24: 4181801,
    //     iris: 6016856
    // },
    // {
    //     date: new Date('2023/11/22 23:00'),
    //     "ex-toreca": 229207,
    //     dopa: 4603556,
    //     "japan-toreca": 2826203,
    //     clove: 5620420,
    //     gacha24: 7472798,
    //     iris: 4307571
    // },
    // {
    //     date: new Date('2023/11/23 0:00'),
    //     "ex-toreca": 7776076,
    //     dopa: 813367,
    //     "japan-toreca": 7318605,
    //     clove: 5240088,
    //     gacha24: 4642834,
    //     iris: 2124774
    // },
    // {
    //     date: new Date('2023/11/23 1:00'),
    //     "ex-toreca": 1842469,
    //     dopa: 8962217,
    //     "japan-toreca": 2980726,
    //     clove: 4139705,
    //     gacha24: 2988511,
    //     iris: 6433537
    // },
    // {
    //     date: new Date('2023/11/23 2:00'),
    //     "ex-toreca": 4871201,
    //     dopa: 7051421,
    //     "japan-toreca": 5618313,
    //     clove: 1833750,
    //     gacha24: 6551063,
    //     iris: 9951387
    // },
    // {
    //     date: new Date('2023/11/23 3:00'),
    //     "ex-toreca": 6775938,
    //     dopa: 5794344,
    //     "japan-toreca": 3898533,
    //     clove: 3245182,
    //     gacha24: 3523591,
    //     iris: 2966792
    // },
    // {
    //     date: new Date('2023/11/23 4:00'),
    //     "ex-toreca": 8887035,
    //     dopa: 1832805,
    //     "japan-toreca": 120833,
    //     clove: 7431933,
    //     gacha24: 1990494,
    //     iris: 9146167
    // },
    // {
    //     date: new Date('2023/11/23 5:00'),
    //     "ex-toreca": 9550517,
    //     dopa: 6149263,
    //     "japan-toreca": 9765395,
    //     clove: 524830,
    //     gacha24: 9563915,
    //     iris: 5354784
    // },
    // {
    //     date: new Date('2023/11/23 6:00'),
    //     "ex-toreca": 4495095,
    //     dopa: 263307,
    //     "japan-toreca": 5082920,
    //     clove: 1184341,
    //     gacha24: 667566,
    //     iris: 5762872
    // },
    // {
    //     date: new Date('2023/11/23 7:00'),
    //     "ex-toreca": 650236,
    //     dopa: 3976481,
    //     "japan-toreca": 3332385,
    //     clove: 121974,
    //     gacha24: 4866082,
    //     iris: 9568811
    // },
    // {
    //     date: new Date('2023/11/23 8:00'),
    //     "ex-toreca": 3717349,
    //     dopa: 9966128,
    //     "japan-toreca": 6824940,
    //     clove: 5840578,
    //     gacha24: 1635682,
    //     iris: 6322284
    // },
    // {
    //     date: new Date('2023/11/23 9:00'),
    //     "ex-toreca": 6933933,
    //     dopa: 1042076,
    //     "japan-toreca": 1515187,
    //     clove: 6139906,
    //     gacha24: 1189606,
    //     iris: 2525764
    // },
    // {
    //     date: new Date('2023/11/23 10:00'),
    //     "ex-toreca": 5579103,
    //     dopa: 4696464,
    //     "japan-toreca": 9704170,
    //     clove: 8298548,
    //     gacha24: 6227151,
    //     iris: 813298
    // },
    // {
    //     date: new Date('2023/11/23 11:00'),
    //     "ex-toreca": 5078544,
    //     dopa: 4807358,
    //     "japan-toreca": 9774945,
    //     clove: 8520697,
    //     gacha24: 7309976,
    //     iris: 4044223
    // },
    // {
    //     date: new Date('2023/11/23 12:00'),
    //     "ex-toreca": 1318444,
    //     dopa: 8858209,
    //     "japan-toreca": 1256931,
    //     clove: 2730729,
    //     gacha24: 5716694,
    //     iris: 3582505
    // },
    // {
    //     date: new Date('2023/11/23 13:00'),
    //     "ex-toreca": 599188,
    //     dopa: 6107692,
    //     "japan-toreca": 8518050,
    //     clove: 4305598,
    //     gacha24: 1699470,
    //     iris: 365522
    // },
    // {
    //     date: new Date('2023/11/23 14:00'),
    //     "ex-toreca": 8402702,
    //     dopa: 2257511,
    //     "japan-toreca": 6930719,
    //     clove: 7845422,
    //     gacha24: 309534,
    //     iris: 5489401
    // },
    // {
    //     date: new Date('2023/11/23 15:00'),
    //     "ex-toreca": 6493370,
    //     dopa: 537538,
    //     "japan-toreca": 1741089,
    //     clove: 3060306,
    //     gacha24: 9813971,
    //     iris: 3452602
    // },
    // {
    //     date: new Date('2023/11/23 16:00'),
    //     "ex-toreca": 7540686,
    //     dopa: 2079055,
    //     "japan-toreca": 1743573,
    //     clove: 1373735,
    //     gacha24: 8775413,
    //     iris: 2536686
    // },
    // {
    //     date: new Date('2023/11/23 17:00'),
    //     "ex-toreca": 3883339,
    //     dopa: 9187574,
    //     "japan-toreca": 9789916,
    //     clove: 74928,
    //     gacha24: 9048758,
    //     iris: 4059392
    // },
    // {
    //     date: new Date('2023/11/23 18:00'),
    //     "ex-toreca": 7113449,
    //     dopa: 7291461,
    //     "japan-toreca": 6294198,
    //     clove: 8730698,
    //     gacha24: 2927648,
    //     iris: 5188965
    // },
    // {
    //     date: new Date('2023/11/23 19:00'),
    //     "ex-toreca": 6116128,
    //     dopa: 7579470,
    //     "japan-toreca": 962698,
    //     clove: 9468819,
    //     gacha24: 6728709,
    //     iris: 8813567
    // },
    // {
    //     date: new Date('2023/11/23 20:00'),
    //     "ex-toreca": 5953040,
    //     dopa: 4910807,
    //     "japan-toreca": 1540369,
    //     clove: 2832749,
    //     gacha24: 5170059,
    //     iris: 1247015
    // },
    // {
    //     date: new Date('2023/11/23 21:00'),
    //     "ex-toreca": 1995339,
    //     dopa: 8552079,
    //     "japan-toreca": 535514,
    //     clove: 8943134,
    //     gacha24: 1166946,
    //     iris: 1270118
    // },
    // {
    //     date: new Date('2023/11/23 22:00'),
    //     "ex-toreca": 3331018,
    //     dopa: 2744358,
    //     "japan-toreca": 7089561,
    //     clove: 4358393,
    //     gacha24: 8429196,
    //     iris: 3812903
    // },
    // {
    //     date: new Date('2023/11/23 23:00'),
    //     "ex-toreca": 1484788,
    //     dopa: 1096902,
    //     "japan-toreca": 9997526,
    //     clove: 9618141,
    //     gacha24: 4881728,
    //     iris: 124402
    // },
    // {
    //     date: new Date('2023/11/24 0:00'),
    //     "ex-toreca": 5210398,
    //     dopa: 2463526,
    //     "japan-toreca": 3215935,
    //     clove: 6042430,
    //     gacha24: 2159135,
    //     iris: 4488353
    // },
    // {
    //     date: new Date('2023/11/24 1:00'),
    //     "ex-toreca": 2060350,
    //     dopa: 6835089,
    //     "japan-toreca": 6760873,
    //     clove: 86813,
    //     gacha24: 4522607,
    //     iris: 1651790
    // },
    // {
    //     date: new Date('2023/11/24 2:00'),
    //     "ex-toreca": 9900559,
    //     dopa: 2202994,
    //     "japan-toreca": 5614483,
    //     clove: 8163777,
    //     gacha24: 2257281,
    //     iris: 9204199
    // },
    // {
    //     date: new Date('2023/11/24 3:00'),
    //     "ex-toreca": 8510959,
    //     dopa: 7472932,
    //     "japan-toreca": 1460664,
    //     clove: 4422131,
    //     gacha24: 7745819,
    //     iris: 9289924
    // },
    // {
    //     date: new Date('2023/11/24 4:00'),
    //     "ex-toreca": 3681316,
    //     dopa: 1448999,
    //     "japan-toreca": 4818801,
    //     clove: 8680621,
    //     gacha24: 3140938,
    //     iris: 9854581
    // },
    // {
    //     date: new Date('2023/11/24 5:00'),
    //     "ex-toreca": 3128865,
    //     dopa: 1172593,
    //     "japan-toreca": 1912897,
    //     clove: 9363441,
    //     gacha24: 8250594,
    //     iris: 1421189
    // },
    // {
    //     date: new Date('2023/11/24 6:00'),
    //     "ex-toreca": 3292614,
    //     dopa: 4673950,
    //     "japan-toreca": 9850281,
    //     clove: 8681676,
    //     gacha24: 2800359,
    //     iris: 1926316
    // },
    // {
    //     date: new Date('2023/11/24 7:00'),
    //     "ex-toreca": 8483826,
    //     dopa: 7033847,
    //     "japan-toreca": 9238051,
    //     clove: 7135907,
    //     gacha24: 383998,
    //     iris: 4516823
    // },
    // {
    //     date: new Date('2023/11/24 8:00'),
    //     "ex-toreca": 6280525,
    //     dopa: 8635278,
    //     "japan-toreca": 6302096,
    //     clove: 3757274,
    //     gacha24: 6986039,
    //     iris: 4415351
    // },
    // {
    //     date: new Date('2023/11/24 9:00'),
    //     "ex-toreca": 4162409,
    //     dopa: 7847071,
    //     "japan-toreca": 4339372,
    //     clove: 4063769,
    //     gacha24: 5214252,
    //     iris: 604411
    // },
    // {
    //     date: new Date('2023/11/24 10:00'),
    //     "ex-toreca": 4754918,
    //     dopa: 8521010,
    //     "japan-toreca": 4804440,
    //     clove: 6763287,
    //     gacha24: 6181455,
    //     iris: 4009212
    // },
    // {
    //     date: new Date('2023/11/24 11:00'),
    //     "ex-toreca": 7789050,
    //     dopa: 6156892,
    //     "japan-toreca": 7174377,
    //     clove: 8533157,
    //     gacha24: 4760932,
    //     iris: 4762971
    // },
    // {
    //     date: new Date('2023/11/24 12:00'),
    //     "ex-toreca": 2221134,
    //     dopa: 2823337,
    //     "japan-toreca": 6414493,
    //     clove: 1642062,
    //     gacha24: 1348575,
    //     iris: 964189
    // },
    // {
    //     date: new Date('2023/11/24 13:00'),
    //     "ex-toreca": 9826292,
    //     dopa: 9890770,
    //     "japan-toreca": 597204,
    //     clove: 2783066,
    //     gacha24: 5493020,
    //     iris: 8387780
    // },
    // {
    //     date: new Date('2023/11/24 14:00'),
    //     "ex-toreca": 3472269,
    //     dopa: 3486206,
    //     "japan-toreca": 554746,
    //     clove: 8373760,
    //     gacha24: 5169472,
    //     iris: 3567563
    // },
    // {
    //     date: new Date('2023/11/24 15:00'),
    //     "ex-toreca": 8333296,
    //     dopa: 2501577,
    //     "japan-toreca": 1276499,
    //     clove: 297162,
    //     gacha24: 3270275,
    //     iris: 1302744
    // },
    // {
    //     date: new Date('2023/11/24 16:00'),
    //     "ex-toreca": 6162037,
    //     dopa: 3208593,
    //     "japan-toreca": 781762,
    //     clove: 6655757,
    //     gacha24: 5865006,
    //     iris: 8258743
    // },
    // {
    //     date: new Date('2023/11/24 17:00'),
    //     "ex-toreca": 3389345,
    //     dopa: 4285690,
    //     "japan-toreca": 4230837,
    //     clove: 3106176,
    //     gacha24: 9159286,
    //     iris: 7611047
    // },
    // {
    //     date: new Date('2023/11/24 18:00'),
    //     "ex-toreca": 8881989,
    //     dopa: 7216063,
    //     "japan-toreca": 7261897,
    //     clove: 5504180,
    //     gacha24: 5650726,
    //     iris: 4282059
    // },
    // {
    //     date: new Date('2023/11/24 19:00'),
    //     "ex-toreca": 9488226,
    //     dopa: 2097806,
    //     "japan-toreca": 1917452,
    //     clove: 6786310,
    //     gacha24: 8922077,
    //     iris: 3347783
    // },
    // {
    //     date: new Date('2023/11/24 20:00'),
    //     "ex-toreca": 4175615,
    //     dopa: 4146458,
    //     "japan-toreca": 1239654,
    //     clove: 500535,
    //     gacha24: 4076134,
    //     iris: 3779172
    // },
    // {
    //     date: new Date('2023/11/24 21:00'),
    //     "ex-toreca": 3483893,
    //     dopa: 5675037,
    //     "japan-toreca": 9620347,
    //     clove: 4740964,
    //     gacha24: 3358777,
    //     iris: 6602162
    // },
    // {
    //     date: new Date('2023/11/24 22:00'),
    //     "ex-toreca": 6957814,
    //     dopa: 415539,
    //     "japan-toreca": 322015,
    //     clove: 3035050,
    //     gacha24: 6858203,
    //     iris: 7290776
    // },
    // {
    //     date: new Date('2023/11/24 23:00'),
    //     "ex-toreca": 7889002,
    //     dopa: 2656119,
    //     "japan-toreca": 4610518,
    //     clove: 1156910,
    //     gacha24: 1651045,
    //     iris: 8721876
    // },
    // {
    //     date: new Date('2023/11/25 0:00'),
    //     "ex-toreca": 2993492,
    //     dopa: 3897043,
    //     "japan-toreca": 3571321,
    //     clove: 5845148,
    //     gacha24: 3666891,
    //     iris: 9148589
    // },
    // {
    //     date: new Date('2023/11/25 1:00'),
    //     "ex-toreca": 2972330,
    //     dopa: 9764363,
    //     "japan-toreca": 1868107,
    //     clove: 9135114,
    //     gacha24: 8096479,
    //     iris: 5783953
    // },
    // {
    //     date: new Date('2023/11/25 2:00'),
    //     "ex-toreca": 5464362,
    //     dopa: 4401553,
    //     "japan-toreca": 9223096,
    //     clove: 8410777,
    //     gacha24: 3527099,
    //     iris: 4445578
    // },
    // {
    //     date: new Date('2023/11/25 3:00'),
    //     "ex-toreca": 7961457,
    //     dopa: 6171786,
    //     "japan-toreca": 2906857,
    //     clove: 1153037,
    //     gacha24: 5571790,
    //     iris: 5045794
    // },
    // {
    //     date: new Date('2023/11/25 4:00'),
    //     "ex-toreca": 6637710,
    //     dopa: 8326956,
    //     "japan-toreca": 2724678,
    //     clove: 322341,
    //     gacha24: 9787631,
    //     iris: 3928692
    // },
    // {
    //     date: new Date('2023/11/25 5:00'),
    //     "ex-toreca": 4047713,
    //     dopa: 8214197,
    //     "japan-toreca": 7121516,
    //     clove: 7553912,
    //     gacha24: 2226357,
    //     iris: 3875325
    // },
    // {
    //     date: new Date('2023/11/25 6:00'),
    //     "ex-toreca": 2782991,
    //     dopa: 7724500,
    //     "japan-toreca": 4546304,
    //     clove: 6254332,
    //     gacha24: 5511583,
    //     iris: 5173644
    // },
    // {
    //     date: new Date('2023/11/25 7:00'),
    //     "ex-toreca": 5582367,
    //     dopa: 3026839,
    //     "japan-toreca": 4258262,
    //     clove: 2338212,
    //     gacha24: 7723858,
    //     iris: 9601298
    // },
    // {
    //     date: new Date('2023/11/25 8:00'),
    //     "ex-toreca": 6119122,
    //     dopa: 655952,
    //     "japan-toreca": 1593351,
    //     clove: 484269,
    //     gacha24: 8929826,
    //     iris: 9836612
    // },
    // {
    //     date: new Date('2023/11/25 9:00'),
    //     "ex-toreca": 5599067,
    //     dopa: 6914859,
    //     "japan-toreca": 3845578,
    //     clove: 6835204,
    //     gacha24: 995151,
    //     iris: 496042
    // },
    // {
    //     date: new Date('2023/11/25 10:00'),
    //     "ex-toreca": 2873780,
    //     dopa: 9140983,
    //     "japan-toreca": 5311546,
    //     clove: 816165,
    //     gacha24: 5262544,
    //     iris: 666805
    // },
    // {
    //     date: new Date('2023/11/25 11:00'),
    //     "ex-toreca": 3248913,
    //     dopa: 7639564,
    //     "japan-toreca": 8303520,
    //     clove: 7593484,
    //     gacha24: 193169,
    //     iris: 3624669
    // },
    // {
    //     date: new Date('2023/11/25 12:00'),
    //     "ex-toreca": 240446,
    //     dopa: 15266,
    //     "japan-toreca": 3603465,
    //     clove: 8589056,
    //     gacha24: 4788482,
    //     iris: 3975573
    // },
    // {
    //     date: new Date('2023/11/25 13:00'),
    //     "ex-toreca": 7549196,
    //     dopa: 8473912,
    //     "japan-toreca": 196994,
    //     clove: 6302328,
    //     gacha24: 707319,
    //     iris: 5618476
    // },
    // {
    //     date: new Date('2023/11/25 14:00'),
    //     "ex-toreca": 3665544,
    //     dopa: 9301062,
    //     "japan-toreca": 4953250,
    //     clove: 8312285,
    //     gacha24: 1917469,
    //     iris: 5112803
    // },
    // {
    //     date: new Date('2023/11/25 15:00'),
    //     "ex-toreca": 2330370,
    //     dopa: 5790350,
    //     "japan-toreca": 3345713,
    //     clove: 1829966,
    //     gacha24: 8137893,
    //     iris: 3205218
    // },
    // {
    //     date: new Date('2023/11/25 16:00'),
    //     "ex-toreca": 4143658,
    //     dopa: 2324158,
    //     "japan-toreca": 3114037,
    //     clove: 3946234,
    //     gacha24: 7704790,
    //     iris: 9598419
    // },
    // {
    //     date: new Date('2023/11/25 17:00'),
    //     "ex-toreca": 2975612,
    //     dopa: 9036571,
    //     "japan-toreca": 2308116,
    //     clove: 8080939,
    //     gacha24: 8815047,
    //     iris: 1849693
    // },
    // {
    //     date: new Date('2023/11/25 18:00'),
    //     "ex-toreca": 4697327,
    //     dopa: 5568642,
    //     "japan-toreca": 7881764,
    //     clove: 2048517,
    //     gacha24: 6248470,
    //     iris: 7169298
    // },
    // {
    //     date: new Date('2023/11/25 19:00'),
    //     "ex-toreca": 4222271,
    //     dopa: 8470991,
    //     "japan-toreca": 6231257,
    //     clove: 8372998,
    //     gacha24: 6507588,
    //     iris: 3497206
    // },
    // {
    //     date: new Date('2023/11/25 20:00'),
    //     "ex-toreca": 1197372,
    //     dopa: 9362958,
    //     "japan-toreca": 998647,
    //     clove: 5937828,
    //     gacha24: 7378336,
    //     iris: 9953595
    // },
    // {
    //     date: new Date('2023/11/25 21:00'),
    //     "ex-toreca": 3985152,
    //     dopa: 8865421,
    //     "japan-toreca": 1330674,
    //     clove: 3806364,
    //     gacha24: 9788086,
    //     iris: 8634682
    // },
    // {
    //     date: new Date('2023/11/25 22:00'),
    //     "ex-toreca": 8574640,
    //     dopa: 2150300,
    //     "japan-toreca": 4810938,
    //     clove: 5250790,
    //     gacha24: 6424553,
    //     iris: 6843801
    // },
    // {
    //     date: new Date('2023/11/25 23:00'),
    //     "ex-toreca": 7540046,
    //     dopa: 1299525,
    //     "japan-toreca": 90230,
    //     clove: 3509091,
    //     gacha24: 4840019,
    //     iris: 7109944
    // },
    // {
    //     date: new Date('2023/11/26 0:00'),
    //     "ex-toreca": 7842630,
    //     dopa: 8933108,
    //     "japan-toreca": 1738801,
    //     clove: 6707426,
    //     gacha24: 7297627,
    //     iris: 9697872
    // },
    // {
    //     date: new Date('2023/11/26 1:00'),
    //     "ex-toreca": 8294873,
    //     dopa: 6442605,
    //     "japan-toreca": 9537931,
    //     clove: 9335217,
    //     gacha24: 6800444,
    //     iris: 579746
    // },
    // {
    //     date: new Date('2023/11/26 2:00'),
    //     "ex-toreca": 3566131,
    //     dopa: 8633495,
    //     "japan-toreca": 6319609,
    //     clove: 4444671,
    //     gacha24: 2503862,
    //     iris: 6755361
    // },
    // {
    //     date: new Date('2023/11/26 3:00'),
    //     "ex-toreca": 8514000,
    //     dopa: 1511260,
    //     "japan-toreca": 1780717,
    //     clove: 9176139,
    //     gacha24: 9345782,
    //     iris: 1915090
    // },
    // {
    //     date: new Date('2023/11/26 4:00'),
    //     "ex-toreca": 8705281,
    //     dopa: 8320570,
    //     "japan-toreca": 4964696,
    //     clove: 8862089,
    //     gacha24: 6532113,
    //     iris: 955512
    // },
    // {
    //     date: new Date('2023/11/26 5:00'),
    //     "ex-toreca": 3753344,
    //     dopa: 4204596,
    //     "japan-toreca": 6218450,
    //     clove: 2095434,
    //     gacha24: 7401444,
    //     iris: 3377486
    // },
    // {
    //     date: new Date('2023/11/26 6:00'),
    //     "ex-toreca": 5224507,
    //     dopa: 2462045,
    //     "japan-toreca": 6604132,
    //     clove: 9970605,
    //     gacha24: 1949409,
    //     iris: 5717488
    // },
    // {
    //     date: new Date('2023/11/26 7:00'),
    //     "ex-toreca": 6811006,
    //     dopa: 1362090,
    //     "japan-toreca": 3538203,
    //     clove: 5676713,
    //     gacha24: 7236946,
    //     iris: 2059924
    // },
    // {
    //     date: new Date('2023/11/26 8:00'),
    //     "ex-toreca": 3190119,
    //     dopa: 3521451,
    //     "japan-toreca": 4163316,
    //     clove: 911186,
    //     gacha24: 9560944,
    //     iris: 2584611
    // },
    // {
    //     date: new Date('2023/11/26 9:00'),
    //     "ex-toreca": 5683162,
    //     dopa: 5357324,
    //     "japan-toreca": 2767758,
    //     clove: 4039612,
    //     gacha24: 6865203,
    //     iris: 2097228
    // },
    // {
    //     date: new Date('2023/11/26 10:00'),
    //     "ex-toreca": 2254703,
    //     dopa: 5866219,
    //     "japan-toreca": 3521684,
    //     clove: 413731,
    //     gacha24: 9474191,
    //     iris: 4716800
    // },
    // {
    //     date: new Date('2023/11/26 11:00'),
    //     "ex-toreca": 6122465,
    //     dopa: 971084,
    //     "japan-toreca": 990121,
    //     clove: 9259896,
    //     gacha24: 3874954,
    //     iris: 3767809
    // },
    // {
    //     date: new Date('2023/11/26 12:00'),
    //     "ex-toreca": 8769101,
    //     dopa: 9786335,
    //     "japan-toreca": 8329102,
    //     clove: 2239002,
    //     gacha24: 2728287,
    //     iris: 76491
    // },
    // {
    //     date: new Date('2023/11/26 13:00'),
    //     "ex-toreca": 7274148,
    //     dopa: 3834423,
    //     "japan-toreca": 3905437,
    //     clove: 5226849,
    //     gacha24: 4020214,
    //     iris: 6628428
    // },
    // {
    //     date: new Date('2023/11/26 14:00'),
    //     "ex-toreca": 5125353,
    //     dopa: 7341246,
    //     "japan-toreca": 6191154,
    //     clove: 8240174,
    //     gacha24: 1905333,
    //     iris: 5500751
    // },
    // {
    //     date: new Date('2023/11/26 15:00'),
    //     "ex-toreca": 821160,
    //     dopa: 2593165,
    //     "japan-toreca": 9144007,
    //     clove: 9316429,
    //     gacha24: 8323598,
    //     iris: 5342566
    // },
    // {
    //     date: new Date('2023/11/26 16:00'),
    //     "ex-toreca": 4396308,
    //     dopa: 6607951,
    //     "japan-toreca": 490076,
    //     clove: 6017555,
    //     gacha24: 8439584,
    //     iris: 614897
    // },
    // {
    //     date: new Date('2023/11/26 17:00'),
    //     "ex-toreca": 4945248,
    //     dopa: 1455258,
    //     "japan-toreca": 3304268,
    //     clove: 5192750,
    //     gacha24: 5746197,
    //     iris: 61591
    // },
    // {
    //     date: new Date('2023/11/26 18:00'),
    //     "ex-toreca": 5404019,
    //     dopa: 1120524,
    //     "japan-toreca": 1457601,
    //     clove: 483224,
    //     gacha24: 8221518,
    //     iris: 6686883
    // },
    // {
    //     date: new Date('2023/11/26 19:00'),
    //     "ex-toreca": 9639899,
    //     dopa: 5114448,
    //     "japan-toreca": 8323362,
    //     clove: 1605111,
    //     gacha24: 2814401,
    //     iris: 7709718
    // },
    // {
    //     date: new Date('2023/11/26 20:00'),
    //     "ex-toreca": 1236970,
    //     dopa: 9673040,
    //     "japan-toreca": 7797993,
    //     clove: 1141929,
    //     gacha24: 6255392,
    //     iris: 3541250
    // },
    // {
    //     date: new Date('2023/11/26 21:00'),
    //     "ex-toreca": 6413875,
    //     dopa: 5665741,
    //     "japan-toreca": 6768650,
    //     clove: 8971813,
    //     gacha24: 1331459,
    //     iris: 8490123
    // },
    // {
    //     date: new Date('2023/11/26 22:00'),
    //     "ex-toreca": 808323,
    //     dopa: 4869195,
    //     "japan-toreca": 2850971,
    //     clove: 4060768,
    //     gacha24: 9343972,
    //     iris: 6977796
    // },
    // {
    //     date: new Date('2023/11/26 23:00'),
    //     "ex-toreca": 5912672,
    //     dopa: 8679039,
    //     "japan-toreca": 918563,
    //     clove: 4723866,
    //     gacha24: 6486908,
    //     iris: 5720852
    // },
    // {
    //     date: new Date('2023/11/27 0:00'),
    //     "ex-toreca": 1310033,
    //     dopa: 1065646,
    //     "japan-toreca": 7560375,
    //     clove: 6102812,
    //     gacha24: 707510,
    //     iris: 5640437
    // },
    // {
    //     date: new Date('2023/11/27 1:00'),
    //     "ex-toreca": 3603690,
    //     dopa: 7438602,
    //     "japan-toreca": 5445289,
    //     clove: 9111169,
    //     gacha24: 5290565,
    //     iris: 1525833
    // },
    // {
    //     date: new Date('2023/11/27 2:00'),
    //     "ex-toreca": 697067,
    //     dopa: 7150143,
    //     "japan-toreca": 8982441,
    //     clove: 701252,
    //     gacha24: 1090287,
    //     iris: 2022691
    // },
    // {
    //     date: new Date('2023/11/27 3:00'),
    //     "ex-toreca": 1665767,
    //     dopa: 8010138,
    //     "japan-toreca": 9022542,
    //     clove: 4047679,
    //     gacha24: 4041290,
    //     iris: 3002226
    // },
    // {
    //     date: new Date('2023/11/27 4:00'),
    //     "ex-toreca": 4376901,
    //     dopa: 6254447,
    //     "japan-toreca": 7158844,
    //     clove: 6072611,
    //     gacha24: 1948163,
    //     iris: 501336
    // },
    // {
    //     date: new Date('2023/11/27 5:00'),
    //     "ex-toreca": 1197453,
    //     dopa: 5419314,
    //     "japan-toreca": 3402617,
    //     clove: 6028490,
    //     gacha24: 7535468,
    //     iris: 9182349
    // },
    // {
    //     date: new Date('2023/11/27 6:00'),
    //     "ex-toreca": 2104003,
    //     dopa: 9354662,
    //     "japan-toreca": 7282102,
    //     clove: 6784372,
    //     gacha24: 3526001,
    //     iris: 2882675
    // },
    // {
    //     date: new Date('2023/11/27 7:00'),
    //     "ex-toreca": 3408385,
    //     dopa: 578847,
    //     "japan-toreca": 8662421,
    //     clove: 2171061,
    //     gacha24: 5563427,
    //     iris: 476246
    // },
    // {
    //     date: new Date('2023/11/27 8:00'),
    //     "ex-toreca": 7940438,
    //     dopa: 3202263,
    //     "japan-toreca": 4305331,
    //     clove: 9349611,
    //     gacha24: 7815474,
    //     iris: 1910352
    // },
    // {
    //     date: new Date('2023/11/27 9:00'),
    //     "ex-toreca": 701306,
    //     dopa: 7909876,
    //     "japan-toreca": 1235298,
    //     clove: 683927,
    //     gacha24: 8220378,
    //     iris: 4105897
    // },
    // {
    //     date: new Date('2023/11/27 10:00'),
    //     "ex-toreca": 3170880,
    //     dopa: 9521286,
    //     "japan-toreca": 8514385,
    //     clove: 5694221,
    //     gacha24: 4364531,
    //     iris: 505335
    // },
    // {
    //     date: new Date('2023/11/27 11:00'),
    //     "ex-toreca": 7720907,
    //     dopa: 3490141,
    //     "japan-toreca": 1997015,
    //     clove: 3229847,
    //     gacha24: 1440664,
    //     iris: 3991772
    // },
    // {
    //     date: new Date('2023/11/27 12:00'),
    //     "ex-toreca": 443581,
    //     dopa: 9128057,
    //     "japan-toreca": 6063475,
    //     clove: 6224312,
    //     gacha24: 1029810,
    //     iris: 7550695
    // },
    // {
    //     date: new Date('2023/11/27 13:00'),
    //     "ex-toreca": 1238104,
    //     dopa: 5585649,
    //     "japan-toreca": 3964121,
    //     clove: 5059059,
    //     gacha24: 538596,
    //     iris: 5464819
    // },
    // {
    //     date: new Date('2023/11/27 14:00'),
    //     "ex-toreca": 793971,
    //     dopa: 6704882,
    //     "japan-toreca": 6245361,
    //     clove: 5871396,
    //     gacha24: 3496647,
    //     iris: 9682819
    // },
    // {
    //     date: new Date('2023/11/27 15:00'),
    //     "ex-toreca": 3668608,
    //     dopa: 9196444,
    //     "japan-toreca": 723694,
    //     clove: 5322211,
    //     gacha24: 6919396,
    //     iris: 8912240
    // },
    // {
    //     date: new Date('2023/11/27 16:00'),
    //     "ex-toreca": 8242699,
    //     dopa: 3569593,
    //     "japan-toreca": 8037671,
    //     clove: 8340333,
    //     gacha24: 9189522,
    //     iris: 947581
    // },
    // {
    //     date: new Date('2023/11/27 17:00'),
    //     "ex-toreca": 7476124,
    //     dopa: 8480032,
    //     "japan-toreca": 167755,
    //     clove: 2114471,
    //     gacha24: 693307,
    //     iris: 2821704
    // },
    // {
    //     date: new Date('2023/11/27 18:00'),
    //     "ex-toreca": 8210197,
    //     dopa: 9729345,
    //     "japan-toreca": 8864243,
    //     clove: 1446577,
    //     gacha24: 9439211,
    //     iris: 8652010
    // },
    // {
    //     date: new Date('2023/11/27 19:00'),
    //     "ex-toreca": 3539599,
    //     dopa: 6687239,
    //     "japan-toreca": 6301775,
    //     clove: 9733187,
    //     gacha24: 6573219,
    //     iris: 6455663
    // },
    // {
    //     date: new Date('2023/11/27 20:00'),
    //     "ex-toreca": 8214633,
    //     dopa: 3819188,
    //     "japan-toreca": 8449769,
    //     clove: 4984601,
    //     gacha24: 9743958,
    //     iris: 1995558
    // },
    // {
    //     date: new Date('2023/11/27 21:00'),
    //     "ex-toreca": 2959081,
    //     dopa: 9234592,
    //     "japan-toreca": 2722481,
    //     clove: 7833372,
    //     gacha24: 9373550,
    //     iris: 2444981
    // },
    // {
    //     date: new Date('2023/11/27 22:00'),
    //     "ex-toreca": 3869958,
    //     dopa: 8441217,
    //     "japan-toreca": 1387111,
    //     clove: 1281091,
    //     gacha24: 7170307,
    //     iris: 4296209
    // },
    // {
    //     date: new Date('2023/11/27 23:00'),
    //     "ex-toreca": 5915276,
    //     dopa: 7964488,
    //     "japan-toreca": 2881798,
    //     clove: 883653,
    //     gacha24: 8214530,
    //     iris: 8433574
    // },
    // {
    //     date: new Date('2023/11/28 0:00'),
    //     "ex-toreca": 3128496,
    //     dopa: 5667780,
    //     "japan-toreca": 6657559,
    //     clove: 2525712,
    //     gacha24: 3811068,
    //     iris: 1914784
    // },
    // {
    //     date: new Date('2023/11/28 1:00'),
    //     "ex-toreca": 1316626,
    //     dopa: 9562874,
    //     "japan-toreca": 7850727,
    //     clove: 5744807,
    //     gacha24: 848344,
    //     iris: 2701056
    // },
    // {
    //     date: new Date('2023/11/28 2:00'),
    //     "ex-toreca": 7715236,
    //     dopa: 3360914,
    //     "japan-toreca": 8069704,
    //     clove: 4089340,
    //     gacha24: 2124433,
    //     iris: 3798363
    // },
    // {
    //     date: new Date('2023/11/28 3:00'),
    //     "ex-toreca": 7351881,
    //     dopa: 3950496,
    //     "japan-toreca": 8720170,
    //     clove: 2557593,
    //     gacha24: 8603495,
    //     iris: 3601333
    // },
    // {
    //     date: new Date('2023/11/28 4:00'),
    //     "ex-toreca": 9051788,
    //     dopa: 4361698,
    //     "japan-toreca": 1185017,
    //     clove: 9216897,
    //     gacha24: 9080184,
    //     iris: 1860916
    // },
    // {
    //     date: new Date('2023/11/28 5:00'),
    //     "ex-toreca": 7920034,
    //     dopa: 4659568,
    //     "japan-toreca": 5366079,
    //     clove: 9132672,
    //     gacha24: 5686928,
    //     iris: 3637438
    // },
    // {
    //     date: new Date('2023/11/28 6:00'),
    //     "ex-toreca": 3728042,
    //     dopa: 3219814,
    //     "japan-toreca": 4195907,
    //     clove: 6774844,
    //     gacha24: 4327276,
    //     iris: 4011689
    // },
    // {
    //     date: new Date('2023/11/28 7:00'),
    //     "ex-toreca": 4131953,
    //     dopa: 3381589,
    //     "japan-toreca": 3114255,
    //     clove: 6467172,
    //     gacha24: 1729921,
    //     iris: 3182813
    // },
    // {
    //     date: new Date('2023/11/28 8:00'),
    //     "ex-toreca": 3447521,
    //     dopa: 9219470,
    //     "japan-toreca": 7125007,
    //     clove: 1135690,
    //     gacha24: 5216641,
    //     iris: 3427072
    // },
    // {
    //     date: new Date('2023/11/28 9:00'),
    //     "ex-toreca": 4287037,
    //     dopa: 9102718,
    //     "japan-toreca": 4819298,
    //     clove: 4571146,
    //     gacha24: 4538117,
    //     iris: 4127550
    // },
    // {
    //     date: new Date('2023/11/28 10:00'),
    //     "ex-toreca": 955765,
    //     dopa: 8988931,
    //     "japan-toreca": 8173218,
    //     clove: 4411890,
    //     gacha24: 1652778,
    //     iris: 5004715
    // },
    // {
    //     date: new Date('2023/11/28 11:00'),
    //     "ex-toreca": 1404431,
    //     dopa: 5298145,
    //     "japan-toreca": 3855053,
    //     clove: 1662766,
    //     gacha24: 6032804,
    //     iris: 2186931
    // },
    // {
    //     date: new Date('2023/11/28 12:00'),
    //     "ex-toreca": 8269063,
    //     dopa: 3538606,
    //     "japan-toreca": 3417693,
    //     clove: 1819449,
    //     gacha24: 6355456,
    //     iris: 9684724
    // },
    // {
    //     date: new Date('2023/11/28 13:00'),
    //     "ex-toreca": 5516381,
    //     dopa: 7829356,
    //     "japan-toreca": 5463947,
    //     clove: 7929570,
    //     gacha24: 9950896,
    //     iris: 2386795
    // },
    // {
    //     date: new Date('2023/11/28 14:00'),
    //     "ex-toreca": 1684873,
    //     dopa: 8606033,
    //     "japan-toreca": 3361826,
    //     clove: 1253503,
    //     gacha24: 1148619,
    //     iris: 8728574
    // },
    // {
    //     date: new Date('2023/11/28 15:00'),
    //     "ex-toreca": 9738691,
    //     dopa: 7434587,
    //     "japan-toreca": 9982524,
    //     clove: 7745532,
    //     gacha24: 4065499,
    //     iris: 1987320
    // },
    // {
    //     date: new Date('2023/11/28 16:00'),
    //     "ex-toreca": 3235801,
    //     dopa: 6853843,
    //     "japan-toreca": 6387018,
    //     clove: 2128026,
    //     gacha24: 2864757,
    //     iris: 4345069
    // },
    // {
    //     date: new Date('2023/11/28 17:00'),
    //     "ex-toreca": 3857432,
    //     dopa: 8318392,
    //     "japan-toreca": 9436512,
    //     clove: 1291832,
    //     gacha24: 7969845,
    //     iris: 6342367
    // },
    // {
    //     date: new Date('2023/11/28 18:00'),
    //     "ex-toreca": 2254633,
    //     dopa: 9113034,
    //     "japan-toreca": 2261410,
    //     clove: 9888527,
    //     gacha24: 8730702,
    //     iris: 4098449
    // },
    // {
    //     date: new Date('2023/11/28 19:00'),
    //     "ex-toreca": 9117202,
    //     dopa: 173821,
    //     "japan-toreca": 7961550,
    //     clove: 8453862,
    //     gacha24: 3253694,
    //     iris: 6196098
    // },
    // {
    //     date: new Date('2023/11/28 20:00'),
    //     "ex-toreca": 9496586,
    //     dopa: 7071169,
    //     "japan-toreca": 7935662,
    //     clove: 3285083,
    //     gacha24: 4351876,
    //     iris: 5602615
    // },
    // {
    //     date: new Date('2023/11/28 21:00'),
    //     "ex-toreca": 3147729,
    //     dopa: 2976057,
    //     "japan-toreca": 7565703,
    //     clove: 7571418,
    //     gacha24: 8165450,
    //     iris: 1340301
    // },
    // {
    //     date: new Date('2023/11/28 22:00'),
    //     "ex-toreca": 4288163,
    //     dopa: 7092376,
    //     "japan-toreca": 4833923,
    //     clove: 2597594,
    //     gacha24: 7315273,
    //     iris: 9122031
    // },
    // {
    //     date: new Date('2023/11/28 23:00'),
    //     "ex-toreca": 3051627,
    //     dopa: 4107435,
    //     "japan-toreca": 1184513,
    //     clove: 8876590,
    //     gacha24: 479759,
    //     iris: 1688756
    // },
    // {
    //     date: new Date('2023/11/29 0:00'),
    //     "ex-toreca": 911218,
    //     dopa: 4580698,
    //     "japan-toreca": 9566161,
    //     clove: 4169483,
    //     gacha24: 2518570,
    //     iris: 1658086
    // },
    // {
    //     date: new Date('2023/11/29 1:00'),
    //     "ex-toreca": 2025400,
    //     dopa: 8148358,
    //     "japan-toreca": 791398,
    //     clove: 5096144,
    //     gacha24: 2964901,
    //     iris: 5638533
    // },
    // {
    //     date: new Date('2023/11/29 2:00'),
    //     "ex-toreca": 7033937,
    //     dopa: 2619174,
    //     "japan-toreca": 5577163,
    //     clove: 6956836,
    //     gacha24: 7812928,
    //     iris: 7012248
    // },
    // {
    //     date: new Date('2023/11/29 3:00'),
    //     "ex-toreca": 4243245,
    //     dopa: 8138892,
    //     "japan-toreca": 9661466,
    //     clove: 4165028,
    //     gacha24: 6508741,
    //     iris: 5434930
    // },
    // {
    //     date: new Date('2023/11/29 4:00'),
    //     "ex-toreca": 5747155,
    //     dopa: 5729944,
    //     "japan-toreca": 8138395,
    //     clove: 8036440,
    //     gacha24: 1648607,
    //     iris: 320339
    // },
    // {
    //     date: new Date('2023/11/29 5:00'),
    //     "ex-toreca": 9299599,
    //     dopa: 1433140,
    //     "japan-toreca": 1385367,
    //     clove: 6327276,
    //     gacha24: 8267712,
    //     iris: 9141500
    // },
    // {
    //     date: new Date('2023/11/29 6:00'),
    //     "ex-toreca": 3371064,
    //     dopa: 9990294,
    //     "japan-toreca": 6877434,
    //     clove: 7963401,
    //     gacha24: 3866388,
    //     iris: 709485
    // },
    // {
    //     date: new Date('2023/11/29 7:00'),
    //     "ex-toreca": 6715293,
    //     dopa: 506453,
    //     "japan-toreca": 3290645,
    //     clove: 7365851,
    //     gacha24: 3336627,
    //     iris: 5874098
    // },
    // {
    //     date: new Date('2023/11/29 8:00'),
    //     "ex-toreca": 6288259,
    //     dopa: 3965794,
    //     "japan-toreca": 4641208,
    //     clove: 8368846,
    //     gacha24: 429995,
    //     iris: 5327011
    // },
    // {
    //     date: new Date('2023/11/29 9:00'),
    //     "ex-toreca": 2546311,
    //     dopa: 8273597,
    //     "japan-toreca": 6323201,
    //     clove: 9351562,
    //     gacha24: 7411567,
    //     iris: 8769943
    // },
    // {
    //     date: new Date('2023/11/29 10:00'),
    //     "ex-toreca": 3770271,
    //     dopa: 1952168,
    //     "japan-toreca": 8149200,
    //     clove: 3202792,
    //     gacha24: 3465439,
    //     iris: 7569425
    // },
    // {
    //     date: new Date('2023/11/29 11:00'),
    //     "ex-toreca": 4396172,
    //     dopa: 5352464,
    //     "japan-toreca": 315982,
    //     clove: 3251373,
    //     gacha24: 9356303,
    //     iris: 1991559
    // },
    // {
    //     date: new Date('2023/11/29 12:00'),
    //     "ex-toreca": 6500086,
    //     dopa: 3240544,
    //     "japan-toreca": 9216338,
    //     clove: 5991413,
    //     gacha24: 4654185,
    //     iris: 8386104
    // },
    // {
    //     date: new Date('2023/11/29 13:00'),
    //     "ex-toreca": 2369998,
    //     dopa: 4892548,
    //     "japan-toreca": 7672267,
    //     clove: 8635485,
    //     gacha24: 2937103,
    //     iris: 7703122
    // },
    // {
    //     date: new Date('2023/11/29 14:00'),
    //     "ex-toreca": 325917,
    //     dopa: 6478915,
    //     "japan-toreca": 9286873,
    //     clove: 8335580,
    //     gacha24: 3832784,
    //     iris: 4389310
    // },
    // {
    //     date: new Date('2023/11/29 15:00'),
    //     "ex-toreca": 1112677,
    //     dopa: 6807004,
    //     "japan-toreca": 2997618,
    //     clove: 2310714,
    //     gacha24: 6530831,
    //     iris: 5861670
    // },
    // {
    //     date: new Date('2023/11/29 16:00'),
    //     "ex-toreca": 3075169,
    //     dopa: 9489648,
    //     "japan-toreca": 6754992,
    //     clove: 716712,
    //     gacha24: 7391951,
    //     iris: 3760136
    // },
    // {
    //     date: new Date('2023/11/29 17:00'),
    //     "ex-toreca": 9385985,
    //     dopa: 9752650,
    //     "japan-toreca": 2318706,
    //     clove: 1040860,
    //     gacha24: 3397727,
    //     iris: 2139362
    // },
    // {
    //     date: new Date('2023/11/29 18:00'),
    //     "ex-toreca": 284563,
    //     dopa: 6915711,
    //     "japan-toreca": 5267125,
    //     clove: 5914032,
    //     gacha24: 9248583,
    //     iris: 8722419
    // },
    // {
    //     date: new Date('2023/11/29 19:00'),
    //     "ex-toreca": 3095753,
    //     dopa: 8214763,
    //     "japan-toreca": 7218283,
    //     clove: 977724,
    //     gacha24: 9315093,
    //     iris: 4706322
    // },
    // {
    //     date: new Date('2023/11/29 20:00'),
    //     "ex-toreca": 5789258,
    //     dopa: 2868012,
    //     "japan-toreca": 4484301,
    //     clove: 846570,
    //     gacha24: 4475157,
    //     iris: 882315
    // },
    // {
    //     date: new Date('2023/11/29 21:00'),
    //     "ex-toreca": 4997025,
    //     dopa: 2693328,
    //     "japan-toreca": 7460420,
    //     clove: 2001279,
    //     gacha24: 7340736,
    //     iris: 8784923
    // },
    // {
    //     date: new Date('2023/11/29 22:00'),
    //     "ex-toreca": 4341987,
    //     dopa: 4432644,
    //     "japan-toreca": 1326540,
    //     clove: 5127474,
    //     gacha24: 6930589,
    //     iris: 4621510
    // },
    // {
    //     date: new Date('2023/11/29 23:00'),
    //     "ex-toreca": 7154079,
    //     dopa: 243043,
    //     "japan-toreca": 5484310,
    //     clove: 8502464,
    //     gacha24: 4569710,
    //     iris: 1100178
    // },
    // {
    //     date: new Date('2023/11/30 0:00'),
    //     "ex-toreca": 8821535,
    //     dopa: 2494947,
    //     "japan-toreca": 606555,
    //     clove: 3954866,
    //     gacha24: 720154,
    //     iris: 3158402
    // },
    // {
    //     date: new Date('2023/11/30 1:00'),
    //     "ex-toreca": 3385750,
    //     dopa: 2385944,
    //     "japan-toreca": 6072823,
    //     clove: 7224347,
    //     gacha24: 7644313,
    //     iris: 5090317
    // },
    // {
    //     date: new Date('2023/11/30 2:00'),
    //     "ex-toreca": 8032576,
    //     dopa: 751789,
    //     "japan-toreca": 9435724,
    //     clove: 6244871,
    //     gacha24: 8501384,
    //     iris: 9821823
    // },
    // {
    //     date: new Date('2023/11/30 3:00'),
    //     "ex-toreca": 5661213,
    //     dopa: 2410428,
    //     "japan-toreca": 1130791,
    //     clove: 1502901,
    //     gacha24: 4859970,
    //     iris: 8903677
    // },
    // {
    //     date: new Date('2023/11/30 4:00'),
    //     "ex-toreca": 7637897,
    //     dopa: 3344957,
    //     "japan-toreca": 7326966,
    //     clove: 1933342,
    //     gacha24: 5458868,
    //     iris: 4098539
    // },
    // {
    //     date: new Date('2023/11/30 5:00'),
    //     "ex-toreca": 6699896,
    //     dopa: 1381938,
    //     "japan-toreca": 4178733,
    //     clove: 3531651,
    //     gacha24: 6543976,
    //     iris: 6601011
    // },
    // {
    //     date: new Date('2023/11/30 6:00'),
    //     "ex-toreca": 5100526,
    //     dopa: 5288717,
    //     "japan-toreca": 1824083,
    //     clove: 4282468,
    //     gacha24: 4375430,
    //     iris: 5912862
    // },
    // {
    //     date: new Date('2023/11/30 7:00'),
    //     "ex-toreca": 6308288,
    //     dopa: 3755477,
    //     "japan-toreca": 4533141,
    //     clove: 2812582,
    //     gacha24: 1749234,
    //     iris: 9480880
    // },
    // {
    //     date: new Date('2023/11/30 8:00'),
    //     "ex-toreca": 1656521,
    //     dopa: 3403239,
    //     "japan-toreca": 1661456,
    //     clove: 7584048,
    //     gacha24: 2859027,
    //     iris: 9921081
    // },
    // {
    //     date: new Date('2023/11/30 9:00'),
    //     "ex-toreca": 8702603,
    //     dopa: 9159513,
    //     "japan-toreca": 4040338,
    //     clove: 6929469,
    //     gacha24: 3556271,
    //     iris: 7882026
    // },
    // {
    //     date: new Date('2023/11/30 10:00'),
    //     "ex-toreca": 9627695,
    //     dopa: 2256473,
    //     "japan-toreca": 3986052,
    //     clove: 5709153,
    //     gacha24: 6863613,
    //     iris: 2368316
    // },
    // {
    //     date: new Date('2023/11/30 11:00'),
    //     "ex-toreca": 158466,
    //     dopa: 6927879,
    //     "japan-toreca": 2398105,
    //     clove: 9475099,
    //     gacha24: 7386017,
    //     iris: 1474610
    // },
    // {
    //     date: new Date('2023/11/30 12:00'),
    //     "ex-toreca": 8383197,
    //     dopa: 9301595,
    //     "japan-toreca": 7841932,
    //     clove: 6703610,
    //     gacha24: 3880805,
    //     iris: 528057
    // },
    // {
    //     date: new Date('2023/11/30 13:00'),
    //     "ex-toreca": 6980100,
    //     dopa: 9245611,
    //     "japan-toreca": 1888139,
    //     clove: 7531558,
    //     gacha24: 1468234,
    //     iris: 323720
    // },
    // {
    //     date: new Date('2023/11/30 14:00'),
    //     "ex-toreca": 3273127,
    //     dopa: 1013720,
    //     "japan-toreca": 5279548,
    //     clove: 6913824,
    //     gacha24: 5697133,
    //     iris: 1234035
    // },
    // {
    //     date: new Date('2023/11/30 15:00'),
    //     "ex-toreca": 5714541,
    //     dopa: 9609696,
    //     "japan-toreca": 8364057,
    //     clove: 5488294,
    //     gacha24: 4198830,
    //     iris: 6268353
    // },
    // {
    //     date: new Date('2023/11/30 16:00'),
    //     "ex-toreca": 4236263,
    //     dopa: 9527748,
    //     "japan-toreca": 8299628,
    //     clove: 5340730,
    //     gacha24: 9968995,
    //     iris: 6137999
    // },
    // {
    //     date: new Date('2023/11/30 17:00'),
    //     "ex-toreca": 6534391,
    //     dopa: 7115353,
    //     "japan-toreca": 7887697,
    //     clove: 4911597,
    //     gacha24: 4219424,
    //     iris: 1265408
    // },
    // {
    //     date: new Date('2023/11/30 18:00'),
    //     "ex-toreca": 5919098,
    //     dopa: 9857454,
    //     "japan-toreca": 4598458,
    //     clove: 4525644,
    //     gacha24: 3142626,
    //     iris: 3834643
    // },
    // {
    //     date: new Date('2023/11/30 19:00'),
    //     "ex-toreca": 1800692,
    //     dopa: 659132,
    //     "japan-toreca": 6300571,
    //     clove: 6280446,
    //     gacha24: 2687237,
    //     iris: 4182517
    // },
    // {
    //     date: new Date('2023/11/30 20:00'),
    //     "ex-toreca": 4725358,
    //     dopa: 1998784,
    //     "japan-toreca": 8216779,
    //     clove: 2913598,
    //     gacha24: 7632362,
    //     iris: 4710629
    // },
    // {
    //     date: new Date('2023/11/30 21:00'),
    //     "ex-toreca": 3139828,
    //     dopa: 346289,
    //     "japan-toreca": 2967487,
    //     clove: 3602829,
    //     gacha24: 8215668,
    //     iris: 4872898
    // },
    // {
    //     date: new Date('2023/11/30 22:00'),
    //     "ex-toreca": 5000847,
    //     dopa: 4521533,
    //     "japan-toreca": 1149303,
    //     clove: 6778809,
    //     gacha24: 4615361,
    //     iris: 720606
    // },
    // {
    //     date: new Date('2023/11/30 23:00'),
    //     "ex-toreca": 1936372,
    //     dopa: 1921366,
    //     "japan-toreca": 9884078,
    //     clove: 4672156,
    //     gacha24: 9626331,
    //     iris: 8920608
    // },
    // {
    //     date: new Date('2023/12/01 0:00'),
    //     "ex-toreca": 8890495,
    //     dopa: 9193988,
    //     "japan-toreca": 3730678,
    //     clove: 4968437,
    //     gacha24: 5501418,
    //     iris: 8593631
    // },
    // {
    //     date: new Date('2023/12/01 1:00'),
    //     "ex-toreca": 49629,
    //     dopa: 6656126,
    //     "japan-toreca": 3108282,
    //     clove: 5080544,
    //     gacha24: 5060212,
    //     iris: 8674790
    // },
    // {
    //     date: new Date('2023/12/01 2:00'),
    //     "ex-toreca": 5927387,
    //     dopa: 6299803,
    //     "japan-toreca": 7381585,
    //     clove: 4597887,
    //     gacha24: 9744398,
    //     iris: 2300521
    // },
    // {
    //     date: new Date('2023/12/01 3:00'),
    //     "ex-toreca": 9180935,
    //     dopa: 7096525,
    //     "japan-toreca": 2244362,
    //     clove: 2025838,
    //     gacha24: 5540587,
    //     iris: 3973639
    // },
    // {
    //     date: new Date('2023/12/01 4:00'),
    //     "ex-toreca": 5139555,
    //     dopa: 1176680,
    //     "japan-toreca": 7880656,
    //     clove: 8369672,
    //     gacha24: 796086,
    //     iris: 936162
    // },
    // {
    //     date: new Date('2023/12/01 5:00'),
    //     "ex-toreca": 5595043,
    //     dopa: 7178277,
    //     "japan-toreca": 909713,
    //     clove: 7247000,
    //     gacha24: 3369772,
    //     iris: 2594414
    // },
    // {
    //     date: new Date('2023/12/01 6:00'),
    //     "ex-toreca": 1131515,
    //     dopa: 6114838,
    //     "japan-toreca": 5087514,
    //     clove: 5027818,
    //     gacha24: 9528791,
    //     iris: 287587
    // },
    // {
    //     date: new Date('2023/12/01 7:00'),
    //     "ex-toreca": 7577370,
    //     dopa: 4928398,
    //     "japan-toreca": 4523418,
    //     clove: 2308315,
    //     gacha24: 205210,
    //     iris: 434124
    // },
    // {
    //     date: new Date('2023/12/01 8:00'),
    //     "ex-toreca": 8674913,
    //     dopa: 3024591,
    //     "japan-toreca": 5926485,
    //     clove: 299959,
    //     gacha24: 9113095,
    //     iris: 310568
    // },
    // {
    //     date: new Date('2023/12/01 9:00'),
    //     "ex-toreca": 4074021,
    //     dopa: 3147354,
    //     "japan-toreca": 8992335,
    //     clove: 5040600,
    //     gacha24: 8124797,
    //     iris: 5339875
    // },
    // {
    //     date: new Date('2023/12/01 10:00'),
    //     "ex-toreca": 5555873,
    //     dopa: 5633403,
    //     "japan-toreca": 6661581,
    //     clove: 8826131,
    //     gacha24: 6053930,
    //     iris: 58672
    // },
    // {
    //     date: new Date('2023/12/01 11:00'),
    //     "ex-toreca": 5083939,
    //     dopa: 4012132,
    //     "japan-toreca": 2579213,
    //     clove: 2167767,
    //     gacha24: 3893983,
    //     iris: 8526549
    // },
    // {
    //     date: new Date('2023/12/01 12:00'),
    //     "ex-toreca": 3348912,
    //     dopa: 5893665,
    //     "japan-toreca": 5968253,
    //     clove: 8490199,
    //     gacha24: 300589,
    //     iris: 8074629
    // },
    // {
    //     date: new Date('2023/12/01 13:00'),
    //     "ex-toreca": 3053368,
    //     dopa: 7682104,
    //     "japan-toreca": 9925175,
    //     clove: 2583052,
    //     gacha24: 219645,
    //     iris: 456645
    // },
    // {
    //     date: new Date('2023/12/01 14:00'),
    //     "ex-toreca": 1914771,
    //     dopa: 5047649,
    //     "japan-toreca": 1277854,
    //     clove: 3819530,
    //     gacha24: 5933391,
    //     iris: 2339078
    // },
    // {
    //     date: new Date('2023/12/01 15:00'),
    //     "ex-toreca": 5861534,
    //     dopa: 8714092,
    //     "japan-toreca": 6623008,
    //     clove: 3482989,
    //     gacha24: 577952,
    //     iris: 5805394
    // },
    // {
    //     date: new Date('2023/12/01 16:00'),
    //     "ex-toreca": 6016722,
    //     dopa: 5410341,
    //     "japan-toreca": 1948074,
    //     clove: 4429572,
    //     gacha24: 4365479,
    //     iris: 4122659
    // },
    // {
    //     date: new Date('2023/12/01 17:00'),
    //     "ex-toreca": 5870936,
    //     dopa: 2491978,
    //     "japan-toreca": 8936842,
    //     clove: 7544680,
    //     gacha24: 8539481,
    //     iris: 4609306
    // },
    // {
    //     date: new Date('2023/12/01 18:00'),
    //     "ex-toreca": 8126673,
    //     dopa: 9500566,
    //     "japan-toreca": 4612023,
    //     clove: 4818971,
    //     gacha24: 952565,
    //     iris: 5139155
    // },
    // {
    //     date: new Date('2023/12/01 19:00'),
    //     "ex-toreca": 9366148,
    //     dopa: 599530,
    //     "japan-toreca": 744502,
    //     clove: 489176,
    //     gacha24: 588014,
    //     iris: 6561463
    // },
    // {
    //     date: new Date('2023/12/01 20:00'),
    //     "ex-toreca": 7701023,
    //     dopa: 4892903,
    //     "japan-toreca": 2629072,
    //     clove: 6691059,
    //     gacha24: 2344699,
    //     iris: 3665406
    // },
    // {
    //     date: new Date('2023/12/01 21:00'),
    //     "ex-toreca": 7154292,
    //     dopa: 5303071,
    //     "japan-toreca": 1523197,
    //     clove: 3845342,
    //     gacha24: 4549438,
    //     iris: 9272032
    // },
    // {
    //     date: new Date('2023/12/01 22:00'),
    //     "ex-toreca": 4226268,
    //     dopa: 7161375,
    //     "japan-toreca": 2242686,
    //     clove: 1650671,
    //     gacha24: 209566,
    //     iris: 5385950
    // },
    // {
    //     date: new Date('2023/12/01 23:00'),
    //     "ex-toreca": 6301728,
    //     dopa: 762400,
    //     "japan-toreca": 2063110,
    //     clove: 7013423,
    //     gacha24: 2193479,
    //     iris: 2891501
    // },
    // {
    //     date: new Date('2023/12/02 0:00'),
    //     "ex-toreca": 3083843,
    //     dopa: 2666505,
    //     "japan-toreca": 7096873,
    //     clove: 1986365,
    //     gacha24: 3365809,
    //     iris: 7046903
    // },
    // {
    //     date: new Date('2023/12/02 1:00'),
    //     "ex-toreca": 9256312,
    //     dopa: 4564321,
    //     "japan-toreca": 9311867,
    //     clove: 7082031,
    //     gacha24: 9384804,
    //     iris: 4137341
    // },
    // {
    //     date: new Date('2023/12/02 2:00'),
    //     "ex-toreca": 2327906,
    //     dopa: 8652606,
    //     "japan-toreca": 4320493,
    //     clove: 9505908,
    //     gacha24: 5601299,
    //     iris: 2531559
    // },
    // {
    //     date: new Date('2023/12/02 3:00'),
    //     "ex-toreca": 3914273,
    //     dopa: 2158826,
    //     "japan-toreca": 5192223,
    //     clove: 4245618,
    //     gacha24: 8389833,
    //     iris: 2503796
    // },
    // {
    //     date: new Date('2023/12/02 4:00'),
    //     "ex-toreca": 6489252,
    //     dopa: 3957368,
    //     "japan-toreca": 9817021,
    //     clove: 3532523,
    //     gacha24: 5829554,
    //     iris: 2407246
    // },
    // {
    //     date: new Date('2023/12/02 5:00'),
    //     "ex-toreca": 587417,
    //     dopa: 4802646,
    //     "japan-toreca": 5364306,
    //     clove: 4092066,
    //     gacha24: 8266140,
    //     iris: 169424
    // },
    // {
    //     date: new Date('2023/12/02 6:00'),
    //     "ex-toreca": 3800251,
    //     dopa: 7941916,
    //     "japan-toreca": 9061589,
    //     clove: 8313301,
    //     gacha24: 68987,
    //     iris: 3590278
    // },
    // {
    //     date: new Date('2023/12/02 7:00'),
    //     "ex-toreca": 7797543,
    //     dopa: 9376570,
    //     "japan-toreca": 6900321,
    //     clove: 640901,
    //     gacha24: 8723296,
    //     iris: 5788164
    // },
    // {
    //     date: new Date('2023/12/02 8:00'),
    //     "ex-toreca": 1778536,
    //     dopa: 3678620,
    //     "japan-toreca": 5176130,
    //     clove: 1004529,
    //     gacha24: 885420,
    //     iris: 3178432
    // },
    // {
    //     date: new Date('2023/12/02 9:00'),
    //     "ex-toreca": 442789,
    //     dopa: 4101588,
    //     "japan-toreca": 6390052,
    //     clove: 6836134,
    //     gacha24: 3986541,
    //     iris: 5829935
    // },
    // {
    //     date: new Date('2023/12/02 10:00'),
    //     "ex-toreca": 4187444,
    //     dopa: 5270653,
    //     "japan-toreca": 9288010,
    //     clove: 2191007,
    //     gacha24: 3861264,
    //     iris: 9582657
    // },
    // {
    //     date: new Date('2023/12/02 11:00'),
    //     "ex-toreca": 2038498,
    //     dopa: 1337019,
    //     "japan-toreca": 7698113,
    //     clove: 3203043,
    //     gacha24: 4853755,
    //     iris: 6341008
    // },
    // {
    //     date: new Date('2023/12/02 12:00'),
    //     "ex-toreca": 2745171,
    //     dopa: 470759,
    //     "japan-toreca": 1660592,
    //     clove: 8889954,
    //     gacha24: 8128273,
    //     iris: 339853
    // },
    // {
    //     date: new Date('2023/12/02 13:00'),
    //     "ex-toreca": 2140510,
    //     dopa: 547080,
    //     "japan-toreca": 5174536,
    //     clove: 343111,
    //     gacha24: 7279063,
    //     iris: 6647599
    // },
    // {
    //     date: new Date('2023/12/02 14:00'),
    //     "ex-toreca": 7205101,
    //     dopa: 9363746,
    //     "japan-toreca": 3181307,
    //     clove: 6789352,
    //     gacha24: 5156497,
    //     iris: 9736976
    // },
    // {
    //     date: new Date('2023/12/02 15:00'),
    //     "ex-toreca": 8099029,
    //     dopa: 3084348,
    //     "japan-toreca": 4086279,
    //     clove: 9275001,
    //     gacha24: 5202675,
    //     iris: 7422342
    // },
    // {
    //     date: new Date('2023/12/02 16:00'),
    //     "ex-toreca": 1806780,
    //     dopa: 8886027,
    //     "japan-toreca": 7905290,
    //     clove: 9298687,
    //     gacha24: 9768404,
    //     iris: 5710620
    // },
    // {
    //     date: new Date('2023/12/02 17:00'),
    //     "ex-toreca": 9657076,
    //     dopa: 7298316,
    //     "japan-toreca": 2654165,
    //     clove: 1950323,
    //     gacha24: 7199942,
    //     iris: 7868474
    // },
    // {
    //     date: new Date('2023/12/02 18:00'),
    //     "ex-toreca": 5055308,
    //     dopa: 7646481,
    //     "japan-toreca": 762268,
    //     clove: 9182287,
    //     gacha24: 3613948,
    //     iris: 1194696
    // },
    // {
    //     date: new Date('2023/12/02 19:00'),
    //     "ex-toreca": 915121,
    //     dopa: 4559438,
    //     "japan-toreca": 2540473,
    //     clove: 2472249,
    //     gacha24: 5579527,
    //     iris: 4420178
    // },
    // {
    //     date: new Date('2023/12/02 20:00'),
    //     "ex-toreca": 4536927,
    //     dopa: 7338696,
    //     "japan-toreca": 1968579,
    //     clove: 8586463,
    //     gacha24: 4678646,
    //     iris: 1510604
    // },
    // {
    //     date: new Date('2023/12/02 21:00'),
    //     "ex-toreca": 2851889,
    //     dopa: 5058710,
    //     "japan-toreca": 7766520,
    //     clove: 7589162,
    //     gacha24: 8278914,
    //     iris: 7460559
    // },
    // {
    //     date: new Date('2023/12/02 22:00'),
    //     "ex-toreca": 407387,
    //     dopa: 2662687,
    //     "japan-toreca": 5771299,
    //     clove: 6967687,
    //     gacha24: 8154573,
    //     iris: 6925040
    // },
    // {
    //     date: new Date('2023/12/02 23:00'),
    //     "ex-toreca": 152632,
    //     dopa: 4477878,
    //     "japan-toreca": 2900065,
    //     clove: 6077996,
    //     gacha24: 8195511,
    //     iris: 1717599
    // },
    // {
    //     date: new Date('2023/12/03 0:00'),
    //     "ex-toreca": 5230067,
    //     dopa: 2843687,
    //     "japan-toreca": 8922980,
    //     clove: 2835760,
    //     gacha24: 1968468,
    //     iris: 4147347
    // },
    // {
    //     date: new Date('2023/12/03 1:00'),
    //     "ex-toreca": 3206534,
    //     dopa: 8856023,
    //     "japan-toreca": 4808073,
    //     clove: 7288319,
    //     gacha24: 2924780,
    //     iris: 898654
    // },
    // {
    //     date: new Date('2023/12/03 2:00'),
    //     "ex-toreca": 6274834,
    //     dopa: 9387898,
    //     "japan-toreca": 2383850,
    //     clove: 6695262,
    //     gacha24: 588221,
    //     iris: 517076
    // },
    // {
    //     date: new Date('2023/12/03 3:00'),
    //     "ex-toreca": 6183821,
    //     dopa: 7836247,
    //     "japan-toreca": 5665594,
    //     clove: 2944889,
    //     gacha24: 66185,
    //     iris: 5730848
    // },
    // {
    //     date: new Date('2023/12/03 4:00'),
    //     "ex-toreca": 7247844,
    //     dopa: 162785,
    //     "japan-toreca": 8968699,
    //     clove: 3798193,
    //     gacha24: 421900,
    //     iris: 469405
    // },
    // {
    //     date: new Date('2023/12/03 5:00'),
    //     "ex-toreca": 7296527,
    //     dopa: 7274673,
    //     "japan-toreca": 5042224,
    //     clove: 1862713,
    //     gacha24: 9249607,
    //     iris: 7118177
    // },
    // {
    //     date: new Date('2023/12/03 6:00'),
    //     "ex-toreca": 2081990,
    //     dopa: 5022651,
    //     "japan-toreca": 1445796,
    //     clove: 3562825,
    //     gacha24: 973995,
    //     iris: 5460925
    // },
    // {
    //     date: new Date('2023/12/03 7:00'),
    //     "ex-toreca": 3720445,
    //     dopa: 6516032,
    //     "japan-toreca": 2696556,
    //     clove: 8366083,
    //     gacha24: 8143388,
    //     iris: 5039852
    // },
    // {
    //     date: new Date('2023/12/03 8:00'),
    //     "ex-toreca": 7971066,
    //     dopa: 2658568,
    //     "japan-toreca": 4486767,
    //     clove: 477854,
    //     gacha24: 3209028,
    //     iris: 3626165
    // },
    // {
    //     date: new Date('2023/12/03 9:00'),
    //     "ex-toreca": 3225989,
    //     dopa: 1748558,
    //     "japan-toreca": 9106204,
    //     clove: 4853119,
    //     gacha24: 2271439,
    //     iris: 747116
    // },
    // {
    //     date: new Date('2023/12/03 10:00'),
    //     "ex-toreca": 785591,
    //     dopa: 2152980,
    //     "japan-toreca": 3001475,
    //     clove: 3264925,
    //     gacha24: 5125817,
    //     iris: 675366
    // },
    // {
    //     date: new Date('2023/12/03 11:00'),
    //     "ex-toreca": 4407106,
    //     dopa: 1716349,
    //     "japan-toreca": 5384072,
    //     clove: 5253244,
    //     gacha24: 853051,
    //     iris: 6346950
    // },
    // {
    //     date: new Date('2023/12/03 12:00'),
    //     "ex-toreca": 1971312,
    //     dopa: 9411890,
    //     "japan-toreca": 7551919,
    //     clove: 4517163,
    //     gacha24: 2689424,
    //     iris: 531487
    // },
    // {
    //     date: new Date('2023/12/03 13:00'),
    //     "ex-toreca": 3149853,
    //     dopa: 9120332,
    //     "japan-toreca": 8833956,
    //     clove: 949891,
    //     gacha24: 834846,
    //     iris: 5609367
    // },
    // {
    //     date: new Date('2023/12/03 14:00'),
    //     "ex-toreca": 938755,
    //     dopa: 2038547,
    //     "japan-toreca": 7116256,
    //     clove: 3966396,
    //     gacha24: 4424306,
    //     iris: 924353
    // },
    // {
    //     date: new Date('2023/12/03 15:00'),
    //     "ex-toreca": 4807752,
    //     dopa: 2857648,
    //     "japan-toreca": 9260449,
    //     clove: 2661025,
    //     gacha24: 2240245,
    //     iris: 4041550
    // },
    // {
    //     date: new Date('2023/12/03 16:00'),
    //     "ex-toreca": 8052506,
    //     dopa: 9216239,
    //     "japan-toreca": 5691091,
    //     clove: 383470,
    //     gacha24: 7767561,
    //     iris: 3140925
    // },
    // {
    //     date: new Date('2023/12/03 17:00'),
    //     "ex-toreca": 2272047,
    //     dopa: 9656815,
    //     "japan-toreca": 9094283,
    //     clove: 3274249,
    //     gacha24: 9516061,
    //     iris: 6270476
    // },
    // {
    //     date: new Date('2023/12/03 18:00'),
    //     "ex-toreca": 4908395,
    //     dopa: 7519838,
    //     "japan-toreca": 6080818,
    //     clove: 7390437,
    //     gacha24: 3055488,
    //     iris: 1492537
    // },
    // {
    //     date: new Date('2023/12/03 19:00'),
    //     "ex-toreca": 736139,
    //     dopa: 2086852,
    //     "japan-toreca": 2756905,
    //     clove: 3496386,
    //     gacha24: 1264473,
    //     iris: 215710
    // },
    // {
    //     date: new Date('2023/12/03 20:00'),
    //     "ex-toreca": 439301,
    //     dopa: 5577326,
    //     "japan-toreca": 4734666,
    //     clove: 4498029,
    //     gacha24: 9589066,
    //     iris: 402672
    // },
    // {
    //     date: new Date('2023/12/03 21:00'),
    //     "ex-toreca": 4585321,
    //     dopa: 9627749,
    //     "japan-toreca": 1010662,
    //     clove: 6450160,
    //     gacha24: 2923947,
    //     iris: 8827301
    // },
    // {
    //     date: new Date('2023/12/03 22:00'),
    //     "ex-toreca": 5184309,
    //     dopa: 9063808,
    //     "japan-toreca": 5375458,
    //     clove: 2014700,
    //     gacha24: 2932237,
    //     iris: 3548065
    // },
    // {
    //     date: new Date('2023/12/03 23:00'),
    //     "ex-toreca": 2694225,
    //     dopa: 656898,
    //     "japan-toreca": 8278746,
    //     clove: 2462605,
    //     gacha24: 7589168,
    //     iris: 5523983
    // },
    // {
    //     date: new Date('2023/12/04 0:00'),
    //     "ex-toreca": 6777702,
    //     dopa: 6694208,
    //     "japan-toreca": 4806686,
    //     clove: 8897557,
    //     gacha24: 8399895,
    //     iris: 1066001
    // },
    // {
    //     date: new Date('2023/12/04 1:00'),
    //     "ex-toreca": 9071456,
    //     dopa: 3010273,
    //     "japan-toreca": 6764526,
    //     clove: 2283498,
    //     gacha24: 4731486,
    //     iris: 1802759
    // },
    // {
    //     date: new Date('2023/12/04 2:00'),
    //     "ex-toreca": 159789,
    //     dopa: 9670842,
    //     "japan-toreca": 4448233,
    //     clove: 4333310,
    //     gacha24: 7507903,
    //     iris: 1117305
    // },
    // {
    //     date: new Date('2023/12/04 3:00'),
    //     "ex-toreca": 6932646,
    //     dopa: 8058721,
    //     "japan-toreca": 5976531,
    //     clove: 5455497,
    //     gacha24: 1821630,
    //     iris: 6862512
    // },
    // {
    //     date: new Date('2023/12/04 4:00'),
    //     "ex-toreca": 3134195,
    //     dopa: 783036,
    //     "japan-toreca": 2081519,
    //     clove: 9214314,
    //     gacha24: 873217,
    //     iris: 4424396
    // },
    // {
    //     date: new Date('2023/12/04 5:00'),
    //     "ex-toreca": 6850498,
    //     dopa: 6849434,
    //     "japan-toreca": 8652362,
    //     clove: 4516077,
    //     gacha24: 5586569,
    //     iris: 8594582
    // },
    // {
    //     date: new Date('2023/12/04 6:00'),
    //     "ex-toreca": 6432269,
    //     dopa: 1226234,
    //     "japan-toreca": 8203846,
    //     clove: 6821458,
    //     gacha24: 4583022,
    //     iris: 7210701
    // },
    // {
    //     date: new Date('2023/12/04 7:00'),
    //     "ex-toreca": 2804140,
    //     dopa: 3859395,
    //     "japan-toreca": 1179389,
    //     clove: 4467307,
    //     gacha24: 3203652,
    //     iris: 3780707
    // },
    // {
    //     date: new Date('2023/12/04 8:00'),
    //     "ex-toreca": 8112172,
    //     dopa: 8375591,
    //     "japan-toreca": 1090724,
    //     clove: 1684639,
    //     gacha24: 9964751,
    //     iris: 1182597
    // },
    // {
    //     date: new Date('2023/12/04 9:00'),
    //     "ex-toreca": 3710024,
    //     dopa: 9231672,
    //     "japan-toreca": 1722126,
    //     clove: 8099097,
    //     gacha24: 5782916,
    //     iris: 8138490
    // },
    // {
    //     date: new Date('2023/12/04 10:00'),
    //     "ex-toreca": 4067139,
    //     dopa: 4002388,
    //     "japan-toreca": 85216,
    //     clove: 5913092,
    //     gacha24: 205376,
    //     iris: 153930
    // },
    // {
    //     date: new Date('2023/12/04 11:00'),
    //     "ex-toreca": 50745,
    //     dopa: 9903506,
    //     "japan-toreca": 8331285,
    //     clove: 4669165,
    //     gacha24: 4055210,
    //     iris: 739828
    // },
    // {
    //     date: new Date('2023/12/04 12:00'),
    //     "ex-toreca": 9980915,
    //     dopa: 5951063,
    //     "japan-toreca": 1621911,
    //     clove: 3179680,
    //     gacha24: 7939869,
    //     iris: 9431433
    // },
    // {
    //     date: new Date('2023/12/04 13:00'),
    //     "ex-toreca": 6882320,
    //     dopa: 7343280,
    //     "japan-toreca": 1185824,
    //     clove: 596101,
    //     gacha24: 6700143,
    //     iris: 5429359
    // },
    // {
    //     date: new Date('2023/12/04 14:00'),
    //     "ex-toreca": 9799803,
    //     dopa: 9017876,
    //     "japan-toreca": 6349791,
    //     clove: 3712535,
    //     gacha24: 3663934,
    //     iris: 7794590
    // },
    // {
    //     date: new Date('2023/12/04 15:00'),
    //     "ex-toreca": 4153110,
    //     dopa: 7027196,
    //     "japan-toreca": 8152564,
    //     clove: 2758706,
    //     gacha24: 2034657,
    //     iris: 4662486
    // },
    // {
    //     date: new Date('2023/12/04 16:00'),
    //     "ex-toreca": 5097923,
    //     dopa: 3089371,
    //     "japan-toreca": 8464866,
    //     clove: 6414117,
    //     gacha24: 534969,
    //     iris: 8781445
    // },
    // {
    //     date: new Date('2023/12/04 17:00'),
    //     "ex-toreca": 5910094,
    //     dopa: 7007072,
    //     "japan-toreca": 5956407,
    //     clove: 2773619,
    //     gacha24: 8991891,
    //     iris: 4657290
    // },
    // {
    //     date: new Date('2023/12/04 18:00'),
    //     "ex-toreca": 3301600,
    //     dopa: 1250895,
    //     "japan-toreca": 6955960,
    //     clove: 2347982,
    //     gacha24: 52205,
    //     iris: 7121514
    // },
    // {
    //     date: new Date('2023/12/04 19:00'),
    //     "ex-toreca": 4208114,
    //     dopa: 2937621,
    //     "japan-toreca": 8691964,
    //     clove: 2706763,
    //     gacha24: 6136169,
    //     iris: 8336273
    // },
    // {
    //     date: new Date('2023/12/04 20:00'),
    //     "ex-toreca": 9058883,
    //     dopa: 9949057,
    //     "japan-toreca": 9098423,
    //     clove: 381716,
    //     gacha24: 4708646,
    //     iris: 3975531
    // },
    // {
    //     date: new Date('2023/12/04 21:00'),
    //     "ex-toreca": 8268073,
    //     dopa: 6348416,
    //     "japan-toreca": 2500242,
    //     clove: 588776,
    //     gacha24: 509496,
    //     iris: 3641962
    // },
    // {
    //     date: new Date('2023/12/04 22:00'),
    //     "ex-toreca": 6071452,
    //     dopa: 6270470,
    //     "japan-toreca": 5178502,
    //     clove: 8822622,
    //     gacha24: 2917802,
    //     iris: 6753179
    // },
    // {
    //     date: new Date('2023/12/04 23:00'),
    //     "ex-toreca": 89924,
    //     dopa: 6237349,
    //     "japan-toreca": 3036641,
    //     clove: 7704625,
    //     gacha24: 4190919,
    //     iris: 142403
    // },
    // {
    //     date: new Date('2023/12/05 0:00'),
    //     "ex-toreca": 8487296,
    //     dopa: 6713522,
    //     "japan-toreca": 6009390,
    //     clove: 6576655,
    //     gacha24: 5622587,
    //     iris: 4531464
    // },
    // {
    //     date: new Date('2023/12/05 1:00'),
    //     "ex-toreca": 3595132,
    //     dopa: 7115404,
    //     "japan-toreca": 9158118,
    //     clove: 8352308,
    //     gacha24: 1724354,
    //     iris: 3538167
    // },
    // {
    //     date: new Date('2023/12/05 2:00'),
    //     "ex-toreca": 2586181,
    //     dopa: 4734833,
    //     "japan-toreca": 3741172,
    //     clove: 9640213,
    //     gacha24: 7102762,
    //     iris: 5074961
    // },
    // {
    //     date: new Date('2023/12/05 3:00'),
    //     "ex-toreca": 1437524,
    //     dopa: 2718699,
    //     "japan-toreca": 7922031,
    //     clove: 8697837,
    //     gacha24: 6243432,
    //     iris: 6725748
    // },
    // {
    //     date: new Date('2023/12/05 4:00'),
    //     "ex-toreca": 6381248,
    //     dopa: 7699705,
    //     "japan-toreca": 6387824,
    //     clove: 6283308,
    //     gacha24: 6614523,
    //     iris: 2639127
    // },
    // {
    //     date: new Date('2023/12/05 5:00'),
    //     "ex-toreca": 8652755,
    //     dopa: 3140603,
    //     "japan-toreca": 3895516,
    //     clove: 8119713,
    //     gacha24: 3837529,
    //     iris: 6662850
    // },
    // {
    //     date: new Date('2023/12/05 6:00'),
    //     "ex-toreca": 1426810,
    //     dopa: 4724807,
    //     "japan-toreca": 6065660,
    //     clove: 3680671,
    //     gacha24: 6653111,
    //     iris: 596929
    // },
    // {
    //     date: new Date('2023/12/05 7:00'),
    //     "ex-toreca": 2373269,
    //     dopa: 1762424,
    //     "japan-toreca": 7119036,
    //     clove: 5264355,
    //     gacha24: 1491510,
    //     iris: 46007
    // },
    // {
    //     date: new Date('2023/12/05 8:00'),
    //     "ex-toreca": 8069750,
    //     dopa: 3407011,
    //     "japan-toreca": 561466,
    //     clove: 6611788,
    //     gacha24: 7496137,
    //     iris: 3611992
    // },
    // {
    //     date: new Date('2023/12/05 9:00'),
    //     "ex-toreca": 5572440,
    //     dopa: 5558422,
    //     "japan-toreca": 9107604,
    //     clove: 7194215,
    //     gacha24: 6309764,
    //     iris: 1985350
    // },
    // {
    //     date: new Date('2023/12/05 10:00'),
    //     "ex-toreca": 791036,
    //     dopa: 1951540,
    //     "japan-toreca": 736825,
    //     clove: 7639094,
    //     gacha24: 437303,
    //     iris: 7268589
    // },
    // {
    //     date: new Date('2023/12/05 11:00'),
    //     "ex-toreca": 3908703,
    //     dopa: 8044441,
    //     "japan-toreca": 6271512,
    //     clove: 9093394,
    //     gacha24: 2471866,
    //     iris: 4098269
    // },
    // {
    //     date: new Date('2023/12/05 12:00'),
    //     "ex-toreca": 5849160,
    //     dopa: 833201,
    //     "japan-toreca": 2321913,
    //     clove: 8063074,
    //     gacha24: 1039578,
    //     iris: 2630894
    // },
    // {
    //     date: new Date('2023/12/05 13:00'),
    //     "ex-toreca": 8890817,
    //     dopa: 8799127,
    //     "japan-toreca": 8484022,
    //     clove: 2275236,
    //     gacha24: 6350974,
    //     iris: 6159127
    // },
    // {
    //     date: new Date('2023/12/05 14:00'),
    //     "ex-toreca": 7542156,
    //     dopa: 1613747,
    //     "japan-toreca": 3518543,
    //     clove: 9644864,
    //     gacha24: 3701391,
    //     iris: 1850193
    // },
    // {
    //     date: new Date('2023/12/05 15:00'),
    //     "ex-toreca": 6699823,
    //     dopa: 7411024,
    //     "japan-toreca": 3057562,
    //     clove: 4508692,
    //     gacha24: 9160434,
    //     iris: 8039673
    // },
    // {
    //     date: new Date('2023/12/05 16:00'),
    //     "ex-toreca": 9458634,
    //     dopa: 7669085,
    //     "japan-toreca": 4103624,
    //     clove: 4290801,
    //     gacha24: 7575639,
    //     iris: 2711114
    // },
    // {
    //     date: new Date('2023/12/05 17:00'),
    //     "ex-toreca": 9105459,
    //     dopa: 9718051,
    //     "japan-toreca": 5258230,
    //     clove: 3279276,
    //     gacha24: 949083,
    //     iris: 2277736
    // },
    // {
    //     date: new Date('2023/12/05 18:00'),
    //     "ex-toreca": 5040609,
    //     dopa: 7017202,
    //     "japan-toreca": 7605556,
    //     clove: 6733761,
    //     gacha24: 9165033,
    //     iris: 8247088
    // },
    // {
    //     date: new Date('2023/12/05 19:00'),
    //     "ex-toreca": 7233959,
    //     dopa: 368989,
    //     "japan-toreca": 8890163,
    //     clove: 5468295,
    //     gacha24: 2499501,
    //     iris: 5437868
    // },
    // {
    //     date: new Date('2023/12/05 20:00'),
    //     "ex-toreca": 1755095,
    //     dopa: 454858,
    //     "japan-toreca": 7762097,
    //     clove: 1137696,
    //     gacha24: 9361933,
    //     iris: 3205639
    // },
    // {
    //     date: new Date('2023/12/05 21:00'),
    //     "ex-toreca": 640244,
    //     dopa: 3803838,
    //     "japan-toreca": 2367640,
    //     clove: 9584763,
    //     gacha24: 9592224,
    //     iris: 8781821
    // },
    // {
    //     date: new Date('2023/12/05 22:00'),
    //     "ex-toreca": 9242587,
    //     dopa: 8223601,
    //     "japan-toreca": 5905912,
    //     clove: 5367276,
    //     gacha24: 1041122,
    //     iris: 5894722
    // },
    // {
    //     date: new Date('2023/12/05 23:00'),
    //     "ex-toreca": 5339584,
    //     dopa: 2103238,
    //     "japan-toreca": 4943452,
    //     clove: 8365207,
    //     gacha24: 913926,
    //     iris: 7588184
    // },
    // {
    //     date: new Date('2023/12/06 0:00'),
    //     "ex-toreca": 8574730,
    //     dopa: 9733503,
    //     "japan-toreca": 5021261,
    //     clove: 9960657,
    //     gacha24: 2942105,
    //     iris: 1414897
    // },
    // {
    //     date: new Date('2023/12/06 1:00'),
    //     "ex-toreca": 9502446,
    //     dopa: 1691914,
    //     "japan-toreca": 9115110,
    //     clove: 2296040,
    //     gacha24: 2810260,
    //     iris: 6400463
    // },
    // {
    //     date: new Date('2023/12/06 2:00'),
    //     "ex-toreca": 5724575,
    //     dopa: 141050,
    //     "japan-toreca": 4466170,
    //     clove: 3920730,
    //     gacha24: 715232,
    //     iris: 3580760
    // },
    // {
    //     date: new Date('2023/12/06 3:00'),
    //     "ex-toreca": 6750484,
    //     dopa: 3736719,
    //     "japan-toreca": 8411786,
    //     clove: 3105892,
    //     gacha24: 7738908,
    //     iris: 9892926
    // },
    // {
    //     date: new Date('2023/12/06 4:00'),
    //     "ex-toreca": 9395689,
    //     dopa: 3508868,
    //     "japan-toreca": 6011174,
    //     clove: 2903773,
    //     gacha24: 4723495,
    //     iris: 1769040
    // },
    // {
    //     date: new Date('2023/12/06 5:00'),
    //     "ex-toreca": 9430405,
    //     dopa: 6607384,
    //     "japan-toreca": 6317170,
    //     clove: 9485772,
    //     gacha24: 3255962,
    //     iris: 4534805
    // },
    // {
    //     date: new Date('2023/12/06 6:00'),
    //     "ex-toreca": 5824744,
    //     dopa: 162521,
    //     "japan-toreca": 4362433,
    //     clove: 8262416,
    //     gacha24: 4407396,
    //     iris: 5751164
    // },
    // {
    //     date: new Date('2023/12/06 7:00'),
    //     "ex-toreca": 9619446,
    //     dopa: 3631953,
    //     "japan-toreca": 4556559,
    //     clove: 9223958,
    //     gacha24: 4940502,
    //     iris: 5997286
    // },
    // {
    //     date: new Date('2023/12/06 8:00'),
    //     "ex-toreca": 156638,
    //     dopa: 552986,
    //     "japan-toreca": 2402162,
    //     clove: 5356038,
    //     gacha24: 1782609,
    //     iris: 5811185
    // },
    // {
    //     date: new Date('2023/12/06 9:00'),
    //     "ex-toreca": 7645118,
    //     dopa: 8433387,
    //     "japan-toreca": 9633142,
    //     clove: 8987041,
    //     gacha24: 952288,
    //     iris: 8660386
    // },
    // {
    //     date: new Date('2023/12/06 10:00'),
    //     "ex-toreca": 4050712,
    //     dopa: 9750397,
    //     "japan-toreca": 8423481,
    //     clove: 1819994,
    //     gacha24: 2456774,
    //     iris: 5048704
    // },
    // {
    //     date: new Date('2023/12/06 11:00'),
    //     "ex-toreca": 964167,
    //     dopa: 6793456,
    //     "japan-toreca": 3415970,
    //     clove: 3171783,
    //     gacha24: 6622620,
    //     iris: 3135834
    // },
    // {
    //     date: new Date('2023/12/06 12:00'),
    //     "ex-toreca": 59679,
    //     dopa: 2241339,
    //     "japan-toreca": 4789506,
    //     clove: 8146670,
    //     gacha24: 715991,
    //     iris: 4773622
    // },
    // {
    //     date: new Date('2023/12/06 13:00'),
    //     "ex-toreca": 4284485,
    //     dopa: 3790780,
    //     "japan-toreca": 8373605,
    //     clove: 5793748,
    //     gacha24: 9260120,
    //     iris: 9974508
    // },
    // {
    //     date: new Date('2023/12/06 14:00'),
    //     "ex-toreca": 3932156,
    //     dopa: 5098713,
    //     "japan-toreca": 5175527,
    //     clove: 2759909,
    //     gacha24: 2988918,
    //     iris: 2164196
    // },
    // {
    //     date: new Date('2023/12/06 15:00'),
    //     "ex-toreca": 5054593,
    //     dopa: 270456,
    //     "japan-toreca": 3213853,
    //     clove: 9347354,
    //     gacha24: 219773,
    //     iris: 4265517
    // },
    // {
    //     date: new Date('2023/12/06 16:00'),
    //     "ex-toreca": 9967842,
    //     dopa: 129380,
    //     "japan-toreca": 6657459,
    //     clove: 4688781,
    //     gacha24: 9555255,
    //     iris: 3935182
    // },
    // {
    //     date: new Date('2023/12/06 17:00'),
    //     "ex-toreca": 5800204,
    //     dopa: 3135278,
    //     "japan-toreca": 6206254,
    //     clove: 3836095,
    //     gacha24: 7249915,
    //     iris: 586984
    // },
    // {
    //     date: new Date('2023/12/06 18:00'),
    //     "ex-toreca": 447972,
    //     dopa: 7187913,
    //     "japan-toreca": 4916949,
    //     clove: 5093641,
    //     gacha24: 3597985,
    //     iris: 1082608
    // },
    // {
    //     date: new Date('2023/12/06 19:00'),
    //     "ex-toreca": 606057,
    //     dopa: 8992736,
    //     "japan-toreca": 4649570,
    //     clove: 4261312,
    //     gacha24: 4444551,
    //     iris: 8569234
    // },
    // {
    //     date: new Date('2023/12/06 20:00'),
    //     "ex-toreca": 1221891,
    //     dopa: 2496949,
    //     "japan-toreca": 1333922,
    //     clove: 4390688,
    //     gacha24: 4323545,
    //     iris: 5362402
    // },
    // {
    //     date: new Date('2023/12/06 21:00'),
    //     "ex-toreca": 6241571,
    //     dopa: 9681618,
    //     "japan-toreca": 6326797,
    //     clove: 6125687,
    //     gacha24: 7024448,
    //     iris: 4905929
    // },
    // {
    //     date: new Date('2023/12/06 22:00'),
    //     "ex-toreca": 9803279,
    //     dopa: 6359375,
    //     "japan-toreca": 3815099,
    //     clove: 5385955,
    //     gacha24: 3073111,
    //     iris: 9064992
    // },
    // {
    //     date: new Date('2023/12/06 23:00'),
    //     "ex-toreca": 3473700,
    //     dopa: 6437454,
    //     "japan-toreca": 1807304,
    //     clove: 2270312,
    //     gacha24: 6803564,
    //     iris: 8883518
    // },
    // {
    //     date: new Date('2023/12/07 0:00'),
    //     "ex-toreca": 6453250,
    //     dopa: 6366328,
    //     "japan-toreca": 9859754,
    //     clove: 7582175,
    //     gacha24: 7023934,
    //     iris: 6121878
    // },
    // {
    //     date: new Date('2023/12/07 1:00'),
    //     "ex-toreca": 7174748,
    //     dopa: 481188,
    //     "japan-toreca": 4076510,
    //     clove: 6957466,
    //     gacha24: 7532135,
    //     iris: 2790617
    // },
    // {
    //     date: new Date('2023/12/07 2:00'),
    //     "ex-toreca": 4202358,
    //     dopa: 6322987,
    //     "japan-toreca": 6920737,
    //     clove: 2760574,
    //     gacha24: 690119,
    //     iris: 917996
    // },
    // {
    //     date: new Date('2023/12/07 3:00'),
    //     "ex-toreca": 7066069,
    //     dopa: 5433271,
    //     "japan-toreca": 6223637,
    //     clove: 1905016,
    //     gacha24: 5956484,
    //     iris: 1530429
    // },
    // {
    //     date: new Date('2023/12/07 4:00'),
    //     "ex-toreca": 5529321,
    //     dopa: 4247690,
    //     "japan-toreca": 315028,
    //     clove: 8126959,
    //     gacha24: 7243576,
    //     iris: 6601424
    // },
    // {
    //     date: new Date('2023/12/07 5:00'),
    //     "ex-toreca": 2784537,
    //     dopa: 5305995,
    //     "japan-toreca": 1881822,
    //     clove: 6856742,
    //     gacha24: 345205,
    //     iris: 7991858
    // },
    // {
    //     date: new Date('2023/12/07 6:00'),
    //     "ex-toreca": 4614458,
    //     dopa: 6537188,
    //     "japan-toreca": 3361552,
    //     clove: 8816811,
    //     gacha24: 8079220,
    //     iris: 8847045
    // },
    // {
    //     date: new Date('2023/12/07 7:00'),
    //     "ex-toreca": 8607566,
    //     dopa: 3631881,
    //     "japan-toreca": 2414235,
    //     clove: 6461475,
    //     gacha24: 1274125,
    //     iris: 2664554
    // },
    // {
    //     date: new Date('2023/12/07 8:00'),
    //     "ex-toreca": 2610721,
    //     dopa: 8643490,
    //     "japan-toreca": 7179849,
    //     clove: 8626154,
    //     gacha24: 2971787,
    //     iris: 5157327
    // },
    // {
    //     date: new Date('2023/12/07 9:00'),
    //     "ex-toreca": 1507194,
    //     dopa: 1936878,
    //     "japan-toreca": 457402,
    //     clove: 1683338,
    //     gacha24: 619513,
    //     iris: 1309608
    // },
    // {
    //     date: new Date('2023/12/07 10:00'),
    //     "ex-toreca": 5213908,
    //     dopa: 9000449,
    //     "japan-toreca": 1891987,
    //     clove: 5393663,
    //     gacha24: 6366523,
    //     iris: 8946295
    // },
    // {
    //     date: new Date('2023/12/07 11:00'),
    //     "ex-toreca": 1791627,
    //     dopa: 649500,
    //     "japan-toreca": 2090116,
    //     clove: 8914226,
    //     gacha24: 7520679,
    //     iris: 4490789
    // },
    // {
    //     date: new Date('2023/12/07 12:00'),
    //     "ex-toreca": 8229562,
    //     dopa: 5220327,
    //     "japan-toreca": 1229012,
    //     clove: 5467186,
    //     gacha24: 5684450,
    //     iris: 7086464
    // },
    // {
    //     date: new Date('2023/12/07 13:00'),
    //     "ex-toreca": 4998189,
    //     dopa: 5046395,
    //     "japan-toreca": 196776,
    //     clove: 1341220,
    //     gacha24: 5541812,
    //     iris: 3644675
    // },
    // {
    //     date: new Date('2023/12/07 14:00'),
    //     "ex-toreca": 3588371,
    //     dopa: 7838525,
    //     "japan-toreca": 3710505,
    //     clove: 6551683,
    //     gacha24: 8899341,
    //     iris: 7294711
    // },
    // {
    //     date: new Date('2023/12/07 15:00'),
    //     "ex-toreca": 3057730,
    //     dopa: 1175600,
    //     "japan-toreca": 3032547,
    //     clove: 7217729,
    //     gacha24: 682777,
    //     iris: 9336704
    // },
    // {
    //     date: new Date('2023/12/07 16:00'),
    //     "ex-toreca": 3010163,
    //     dopa: 2249208,
    //     "japan-toreca": 5306495,
    //     clove: 8054276,
    //     gacha24: 7320215,
    //     iris: 9992604
    // },
    // {
    //     date: new Date('2023/12/07 17:00'),
    //     "ex-toreca": 2834615,
    //     dopa: 15209,
    //     "japan-toreca": 9446717,
    //     clove: 4078624,
    //     gacha24: 4843121,
    //     iris: 6023940
    // },
    // {
    //     date: new Date('2023/12/07 18:00'),
    //     "ex-toreca": 4664097,
    //     dopa: 9086782,
    //     "japan-toreca": 335966,
    //     clove: 4209475,
    //     gacha24: 5185663,
    //     iris: 396710
    // },
    // {
    //     date: new Date('2023/12/07 19:00'),
    //     "ex-toreca": 6307343,
    //     dopa: 37083,
    //     "japan-toreca": 4328689,
    //     clove: 6387820,
    //     gacha24: 7256821,
    //     iris: 4058400
    // },
    // {
    //     date: new Date('2023/12/07 20:00'),
    //     "ex-toreca": 9152977,
    //     dopa: 4669750,
    //     "japan-toreca": 6901307,
    //     clove: 7660470,
    //     gacha24: 6021730,
    //     iris: 454853
    // },
    // {
    //     date: new Date('2023/12/07 21:00'),
    //     "ex-toreca": 8761964,
    //     dopa: 9213929,
    //     "japan-toreca": 1783915,
    //     clove: 1684312,
    //     gacha24: 9741492,
    //     iris: 2310474
    // },
    // {
    //     date: new Date('2023/12/07 22:00'),
    //     "ex-toreca": 6250264,
    //     dopa: 2002376,
    //     "japan-toreca": 6140568,
    //     clove: 6655568,
    //     gacha24: 1891893,
    //     iris: 6672370
    // },
    // {
    //     date: new Date('2023/12/07 23:00'),
    //     "ex-toreca": 7182601,
    //     dopa: 7033849,
    //     "japan-toreca": 8890591,
    //     clove: 1618573,
    //     gacha24: 4115156,
    //     iris: 9046307
    // },
    // {
    //     date: new Date('2023/12/08 0:00'),
    //     "ex-toreca": 92852,
    //     dopa: 9742202,
    //     "japan-toreca": 5407323,
    //     clove: 2756168,
    //     gacha24: 195162,
    //     iris: 4174796
    // },
    // {
    //     date: new Date('2023/12/08 1:00'),
    //     "ex-toreca": 338219,
    //     dopa: 6929736,
    //     "japan-toreca": 829526,
    //     clove: 9762133,
    //     gacha24: 1590174,
    //     iris: 1357880
    // },
    // {
    //     date: new Date('2023/12/08 2:00'),
    //     "ex-toreca": 8728252,
    //     dopa: 1272603,
    //     "japan-toreca": 509274,
    //     clove: 92795,
    //     gacha24: 8263005,
    //     iris: 3397750
    // },
    // {
    //     date: new Date('2023/12/08 3:00'),
    //     "ex-toreca": 1097023,
    //     dopa: 6364518,
    //     "japan-toreca": 7476911,
    //     clove: 1749436,
    //     gacha24: 52096,
    //     iris: 4309914
    // },
    // {
    //     date: new Date('2023/12/08 4:00'),
    //     "ex-toreca": 7653976,
    //     dopa: 2839050,
    //     "japan-toreca": 3302669,
    //     clove: 2731345,
    //     gacha24: 3209328,
    //     iris: 963710
    // },
    // {
    //     date: new Date('2023/12/08 5:00'),
    //     "ex-toreca": 9868609,
    //     dopa: 20646,
    //     "japan-toreca": 2448164,
    //     clove: 8920662,
    //     gacha24: 4942314,
    //     iris: 6483357
    // },
    // {
    //     date: new Date('2023/12/08 6:00'),
    //     "ex-toreca": 1605554,
    //     dopa: 5498829,
    //     "japan-toreca": 7714219,
    //     clove: 3435477,
    //     gacha24: 239963,
    //     iris: 8863357
    // },
    // {
    //     date: new Date('2023/12/08 7:00'),
    //     "ex-toreca": 2889726,
    //     dopa: 210675,
    //     "japan-toreca": 3386299,
    //     clove: 4693497,
    //     gacha24: 9179718,
    //     iris: 3026656
    // },
    // {
    //     date: new Date('2023/12/08 8:00'),
    //     "ex-toreca": 9676293,
    //     dopa: 7232352,
    //     "japan-toreca": 7566081,
    //     clove: 8578819,
    //     gacha24: 2212044,
    //     iris: 4646659
    // },
    // {
    //     date: new Date('2023/12/08 9:00'),
    //     "ex-toreca": 1855629,
    //     dopa: 5721562,
    //     "japan-toreca": 7186498,
    //     clove: 5460462,
    //     gacha24: 4121295,
    //     iris: 2385262
    // },
    // {
    //     date: new Date('2023/12/08 10:00'),
    //     "ex-toreca": 3868392,
    //     dopa: 82597,
    //     "japan-toreca": 7315559,
    //     clove: 8080854,
    //     gacha24: 6788901,
    //     iris: 3589753
    // },
    // {
    //     date: new Date('2023/12/08 11:00'),
    //     "ex-toreca": 5849393,
    //     dopa: 4208071,
    //     "japan-toreca": 881977,
    //     clove: 485878,
    //     gacha24: 4676089,
    //     iris: 1271880
    // },
    // {
    //     date: new Date('2023/12/08 12:00'),
    //     "ex-toreca": 6208729,
    //     dopa: 6611209,
    //     "japan-toreca": 2397825,
    //     clove: 213121,
    //     gacha24: 6404555,
    //     iris: 9255652
    // },
    // {
    //     date: new Date('2023/12/08 13:00'),
    //     "ex-toreca": 5110891,
    //     dopa: 6636824,
    //     "japan-toreca": 2505509,
    //     clove: 4668682,
    //     gacha24: 9036979,
    //     iris: 4460316
    // },
    // {
    //     date: new Date('2023/12/08 14:00'),
    //     "ex-toreca": 9541866,
    //     dopa: 9593463,
    //     "japan-toreca": 380497,
    //     clove: 2591063,
    //     gacha24: 3087127,
    //     iris: 7048162
    // },
    // {
    //     date: new Date('2023/12/08 15:00'),
    //     "ex-toreca": 9318090,
    //     dopa: 354245,
    //     "japan-toreca": 193853,
    //     clove: 5280757,
    //     gacha24: 5132892,
    //     iris: 4405149
    // },
    // {
    //     date: new Date('2023/12/08 16:00'),
    //     "ex-toreca": 892310,
    //     dopa: 3209823,
    //     "japan-toreca": 2772624,
    //     clove: 3060996,
    //     gacha24: 1261676,
    //     iris: 3029993
    // },
    // {
    //     date: new Date('2023/12/08 17:00'),
    //     "ex-toreca": 2118920,
    //     dopa: 9944838,
    //     "japan-toreca": 6235257,
    //     clove: 9420545,
    //     gacha24: 4747354,
    //     iris: 2100574
    // },
    // {
    //     date: new Date('2023/12/08 18:00'),
    //     "ex-toreca": 4421555,
    //     dopa: 1622085,
    //     "japan-toreca": 9436199,
    //     clove: 5168466,
    //     gacha24: 3666039,
    //     iris: 7982690
    // },
    // {
    //     date: new Date('2023/12/08 19:00'),
    //     "ex-toreca": 3569866,
    //     dopa: 679766,
    //     "japan-toreca": 5569268,
    //     clove: 3703868,
    //     gacha24: 6416550,
    //     iris: 7236597
    // },
    // {
    //     date: new Date('2023/12/08 20:00'),
    //     "ex-toreca": 676975,
    //     dopa: 5208230,
    //     "japan-toreca": 2657618,
    //     clove: 267351,
    //     gacha24: 4442355,
    //     iris: 9267744
    // },
    // {
    //     date: new Date('2023/12/08 21:00'),
    //     "ex-toreca": 6063312,
    //     dopa: 8245137,
    //     "japan-toreca": 8746413,
    //     clove: 4885758,
    //     gacha24: 6891282,
    //     iris: 2261103
    // },
    // {
    //     date: new Date('2023/12/08 22:00'),
    //     "ex-toreca": 4829120,
    //     dopa: 8235535,
    //     "japan-toreca": 8096611,
    //     clove: 291597,
    //     gacha24: 9238187,
    //     iris: 4002341
    // },
    // {
    //     date: new Date('2023/12/08 23:00'),
    //     "ex-toreca": 8197001,
    //     dopa: 1997763,
    //     "japan-toreca": 7113184,
    //     clove: 7435961,
    //     gacha24: 8909424,
    //     iris: 8866481
    // },
    // {
    //     date: new Date('2023/12/09 0:00'),
    //     "ex-toreca": 5839608,
    //     dopa: 8588215,
    //     "japan-toreca": 3490532,
    //     clove: 3239242,
    //     gacha24: 2799192,
    //     iris: 137484
    // },
    // {
    //     date: new Date('2023/12/09 1:00'),
    //     "ex-toreca": 8886506,
    //     dopa: 5732086,
    //     "japan-toreca": 35096,
    //     clove: 62090,
    //     gacha24: 7499523,
    //     iris: 4576304
    // },
    // {
    //     date: new Date('2023/12/09 2:00'),
    //     "ex-toreca": 3488311,
    //     dopa: 7073431,
    //     "japan-toreca": 8679548,
    //     clove: 3723145,
    //     gacha24: 5173891,
    //     iris: 5305349
    // },
    // {
    //     date: new Date('2023/12/09 3:00'),
    //     "ex-toreca": 6784926,
    //     dopa: 9309481,
    //     "japan-toreca": 539957,
    //     clove: 2176269,
    //     gacha24: 5353020,
    //     iris: 5204095
    // },
    // {
    //     date: new Date('2023/12/09 4:00'),
    //     "ex-toreca": 1860014,
    //     dopa: 5608646,
    //     "japan-toreca": 5839246,
    //     clove: 8411573,
    //     gacha24: 1223662,
    //     iris: 954352
    // },
    // {
    //     date: new Date('2023/12/09 5:00'),
    //     "ex-toreca": 4137528,
    //     dopa: 6614739,
    //     "japan-toreca": 4260036,
    //     clove: 704425,
    //     gacha24: 1858923,
    //     iris: 2493365
    // },
    // {
    //     date: new Date('2023/12/09 6:00'),
    //     "ex-toreca": 6821636,
    //     dopa: 9716984,
    //     "japan-toreca": 3394818,
    //     clove: 9033139,
    //     gacha24: 2477822,
    //     iris: 5525389
    // },
    // {
    //     date: new Date('2023/12/09 7:00'),
    //     "ex-toreca": 4809016,
    //     dopa: 906830,
    //     "japan-toreca": 7092232,
    //     clove: 7517465,
    //     gacha24: 1529970,
    //     iris: 2039179
    // },
    // {
    //     date: new Date('2023/12/09 8:00'),
    //     "ex-toreca": 470183,
    //     dopa: 8808873,
    //     "japan-toreca": 2745546,
    //     clove: 953296,
    //     gacha24: 6905713,
    //     iris: 6096982
    // },
    // {
    //     date: new Date('2023/12/09 9:00'),
    //     "ex-toreca": 6704404,
    //     dopa: 7198223,
    //     "japan-toreca": 2533805,
    //     clove: 1821168,
    //     gacha24: 5767368,
    //     iris: 5941222
    // },
    // {
    //     date: new Date('2023/12/09 10:00'),
    //     "ex-toreca": 8265054,
    //     dopa: 8004272,
    //     "japan-toreca": 2976134,
    //     clove: 7175695,
    //     gacha24: 4662307,
    //     iris: 4538201
    // },
    // {
    //     date: new Date('2023/12/09 11:00'),
    //     "ex-toreca": 2758829,
    //     dopa: 5172694,
    //     "japan-toreca": 4831975,
    //     clove: 7948944,
    //     gacha24: 5624136,
    //     iris: 4696574
    // },
    // {
    //     date: new Date('2023/12/09 12:00'),
    //     "ex-toreca": 632853,
    //     dopa: 1616870,
    //     "japan-toreca": 715759,
    //     clove: 2544563,
    //     gacha24: 2847326,
    //     iris: 3958192
    // },
    // {
    //     date: new Date('2023/12/09 13:00'),
    //     "ex-toreca": 4498661,
    //     dopa: 6220562,
    //     "japan-toreca": 8565268,
    //     clove: 6410127,
    //     gacha24: 8224242,
    //     iris: 7660208
    // },
    // {
    //     date: new Date('2023/12/09 14:00'),
    //     "ex-toreca": 7105493,
    //     dopa: 896887,
    //     "japan-toreca": 4419846,
    //     clove: 2118118,
    //     gacha24: 7496505,
    //     iris: 6796839
    // },
    // {
    //     date: new Date('2023/12/09 15:00'),
    //     "ex-toreca": 4973957,
    //     dopa: 3573636,
    //     "japan-toreca": 4376198,
    //     clove: 5369837,
    //     gacha24: 4304292,
    //     iris: 3749083
    // },
    // {
    //     date: new Date('2023/12/09 16:00'),
    //     "ex-toreca": 6688333,
    //     dopa: 4143289,
    //     "japan-toreca": 2762228,
    //     clove: 2523676,
    //     gacha24: 6426089,
    //     iris: 3300627
    // },
    // {
    //     date: new Date('2023/12/09 17:00'),
    //     "ex-toreca": 2949341,
    //     dopa: 207911,
    //     "japan-toreca": 3078080,
    //     clove: 2020813,
    //     gacha24: 3573128,
    //     iris: 311443
    // },
    // {
    //     date: new Date('2023/12/09 18:00'),
    //     "ex-toreca": 7052075,
    //     dopa: 8360938,
    //     "japan-toreca": 253819,
    //     clove: 8599826,
    //     gacha24: 70003,
    //     iris: 7572078
    // },
    // {
    //     date: new Date('2023/12/09 19:00'),
    //     "ex-toreca": 7251280,
    //     dopa: 2405160,
    //     "japan-toreca": 3968952,
    //     clove: 9283020,
    //     gacha24: 8255027,
    //     iris: 5108663
    // },
    // {
    //     date: new Date('2023/12/09 20:00'),
    //     "ex-toreca": 9111324,
    //     dopa: 2237949,
    //     "japan-toreca": 4050410,
    //     clove: 6355486,
    //     gacha24: 2673737,
    //     iris: 2863167
    // },
    // {
    //     date: new Date('2023/12/09 21:00'),
    //     "ex-toreca": 3103284,
    //     dopa: 3701734,
    //     "japan-toreca": 9683488,
    //     clove: 6132775,
    //     gacha24: 5411872,
    //     iris: 5309634
    // },
    // {
    //     date: new Date('2023/12/09 22:00'),
    //     "ex-toreca": 6070286,
    //     dopa: 8192586,
    //     "japan-toreca": 6082683,
    //     clove: 6147929,
    //     gacha24: 9549959,
    //     iris: 9710561
    // },
    // {
    //     date: new Date('2023/12/09 23:00'),
    //     "ex-toreca": 3432602,
    //     dopa: 7383729,
    //     "japan-toreca": 8008584,
    //     clove: 1096118,
    //     gacha24: 3588705,
    //     iris: 2347575
    // },
    // {
    //     date: new Date('2023/12/10 0:00'),
    //     "ex-toreca": 5996067,
    //     dopa: 3427201,
    //     "japan-toreca": 6405516,
    //     clove: 2519861,
    //     gacha24: 9041945,
    //     iris: 9750110
    // },
    // {
    //     date: new Date('2023/12/10 1:00'),
    //     "ex-toreca": 5629241,
    //     dopa: 1125678,
    //     "japan-toreca": 7149876,
    //     clove: 9921486,
    //     gacha24: 8538432,
    //     iris: 2691862
    // },
    // {
    //     date: new Date('2023/12/10 2:00'),
    //     "ex-toreca": 7381773,
    //     dopa: 2393896,
    //     "japan-toreca": 1736582,
    //     clove: 1389813,
    //     gacha24: 2926483,
    //     iris: 5895636
    // },
    // {
    //     date: new Date('2023/12/10 3:00'),
    //     "ex-toreca": 2878296,
    //     dopa: 1872645,
    //     "japan-toreca": 9247360,
    //     clove: 1821394,
    //     gacha24: 1959100,
    //     iris: 9053399
    // },
    // {
    //     date: new Date('2023/12/10 4:00'),
    //     "ex-toreca": 4330941,
    //     dopa: 8741349,
    //     "japan-toreca": 6685935,
    //     clove: 5580213,
    //     gacha24: 3401742,
    //     iris: 7689086
    // },
    // {
    //     date: new Date('2023/12/10 5:00'),
    //     "ex-toreca": 1785053,
    //     dopa: 587074,
    //     "japan-toreca": 9842654,
    //     clove: 8157482,
    //     gacha24: 8825236,
    //     iris: 4535257
    // },
    // {
    //     date: new Date('2023/12/10 6:00'),
    //     "ex-toreca": 4796343,
    //     dopa: 1337320,
    //     "japan-toreca": 2990503,
    //     clove: 3935919,
    //     gacha24: 9668889,
    //     iris: 7672115
    // },
    // {
    //     date: new Date('2023/12/10 7:00'),
    //     "ex-toreca": 9391833,
    //     dopa: 5038552,
    //     "japan-toreca": 1079425,
    //     clove: 4628052,
    //     gacha24: 9958700,
    //     iris: 4306675
    // },
    // {
    //     date: new Date('2023/12/10 8:00'),
    //     "ex-toreca": 258539,
    //     dopa: 3005199,
    //     "japan-toreca": 4269934,
    //     clove: 249313,
    //     gacha24: 5841907,
    //     iris: 4710995
    // },
    // {
    //     date: new Date('2023/12/10 9:00'),
    //     "ex-toreca": 8692337,
    //     dopa: 8160088,
    //     "japan-toreca": 1800768,
    //     clove: 150141,
    //     gacha24: 8782542,
    //     iris: 829594
    // },
    // {
    //     date: new Date('2023/12/10 10:00'),
    //     "ex-toreca": 6620993,
    //     dopa: 2831828,
    //     "japan-toreca": 3460310,
    //     clove: 9976173,
    //     gacha24: 6471104,
    //     iris: 9206218
    // },
    // {
    //     date: new Date('2023/12/10 11:00'),
    //     "ex-toreca": 7791216,
    //     dopa: 578217,
    //     "japan-toreca": 9273976,
    //     clove: 155699,
    //     gacha24: 7695508,
    //     iris: 2723345
    // },
    // {
    //     date: new Date('2023/12/10 12:00'),
    //     "ex-toreca": 2628690,
    //     dopa: 2789673,
    //     "japan-toreca": 8831592,
    //     clove: 7122345,
    //     gacha24: 3966758,
    //     iris: 8911256
    // },
    // {
    //     date: new Date('2023/12/10 13:00'),
    //     "ex-toreca": 1109990,
    //     dopa: 1247686,
    //     "japan-toreca": 2705252,
    //     clove: 253872,
    //     gacha24: 4519509,
    //     iris: 3829724
    // },
    // {
    //     date: new Date('2023/12/10 14:00'),
    //     "ex-toreca": 7136424,
    //     dopa: 6745565,
    //     "japan-toreca": 5650466,
    //     clove: 3992305,
    //     gacha24: 839713,
    //     iris: 4516251
    // },
    // {
    //     date: new Date('2023/12/10 15:00'),
    //     "ex-toreca": 4834794,
    //     dopa: 2593456,
    //     "japan-toreca": 6824037,
    //     clove: 8054138,
    //     gacha24: 5105065,
    //     iris: 2237895
    // },
    // {
    //     date: new Date('2023/12/10 16:00'),
    //     "ex-toreca": 3378862,
    //     dopa: 7725026,
    //     "japan-toreca": 9526272,
    //     clove: 3616481,
    //     gacha24: 6548396,
    //     iris: 7352112
    // },
    // {
    //     date: new Date('2023/12/10 17:00'),
    //     "ex-toreca": 8113665,
    //     dopa: 1948313,
    //     "japan-toreca": 5550343,
    //     clove: 9048733,
    //     gacha24: 2420089,
    //     iris: 3849027
    // },
    // {
    //     date: new Date('2023/12/10 18:00'),
    //     "ex-toreca": 4842701,
    //     dopa: 7151211,
    //     "japan-toreca": 8391966,
    //     clove: 9026037,
    //     gacha24: 6801478,
    //     iris: 9539576
    // },
    // {
    //     date: new Date('2023/12/10 19:00'),
    //     "ex-toreca": 2829214,
    //     dopa: 6720593,
    //     "japan-toreca": 5708167,
    //     clove: 3098977,
    //     gacha24: 7074893,
    //     iris: 9528950
    // },
    // {
    //     date: new Date('2023/12/10 20:00'),
    //     "ex-toreca": 4773612,
    //     dopa: 9315967,
    //     "japan-toreca": 6770173,
    //     clove: 141149,
    //     gacha24: 9355008,
    //     iris: 9204571
    // },
    // {
    //     date: new Date('2023/12/10 21:00'),
    //     "ex-toreca": 4479910,
    //     dopa: 7379926,
    //     "japan-toreca": 6782226,
    //     clove: 4129888,
    //     gacha24: 1258373,
    //     iris: 1812339
    // },
    // {
    //     date: new Date('2023/12/10 22:00'),
    //     "ex-toreca": 9042526,
    //     dopa: 8530895,
    //     "japan-toreca": 4609471,
    //     clove: 9486426,
    //     gacha24: 6489562,
    //     iris: 9698965
    // },
    // {
    //     date: new Date('2023/12/10 23:00'),
    //     "ex-toreca": 1018856,
    //     dopa: 1532630,
    //     "japan-toreca": 9916064,
    //     clove: 921382,
    //     gacha24: 5710949,
    //     iris: 9822786
    // },
    // {
    //     date: new Date('2023/12/11 0:00'),
    //     "ex-toreca": 5746458,
    //     dopa: 3632882,
    //     "japan-toreca": 1365652,
    //     clove: 5104643,
    //     gacha24: 8890841,
    //     iris: 1484416
    // },
    // {
    //     date: new Date('2023/12/11 1:00'),
    //     "ex-toreca": 9253248,
    //     dopa: 6189543,
    //     "japan-toreca": 5094945,
    //     clove: 7360335,
    //     gacha24: 1613782,
    //     iris: 5191420
    // },
    // {
    //     date: new Date('2023/12/11 2:00'),
    //     "ex-toreca": 1770545,
    //     dopa: 2802937,
    //     "japan-toreca": 864472,
    //     clove: 6269603,
    //     gacha24: 6218309,
    //     iris: 7412037
    // },
    // {
    //     date: new Date('2023/12/11 3:00'),
    //     "ex-toreca": 9731683,
    //     dopa: 7550309,
    //     "japan-toreca": 3601432,
    //     clove: 9534305,
    //     gacha24: 2066168,
    //     iris: 9657383
    // },
    // {
    //     date: new Date('2023/12/11 4:00'),
    //     "ex-toreca": 829131,
    //     dopa: 5575442,
    //     "japan-toreca": 9310353,
    //     clove: 5337324,
    //     gacha24: 3469483,
    //     iris: 694861
    // },
    // {
    //     date: new Date('2023/12/11 5:00'),
    //     "ex-toreca": 9779115,
    //     dopa: 4989448,
    //     "japan-toreca": 9205257,
    //     clove: 8948662,
    //     gacha24: 2134087,
    //     iris: 5109869
    // },
    // {
    //     date: new Date('2023/12/11 6:00'),
    //     "ex-toreca": 463779,
    //     dopa: 2496909,
    //     "japan-toreca": 3762207,
    //     clove: 6401885,
    //     gacha24: 365917,
    //     iris: 8901745
    // },
    // {
    //     date: new Date('2023/12/11 7:00'),
    //     "ex-toreca": 623234,
    //     dopa: 9867556,
    //     "japan-toreca": 4389792,
    //     clove: 5464587,
    //     gacha24: 2879595,
    //     iris: 701033
    // },
    // {
    //     date: new Date('2023/12/11 8:00'),
    //     "ex-toreca": 7403696,
    //     dopa: 4502888,
    //     "japan-toreca": 957457,
    //     clove: 3505942,
    //     gacha24: 1570146,
    //     iris: 5128758
    // },
    // {
    //     date: new Date('2023/12/11 9:00'),
    //     "ex-toreca": 9805833,
    //     dopa: 9813182,
    //     "japan-toreca": 1991038,
    //     clove: 2302586,
    //     gacha24: 8113985,
    //     iris: 1859444
    // },
    // {
    //     date: new Date('2023/12/11 10:00'),
    //     "ex-toreca": 5168785,
    //     dopa: 2221212,
    //     "japan-toreca": 1366511,
    //     clove: 4556305,
    //     gacha24: 572323,
    //     iris: 3565606
    // },
    // {
    //     date: new Date('2023/12/11 11:00'),
    //     "ex-toreca": 642392,
    //     dopa: 7572628,
    //     "japan-toreca": 8236465,
    //     clove: 8886852,
    //     gacha24: 9648846,
    //     iris: 5683193
    // },
    // {
    //     date: new Date('2023/12/11 12:00'),
    //     "ex-toreca": 701455,
    //     dopa: 5432580,
    //     "japan-toreca": 9732461,
    //     clove: 8297483,
    //     gacha24: 945906,
    //     iris: 5669035
    // },
    // {
    //     date: new Date('2023/12/11 13:00'),
    //     "ex-toreca": 8840527,
    //     dopa: 1966054,
    //     "japan-toreca": 3873056,
    //     clove: 8677504,
    //     gacha24: 2006251,
    //     iris: 4844792
    // },
    // {
    //     date: new Date('2023/12/11 14:00'),
    //     "ex-toreca": 8064442,
    //     dopa: 3537156,
    //     "japan-toreca": 1660420,
    //     clove: 888512,
    //     gacha24: 8236042,
    //     iris: 9355715
    // },
    // {
    //     date: new Date('2023/12/11 15:00'),
    //     "ex-toreca": 8413012,
    //     dopa: 6392387,
    //     "japan-toreca": 2986038,
    //     clove: 6839804,
    //     gacha24: 6975890,
    //     iris: 9617280
    // },
    // {
    //     date: new Date('2023/12/11 16:00'),
    //     "ex-toreca": 6311805,
    //     dopa: 3438674,
    //     "japan-toreca": 7751292,
    //     clove: 3556312,
    //     gacha24: 8315945,
    //     iris: 6034259
    // },
    // {
    //     date: new Date('2023/12/11 17:00'),
    //     "ex-toreca": 2544825,
    //     dopa: 1179647,
    //     "japan-toreca": 5120697,
    //     clove: 4625737,
    //     gacha24: 1833731,
    //     iris: 4324097
    // },
    // {
    //     date: new Date('2023/12/11 18:00'),
    //     "ex-toreca": 5815095,
    //     dopa: 5231503,
    //     "japan-toreca": 5614697,
    //     clove: 529423,
    //     gacha24: 8048906,
    //     iris: 4560968
    // },
    // {
    //     date: new Date('2023/12/11 19:00'),
    //     "ex-toreca": 5727842,
    //     dopa: 6732259,
    //     "japan-toreca": 361655,
    //     clove: 6554950,
    //     gacha24: 248839,
    //     iris: 5251622
    // },
    // {
    //     date: new Date('2023/12/11 20:00'),
    //     "ex-toreca": 4200880,
    //     dopa: 3557796,
    //     "japan-toreca": 5858849,
    //     clove: 6672139,
    //     gacha24: 8824575,
    //     iris: 3395335
    // },
    // {
    //     date: new Date('2023/12/11 21:00'),
    //     "ex-toreca": 4617033,
    //     dopa: 9599380,
    //     "japan-toreca": 6373555,
    //     clove: 7666748,
    //     gacha24: 4259228,
    //     iris: 1609162
    // },
    // {
    //     date: new Date('2023/12/11 22:00'),
    //     "ex-toreca": 7389475,
    //     dopa: 2394774,
    //     "japan-toreca": 9780577,
    //     clove: 5691336,
    //     gacha24: 2251171,
    //     iris: 8111884
    // },
    // {
    //     date: new Date('2023/12/11 23:00'),
    //     "ex-toreca": 1359784,
    //     dopa: 8620512,
    //     "japan-toreca": 43297,
    //     clove: 161131,
    //     gacha24: 3712542,
    //     iris: 3498416
    // },
    // {
    //     date: new Date('2023/12/12 0:00'),
    //     "ex-toreca": 1366171,
    //     dopa: 3875480,
    //     "japan-toreca": 2465425,
    //     clove: 515330,
    //     gacha24: 1340641,
    //     iris: 5588021
    // },
    // {
    //     date: new Date('2023/12/12 1:00'),
    //     "ex-toreca": 6235806,
    //     dopa: 2817122,
    //     "japan-toreca": 4513876,
    //     clove: 9691710,
    //     gacha24: 5194045,
    //     iris: 8556080
    // },
    // {
    //     date: new Date('2023/12/12 2:00'),
    //     "ex-toreca": 1378982,
    //     dopa: 9430596,
    //     "japan-toreca": 846796,
    //     clove: 8975721,
    //     gacha24: 7338796,
    //     iris: 7497635
    // },
    // {
    //     date: new Date('2023/12/12 3:00'),
    //     "ex-toreca": 3990864,
    //     dopa: 8642070,
    //     "japan-toreca": 4238550,
    //     clove: 3641662,
    //     gacha24: 8387019,
    //     iris: 7719568
    // },
    // {
    //     date: new Date('2023/12/12 4:00'),
    //     "ex-toreca": 6535968,
    //     dopa: 1556134,
    //     "japan-toreca": 3069995,
    //     clove: 3688152,
    //     gacha24: 4559626,
    //     iris: 8894334
    // },
    // {
    //     date: new Date('2023/12/12 5:00'),
    //     "ex-toreca": 9781941,
    //     dopa: 9641213,
    //     "japan-toreca": 372757,
    //     clove: 4505219,
    //     gacha24: 6704751,
    //     iris: 9001065
    // },
    // {
    //     date: new Date('2023/12/12 6:00'),
    //     "ex-toreca": 1696193,
    //     dopa: 6287271,
    //     "japan-toreca": 2737105,
    //     clove: 5403070,
    //     gacha24: 4134864,
    //     iris: 2281280
    // },
    // {
    //     date: new Date('2023/12/12 7:00'),
    //     "ex-toreca": 2594366,
    //     dopa: 3859371,
    //     "japan-toreca": 5084562,
    //     clove: 585399,
    //     gacha24: 448610,
    //     iris: 8792715
    // },
    // {
    //     date: new Date('2023/12/12 8:00'),
    //     "ex-toreca": 4316897,
    //     dopa: 3313858,
    //     "japan-toreca": 5269615,
    //     clove: 7666341,
    //     gacha24: 8464586,
    //     iris: 5736309
    // },
    // {
    //     date: new Date('2023/12/12 9:00'),
    //     "ex-toreca": 4258767,
    //     dopa: 1315965,
    //     "japan-toreca": 6751098,
    //     clove: 7787549,
    //     gacha24: 9768432,
    //     iris: 6880158
    // },
    // {
    //     date: new Date('2023/12/12 10:00'),
    //     "ex-toreca": 4253462,
    //     dopa: 1374514,
    //     "japan-toreca": 922049,
    //     clove: 7565113,
    //     gacha24: 615120,
    //     iris: 7250030
    // },
    // {
    //     date: new Date('2023/12/12 11:00'),
    //     "ex-toreca": 3603249,
    //     dopa: 3241023,
    //     "japan-toreca": 8659055,
    //     clove: 23138,
    //     gacha24: 9295384,
    //     iris: 1773306
    // },
    // {
    //     date: new Date('2023/12/12 12:00'),
    //     "ex-toreca": 7173528,
    //     dopa: 790042,
    //     "japan-toreca": 1590847,
    //     clove: 1662408,
    //     gacha24: 394306,
    //     iris: 9947301
    // },
    // {
    //     date: new Date('2023/12/12 13:00'),
    //     "ex-toreca": 1068333,
    //     dopa: 7044900,
    //     "japan-toreca": 6812003,
    //     clove: 534361,
    //     gacha24: 7399372,
    //     iris: 3517141
    // },
    // {
    //     date: new Date('2023/12/12 14:00'),
    //     "ex-toreca": 9674758,
    //     dopa: 6839604,
    //     "japan-toreca": 9141172,
    //     clove: 4058383,
    //     gacha24: 5091230,
    //     iris: 3684377
    // },
    // {
    //     date: new Date('2023/12/12 15:00'),
    //     "ex-toreca": 8043705,
    //     dopa: 8013492,
    //     "japan-toreca": 8534566,
    //     clove: 9888524,
    //     gacha24: 3821218,
    //     iris: 5375420
    // },
    // {
    //     date: new Date('2023/12/12 16:00'),
    //     "ex-toreca": 1487630,
    //     dopa: 8012427,
    //     "japan-toreca": 4166550,
    //     clove: 597358,
    //     gacha24: 7818824,
    //     iris: 6795694
    // },
    // {
    //     date: new Date('2023/12/12 17:00'),
    //     "ex-toreca": 4995920,
    //     dopa: 8609845,
    //     "japan-toreca": 6988667,
    //     clove: 6019294,
    //     gacha24: 1547681,
    //     iris: 3937615
    // },
    // {
    //     date: new Date('2023/12/12 18:00'),
    //     "ex-toreca": 3226950,
    //     dopa: 3589649,
    //     "japan-toreca": 4311873,
    //     clove: 1980068,
    //     gacha24: 3564328,
    //     iris: 4927139
    // },
    // {
    //     date: new Date('2023/12/12 19:00'),
    //     "ex-toreca": 1874269,
    //     dopa: 9983482,
    //     "japan-toreca": 2625529,
    //     clove: 7688454,
    //     gacha24: 9355685,
    //     iris: 5366750
    // },
    // {
    //     date: new Date('2023/12/12 20:00'),
    //     "ex-toreca": 5561616,
    //     dopa: 9930057,
    //     "japan-toreca": 6520788,
    //     clove: 7525102,
    //     gacha24: 3641007,
    //     iris: 7289867
    // },
    // {
    //     date: new Date('2023/12/12 21:00'),
    //     "ex-toreca": 3748412,
    //     dopa: 4781214,
    //     "japan-toreca": 6586207,
    //     clove: 4570138,
    //     gacha24: 9633222,
    //     iris: 1014764
    // },
    // {
    //     date: new Date('2023/12/12 22:00'),
    //     "ex-toreca": 5687985,
    //     dopa: 5923671,
    //     "japan-toreca": 1661309,
    //     clove: 3165123,
    //     gacha24: 2000290,
    //     iris: 5848170
    // },
    // {
    //     date: new Date('2023/12/12 23:00'),
    //     "ex-toreca": 1671561,
    //     dopa: 8842621,
    //     "japan-toreca": 6915986,
    //     clove: 2128846,
    //     gacha24: 1944793,
    //     iris: 2437184
    // },
    // {
    //     date: new Date('2023/12/13 0:00'),
    //     "ex-toreca": 1958026,
    //     dopa: 6619756,
    //     "japan-toreca": 2835766,
    //     clove: 6870319,
    //     gacha24: 4549886,
    //     iris: 764286
    // },
    // {
    //     date: new Date('2023/12/13 1:00'),
    //     "ex-toreca": 1378513,
    //     dopa: 7797729,
    //     "japan-toreca": 3052663,
    //     clove: 3048847,
    //     gacha24: 9956230,
    //     iris: 8335030
    // },
    // {
    //     date: new Date('2023/12/13 2:00'),
    //     "ex-toreca": 9914048,
    //     dopa: 4246808,
    //     "japan-toreca": 5916820,
    //     clove: 4838114,
    //     gacha24: 8538533,
    //     iris: 1844378
    // },
    // {
    //     date: new Date('2023/12/13 3:00'),
    //     "ex-toreca": 1251049,
    //     dopa: 8506311,
    //     "japan-toreca": 5744477,
    //     clove: 5613100,
    //     gacha24: 2758093,
    //     iris: 2734528
    // },
    // {
    //     date: new Date('2023/12/13 4:00'),
    //     "ex-toreca": 3475363,
    //     dopa: 9736087,
    //     "japan-toreca": 7733076,
    //     clove: 2125321,
    //     gacha24: 9036687,
    //     iris: 7957545
    // },
    // {
    //     date: new Date('2023/12/13 5:00'),
    //     "ex-toreca": 1000540,
    //     dopa: 932570,
    //     "japan-toreca": 6173409,
    //     clove: 9956049,
    //     gacha24: 3707031,
    //     iris: 3606747
    // },
    // {
    //     date: new Date('2023/12/13 6:00'),
    //     "ex-toreca": 6615750,
    //     dopa: 8947683,
    //     "japan-toreca": 1540853,
    //     clove: 4230235,
    //     gacha24: 5534287,
    //     iris: 1793240
    // },
    // {
    //     date: new Date('2023/12/13 7:00'),
    //     "ex-toreca": 8706070,
    //     dopa: 5254879,
    //     "japan-toreca": 7492387,
    //     clove: 1886388,
    //     gacha24: 6743028,
    //     iris: 606052
    // },
    // {
    //     date: new Date('2023/12/13 8:00'),
    //     "ex-toreca": 298728,
    //     dopa: 1018179,
    //     "japan-toreca": 9966467,
    //     clove: 8012772,
    //     gacha24: 3116274,
    //     iris: 7732012
    // },
    // {
    //     date: new Date('2023/12/13 9:00'),
    //     "ex-toreca": 2770734,
    //     dopa: 8924902,
    //     "japan-toreca": 8142011,
    //     clove: 353319,
    //     gacha24: 5779492,
    //     iris: 1868603
    // },
    // {
    //     date: new Date('2023/12/13 10:00'),
    //     "ex-toreca": 1255871,
    //     dopa: 1608284,
    //     "japan-toreca": 9571130,
    //     clove: 5021510,
    //     gacha24: 5556544,
    //     iris: 3781948
    // },
    // {
    //     date: new Date('2023/12/13 11:00'),
    //     "ex-toreca": 8375666,
    //     dopa: 9193366,
    //     "japan-toreca": 5697551,
    //     clove: 2868304,
    //     gacha24: 3014165,
    //     iris: 9330662
    // },
    // {
    //     date: new Date('2023/12/13 12:00'),
    //     "ex-toreca": 1946579,
    //     dopa: 4455401,
    //     "japan-toreca": 3183015,
    //     clove: 8880423,
    //     gacha24: 5928085,
    //     iris: 9226732
    // },
    // {
    //     date: new Date('2023/12/13 13:00'),
    //     "ex-toreca": 547064,
    //     dopa: 6896600,
    //     "japan-toreca": 9612765,
    //     clove: 5857646,
    //     gacha24: 3210848,
    //     iris: 7583010
    // },
    // {
    //     date: new Date('2023/12/13 14:00'),
    //     "ex-toreca": 2353555,
    //     dopa: 4641684,
    //     "japan-toreca": 49210,
    //     clove: 2600022,
    //     gacha24: 8234679,
    //     iris: 8221320
    // },
    // {
    //     date: new Date('2023/12/13 15:00'),
    //     "ex-toreca": 4702277,
    //     dopa: 9006330,
    //     "japan-toreca": 8558907,
    //     clove: 3526647,
    //     gacha24: 3482717,
    //     iris: 1845480
    // },
    // {
    //     date: new Date('2023/12/13 16:00'),
    //     "ex-toreca": 712757,
    //     dopa: 6550015,
    //     "japan-toreca": 7974922,
    //     clove: 7489315,
    //     gacha24: 6220137,
    //     iris: 4898204
    // },
    // {
    //     date: new Date('2023/12/13 17:00'),
    //     "ex-toreca": 7322370,
    //     dopa: 5637494,
    //     "japan-toreca": 7927898,
    //     clove: 2404700,
    //     gacha24: 8759314,
    //     iris: 883127
    // },
    // {
    //     date: new Date('2023/12/13 18:00'),
    //     "ex-toreca": 4717852,
    //     dopa: 8439833,
    //     "japan-toreca": 508692,
    //     clove: 6525318,
    //     gacha24: 2598055,
    //     iris: 1350460
    // },
    // {
    //     date: new Date('2023/12/13 19:00'),
    //     "ex-toreca": 5721622,
    //     dopa: 2164852,
    //     "japan-toreca": 7842622,
    //     clove: 5837421,
    //     gacha24: 4019120,
    //     iris: 5353911
    // },
    // {
    //     date: new Date('2023/12/13 20:00'),
    //     "ex-toreca": 7777780,
    //     dopa: 8915501,
    //     "japan-toreca": 2356408,
    //     clove: 1642760,
    //     gacha24: 7277981,
    //     iris: 2311615
    // },
    // {
    //     date: new Date('2023/12/13 21:00'),
    //     "ex-toreca": 9828489,
    //     dopa: 2135397,
    //     "japan-toreca": 3327893,
    //     clove: 4594266,
    //     gacha24: 9361294,
    //     iris: 2895903
    // },
    // {
    //     date: new Date('2023/12/13 22:00'),
    //     "ex-toreca": 8690546,
    //     dopa: 6559165,
    //     "japan-toreca": 3195451,
    //     clove: 3348255,
    //     gacha24: 7553572,
    //     iris: 2723921
    // },
    // {
    //     date: new Date('2023/12/13 23:00'),
    //     "ex-toreca": 9495641,
    //     dopa: 3124189,
    //     "japan-toreca": 7628237,
    //     clove: 1186991,
    //     gacha24: 2503811,
    //     iris: 4339416
    // },
    // {
    //     date: new Date('2023/12/14 0:00'),
    //     "ex-toreca": 2380207,
    //     dopa: 6661466,
    //     "japan-toreca": 1837819,
    //     clove: 8391125,
    //     gacha24: 1512833,
    //     iris: 9705669
    // },
    // {
    //     date: new Date('2023/12/14 1:00'),
    //     "ex-toreca": 7394492,
    //     dopa: 1026520,
    //     "japan-toreca": 267070,
    //     clove: 1270890,
    //     gacha24: 8235048,
    //     iris: 4928838
    // },
    // {
    //     date: new Date('2023/12/14 2:00'),
    //     "ex-toreca": 9525282,
    //     dopa: 1208180,
    //     "japan-toreca": 5451154,
    //     clove: 9285008,
    //     gacha24: 3692598,
    //     iris: 4573185
    // },
    // {
    //     date: new Date('2023/12/14 3:00'),
    //     "ex-toreca": 6843028,
    //     dopa: 470455,
    //     "japan-toreca": 8217252,
    //     clove: 9813303,
    //     gacha24: 680351,
    //     iris: 164238
    // },
    // {
    //     date: new Date('2023/12/14 4:00'),
    //     "ex-toreca": 3347877,
    //     dopa: 1997661,
    //     "japan-toreca": 9483671,
    //     clove: 3086611,
    //     gacha24: 9520319,
    //     iris: 2947887
    // },
    // {
    //     date: new Date('2023/12/14 5:00'),
    //     "ex-toreca": 3353845,
    //     dopa: 9185241,
    //     "japan-toreca": 1854052,
    //     clove: 1455836,
    //     gacha24: 8665684,
    //     iris: 1969639
    // },
    // {
    //     date: new Date('2023/12/14 6:00'),
    //     "ex-toreca": 322469,
    //     dopa: 9406274,
    //     "japan-toreca": 9711761,
    //     clove: 7409975,
    //     gacha24: 3234591,
    //     iris: 7183139
    // },
    // {
    //     date: new Date('2023/12/14 7:00'),
    //     "ex-toreca": 9282802,
    //     dopa: 4602306,
    //     "japan-toreca": 4523805,
    //     clove: 7993080,
    //     gacha24: 4858773,
    //     iris: 7844834
    // },
    // {
    //     date: new Date('2023/12/14 8:00'),
    //     "ex-toreca": 3804918,
    //     dopa: 7418487,
    //     "japan-toreca": 2872523,
    //     clove: 5793421,
    //     gacha24: 8570950,
    //     iris: 1187409
    // },
    // {
    //     date: new Date('2023/12/14 9:00'),
    //     "ex-toreca": 1489996,
    //     dopa: 8633818,
    //     "japan-toreca": 6700394,
    //     clove: 8347904,
    //     gacha24: 274760,
    //     iris: 8853155
    // },
    // {
    //     date: new Date('2023/12/14 10:00'),
    //     "ex-toreca": 835925,
    //     dopa: 201319,
    //     "japan-toreca": 6127305,
    //     clove: 806304,
    //     gacha24: 7437784,
    //     iris: 4437508
    // },
    // {
    //     date: new Date('2023/12/14 11:00'),
    //     "ex-toreca": 8793008,
    //     dopa: 9769470,
    //     "japan-toreca": 6791972,
    //     clove: 223424,
    //     gacha24: 5102989,
    //     iris: 6101907
    // },
    // {
    //     date: new Date('2023/12/14 12:00'),
    //     "ex-toreca": 8831151,
    //     dopa: 5642917,
    //     "japan-toreca": 8456581,
    //     clove: 366023,
    //     gacha24: 8878976,
    //     iris: 6748808
    // },
    // {
    //     date: new Date('2023/12/14 13:00'),
    //     "ex-toreca": 5054634,
    //     dopa: 7442867,
    //     "japan-toreca": 7709234,
    //     clove: 8897383,
    //     gacha24: 5862115,
    //     iris: 3206301
    // },
    // {
    //     date: new Date('2023/12/14 14:00'),
    //     "ex-toreca": 7250916,
    //     dopa: 878935,
    //     "japan-toreca": 5915832,
    //     clove: 6790088,
    //     gacha24: 1741257,
    //     iris: 5074827
    // },
    // {
    //     date: new Date('2023/12/14 15:00'),
    //     "ex-toreca": 4283980,
    //     dopa: 68974,
    //     "japan-toreca": 4115724,
    //     clove: 320996,
    //     gacha24: 1437627,
    //     iris: 1113015
    // },
    // {
    //     date: new Date('2023/12/14 16:00'),
    //     "ex-toreca": 8500420,
    //     dopa: 6702520,
    //     "japan-toreca": 3824040,
    //     clove: 6990277,
    //     gacha24: 5036123,
    //     iris: 7071180
    // },
    // {
    //     date: new Date('2023/12/14 17:00'),
    //     "ex-toreca": 3593360,
    //     dopa: 8679535,
    //     "japan-toreca": 3431185,
    //     clove: 5662077,
    //     gacha24: 289159,
    //     iris: 8969166
    // },
    // {
    //     date: new Date('2023/12/14 18:00'),
    //     "ex-toreca": 5173669,
    //     dopa: 4143568,
    //     "japan-toreca": 6647460,
    //     clove: 5052603,
    //     gacha24: 8939309,
    //     iris: 1394908
    // },
    // {
    //     date: new Date('2023/12/14 19:00'),
    //     "ex-toreca": 2135462,
    //     dopa: 3490414,
    //     "japan-toreca": 1947006,
    //     clove: 9886042,
    //     gacha24: 5066124,
    //     iris: 8920003
    // },
    // {
    //     date: new Date('2023/12/14 20:00'),
    //     "ex-toreca": 7312998,
    //     dopa: 8958449,
    //     "japan-toreca": 9230313,
    //     clove: 8892542,
    //     gacha24: 8611191,
    //     iris: 4874651
    // },
    // {
    //     date: new Date('2023/12/14 21:00'),
    //     "ex-toreca": 4556676,
    //     dopa: 4644504,
    //     "japan-toreca": 654751,
    //     clove: 7474925,
    //     gacha24: 4862452,
    //     iris: 6906116
    // },
    // {
    //     date: new Date('2023/12/14 22:00'),
    //     "ex-toreca": 4902954,
    //     dopa: 6166108,
    //     "japan-toreca": 825127,
    //     clove: 6637588,
    //     gacha24: 3269170,
    //     iris: 8749040
    // },
    // {
    //     date: new Date('2023/12/14 23:00'),
    //     "ex-toreca": 1033567,
    //     dopa: 368385,
    //     "japan-toreca": 1646791,
    //     clove: 8520948,
    //     gacha24: 3387259,
    //     iris: 4671135
    // },
    // {
    //     date: new Date('2023/12/15 0:00'),
    //     "ex-toreca": 5026913,
    //     dopa: 6817029,
    //     "japan-toreca": 5252865,
    //     clove: 2021944,
    //     gacha24: 6677093,
    //     iris: 4460931
    // },
    // {
    //     date: new Date('2023/12/15 1:00'),
    //     "ex-toreca": 572681,
    //     dopa: 5448469,
    //     "japan-toreca": 118430,
    //     clove: 4595860,
    //     gacha24: 6046979,
    //     iris: 9638890
    // },
    // {
    //     date: new Date('2023/12/15 2:00'),
    //     "ex-toreca": 9954687,
    //     dopa: 6915980,
    //     "japan-toreca": 1811500,
    //     clove: 4506859,
    //     gacha24: 2957622,
    //     iris: 1809986
    // },
    // {
    //     date: new Date('2023/12/15 3:00'),
    //     "ex-toreca": 5816150,
    //     dopa: 359365,
    //     "japan-toreca": 5023339,
    //     clove: 5091898,
    //     gacha24: 5657810,
    //     iris: 6851478
    // },
    // {
    //     date: new Date('2023/12/15 4:00'),
    //     "ex-toreca": 1093376,
    //     dopa: 8971085,
    //     "japan-toreca": 521403,
    //     clove: 2229462,
    //     gacha24: 2431454,
    //     iris: 614635
    // },
    // {
    //     date: new Date('2023/12/15 5:00'),
    //     "ex-toreca": 5707166,
    //     dopa: 2010567,
    //     "japan-toreca": 681157,
    //     clove: 7923877,
    //     gacha24: 2403910,
    //     iris: 3568172
    // },
    // {
    //     date: new Date('2023/12/15 6:00'),
    //     "ex-toreca": 8540792,
    //     dopa: 6312560,
    //     "japan-toreca": 9065276,
    //     clove: 7883152,
    //     gacha24: 5494130,
    //     iris: 9028255
    // },
    // {
    //     date: new Date('2023/12/15 7:00'),
    //     "ex-toreca": 3738881,
    //     dopa: 5885296,
    //     "japan-toreca": 2228023,
    //     clove: 6476110,
    //     gacha24: 7534832,
    //     iris: 2285605
    // },
    // {
    //     date: new Date('2023/12/15 8:00'),
    //     "ex-toreca": 6868320,
    //     dopa: 6821553,
    //     "japan-toreca": 4212173,
    //     clove: 8843429,
    //     gacha24: 427821,
    //     iris: 2830991
    // },
    // {
    //     date: new Date('2023/12/15 9:00'),
    //     "ex-toreca": 4920782,
    //     dopa: 412165,
    //     "japan-toreca": 8710616,
    //     clove: 7096029,
    //     gacha24: 6782768,
    //     iris: 1218361
    // },
    // {
    //     date: new Date('2023/12/15 10:00'),
    //     "ex-toreca": 3409840,
    //     dopa: 4770355,
    //     "japan-toreca": 7922317,
    //     clove: 3312121,
    //     gacha24: 3992606,
    //     iris: 5770875
    // },
    // {
    //     date: new Date('2023/12/15 11:00'),
    //     "ex-toreca": 7295724,
    //     dopa: 1526241,
    //     "japan-toreca": 7509360,
    //     clove: 4797105,
    //     gacha24: 8956688,
    //     iris: 8601457
    // },
    // {
    //     date: new Date('2023/12/15 12:00'),
    //     "ex-toreca": 3813305,
    //     dopa: 623275,
    //     "japan-toreca": 1040785,
    //     clove: 4870737,
    //     gacha24: 3162170,
    //     iris: 6339375
    // },
    // {
    //     date: new Date('2023/12/15 13:00'),
    //     "ex-toreca": 4605741,
    //     dopa: 919198,
    //     "japan-toreca": 5743857,
    //     clove: 1080769,
    //     gacha24: 7887578,
    //     iris: 1370164
    // },
    // {
    //     date: new Date('2023/12/15 14:00'),
    //     "ex-toreca": 8151955,
    //     dopa: 3721319,
    //     "japan-toreca": 6724357,
    //     clove: 7276958,
    //     gacha24: 369798,
    //     iris: 4460884
    // },
    // {
    //     date: new Date('2023/12/15 15:00'),
    //     "ex-toreca": 8654521,
    //     dopa: 8948305,
    //     "japan-toreca": 1081640,
    //     clove: 2413632,
    //     gacha24: 4255711,
    //     iris: 1835506
    // },
    // {
    //     date: new Date('2023/12/15 16:00'),
    //     "ex-toreca": 3303620,
    //     dopa: 3362997,
    //     "japan-toreca": 4707251,
    //     clove: 2548431,
    //     gacha24: 2403720,
    //     iris: 8762977
    // },
    // {
    //     date: new Date('2023/12/15 17:00'),
    //     "ex-toreca": 6835012,
    //     dopa: 7868867,
    //     "japan-toreca": 5960058,
    //     clove: 7893652,
    //     gacha24: 4042439,
    //     iris: 2936621
    // },
    // {
    //     date: new Date('2023/12/15 18:00'),
    //     "ex-toreca": 3297260,
    //     dopa: 1976128,
    //     "japan-toreca": 734988,
    //     clove: 2819439,
    //     gacha24: 245661,
    //     iris: 5782143
    // },
    // {
    //     date: new Date('2023/12/15 19:00'),
    //     "ex-toreca": 5421959,
    //     dopa: 6006765,
    //     "japan-toreca": 7029341,
    //     clove: 5305095,
    //     gacha24: 2108943,
    //     iris: 5655301
    // },
    // {
    //     date: new Date('2023/12/15 20:00'),
    //     "ex-toreca": 5944204,
    //     dopa: 5674551,
    //     "japan-toreca": 4269089,
    //     clove: 3248990,
    //     gacha24: 8015569,
    //     iris: 8715144
    // },
    // {
    //     date: new Date('2023/12/15 21:00'),
    //     "ex-toreca": 1505426,
    //     dopa: 3473353,
    //     "japan-toreca": 7784202,
    //     clove: 5730926,
    //     gacha24: 2746975,
    //     iris: 5726595
    // },
    // {
    //     date: new Date('2023/12/15 22:00'),
    //     "ex-toreca": 9075037,
    //     dopa: 893081,
    //     "japan-toreca": 3579723,
    //     clove: 2168002,
    //     gacha24: 2161274,
    //     iris: 3427333
    // },
    // {
    //     date: new Date('2023/12/15 23:00'),
    //     "ex-toreca": 3305031,
    //     dopa: 2225155,
    //     "japan-toreca": 1370140,
    //     clove: 3382881,
    //     gacha24: 7772636,
    //     iris: 758826
    // },
    // {
    //     date: new Date('2023/12/16 0:00'),
    //     "ex-toreca": 7555732,
    //     dopa: 3622955,
    //     "japan-toreca": 8368927,
    //     clove: 3282932,
    //     gacha24: 9526435,
    //     iris: 1693594
    // },
    // {
    //     date: new Date('2023/12/16 1:00'),
    //     "ex-toreca": 7390321,
    //     dopa: 733946,
    //     "japan-toreca": 7339492,
    //     clove: 975711,
    //     gacha24: 8992208,
    //     iris: 6422215
    // },
    // {
    //     date: new Date('2023/12/16 2:00'),
    //     "ex-toreca": 989760,
    //     dopa: 8762291,
    //     "japan-toreca": 2873611,
    //     clove: 9976049,
    //     gacha24: 4849623,
    //     iris: 5179566
    // },
    // {
    //     date: new Date('2023/12/16 3:00'),
    //     "ex-toreca": 253459,
    //     dopa: 4720886,
    //     "japan-toreca": 1994636,
    //     clove: 1856605,
    //     gacha24: 7691313,
    //     iris: 4992315
    // },
    // {
    //     date: new Date('2023/12/16 4:00'),
    //     "ex-toreca": 8319227,
    //     dopa: 4640846,
    //     "japan-toreca": 377858,
    //     clove: 4370873,
    //     gacha24: 5508373,
    //     iris: 7364013
    // },
    // {
    //     date: new Date('2023/12/16 5:00'),
    //     "ex-toreca": 5473691,
    //     dopa: 5431107,
    //     "japan-toreca": 6298515,
    //     clove: 7453355,
    //     gacha24: 5543859,
    //     iris: 4817295
    // },
    // {
    //     date: new Date('2023/12/16 6:00'),
    //     "ex-toreca": 1772545,
    //     dopa: 5601009,
    //     "japan-toreca": 2577577,
    //     clove: 5747208,
    //     gacha24: 480117,
    //     iris: 1906810
    // },
    // {
    //     date: new Date('2023/12/16 7:00'),
    //     "ex-toreca": 5957788,
    //     dopa: 1802273,
    //     "japan-toreca": 1935599,
    //     clove: 2392094,
    //     gacha24: 1726387,
    //     iris: 8226108
    // },
    // {
    //     date: new Date('2023/12/16 8:00'),
    //     "ex-toreca": 2064011,
    //     dopa: 2207429,
    //     "japan-toreca": 6801412,
    //     clove: 5917582,
    //     gacha24: 7136517,
    //     iris: 4250262
    // },
    // {
    //     date: new Date('2023/12/16 9:00'),
    //     "ex-toreca": 1695019,
    //     dopa: 1065172,
    //     "japan-toreca": 1702820,
    //     clove: 3041980,
    //     gacha24: 2417446,
    //     iris: 7360936
    // },
    // {
    //     date: new Date('2023/12/16 10:00'),
    //     "ex-toreca": 9107513,
    //     dopa: 3592566,
    //     "japan-toreca": 8995069,
    //     clove: 923876,
    //     gacha24: 9832510,
    //     iris: 482277
    // },
    // {
    //     date: new Date('2023/12/16 11:00'),
    //     "ex-toreca": 5382299,
    //     dopa: 3488266,
    //     "japan-toreca": 6011196,
    //     clove: 806232,
    //     gacha24: 1664226,
    //     iris: 4948022
    // },
    // {
    //     date: new Date('2023/12/16 12:00'),
    //     "ex-toreca": 4320393,
    //     dopa: 9454858,
    //     "japan-toreca": 9287213,
    //     clove: 767795,
    //     gacha24: 5985128,
    //     iris: 7789235
    // },
    // {
    //     date: new Date('2023/12/16 13:00'),
    //     "ex-toreca": 2050604,
    //     dopa: 6540058,
    //     "japan-toreca": 6998255,
    //     clove: 1909038,
    //     gacha24: 8608229,
    //     iris: 8402446
    // },
    // {
    //     date: new Date('2023/12/16 14:00'),
    //     "ex-toreca": 6901398,
    //     dopa: 401077,
    //     "japan-toreca": 3974658,
    //     clove: 343872,
    //     gacha24: 9712676,
    //     iris: 7280468
    // },
    // {
    //     date: new Date('2023/12/16 15:00'),
    //     "ex-toreca": 2457512,
    //     dopa: 8914327,
    //     "japan-toreca": 9504469,
    //     clove: 172193,
    //     gacha24: 3977323,
    //     iris: 4474194
    // },
    // {
    //     date: new Date('2023/12/16 16:00'),
    //     "ex-toreca": 1624760,
    //     dopa: 7483647,
    //     "japan-toreca": 8762968,
    //     clove: 4584076,
    //     gacha24: 2406176,
    //     iris: 5795345
    // },
    // {
    //     date: new Date('2023/12/16 17:00'),
    //     "ex-toreca": 790471,
    //     dopa: 3921268,
    //     "japan-toreca": 3155156,
    //     clove: 3555660,
    //     gacha24: 2909246,
    //     iris: 8348045
    // },
    // {
    //     date: new Date('2023/12/16 18:00'),
    //     "ex-toreca": 8265527,
    //     dopa: 9476735,
    //     "japan-toreca": 9143615,
    //     clove: 9393703,
    //     gacha24: 4749373,
    //     iris: 9265633
    // },
    // {
    //     date: new Date('2023/12/16 19:00'),
    //     "ex-toreca": 56764,
    //     dopa: 969873,
    //     "japan-toreca": 947747,
    //     clove: 3044211,
    //     gacha24: 6946398,
    //     iris: 1511304
    // },
    // {
    //     date: new Date('2023/12/16 20:00'),
    //     "ex-toreca": 1002309,
    //     dopa: 8556463,
    //     "japan-toreca": 6560165,
    //     clove: 1522406,
    //     gacha24: 8747985,
    //     iris: 4845030
    // },
    // {
    //     date: new Date('2023/12/16 21:00'),
    //     "ex-toreca": 7031335,
    //     dopa: 681238,
    //     "japan-toreca": 8355185,
    //     clove: 2736029,
    //     gacha24: 6627416,
    //     iris: 2562516
    // },
    // {
    //     date: new Date('2023/12/16 22:00'),
    //     "ex-toreca": 5010503,
    //     dopa: 3649078,
    //     "japan-toreca": 3201875,
    //     clove: 10966,
    //     gacha24: 5101445,
    //     iris: 5300232
    // },
    // {
    //     date: new Date('2023/12/16 23:00'),
    //     "ex-toreca": 4410998,
    //     dopa: 7363374,
    //     "japan-toreca": 8245897,
    //     clove: 8581060,
    //     gacha24: 5788857,
    //     iris: 2600173
    // },
    // {
    //     date: new Date('2023/12/17 0:00'),
    //     "ex-toreca": 1766776,
    //     dopa: 8993924,
    //     "japan-toreca": 2813443,
    //     clove: 1813158,
    //     gacha24: 4584509,
    //     iris: 8623515
    // },
    // {
    //     date: new Date('2023/12/17 1:00'),
    //     "ex-toreca": 5988287,
    //     dopa: 3050620,
    //     "japan-toreca": 25789,
    //     clove: 1898935,
    //     gacha24: 2242410,
    //     iris: 2754090
    // },
    // {
    //     date: new Date('2023/12/17 2:00'),
    //     "ex-toreca": 5273473,
    //     dopa: 1103999,
    //     "japan-toreca": 8329872,
    //     clove: 3927265,
    //     gacha24: 5787814,
    //     iris: 2397788
    // },
    // {
    //     date: new Date('2023/12/17 3:00'),
    //     "ex-toreca": 5445199,
    //     dopa: 2078793,
    //     "japan-toreca": 7928893,
    //     clove: 6672375,
    //     gacha24: 816894,
    //     iris: 6874971
    // },
    // {
    //     date: new Date('2023/12/17 4:00'),
    //     "ex-toreca": 2668996,
    //     dopa: 2126094,
    //     "japan-toreca": 1483928,
    //     clove: 5975489,
    //     gacha24: 423514,
    //     iris: 4265950
    // },
    // {
    //     date: new Date('2023/12/17 5:00'),
    //     "ex-toreca": 7645942,
    //     dopa: 5282459,
    //     "japan-toreca": 2446194,
    //     clove: 4137821,
    //     gacha24: 7095699,
    //     iris: 788501
    // },
    // {
    //     date: new Date('2023/12/17 6:00'),
    //     "ex-toreca": 482567,
    //     dopa: 8369233,
    //     "japan-toreca": 2745841,
    //     clove: 2574792,
    //     gacha24: 695302,
    //     iris: 551834
    // },
    // {
    //     date: new Date('2023/12/17 7:00'),
    //     "ex-toreca": 9455681,
    //     dopa: 580147,
    //     "japan-toreca": 1766599,
    //     clove: 7720469,
    //     gacha24: 3896640,
    //     iris: 3531600
    // },
    // {
    //     date: new Date('2023/12/17 8:00'),
    //     "ex-toreca": 4703892,
    //     dopa: 7260540,
    //     "japan-toreca": 8680692,
    //     clove: 9646407,
    //     gacha24: 8386720,
    //     iris: 2593364
    // },
    // {
    //     date: new Date('2023/12/17 9:00'),
    //     "ex-toreca": 3299164,
    //     dopa: 2067431,
    //     "japan-toreca": 492828,
    //     clove: 7589137,
    //     gacha24: 9707944,
    //     iris: 4328019
    // },
    // {
    //     date: new Date('2023/12/17 10:00'),
    //     "ex-toreca": 6977252,
    //     dopa: 2911223,
    //     "japan-toreca": 8475408,
    //     clove: 3199712,
    //     gacha24: 1864858,
    //     iris: 9785567
    // },
    // {
    //     date: new Date('2023/12/17 11:00'),
    //     "ex-toreca": 8894451,
    //     dopa: 739359,
    //     "japan-toreca": 6187865,
    //     clove: 6575146,
    //     gacha24: 2908854,
    //     iris: 8069779
    // },
    // {
    //     date: new Date('2023/12/17 12:00'),
    //     "ex-toreca": 9916636,
    //     dopa: 7044130,
    //     "japan-toreca": 523118,
    //     clove: 5128781,
    //     gacha24: 8466942,
    //     iris: 8013294
    // },
    // {
    //     date: new Date('2023/12/17 13:00'),
    //     "ex-toreca": 7733839,
    //     dopa: 7978776,
    //     "japan-toreca": 212466,
    //     clove: 4450173,
    //     gacha24: 3403703,
    //     iris: 3430878
    // },
    // {
    //     date: new Date('2023/12/17 14:00'),
    //     "ex-toreca": 7047702,
    //     dopa: 923098,
    //     "japan-toreca": 5742676,
    //     clove: 9198015,
    //     gacha24: 4100179,
    //     iris: 8514868
    // },
    // {
    //     date: new Date('2023/12/17 15:00'),
    //     "ex-toreca": 1152611,
    //     dopa: 6487684,
    //     "japan-toreca": 2062329,
    //     clove: 8205210,
    //     gacha24: 2644088,
    //     iris: 9750283
    // },
    // {
    //     date: new Date('2023/12/17 16:00'),
    //     "ex-toreca": 4256222,
    //     dopa: 1135590,
    //     "japan-toreca": 4676837,
    //     clove: 8058284,
    //     gacha24: 4680460,
    //     iris: 5778235
    // },
    // {
    //     date: new Date('2023/12/17 17:00'),
    //     "ex-toreca": 9303289,
    //     dopa: 1161678,
    //     "japan-toreca": 1586103,
    //     clove: 7583145,
    //     gacha24: 8878718,
    //     iris: 802525
    // },
    // {
    //     date: new Date('2023/12/17 18:00'),
    //     "ex-toreca": 21845,
    //     dopa: 8442637,
    //     "japan-toreca": 5370816,
    //     clove: 3652018,
    //     gacha24: 5267691,
    //     iris: 5926105
    // },
    // {
    //     date: new Date('2023/12/17 19:00'),
    //     "ex-toreca": 9914712,
    //     dopa: 4493208,
    //     "japan-toreca": 3669809,
    //     clove: 9790152,
    //     gacha24: 7304395,
    //     iris: 6720788
    // },
    // {
    //     date: new Date('2023/12/17 20:00'),
    //     "ex-toreca": 2955262,
    //     dopa: 3865598,
    //     "japan-toreca": 2029771,
    //     clove: 8968444,
    //     gacha24: 9644171,
    //     iris: 7089596
    // },
    // {
    //     date: new Date('2023/12/17 21:00'),
    //     "ex-toreca": 7158625,
    //     dopa: 3017281,
    //     "japan-toreca": 4359020,
    //     clove: 7784742,
    //     gacha24: 5501635,
    //     iris: 8064972
    // },
    // {
    //     date: new Date('2023/12/17 22:00'),
    //     "ex-toreca": 4554908,
    //     dopa: 2957273,
    //     "japan-toreca": 1200598,
    //     clove: 246747,
    //     gacha24: 7714382,
    //     iris: 9833874
    // },
    // {
    //     date: new Date('2023/12/17 23:00'),
    //     "ex-toreca": 4460266,
    //     dopa: 9069105,
    //     "japan-toreca": 7269959,
    //     clove: 8458216,
    //     gacha24: 8803448,
    //     iris: 3665193
    // },
    // {
    //     date: new Date('2023/12/18 0:00'),
    //     "ex-toreca": 2905988,
    //     dopa: 5551206,
    //     "japan-toreca": 1685251,
    //     clove: 8087966,
    //     gacha24: 9950798,
    //     iris: 8525315
    // },
    // {
    //     date: new Date('2023/12/18 1:00'),
    //     "ex-toreca": 2804991,
    //     dopa: 1553458,
    //     "japan-toreca": 9633690,
    //     clove: 9345711,
    //     gacha24: 9417532,
    //     iris: 1140413
    // },
    // {
    //     date: new Date('2023/12/18 2:00'),
    //     "ex-toreca": 1928099,
    //     dopa: 1921877,
    //     "japan-toreca": 1317727,
    //     clove: 565614,
    //     gacha24: 8190979,
    //     iris: 6121767
    // },
    // {
    //     date: new Date('2023/12/18 3:00'),
    //     "ex-toreca": 7755480,
    //     dopa: 1550988,
    //     "japan-toreca": 6481592,
    //     clove: 2189168,
    //     gacha24: 976467,
    //     iris: 3202852
    // },
    // {
    //     date: new Date('2023/12/18 4:00'),
    //     "ex-toreca": 4131735,
    //     dopa: 303574,
    //     "japan-toreca": 5695056,
    //     clove: 9421773,
    //     gacha24: 3197595,
    //     iris: 1155617
    // },
    // {
    //     date: new Date('2023/12/18 5:00'),
    //     "ex-toreca": 6073300,
    //     dopa: 7195845,
    //     "japan-toreca": 4458944,
    //     clove: 8154629,
    //     gacha24: 1907413,
    //     iris: 7376983
    // },
    // {
    //     date: new Date('2023/12/18 6:00'),
    //     "ex-toreca": 5530137,
    //     dopa: 4897321,
    //     "japan-toreca": 8520529,
    //     clove: 1846529,
    //     gacha24: 6319369,
    //     iris: 4717697
    // },
    // {
    //     date: new Date('2023/12/18 7:00'),
    //     "ex-toreca": 8456892,
    //     dopa: 4447249,
    //     "japan-toreca": 3472343,
    //     clove: 4624844,
    //     gacha24: 9514520,
    //     iris: 188752
    // },
    // {
    //     date: new Date('2023/12/18 8:00'),
    //     "ex-toreca": 7512256,
    //     dopa: 3851664,
    //     "japan-toreca": 6431848,
    //     clove: 3062433,
    //     gacha24: 9428307,
    //     iris: 7241513
    // },
    // {
    //     date: new Date('2023/12/18 9:00'),
    //     "ex-toreca": 3851773,
    //     dopa: 2088432,
    //     "japan-toreca": 962455,
    //     clove: 3504759,
    //     gacha24: 2699743,
    //     iris: 8295754
    // },
    // {
    //     date: new Date('2023/12/18 10:00'),
    //     "ex-toreca": 7712431,
    //     dopa: 6015792,
    //     "japan-toreca": 4488332,
    //     clove: 8915453,
    //     gacha24: 6420318,
    //     iris: 9546457
    // },
    // {
    //     date: new Date('2023/12/18 11:00'),
    //     "ex-toreca": 2942073,
    //     dopa: 6963524,
    //     "japan-toreca": 6546006,
    //     clove: 9956528,
    //     gacha24: 1854922,
    //     iris: 3535668
    // },
    // {
    //     date: new Date('2023/12/18 12:00'),
    //     "ex-toreca": 5852007,
    //     dopa: 6095179,
    //     "japan-toreca": 6007598,
    //     clove: 9098809,
    //     gacha24: 1820555,
    //     iris: 5555555
    // },
    // {
    //     date: new Date('2023/12/18 13:00'),
    //     "ex-toreca": 5684933,
    //     dopa: 434045,
    //     "japan-toreca": 8813347,
    //     clove: 8252581,
    //     gacha24: 7339799,
    //     iris: 9775519
    // },
    // {
    //     date: new Date('2023/12/18 14:00'),
    //     "ex-toreca": 9781651,
    //     dopa: 9361230,
    //     "japan-toreca": 9999808,
    //     clove: 8817079,
    //     gacha24: 2509816,
    //     iris: 4931208
    // },
    // {
    //     date: new Date('2023/12/18 15:00'),
    //     "ex-toreca": 8541982,
    //     dopa: 5534639,
    //     "japan-toreca": 1247035,
    //     clove: 7707342,
    //     gacha24: 9251206,
    //     iris: 3328636
    // },
    // {
    //     date: new Date('2023/12/18 16:00'),
    //     "ex-toreca": 4194529,
    //     dopa: 9780614,
    //     "japan-toreca": 2143267,
    //     clove: 9725898,
    //     gacha24: 490459,
    //     iris: 1889159
    // },
    // {
    //     date: new Date('2023/12/18 17:00'),
    //     "ex-toreca": 1619239,
    //     dopa: 3457168,
    //     "japan-toreca": 8681404,
    //     clove: 4972585,
    //     gacha24: 2296634,
    //     iris: 7197591
    // },
    // {
    //     date: new Date('2023/12/18 18:00'),
    //     "ex-toreca": 8575260,
    //     dopa: 5170633,
    //     "japan-toreca": 1363539,
    //     clove: 93991,
    //     gacha24: 8438361,
    //     iris: 1930255
    // },
    // {
    //     date: new Date('2023/12/18 19:00'),
    //     "ex-toreca": 3907446,
    //     dopa: 645357,
    //     "japan-toreca": 7070817,
    //     clove: 9097748,
    //     gacha24: 4268496,
    //     iris: 2418263
    // },
    // {
    //     date: new Date('2023/12/18 20:00'),
    //     "ex-toreca": 5922678,
    //     dopa: 4662655,
    //     "japan-toreca": 3668496,
    //     clove: 4813326,
    //     gacha24: 6660750,
    //     iris: 7776998
    // },
    // {
    //     date: new Date('2023/12/18 21:00'),
    //     "ex-toreca": 5704125,
    //     dopa: 4917103,
    //     "japan-toreca": 1146665,
    //     clove: 1286073,
    //     gacha24: 4546319,
    //     iris: 7121120
    // },
    // {
    //     date: new Date('2023/12/18 22:00'),
    //     "ex-toreca": 7081215,
    //     dopa: 102828,
    //     "japan-toreca": 5909576,
    //     clove: 8834523,
    //     gacha24: 2159681,
    //     iris: 8533042
    // },
    // {
    //     date: new Date('2023/12/18 23:00'),
    //     "ex-toreca": 3539332,
    //     dopa: 1000103,
    //     "japan-toreca": 5154765,
    //     clove: 4606997,
    //     gacha24: 2037130,
    //     iris: 8177167
    // },
    // {
    //     date: new Date('2023/12/19 0:00'),
    //     "ex-toreca": 4701595,
    //     dopa: 6501739,
    //     "japan-toreca": 8055130,
    //     clove: 5191773,
    //     gacha24: 5615431,
    //     iris: 5815794
    // },
    // {
    //     date: new Date('2023/12/19 1:00'),
    //     "ex-toreca": 755641,
    //     dopa: 3587696,
    //     "japan-toreca": 5955710,
    //     clove: 7693788,
    //     gacha24: 584625,
    //     iris: 846698
    // },
    // {
    //     date: new Date('2023/12/19 2:00'),
    //     "ex-toreca": 6859405,
    //     dopa: 654567,
    //     "japan-toreca": 6865642,
    //     clove: 5255013,
    //     gacha24: 2296900,
    //     iris: 810334
    // },
    // {
    //     date: new Date('2023/12/19 3:00'),
    //     "ex-toreca": 322632,
    //     dopa: 1150047,
    //     "japan-toreca": 6859182,
    //     clove: 7078567,
    //     gacha24: 7407360,
    //     iris: 5431268
    // },
    // {
    //     date: new Date('2023/12/19 4:00'),
    //     "ex-toreca": 4832040,
    //     dopa: 1420884,
    //     "japan-toreca": 3170146,
    //     clove: 2267443,
    //     gacha24: 2192433,
    //     iris: 7695480
    // },
    // {
    //     date: new Date('2023/12/19 5:00'),
    //     "ex-toreca": 4241276,
    //     dopa: 7463526,
    //     "japan-toreca": 1742657,
    //     clove: 6935630,
    //     gacha24: 7421986,
    //     iris: 4613590
    // },
    // {
    //     date: new Date('2023/12/19 6:00'),
    //     "ex-toreca": 9203937,
    //     dopa: 5374177,
    //     "japan-toreca": 7544656,
    //     clove: 9713788,
    //     gacha24: 592470,
    //     iris: 7711228
    // },
    // {
    //     date: new Date('2023/12/19 7:00'),
    //     "ex-toreca": 3668503,
    //     dopa: 2631706,
    //     "japan-toreca": 328326,
    //     clove: 4988332,
    //     gacha24: 8651528,
    //     iris: 9724841
    // },
    // {
    //     date: new Date('2023/12/19 8:00'),
    //     "ex-toreca": 2044405,
    //     dopa: 2990777,
    //     "japan-toreca": 6364168,
    //     clove: 5911999,
    //     gacha24: 3454921,
    //     iris: 7192353
    // },
    // {
    //     date: new Date('2023/12/19 9:00'),
    //     "ex-toreca": 4691365,
    //     dopa: 9264359,
    //     "japan-toreca": 4891209,
    //     clove: 4922416,
    //     gacha24: 8340703,
    //     iris: 161606
    // },
    // {
    //     date: new Date('2023/12/19 10:00'),
    //     "ex-toreca": 1134894,
    //     dopa: 8027637,
    //     "japan-toreca": 6898872,
    //     clove: 4243282,
    //     gacha24: 6214899,
    //     iris: 9597214
    // },
    // {
    //     date: new Date('2023/12/19 11:00'),
    //     "ex-toreca": 632842,
    //     dopa: 7706787,
    //     "japan-toreca": 3315870,
    //     clove: 3891454,
    //     gacha24: 8858717,
    //     iris: 2228123
    // },
    // {
    //     date: new Date('2023/12/19 12:00'),
    //     "ex-toreca": 7457938,
    //     dopa: 9504429,
    //     "japan-toreca": 3857337,
    //     clove: 2941917,
    //     gacha24: 10921,
    //     iris: 6176731
    // },
    // {
    //     date: new Date('2023/12/19 13:00'),
    //     "ex-toreca": 3881633,
    //     dopa: 3543929,
    //     "japan-toreca": 3107181,
    //     clove: 8634091,
    //     gacha24: 6007995,
    //     iris: 2143277
    // },
    // {
    //     date: new Date('2023/12/19 14:00'),
    //     "ex-toreca": 6769524,
    //     dopa: 4082544,
    //     "japan-toreca": 1046719,
    //     clove: 3961502,
    //     gacha24: 5017927,
    //     iris: 200960
    // },
    // {
    //     date: new Date('2023/12/19 15:00'),
    //     "ex-toreca": 1608865,
    //     dopa: 3751718,
    //     "japan-toreca": 267605,
    //     clove: 8545910,
    //     gacha24: 1422552,
    //     iris: 45673
    // },
    // {
    //     date: new Date('2023/12/19 16:00'),
    //     "ex-toreca": 2777444,
    //     dopa: 6282659,
    //     "japan-toreca": 8544648,
    //     clove: 9776902,
    //     gacha24: 4771192,
    //     iris: 4566380
    // },
    // {
    //     date: new Date('2023/12/19 17:00'),
    //     "ex-toreca": 1789567,
    //     dopa: 7800743,
    //     "japan-toreca": 2679682,
    //     clove: 741197,
    //     gacha24: 7170229,
    //     iris: 6177344
    // },
    // {
    //     date: new Date('2023/12/19 18:00'),
    //     "ex-toreca": 2638634,
    //     dopa: 6463734,
    //     "japan-toreca": 1558902,
    //     clove: 6668305,
    //     gacha24: 333199,
    //     iris: 4718228
    // },
    // {
    //     date: new Date('2023/12/19 19:00'),
    //     "ex-toreca": 6997575,
    //     dopa: 4683950,
    //     "japan-toreca": 2007624,
    //     clove: 6968612,
    //     gacha24: 2136886,
    //     iris: 7734597
    // },
    // {
    //     date: new Date('2023/12/19 20:00'),
    //     "ex-toreca": 8147301,
    //     dopa: 5754862,
    //     "japan-toreca": 4809597,
    //     clove: 4976067,
    //     gacha24: 1775680,
    //     iris: 5401862
    // },
    // {
    //     date: new Date('2023/12/19 21:00'),
    //     "ex-toreca": 4554711,
    //     dopa: 6892799,
    //     "japan-toreca": 6843263,
    //     clove: 6211117,
    //     gacha24: 4410429,
    //     iris: 7982192
    // },
    // {
    //     date: new Date('2023/12/19 22:00'),
    //     "ex-toreca": 2386507,
    //     dopa: 1068487,
    //     "japan-toreca": 6155742,
    //     clove: 2306219,
    //     gacha24: 7215537,
    //     iris: 6279218
    // },
    // {
    //     date: new Date('2023/12/19 23:00'),
    //     "ex-toreca": 9636746,
    //     dopa: 8441521,
    //     "japan-toreca": 9611551,
    //     clove: 9110775,
    //     gacha24: 3444325,
    //     iris: 2602916
    // },
    // {
    //     date: new Date('2023/12/20 0:00'),
    //     "ex-toreca": 8582818,
    //     dopa: 2417620,
    //     "japan-toreca": 9938518,
    //     clove: 25720,
    //     gacha24: 6515567,
    //     iris: 6055660
    // },
    // {
    //     date: new Date('2023/12/20 1:00'),
    //     "ex-toreca": 3505553,
    //     dopa: 7238527,
    //     "japan-toreca": 8173888,
    //     clove: 7784543,
    //     gacha24: 9440987,
    //     iris: 2870886
    // },
    // {
    //     date: new Date('2023/12/20 2:00'),
    //     "ex-toreca": 739215,
    //     dopa: 5287688,
    //     "japan-toreca": 2827678,
    //     clove: 7884835,
    //     gacha24: 8809088,
    //     iris: 8681866
    // },
    // {
    //     date: new Date('2023/12/20 3:00'),
    //     "ex-toreca": 8209448,
    //     dopa: 3219389,
    //     "japan-toreca": 3439347,
    //     clove: 8942794,
    //     gacha24: 322898,
    //     iris: 8988869
    // },
    // {
    //     date: new Date('2023/12/20 4:00'),
    //     "ex-toreca": 1586021,
    //     dopa: 7986072,
    //     "japan-toreca": 6568576,
    //     clove: 5793061,
    //     gacha24: 2840494,
    //     iris: 352967
    // },
    // {
    //     date: new Date('2023/12/20 5:00'),
    //     "ex-toreca": 2183158,
    //     dopa: 4089310,
    //     "japan-toreca": 2833420,
    //     clove: 3510873,
    //     gacha24: 9916157,
    //     iris: 3321206
    // },
    // {
    //     date: new Date('2023/12/20 6:00'),
    //     "ex-toreca": 3419498,
    //     dopa: 8440942,
    //     "japan-toreca": 8842316,
    //     clove: 3320363,
    //     gacha24: 4358455,
    //     iris: 2132370
    // },
    // {
    //     date: new Date('2023/12/20 7:00'),
    //     "ex-toreca": 8804137,
    //     dopa: 2561134,
    //     "japan-toreca": 5337900,
    //     clove: 7716105,
    //     gacha24: 3573477,
    //     iris: 6277849
    // },
    // {
    //     date: new Date('2023/12/20 8:00'),
    //     "ex-toreca": 2525045,
    //     dopa: 6449755,
    //     "japan-toreca": 6500397,
    //     clove: 7079217,
    //     gacha24: 8852746,
    //     iris: 4776233
    // },
    // {
    //     date: new Date('2023/12/20 9:00'),
    //     "ex-toreca": 66641,
    //     dopa: 1920400,
    //     "japan-toreca": 4118368,
    //     clove: 5518862,
    //     gacha24: 906637,
    //     iris: 310196
    // },
    // {
    //     date: new Date('2023/12/20 10:00'),
    //     "ex-toreca": 6153594,
    //     dopa: 3980539,
    //     "japan-toreca": 423996,
    //     clove: 3566269,
    //     gacha24: 3699396,
    //     iris: 7452789
    // },
    // {
    //     date: new Date('2023/12/20 11:00'),
    //     "ex-toreca": 6910187,
    //     dopa: 60919,
    //     "japan-toreca": 5017463,
    //     clove: 4289943,
    //     gacha24: 2000507,
    //     iris: 1187427
    // },
    // {
    //     date: new Date('2023/12/20 12:00'),
    //     "ex-toreca": 7851257,
    //     dopa: 2026714,
    //     "japan-toreca": 6380432,
    //     clove: 9515154,
    //     gacha24: 811787,
    //     iris: 3170100
    // },
    // {
    //     date: new Date('2023/12/20 13:00'),
    //     "ex-toreca": 1767483,
    //     dopa: 2575473,
    //     "japan-toreca": 3237888,
    //     clove: 9539996,
    //     gacha24: 9241840,
    //     iris: 233863
    // },
    // {
    //     date: new Date('2023/12/20 14:00'),
    //     "ex-toreca": 2070857,
    //     dopa: 8252518,
    //     "japan-toreca": 151171,
    //     clove: 9336493,
    //     gacha24: 7979882,
    //     iris: 8401967
    // },
    // {
    //     date: new Date('2023/12/20 15:00'),
    //     "ex-toreca": 1579246,
    //     dopa: 3694025,
    //     "japan-toreca": 8620462,
    //     clove: 4141549,
    //     gacha24: 1097760,
    //     iris: 5958931
    // },
    // {
    //     date: new Date('2023/12/20 16:00'),
    //     "ex-toreca": 6367844,
    //     dopa: 6924677,
    //     "japan-toreca": 774710,
    //     clove: 7604099,
    //     gacha24: 2466168,
    //     iris: 3400294
    // },
    // {
    //     date: new Date('2023/12/20 17:00'),
    //     "ex-toreca": 1631858,
    //     dopa: 5250991,
    //     "japan-toreca": 9421421,
    //     clove: 7927004,
    //     gacha24: 4366443,
    //     iris: 2192862
    // },
    // {
    //     date: new Date('2023/12/20 18:00'),
    //     "ex-toreca": 5339242,
    //     dopa: 8887249,
    //     "japan-toreca": 5384449,
    //     clove: 8900641,
    //     gacha24: 3214148,
    //     iris: 1041898
    // },
    // {
    //     date: new Date('2023/12/20 19:00'),
    //     "ex-toreca": 6831324,
    //     dopa: 538093,
    //     "japan-toreca": 5222099,
    //     clove: 7589119,
    //     gacha24: 7311148,
    //     iris: 8139502
    // },
    // {
    //     date: new Date('2023/12/20 20:00'),
    //     "ex-toreca": 2964129,
    //     dopa: 1738059,
    //     "japan-toreca": 1312017,
    //     clove: 415313,
    //     gacha24: 3067908,
    //     iris: 8778326
    // },
    // {
    //     date: new Date('2023/12/20 21:00'),
    //     "ex-toreca": 7469320,
    //     dopa: 6400697,
    //     "japan-toreca": 21976,
    //     clove: 9561096,
    //     gacha24: 7353883,
    //     iris: 7368137
    // },
    // {
    //     date: new Date('2023/12/20 22:00'),
    //     "ex-toreca": 861903,
    //     dopa: 5129945,
    //     "japan-toreca": 7004004,
    //     clove: 1215832,
    //     gacha24: 8179032,
    //     iris: 5187060
    // },
    // {
    //     date: new Date('2023/12/20 23:00'),
    //     "ex-toreca": 1833442,
    //     dopa: 8259622,
    //     "japan-toreca": 6365631,
    //     clove: 6334241,
    //     gacha24: 2053669,
    //     iris: 6034573
    // },
    // {
    //     date: new Date('2023/12/21 0:00'),
    //     "ex-toreca": 5032076,
    //     dopa: 3714231,
    //     "japan-toreca": 5503854,
    //     clove: 5405504,
    //     gacha24: 2732153,
    //     iris: 4309597
    // },
    // {
    //     date: new Date('2023/12/21 1:00'),
    //     "ex-toreca": 1862552,
    //     dopa: 6195044,
    //     "japan-toreca": 806822,
    //     clove: 2240666,
    //     gacha24: 8398639,
    //     iris: 7721298
    // },
    // {
    //     date: new Date('2023/12/21 2:00'),
    //     "ex-toreca": 2753037,
    //     dopa: 9938274,
    //     "japan-toreca": 9840275,
    //     clove: 4046699,
    //     gacha24: 3384597,
    //     iris: 2175772
    // },
    // {
    //     date: new Date('2023/12/21 3:00'),
    //     "ex-toreca": 7204445,
    //     dopa: 3370372,
    //     "japan-toreca": 649508,
    //     clove: 4495078,
    //     gacha24: 1991492,
    //     iris: 1685670
    // },
    // {
    //     date: new Date('2023/12/21 4:00'),
    //     "ex-toreca": 4647242,
    //     dopa: 6379606,
    //     "japan-toreca": 1782756,
    //     clove: 5163578,
    //     gacha24: 7799190,
    //     iris: 8447317
    // },
    // {
    //     date: new Date('2023/12/21 5:00'),
    //     "ex-toreca": 5447717,
    //     dopa: 9020184,
    //     "japan-toreca": 9470426,
    //     clove: 4550059,
    //     gacha24: 403018,
    //     iris: 4615941
    // },
    // {
    //     date: new Date('2023/12/21 6:00'),
    //     "ex-toreca": 277894,
    //     dopa: 631865,
    //     "japan-toreca": 5781388,
    //     clove: 1022247,
    //     gacha24: 8095196,
    //     iris: 8584384
    // },
    // {
    //     date: new Date('2023/12/21 7:00'),
    //     "ex-toreca": 977609,
    //     dopa: 496848,
    //     "japan-toreca": 7713050,
    //     clove: 6492017,
    //     gacha24: 1335635,
    //     iris: 4082842
    // },
    // {
    //     date: new Date('2023/12/21 8:00'),
    //     "ex-toreca": 3125662,
    //     dopa: 2479391,
    //     "japan-toreca": 6309826,
    //     clove: 1532995,
    //     gacha24: 6381605,
    //     iris: 4615649
    // },
    // {
    //     date: new Date('2023/12/21 9:00'),
    //     "ex-toreca": 9349766,
    //     dopa: 3271976,
    //     "japan-toreca": 1616384,
    //     clove: 1366945,
    //     gacha24: 5037061,
    //     iris: 9896272
    // },
    // {
    //     date: new Date('2023/12/21 10:00'),
    //     "ex-toreca": 9991907,
    //     dopa: 7862193,
    //     "japan-toreca": 128263,
    //     clove: 2211825,
    //     gacha24: 3510159,
    //     iris: 6962093
    // },
    // {
    //     date: new Date('2023/12/21 11:00'),
    //     "ex-toreca": 4166266,
    //     dopa: 3061715,
    //     "japan-toreca": 2701576,
    //     clove: 2270666,
    //     gacha24: 8938965,
    //     iris: 3519030
    // },
    // {
    //     date: new Date('2023/12/21 12:00'),
    //     "ex-toreca": 9927909,
    //     dopa: 7742649,
    //     "japan-toreca": 7861331,
    //     clove: 4346774,
    //     gacha24: 2040046,
    //     iris: 3281808
    // },
    // {
    //     date: new Date('2023/12/21 13:00'),
    //     "ex-toreca": 919060,
    //     dopa: 3070134,
    //     "japan-toreca": 7889022,
    //     clove: 5010957,
    //     gacha24: 4019213,
    //     iris: 5845098
    // },
    // {
    //     date: new Date('2023/12/21 14:00'),
    //     "ex-toreca": 4134627,
    //     dopa: 5079212,
    //     "japan-toreca": 1393130,
    //     clove: 6777683,
    //     gacha24: 8942120,
    //     iris: 5912109
    // },
    // {
    //     date: new Date('2023/12/21 15:00'),
    //     "ex-toreca": 9584934,
    //     dopa: 1680708,
    //     "japan-toreca": 8782235,
    //     clove: 4967121,
    //     gacha24: 4014697,
    //     iris: 3748571
    // },
    // {
    //     date: new Date('2023/12/21 16:00'),
    //     "ex-toreca": 2998317,
    //     dopa: 8263883,
    //     "japan-toreca": 6413656,
    //     clove: 8252664,
    //     gacha24: 715167,
    //     iris: 5264263
    // },
    // {
    //     date: new Date('2023/12/21 17:00'),
    //     "ex-toreca": 1450617,
    //     dopa: 8356634,
    //     "japan-toreca": 4773953,
    //     clove: 3678481,
    //     gacha24: 6682662,
    //     iris: 3988071
    // },
    // {
    //     date: new Date('2023/12/21 18:00'),
    //     "ex-toreca": 8215913,
    //     dopa: 7952324,
    //     "japan-toreca": 148627,
    //     clove: 9043131,
    //     gacha24: 6185190,
    //     iris: 4413796
    // },
    // {
    //     date: new Date('2023/12/21 19:00'),
    //     "ex-toreca": 2382798,
    //     dopa: 2705996,
    //     "japan-toreca": 6869064,
    //     clove: 5336607,
    //     gacha24: 9665347,
    //     iris: 8561760
    // },
    // {
    //     date: new Date('2023/12/21 20:00'),
    //     "ex-toreca": 1769684,
    //     dopa: 8168347,
    //     "japan-toreca": 8409504,
    //     clove: 603822,
    //     gacha24: 3269084,
    //     iris: 2327666
    // },
    // {
    //     date: new Date('2023/12/21 21:00'),
    //     "ex-toreca": 4184200,
    //     dopa: 1838457,
    //     "japan-toreca": 3566261,
    //     clove: 7827378,
    //     gacha24: 9581454,
    //     iris: 5638769
    // },
    // {
    //     date: new Date('2023/12/21 22:00'),
    //     "ex-toreca": 9023210,
    //     dopa: 2515128,
    //     "japan-toreca": 4285873,
    //     clove: 1475639,
    //     gacha24: 7199104,
    //     iris: 2809105
    // },
    // {
    //     date: new Date('2023/12/21 23:00'),
    //     "ex-toreca": 2247778,
    //     dopa: 9423805,
    //     "japan-toreca": 6608466,
    //     clove: 292938,
    //     gacha24: 5366434,
    //     iris: 3642940
    // },
    // {
    //     date: new Date('2023/12/22 0:00'),
    //     "ex-toreca": 9655897,
    //     dopa: 4271389,
    //     "japan-toreca": 80300,
    //     clove: 3727642,
    //     gacha24: 2410152,
    //     iris: 950592
    // },
    // {
    //     date: new Date('2023/12/22 1:00'),
    //     "ex-toreca": 8194221,
    //     dopa: 1403365,
    //     "japan-toreca": 5753891,
    //     clove: 9685977,
    //     gacha24: 9346333,
    //     iris: 8429962
    // },
    // {
    //     date: new Date('2023/12/22 2:00'),
    //     "ex-toreca": 954401,
    //     dopa: 7218506,
    //     "japan-toreca": 3766348,
    //     clove: 5946900,
    //     gacha24: 1545832,
    //     iris: 5831622
    // },
    // {
    //     date: new Date('2023/12/22 3:00'),
    //     "ex-toreca": 1730915,
    //     dopa: 9337153,
    //     "japan-toreca": 213715,
    //     clove: 2272502,
    //     gacha24: 8178485,
    //     iris: 6012973
    // },
    // {
    //     date: new Date('2023/12/22 4:00'),
    //     "ex-toreca": 7117490,
    //     dopa: 8744920,
    //     "japan-toreca": 1657381,
    //     clove: 8738308,
    //     gacha24: 6184505,
    //     iris: 6698208
    // },
    // {
    //     date: new Date('2023/12/22 5:00'),
    //     "ex-toreca": 4289853,
    //     dopa: 2437514,
    //     "japan-toreca": 5558545,
    //     clove: 3254259,
    //     gacha24: 2830066,
    //     iris: 6715002
    // },
    // {
    //     date: new Date('2023/12/22 6:00'),
    //     "ex-toreca": 9793417,
    //     dopa: 8483164,
    //     "japan-toreca": 6687943,
    //     clove: 6599705,
    //     gacha24: 9181522,
    //     iris: 612380
    // },
    // {
    //     date: new Date('2023/12/22 7:00'),
    //     "ex-toreca": 3942009,
    //     dopa: 6785286,
    //     "japan-toreca": 7784081,
    //     clove: 3072145,
    //     gacha24: 3536564,
    //     iris: 2513472
    // },
    // {
    //     date: new Date('2023/12/22 8:00'),
    //     "ex-toreca": 4934288,
    //     dopa: 9503702,
    //     "japan-toreca": 4759984,
    //     clove: 2194278,
    //     gacha24: 7351920,
    //     iris: 7318818
    // },
    // {
    //     date: new Date('2023/12/22 9:00'),
    //     "ex-toreca": 9120204,
    //     dopa: 2886835,
    //     "japan-toreca": 92944,
    //     clove: 6324560,
    //     gacha24: 2811475,
    //     iris: 9624608
    // },
    // {
    //     date: new Date('2023/12/22 10:00'),
    //     "ex-toreca": 880373,
    //     dopa: 9998475,
    //     "japan-toreca": 5449354,
    //     clove: 278739,
    //     gacha24: 408157,
    //     iris: 4281358
    // },
    // {
    //     date: new Date('2023/12/22 11:00'),
    //     "ex-toreca": 8944357,
    //     dopa: 9991466,
    //     "japan-toreca": 9900049,
    //     clove: 2266769,
    //     gacha24: 7305473,
    //     iris: 724941
    // },
    // {
    //     date: new Date('2023/12/22 12:00'),
    //     "ex-toreca": 3397193,
    //     dopa: 8823043,
    //     "japan-toreca": 5426508,
    //     clove: 3687864,
    //     gacha24: 8364810,
    //     iris: 3452995
    // },
    // {
    //     date: new Date('2023/12/22 13:00'),
    //     "ex-toreca": 8547934,
    //     dopa: 9274464,
    //     "japan-toreca": 7751047,
    //     clove: 9187931,
    //     gacha24: 8998311,
    //     iris: 1529871
    // },
    // {
    //     date: new Date('2023/12/22 14:00'),
    //     "ex-toreca": 3181988,
    //     dopa: 6413832,
    //     "japan-toreca": 4554815,
    //     clove: 281286,
    //     gacha24: 3408882,
    //     iris: 8988055
    // },
    // {
    //     date: new Date('2023/12/22 15:00'),
    //     "ex-toreca": 6041845,
    //     dopa: 4667424,
    //     "japan-toreca": 9605256,
    //     clove: 9029175,
    //     gacha24: 9690229,
    //     iris: 1140346
    // },
    // {
    //     date: new Date('2023/12/22 16:00'),
    //     "ex-toreca": 9531263,
    //     dopa: 597067,
    //     "japan-toreca": 8264512,
    //     clove: 1290074,
    //     gacha24: 6466446,
    //     iris: 5482972
    // },
    // {
    //     date: new Date('2023/12/22 17:00'),
    //     "ex-toreca": 8128229,
    //     dopa: 741659,
    //     "japan-toreca": 1224467,
    //     clove: 94073,
    //     gacha24: 4392966,
    //     iris: 3321386
    // },
    // {
    //     date: new Date('2023/12/22 18:00'),
    //     "ex-toreca": 5177458,
    //     dopa: 2557460,
    //     "japan-toreca": 1783542,
    //     clove: 8857544,
    //     gacha24: 2399669,
    //     iris: 5516380
    // },
    // {
    //     date: new Date('2023/12/22 19:00'),
    //     "ex-toreca": 9963386,
    //     dopa: 4489497,
    //     "japan-toreca": 981646,
    //     clove: 4520366,
    //     gacha24: 97974,
    //     iris: 8749898
    // },
    // {
    //     date: new Date('2023/12/22 20:00'),
    //     "ex-toreca": 1780800,
    //     dopa: 5112730,
    //     "japan-toreca": 7450502,
    //     clove: 5022725,
    //     gacha24: 6149812,
    //     iris: 8013602
    // },
    // {
    //     date: new Date('2023/12/22 21:00'),
    //     "ex-toreca": 3183015,
    //     dopa: 198881,
    //     "japan-toreca": 4728836,
    //     clove: 7264100,
    //     gacha24: 8360454,
    //     iris: 5910618
    // },
    // {
    //     date: new Date('2023/12/22 22:00'),
    //     "ex-toreca": 3712303,
    //     dopa: 7020783,
    //     "japan-toreca": 2942731,
    //     clove: 2571752,
    //     gacha24: 5016762,
    //     iris: 6694704
    // },
    // {
    //     date: new Date('2023/12/22 23:00'),
    //     "ex-toreca": 3931717,
    //     dopa: 3856203,
    //     "japan-toreca": 9609835,
    //     clove: 9226008,
    //     gacha24: 6306416,
    //     iris: 1047204
    // },
    // {
    //     date: new Date('2023/12/23 0:00'),
    //     "ex-toreca": 8825380,
    //     dopa: 4205033,
    //     "japan-toreca": 7224706,
    //     clove: 3622495,
    //     gacha24: 7741716,
    //     iris: 561765
    // },
    // {
    //     date: new Date('2023/12/23 1:00'),
    //     "ex-toreca": 5917965,
    //     dopa: 9005639,
    //     "japan-toreca": 8757234,
    //     clove: 9886195,
    //     gacha24: 962872,
    //     iris: 6341816
    // },
    // {
    //     date: new Date('2023/12/23 2:00'),
    //     "ex-toreca": 9786937,
    //     dopa: 8876393,
    //     "japan-toreca": 820526,
    //     clove: 1886744,
    //     gacha24: 1247296,
    //     iris: 5679070
    // },
    // {
    //     date: new Date('2023/12/23 3:00'),
    //     "ex-toreca": 915692,
    //     dopa: 4034056,
    //     "japan-toreca": 1804502,
    //     clove: 3521080,
    //     gacha24: 6348358,
    //     iris: 8803065
    // },
    // {
    //     date: new Date('2023/12/23 4:00'),
    //     "ex-toreca": 4529842,
    //     dopa: 5774845,
    //     "japan-toreca": 2723409,
    //     clove: 2477405,
    //     gacha24: 8584398,
    //     iris: 6945886
    // },
    // {
    //     date: new Date('2023/12/23 5:00'),
    //     "ex-toreca": 777530,
    //     dopa: 9515164,
    //     "japan-toreca": 1347649,
    //     clove: 1063157,
    //     gacha24: 3360254,
    //     iris: 9943520
    // },
    // {
    //     date: new Date('2023/12/23 6:00'),
    //     "ex-toreca": 3414481,
    //     dopa: 8215879,
    //     "japan-toreca": 7369750,
    //     clove: 8788873,
    //     gacha24: 2192285,
    //     iris: 4759120
    // },
    // {
    //     date: new Date('2023/12/23 7:00'),
    //     "ex-toreca": 1092178,
    //     dopa: 7901709,
    //     "japan-toreca": 6181006,
    //     clove: 758709,
    //     gacha24: 7090824,
    //     iris: 638417
    // },
    // {
    //     date: new Date('2023/12/23 8:00'),
    //     "ex-toreca": 9624031,
    //     dopa: 5685063,
    //     "japan-toreca": 2014732,
    //     clove: 2693642,
    //     gacha24: 5468995,
    //     iris: 9102746
    // },
    // {
    //     date: new Date('2023/12/23 9:00'),
    //     "ex-toreca": 1327126,
    //     dopa: 9915351,
    //     "japan-toreca": 9770227,
    //     clove: 5267518,
    //     gacha24: 1437837,
    //     iris: 5611900
    // },
    // {
    //     date: new Date('2023/12/23 10:00'),
    //     "ex-toreca": 8243041,
    //     dopa: 2569900,
    //     "japan-toreca": 2044803,
    //     clove: 636471,
    //     gacha24: 8628894,
    //     iris: 9261838
    // },
    // {
    //     date: new Date('2023/12/23 11:00'),
    //     "ex-toreca": 9183796,
    //     dopa: 9253945,
    //     "japan-toreca": 906100,
    //     clove: 4458858,
    //     gacha24: 3147085,
    //     iris: 3666874
    // },
    // {
    //     date: new Date('2023/12/23 12:00'),
    //     "ex-toreca": 9063635,
    //     dopa: 2943370,
    //     "japan-toreca": 5279923,
    //     clove: 6486298,
    //     gacha24: 5037501,
    //     iris: 9202126
    // },
    // {
    //     date: new Date('2023/12/23 13:00'),
    //     "ex-toreca": 6931414,
    //     dopa: 9870905,
    //     "japan-toreca": 7839861,
    //     clove: 8581057,
    //     gacha24: 1830956,
    //     iris: 1647145
    // },
    // {
    //     date: new Date('2023/12/23 14:00'),
    //     "ex-toreca": 2158778,
    //     dopa: 4095276,
    //     "japan-toreca": 1055230,
    //     clove: 8247116,
    //     gacha24: 8090587,
    //     iris: 3644834
    // },
    // {
    //     date: new Date('2023/12/23 15:00'),
    //     "ex-toreca": 9477953,
    //     dopa: 9634343,
    //     "japan-toreca": 8148603,
    //     clove: 893163,
    //     gacha24: 8875642,
    //     iris: 7468931
    // },
    // {
    //     date: new Date('2023/12/23 16:00'),
    //     "ex-toreca": 1182839,
    //     dopa: 5885429,
    //     "japan-toreca": 8349230,
    //     clove: 3424389,
    //     gacha24: 5871836,
    //     iris: 9681824
    // },
    // {
    //     date: new Date('2023/12/23 17:00'),
    //     "ex-toreca": 4209486,
    //     dopa: 553847,
    //     "japan-toreca": 31405,
    //     clove: 7136763,
    //     gacha24: 8363864,
    //     iris: 8619748
    // },
    // {
    //     date: new Date('2023/12/23 18:00'),
    //     "ex-toreca": 8722689,
    //     dopa: 7777549,
    //     "japan-toreca": 2010610,
    //     clove: 1670108,
    //     gacha24: 8750173,
    //     iris: 4354043
    // },
    // {
    //     date: new Date('2023/12/23 19:00'),
    //     "ex-toreca": 1595640,
    //     dopa: 8169158,
    //     "japan-toreca": 4097157,
    //     clove: 8491650,
    //     gacha24: 2266228,
    //     iris: 9807160
    // },
    // {
    //     date: new Date('2023/12/23 20:00'),
    //     "ex-toreca": 3963165,
    //     dopa: 4793089,
    //     "japan-toreca": 2207322,
    //     clove: 3143589,
    //     gacha24: 6104447,
    //     iris: 2802648
    // },
    // {
    //     date: new Date('2023/12/23 21:00'),
    //     "ex-toreca": 6698818,
    //     dopa: 6970631,
    //     "japan-toreca": 380166,
    //     clove: 6613248,
    //     gacha24: 43178,
    //     iris: 2975477
    // },
    // {
    //     date: new Date('2023/12/23 22:00'),
    //     "ex-toreca": 4856968,
    //     dopa: 7852439,
    //     "japan-toreca": 2084927,
    //     clove: 5569883,
    //     gacha24: 9177567,
    //     iris: 3412194
    // },
    // {
    //     date: new Date('2023/12/23 23:00'),
    //     "ex-toreca": 2416683,
    //     dopa: 1066004,
    //     "japan-toreca": 7273414,
    //     clove: 8964210,
    //     gacha24: 5992316,
    //     iris: 467726
    // },
    // {
    //     date: new Date('2023/12/24 0:00'),
    //     "ex-toreca": 6240494,
    //     dopa: 790588,
    //     "japan-toreca": 2402137,
    //     clove: 9809337,
    //     gacha24: 4938354,
    //     iris: 3232333
    // },
    // {
    //     date: new Date('2023/12/24 1:00'),
    //     "ex-toreca": 2071260,
    //     dopa: 20224,
    //     "japan-toreca": 2499404,
    //     clove: 7586378,
    //     gacha24: 3520466,
    //     iris: 4143848
    // },
    // {
    //     date: new Date('2023/12/24 2:00'),
    //     "ex-toreca": 37527,
    //     dopa: 9142769,
    //     "japan-toreca": 1971836,
    //     clove: 3002234,
    //     gacha24: 4246829,
    //     iris: 245702
    // },
    // {
    //     date: new Date('2023/12/24 3:00'),
    //     "ex-toreca": 6044179,
    //     dopa: 1535765,
    //     "japan-toreca": 2033964,
    //     clove: 4851159,
    //     gacha24: 2691830,
    //     iris: 5938268
    // },
    // {
    //     date: new Date('2023/12/24 4:00'),
    //     "ex-toreca": 7718798,
    //     dopa: 2346262,
    //     "japan-toreca": 8422909,
    //     clove: 1683586,
    //     gacha24: 4991459,
    //     iris: 5772931
    // },
    // {
    //     date: new Date('2023/12/24 5:00'),
    //     "ex-toreca": 8609880,
    //     dopa: 9249585,
    //     "japan-toreca": 5985946,
    //     clove: 8951441,
    //     gacha24: 8401196,
    //     iris: 554849
    // },
    // {
    //     date: new Date('2023/12/24 6:00'),
    //     "ex-toreca": 5776864,
    //     dopa: 7764050,
    //     "japan-toreca": 2139336,
    //     clove: 3168921,
    //     gacha24: 4728034,
    //     iris: 9162170
    // },
    // {
    //     date: new Date('2023/12/24 7:00'),
    //     "ex-toreca": 3494296,
    //     dopa: 2415412,
    //     "japan-toreca": 8120366,
    //     clove: 6870078,
    //     gacha24: 4259943,
    //     iris: 6487047
    // },
    // {
    //     date: new Date('2023/12/24 8:00'),
    //     "ex-toreca": 190669,
    //     dopa: 106794,
    //     "japan-toreca": 1842392,
    //     clove: 9195406,
    //     gacha24: 8052352,
    //     iris: 6030055
    // },
    // {
    //     date: new Date('2023/12/24 9:00'),
    //     "ex-toreca": 3264625,
    //     dopa: 9586721,
    //     "japan-toreca": 1191938,
    //     clove: 6699404,
    //     gacha24: 9113869,
    //     iris: 9490771
    // },
    // {
    //     date: new Date('2023/12/24 10:00'),
    //     "ex-toreca": 5978409,
    //     dopa: 3626264,
    //     "japan-toreca": 4920912,
    //     clove: 9503621,
    //     gacha24: 4628937,
    //     iris: 3841295
    // },
    // {
    //     date: new Date('2023/12/24 11:00'),
    //     "ex-toreca": 1366760,
    //     dopa: 491121,
    //     "japan-toreca": 9060333,
    //     clove: 4738845,
    //     gacha24: 4152138,
    //     iris: 807242
    // },
    // {
    //     date: new Date('2023/12/24 12:00'),
    //     "ex-toreca": 6365195,
    //     dopa: 3181408,
    //     "japan-toreca": 1997505,
    //     clove: 9950540,
    //     gacha24: 6668743,
    //     iris: 5491810
    // },
    // {
    //     date: new Date('2023/12/24 13:00'),
    //     "ex-toreca": 2824984,
    //     dopa: 2616956,
    //     "japan-toreca": 1779369,
    //     clove: 9055066,
    //     gacha24: 1210586,
    //     iris: 5095900
    // },
    // {
    //     date: new Date('2023/12/24 14:00'),
    //     "ex-toreca": 8188637,
    //     dopa: 5209488,
    //     "japan-toreca": 8545829,
    //     clove: 7891123,
    //     gacha24: 3679793,
    //     iris: 903575
    // },
    // {
    //     date: new Date('2023/12/24 15:00'),
    //     "ex-toreca": 9546827,
    //     dopa: 34984,
    //     "japan-toreca": 1828984,
    //     clove: 3281982,
    //     gacha24: 1555219,
    //     iris: 1252019
    // },
    // {
    //     date: new Date('2023/12/24 16:00'),
    //     "ex-toreca": 8709406,
    //     dopa: 9585219,
    //     "japan-toreca": 1773362,
    //     clove: 9347571,
    //     gacha24: 8697644,
    //     iris: 9597499
    // },
    // {
    //     date: new Date('2023/12/24 17:00'),
    //     "ex-toreca": 3196386,
    //     dopa: 5189867,
    //     "japan-toreca": 4895830,
    //     clove: 8595774,
    //     gacha24: 4294260,
    //     iris: 7611063
    // },
    // {
    //     date: new Date('2023/12/24 18:00'),
    //     "ex-toreca": 8000183,
    //     dopa: 2514493,
    //     "japan-toreca": 1745615,
    //     clove: 5184703,
    //     gacha24: 7622730,
    //     iris: 1692837
    // },
    // {
    //     date: new Date('2023/12/24 19:00'),
    //     "ex-toreca": 9709260,
    //     dopa: 9859479,
    //     "japan-toreca": 3587326,
    //     clove: 4441574,
    //     gacha24: 6039616,
    //     iris: 7371071
    // },
    // {
    //     date: new Date('2023/12/24 20:00'),
    //     "ex-toreca": 9267374,
    //     dopa: 7313441,
    //     "japan-toreca": 6378752,
    //     clove: 8232289,
    //     gacha24: 9337713,
    //     iris: 1475170
    // },
    // {
    //     date: new Date('2023/12/24 21:00'),
    //     "ex-toreca": 5914803,
    //     dopa: 3671757,
    //     "japan-toreca": 4615300,
    //     clove: 9549769,
    //     gacha24: 1196295,
    //     iris: 6611689
    // },
    // {
    //     date: new Date('2023/12/24 22:00'),
    //     "ex-toreca": 6360962,
    //     dopa: 9665295,
    //     "japan-toreca": 3457258,
    //     clove: 5713264,
    //     gacha24: 5038381,
    //     iris: 960228
    // },
    // {
    //     date: new Date('2023/12/24 23:00'),
    //     "ex-toreca": 8295052,
    //     dopa: 7528214,
    //     "japan-toreca": 2626892,
    //     clove: 9608629,
    //     gacha24: 8501749,
    //     iris: 7503430
    // },
    // {
    //     date: new Date('2023/12/25 0:00'),
    //     "ex-toreca": 9569190,
    //     dopa: 2951000,
    //     "japan-toreca": 5517227,
    //     clove: 7782420,
    //     gacha24: 3318948,
    //     iris: 906581
    // },
    // {
    //     date: new Date('2023/12/25 1:00'),
    //     "ex-toreca": 559516,
    //     dopa: 6550482,
    //     "japan-toreca": 9061814,
    //     clove: 3877403,
    //     gacha24: 5079768,
    //     iris: 262038
    // },
    // {
    //     date: new Date('2023/12/25 2:00'),
    //     "ex-toreca": 1070144,
    //     dopa: 7921814,
    //     "japan-toreca": 6071192,
    //     clove: 3191742,
    //     gacha24: 4613305,
    //     iris: 3254426
    // },
    // {
    //     date: new Date('2023/12/25 3:00'),
    //     "ex-toreca": 576884,
    //     dopa: 4421836,
    //     "japan-toreca": 3169414,
    //     clove: 7600836,
    //     gacha24: 7185702,
    //     iris: 7095076
    // },
    // {
    //     date: new Date('2023/12/25 4:00'),
    //     "ex-toreca": 859973,
    //     dopa: 407252,
    //     "japan-toreca": 1087217,
    //     clove: 4769206,
    //     gacha24: 5072297,
    //     iris: 4648126
    // },
    // {
    //     date: new Date('2023/12/25 5:00'),
    //     "ex-toreca": 6415057,
    //     dopa: 9365838,
    //     "japan-toreca": 9969249,
    //     clove: 3334660,
    //     gacha24: 2870544,
    //     iris: 328446
    // },
    // {
    //     date: new Date('2023/12/25 6:00'),
    //     "ex-toreca": 89634,
    //     dopa: 391803,
    //     "japan-toreca": 2008560,
    //     clove: 4710983,
    //     gacha24: 640524,
    //     iris: 7744447
    // },
    // {
    //     date: new Date('2023/12/25 7:00'),
    //     "ex-toreca": 1999277,
    //     dopa: 7834256,
    //     "japan-toreca": 591291,
    //     clove: 1852468,
    //     gacha24: 6268010,
    //     iris: 3926643
    // },
    // {
    //     date: new Date('2023/12/25 8:00'),
    //     "ex-toreca": 894145,
    //     dopa: 7053233,
    //     "japan-toreca": 9051691,
    //     clove: 5838192,
    //     gacha24: 3775124,
    //     iris: 6119931
    // },
    // {
    //     date: new Date('2023/12/25 9:00'),
    //     "ex-toreca": 9677847,
    //     dopa: 448015,
    //     "japan-toreca": 8652921,
    //     clove: 1705759,
    //     gacha24: 623032,
    //     iris: 8290881
    // },
    // {
    //     date: new Date('2023/12/25 10:00'),
    //     "ex-toreca": 9901061,
    //     dopa: 6381219,
    //     "japan-toreca": 5513712,
    //     clove: 624344,
    //     gacha24: 806456,
    //     iris: 1816300
    // },
    // {
    //     date: new Date('2023/12/25 11:00'),
    //     "ex-toreca": 5564798,
    //     dopa: 237319,
    //     "japan-toreca": 2505652,
    //     clove: 1768665,
    //     gacha24: 3738144,
    //     iris: 843633
    // },
    // {
    //     date: new Date('2023/12/25 12:00'),
    //     "ex-toreca": 8515264,
    //     dopa: 3535700,
    //     "japan-toreca": 3404143,
    //     clove: 1004881,
    //     gacha24: 9760666,
    //     iris: 6090542
    // },
    // {
    //     date: new Date('2023/12/25 13:00'),
    //     "ex-toreca": 1310090,
    //     dopa: 7895580,
    //     "japan-toreca": 8783359,
    //     clove: 1906050,
    //     gacha24: 6660363,
    //     iris: 4786598
    // },
    // {
    //     date: new Date('2023/12/25 14:00'),
    //     "ex-toreca": 8668707,
    //     dopa: 8863802,
    //     "japan-toreca": 4255735,
    //     clove: 6350461,
    //     gacha24: 5142029,
    //     iris: 8615254
    // },
    // {
    //     date: new Date('2023/12/25 15:00'),
    //     "ex-toreca": 4350836,
    //     dopa: 1378633,
    //     "japan-toreca": 8694614,
    //     clove: 9564468,
    //     gacha24: 428982,
    //     iris: 6489855
    // },
    // {
    //     date: new Date('2023/12/25 16:00'),
    //     "ex-toreca": 2084342,
    //     dopa: 1122518,
    //     "japan-toreca": 2329215,
    //     clove: 2210868,
    //     gacha24: 7880980,
    //     iris: 3760571
    // },
    // {
    //     date: new Date('2023/12/25 17:00'),
    //     "ex-toreca": 7814864,
    //     dopa: 514725,
    //     "japan-toreca": 8561695,
    //     clove: 2396785,
    //     gacha24: 3023583,
    //     iris: 1164974
    // },
    // {
    //     date: new Date('2023/12/25 18:00'),
    //     "ex-toreca": 8853702,
    //     dopa: 7884546,
    //     "japan-toreca": 8659143,
    //     clove: 250643,
    //     gacha24: 9331352,
    //     iris: 4220394
    // },
    // {
    //     date: new Date('2023/12/25 19:00'),
    //     "ex-toreca": 1960659,
    //     dopa: 845473,
    //     "japan-toreca": 5150476,
    //     clove: 7760097,
    //     gacha24: 7632648,
    //     iris: 737565
    // },
    // {
    //     date: new Date('2023/12/25 20:00'),
    //     "ex-toreca": 6854135,
    //     dopa: 5729031,
    //     "japan-toreca": 1545989,
    //     clove: 8980379,
    //     gacha24: 1287848,
    //     iris: 7029471
    // },
    // {
    //     date: new Date('2023/12/25 21:00'),
    //     "ex-toreca": 6907016,
    //     dopa: 4040866,
    //     "japan-toreca": 7268361,
    //     clove: 9134025,
    //     gacha24: 7662008,
    //     iris: 4834537
    // },
    // {
    //     date: new Date('2023/12/25 22:00'),
    //     "ex-toreca": 7426838,
    //     dopa: 783474,
    //     "japan-toreca": 7755713,
    //     clove: 8080354,
    //     gacha24: 416845,
    //     iris: 6784246
    // },
    // {
    //     date: new Date('2023/12/25 23:00'),
    //     "ex-toreca": 4400428,
    //     dopa: 7588413,
    //     "japan-toreca": 4707400,
    //     clove: 7749998,
    //     gacha24: 858977,
    //     iris: 4873325
    // },
    // {
    //     date: new Date('2023/12/26 0:00'),
    //     "ex-toreca": 6019550,
    //     dopa: 4223380,
    //     "japan-toreca": 946996,
    //     clove: 5590965,
    //     gacha24: 2259318,
    //     iris: 6500928
    // },
    // {
    //     date: new Date('2023/12/26 1:00'),
    //     "ex-toreca": 6084905,
    //     dopa: 9199461,
    //     "japan-toreca": 1594142,
    //     clove: 8222330,
    //     gacha24: 8865882,
    //     iris: 7087682
    // },
    // {
    //     date: new Date('2023/12/26 2:00'),
    //     "ex-toreca": 8353925,
    //     dopa: 3969299,
    //     "japan-toreca": 9092874,
    //     clove: 3047917,
    //     gacha24: 4409178,
    //     iris: 2985250
    // },
    // {
    //     date: new Date('2023/12/26 3:00'),
    //     "ex-toreca": 3006258,
    //     dopa: 8642676,
    //     "japan-toreca": 352671,
    //     clove: 8260644,
    //     gacha24: 3917078,
    //     iris: 7788887
    // },
    // {
    //     date: new Date('2023/12/26 4:00'),
    //     "ex-toreca": 9621405,
    //     dopa: 8656992,
    //     "japan-toreca": 512233,
    //     clove: 8402072,
    //     gacha24: 9836348,
    //     iris: 6857038
    // },
    // {
    //     date: new Date('2023/12/26 5:00'),
    //     "ex-toreca": 2156983,
    //     dopa: 9644908,
    //     "japan-toreca": 140479,
    //     clove: 2527203,
    //     gacha24: 2763520,
    //     iris: 6658242
    // },
    // {
    //     date: new Date('2023/12/26 6:00'),
    //     "ex-toreca": 387451,
    //     dopa: 3358465,
    //     "japan-toreca": 7678034,
    //     clove: 8520594,
    //     gacha24: 4399723,
    //     iris: 2464675
    // },
    // {
    //     date: new Date('2023/12/26 7:00'),
    //     "ex-toreca": 346026,
    //     dopa: 6442595,
    //     "japan-toreca": 9865991,
    //     clove: 2886626,
    //     gacha24: 3772853,
    //     iris: 2681934
    // },
    // {
    //     date: new Date('2023/12/26 8:00'),
    //     "ex-toreca": 6705349,
    //     dopa: 3667618,
    //     "japan-toreca": 6399582,
    //     clove: 8283415,
    //     gacha24: 593362,
    //     iris: 5826402
    // },
    // {
    //     date: new Date('2023/12/26 9:00'),
    //     "ex-toreca": 3508485,
    //     dopa: 2086325,
    //     "japan-toreca": 8711609,
    //     clove: 7741048,
    //     gacha24: 5768242,
    //     iris: 503584
    // },
    // {
    //     date: new Date('2023/12/26 10:00'),
    //     "ex-toreca": 454179,
    //     dopa: 7906176,
    //     "japan-toreca": 8316499,
    //     clove: 6431194,
    //     gacha24: 6082097,
    //     iris: 9986153
    // },
    // {
    //     date: new Date('2023/12/26 11:00'),
    //     "ex-toreca": 4393134,
    //     dopa: 1392529,
    //     "japan-toreca": 124319,
    //     clove: 2405323,
    //     gacha24: 9003514,
    //     iris: 2270995
    // },
    // {
    //     date: new Date('2023/12/26 12:00'),
    //     "ex-toreca": 4428182,
    //     dopa: 283785,
    //     "japan-toreca": 6365948,
    //     clove: 6972105,
    //     gacha24: 6289866,
    //     iris: 6252242
    // },
    // {
    //     date: new Date('2023/12/26 13:00'),
    //     "ex-toreca": 9745106,
    //     dopa: 2790280,
    //     "japan-toreca": 2739682,
    //     clove: 5608614,
    //     gacha24: 2479667,
    //     iris: 8698059
    // },
    // {
    //     date: new Date('2023/12/26 14:00'),
    //     "ex-toreca": 9841494,
    //     dopa: 9826168,
    //     "japan-toreca": 9917300,
    //     clove: 7050055,
    //     gacha24: 2671375,
    //     iris: 3255364
    // },
    // {
    //     date: new Date('2023/12/26 15:00'),
    //     "ex-toreca": 1702552,
    //     dopa: 6893098,
    //     "japan-toreca": 3359149,
    //     clove: 3292436,
    //     gacha24: 4837546,
    //     iris: 652058
    // },
    // {
    //     date: new Date('2023/12/26 16:00'),
    //     "ex-toreca": 3205264,
    //     dopa: 4175536,
    //     "japan-toreca": 1917119,
    //     clove: 225439,
    //     gacha24: 173655,
    //     iris: 7157635
    // },
    // {
    //     date: new Date('2023/12/26 17:00'),
    //     "ex-toreca": 8790705,
    //     dopa: 445125,
    //     "japan-toreca": 7349466,
    //     clove: 6193433,
    //     gacha24: 30931,
    //     iris: 7561456
    // },
    // {
    //     date: new Date('2023/12/26 18:00'),
    //     "ex-toreca": 7549047,
    //     dopa: 4115733,
    //     "japan-toreca": 3250217,
    //     clove: 53206,
    //     gacha24: 8921412,
    //     iris: 9425190
    // },
    // {
    //     date: new Date('2023/12/26 19:00'),
    //     "ex-toreca": 1108269,
    //     dopa: 5669192,
    //     "japan-toreca": 2746914,
    //     clove: 4302908,
    //     gacha24: 2957789,
    //     iris: 9299656
    // },
    // {
    //     date: new Date('2023/12/26 20:00'),
    //     "ex-toreca": 5470427,
    //     dopa: 8728311,
    //     "japan-toreca": 1513094,
    //     clove: 5418245,
    //     gacha24: 6188042,
    //     iris: 2327037
    // },
    // {
    //     date: new Date('2023/12/26 21:00'),
    //     "ex-toreca": 7285228,
    //     dopa: 9601976,
    //     "japan-toreca": 1725947,
    //     clove: 3487894,
    //     gacha24: 7446319,
    //     iris: 8686447
    // },
    // {
    //     date: new Date('2023/12/26 22:00'),
    //     "ex-toreca": 7442064,
    //     dopa: 8875030,
    //     "japan-toreca": 8202237,
    //     clove: 9162180,
    //     gacha24: 7961921,
    //     iris: 3733706
    // },
    // {
    //     date: new Date('2023/12/26 23:00'),
    //     "ex-toreca": 2882312,
    //     dopa: 4856892,
    //     "japan-toreca": 2091105,
    //     clove: 2669908,
    //     gacha24: 9058994,
    //     iris: 2149651
    // },
    // {
    //     date: new Date('2023/12/27 0:00'),
    //     "ex-toreca": 275862,
    //     dopa: 8459585,
    //     "japan-toreca": 9104565,
    //     clove: 1814688,
    //     gacha24: 3596872,
    //     iris: 1463079
    // },
    // {
    //     date: new Date('2023/12/27 1:00'),
    //     "ex-toreca": 8871795,
    //     dopa: 5888071,
    //     "japan-toreca": 2526246,
    //     clove: 3049620,
    //     gacha24: 30613,
    //     iris: 7369866
    // },
    // {
    //     date: new Date('2023/12/27 2:00'),
    //     "ex-toreca": 233737,
    //     dopa: 4916304,
    //     "japan-toreca": 8997405,
    //     clove: 7759787,
    //     gacha24: 9041542,
    //     iris: 4625692
    // },
    // {
    //     date: new Date('2023/12/27 3:00'),
    //     "ex-toreca": 1846840,
    //     dopa: 5061987,
    //     "japan-toreca": 8233401,
    //     clove: 5682213,
    //     gacha24: 6405728,
    //     iris: 4755110
    // },
    // {
    //     date: new Date('2023/12/27 4:00'),
    //     "ex-toreca": 2422956,
    //     dopa: 3158692,
    //     "japan-toreca": 4557004,
    //     clove: 2577985,
    //     gacha24: 4823093,
    //     iris: 1043235
    // },
    // {
    //     date: new Date('2023/12/27 5:00'),
    //     "ex-toreca": 2585281,
    //     dopa: 2458596,
    //     "japan-toreca": 2892487,
    //     clove: 7486892,
    //     gacha24: 4439628,
    //     iris: 6520671
    // },
    // {
    //     date: new Date('2023/12/27 6:00'),
    //     "ex-toreca": 906622,
    //     dopa: 941912,
    //     "japan-toreca": 1273858,
    //     clove: 1563662,
    //     gacha24: 2943024,
    //     iris: 6648586
    // },
    // {
    //     date: new Date('2023/12/27 7:00'),
    //     "ex-toreca": 9729548,
    //     dopa: 4656793,
    //     "japan-toreca": 7870711,
    //     clove: 6627987,
    //     gacha24: 5788214,
    //     iris: 1214395
    // },
    // {
    //     date: new Date('2023/12/27 8:00'),
    //     "ex-toreca": 6845088,
    //     dopa: 8384307,
    //     "japan-toreca": 6882038,
    //     clove: 9035461,
    //     gacha24: 9420376,
    //     iris: 7630182
    // },
    // {
    //     date: new Date('2023/12/27 9:00'),
    //     "ex-toreca": 6330150,
    //     dopa: 3380304,
    //     "japan-toreca": 3210099,
    //     clove: 5589617,
    //     gacha24: 586802,
    //     iris: 1156085
    // },
    // {
    //     date: new Date('2023/12/27 10:00'),
    //     "ex-toreca": 5445185,
    //     dopa: 4705372,
    //     "japan-toreca": 6908491,
    //     clove: 5722559,
    //     gacha24: 7059136,
    //     iris: 3400062
    // },
    // {
    //     date: new Date('2023/12/27 11:00'),
    //     "ex-toreca": 3030547,
    //     dopa: 3612896,
    //     "japan-toreca": 8784479,
    //     clove: 988078,
    //     gacha24: 4044185,
    //     iris: 7540905
    // },
    // {
    //     date: new Date('2023/12/27 12:00'),
    //     "ex-toreca": 8095139,
    //     dopa: 3683406,
    //     "japan-toreca": 3924523,
    //     clove: 9774648,
    //     gacha24: 9765045,
    //     iris: 7324402
    // },
    // {
    //     date: new Date('2023/12/27 13:00'),
    //     "ex-toreca": 3417378,
    //     dopa: 6862024,
    //     "japan-toreca": 7814214,
    //     clove: 913940,
    //     gacha24: 4385458,
    //     iris: 6556797
    // },
    // {
    //     date: new Date('2023/12/27 14:00'),
    //     "ex-toreca": 9846127,
    //     dopa: 191909,
    //     "japan-toreca": 7030124,
    //     clove: 2634970,
    //     gacha24: 5397840,
    //     iris: 3937607
    // },
    // {
    //     date: new Date('2023/12/27 15:00'),
    //     "ex-toreca": 3933807,
    //     dopa: 5682599,
    //     "japan-toreca": 2008589,
    //     clove: 7608871,
    //     gacha24: 7964060,
    //     iris: 106645
    // },
    // {
    //     date: new Date('2023/12/27 16:00'),
    //     "ex-toreca": 1664094,
    //     dopa: 4664525,
    //     "japan-toreca": 5790370,
    //     clove: 2672177,
    //     gacha24: 8095917,
    //     iris: 2152037
    // },
    // {
    //     date: new Date('2023/12/27 17:00'),
    //     "ex-toreca": 9081486,
    //     dopa: 4829023,
    //     "japan-toreca": 5970440,
    //     clove: 2151557,
    //     gacha24: 7332798,
    //     iris: 7091313
    // },
    // {
    //     date: new Date('2023/12/27 18:00'),
    //     "ex-toreca": 7390834,
    //     dopa: 9335851,
    //     "japan-toreca": 8098478,
    //     clove: 3850902,
    //     gacha24: 5970437,
    //     iris: 4562447
    // },
    // {
    //     date: new Date('2023/12/27 19:00'),
    //     "ex-toreca": 8042610,
    //     dopa: 6478193,
    //     "japan-toreca": 423540,
    //     clove: 8196222,
    //     gacha24: 9305873,
    //     iris: 2072059
    // },
    // {
    //     date: new Date('2023/12/27 20:00'),
    //     "ex-toreca": 3333900,
    //     dopa: 8254645,
    //     "japan-toreca": 649419,
    //     clove: 6287818,
    //     gacha24: 2004666,
    //     iris: 3929860
    // },
    // {
    //     date: new Date('2023/12/27 21:00'),
    //     "ex-toreca": 809611,
    //     dopa: 9490865,
    //     "japan-toreca": 3574335,
    //     clove: 2384716,
    //     gacha24: 1114154,
    //     iris: 742689
    // },
    // {
    //     date: new Date('2023/12/27 22:00'),
    //     "ex-toreca": 4494446,
    //     dopa: 5557738,
    //     "japan-toreca": 7846682,
    //     clove: 9721523,
    //     gacha24: 5765318,
    //     iris: 8680526
    // },
    // {
    //     date: new Date('2023/12/27 23:00'),
    //     "ex-toreca": 1139968,
    //     dopa: 9284136,
    //     "japan-toreca": 8174888,
    //     clove: 1564995,
    //     gacha24: 2417007,
    //     iris: 5705615
    // },
    // {
    //     date: new Date('2023/12/28 0:00'),
    //     "ex-toreca": 359240,
    //     dopa: 9164791,
    //     "japan-toreca": 3506345,
    //     clove: 979073,
    //     gacha24: 1471007,
    //     iris: 2643839
    // },
    // {
    //     date: new Date('2023/12/28 1:00'),
    //     "ex-toreca": 408576,
    //     dopa: 6307619,
    //     "japan-toreca": 8829975,
    //     clove: 2402864,
    //     gacha24: 3836744,
    //     iris: 7923145
    // },
    // {
    //     date: new Date('2023/12/28 2:00'),
    //     "ex-toreca": 1896809,
    //     dopa: 346821,
    //     "japan-toreca": 1991210,
    //     clove: 2487555,
    //     gacha24: 8788756,
    //     iris: 6528598
    // },
    // {
    //     date: new Date('2023/12/28 3:00'),
    //     "ex-toreca": 3392792,
    //     dopa: 6718740,
    //     "japan-toreca": 1687420,
    //     clove: 4876195,
    //     gacha24: 5781152,
    //     iris: 2223739
    // },
    // {
    //     date: new Date('2023/12/28 4:00'),
    //     "ex-toreca": 5067118,
    //     dopa: 6386444,
    //     "japan-toreca": 540395,
    //     clove: 7224076,
    //     gacha24: 695357,
    //     iris: 8778510
    // },
    // {
    //     date: new Date('2023/12/28 5:00'),
    //     "ex-toreca": 1111397,
    //     dopa: 8142722,
    //     "japan-toreca": 6322732,
    //     clove: 4255012,
    //     gacha24: 4939759,
    //     iris: 3342269
    // },
    // {
    //     date: new Date('2023/12/28 6:00'),
    //     "ex-toreca": 1086775,
    //     dopa: 1549550,
    //     "japan-toreca": 3625255,
    //     clove: 2314508,
    //     gacha24: 384084,
    //     iris: 7097726
    // },
    // {
    //     date: new Date('2023/12/28 7:00'),
    //     "ex-toreca": 2867054,
    //     dopa: 7951749,
    //     "japan-toreca": 7671010,
    //     clove: 8063568,
    //     gacha24: 8407634,
    //     iris: 544442
    // },
    // {
    //     date: new Date('2023/12/28 8:00'),
    //     "ex-toreca": 5318792,
    //     dopa: 4674334,
    //     "japan-toreca": 9109126,
    //     clove: 9517041,
    //     gacha24: 1374599,
    //     iris: 1336943
    // },
    // {
    //     date: new Date('2023/12/28 9:00'),
    //     "ex-toreca": 8588307,
    //     dopa: 6057279,
    //     "japan-toreca": 5922908,
    //     clove: 9208124,
    //     gacha24: 3942767,
    //     iris: 431925
    // },
    // {
    //     date: new Date('2023/12/28 10:00'),
    //     "ex-toreca": 6234494,
    //     dopa: 4442357,
    //     "japan-toreca": 1483971,
    //     clove: 9244208,
    //     gacha24: 5445960,
    //     iris: 3877650
    // },
    // {
    //     date: new Date('2023/12/28 11:00'),
    //     "ex-toreca": 1353652,
    //     dopa: 4798880,
    //     "japan-toreca": 9186407,
    //     clove: 4060510,
    //     gacha24: 5878866,
    //     iris: 734455
    // },
    // {
    //     date: new Date('2023/12/28 12:00'),
    //     "ex-toreca": 1097395,
    //     dopa: 4908006,
    //     "japan-toreca": 160717,
    //     clove: 5000167,
    //     gacha24: 8356784,
    //     iris: 1264350
    // },
    // {
    //     date: new Date('2023/12/28 13:00'),
    //     "ex-toreca": 7793896,
    //     dopa: 7238914,
    //     "japan-toreca": 9965845,
    //     clove: 7887970,
    //     gacha24: 4708229,
    //     iris: 8043837
    // },
    // {
    //     date: new Date('2023/12/28 14:00'),
    //     "ex-toreca": 431556,
    //     dopa: 9903263,
    //     "japan-toreca": 5918294,
    //     clove: 6702945,
    //     gacha24: 3123635,
    //     iris: 2802369
    // },
    // {
    //     date: new Date('2023/12/28 15:00'),
    //     "ex-toreca": 3419705,
    //     dopa: 7440750,
    //     "japan-toreca": 2734868,
    //     clove: 4532831,
    //     gacha24: 6875187,
    //     iris: 6480827
    // },
    // {
    //     date: new Date('2023/12/28 16:00'),
    //     "ex-toreca": 7386584,
    //     dopa: 9227134,
    //     "japan-toreca": 72286,
    //     clove: 7471290,
    //     gacha24: 7037174,
    //     iris: 2986852
    // },
    // {
    //     date: new Date('2023/12/28 17:00'),
    //     "ex-toreca": 3975798,
    //     dopa: 6311704,
    //     "japan-toreca": 9482389,
    //     clove: 4048649,
    //     gacha24: 7232529,
    //     iris: 2605664
    // },
    // {
    //     date: new Date('2023/12/28 18:00'),
    //     "ex-toreca": 5518642,
    //     dopa: 1757547,
    //     "japan-toreca": 5440464,
    //     clove: 7938604,
    //     gacha24: 3895236,
    //     iris: 4658683
    // },
    // {
    //     date: new Date('2023/12/28 19:00'),
    //     "ex-toreca": 3705844,
    //     dopa: 3404388,
    //     "japan-toreca": 9027747,
    //     clove: 8982637,
    //     gacha24: 4909836,
    //     iris: 3438013
    // },
    // {
    //     date: new Date('2023/12/28 20:00'),
    //     "ex-toreca": 8371883,
    //     dopa: 2121986,
    //     "japan-toreca": 4311189,
    //     clove: 9749752,
    //     gacha24: 3840223,
    //     iris: 4263454
    // },
    // {
    //     date: new Date('2023/12/28 21:00'),
    //     "ex-toreca": 2264329,
    //     dopa: 7792907,
    //     "japan-toreca": 9108443,
    //     clove: 592459,
    //     gacha24: 2367697,
    //     iris: 8204434
    // },
    // {
    //     date: new Date('2023/12/28 22:00'),
    //     "ex-toreca": 9279077,
    //     dopa: 981550,
    //     "japan-toreca": 3464565,
    //     clove: 5742160,
    //     gacha24: 8869643,
    //     iris: 2640085
    // },
    // {
    //     date: new Date('2023/12/28 23:00'),
    //     "ex-toreca": 5784722,
    //     dopa: 9254606,
    //     "japan-toreca": 6494817,
    //     clove: 600120,
    //     gacha24: 361481,
    //     iris: 4563940
    // },
    // {
    //     date: new Date('2023/12/29 0:00'),
    //     "ex-toreca": 511221,
    //     dopa: 3896811,
    //     "japan-toreca": 3894437,
    //     clove: 2793931,
    //     gacha24: 5983772,
    //     iris: 2782491
    // },
    // {
    //     date: new Date('2023/12/29 1:00'),
    //     "ex-toreca": 1294927,
    //     dopa: 9872987,
    //     "japan-toreca": 531359,
    //     clove: 9905214,
    //     gacha24: 8751518,
    //     iris: 4261355
    // },
    // {
    //     date: new Date('2023/12/29 2:00'),
    //     "ex-toreca": 2086735,
    //     dopa: 1270273,
    //     "japan-toreca": 3222211,
    //     clove: 909095,
    //     gacha24: 5762201,
    //     iris: 8285377
    // },
    // {
    //     date: new Date('2023/12/29 3:00'),
    //     "ex-toreca": 4783875,
    //     dopa: 3250949,
    //     "japan-toreca": 8135675,
    //     clove: 4550576,
    //     gacha24: 2726752,
    //     iris: 7439920
    // },
    // {
    //     date: new Date('2023/12/29 4:00'),
    //     "ex-toreca": 7288634,
    //     dopa: 1718978,
    //     "japan-toreca": 8923010,
    //     clove: 9422621,
    //     gacha24: 6633601,
    //     iris: 1358758
    // },
    // {
    //     date: new Date('2023/12/29 5:00'),
    //     "ex-toreca": 1849194,
    //     dopa: 2165296,
    //     "japan-toreca": 9721124,
    //     clove: 6665031,
    //     gacha24: 8787857,
    //     iris: 6074075
    // },
    // {
    //     date: new Date('2023/12/29 6:00'),
    //     "ex-toreca": 643504,
    //     dopa: 5765011,
    //     "japan-toreca": 3434064,
    //     clove: 6221545,
    //     gacha24: 722783,
    //     iris: 4196115
    // },
    // {
    //     date: new Date('2023/12/29 7:00'),
    //     "ex-toreca": 4258753,
    //     dopa: 3521765,
    //     "japan-toreca": 1120058,
    //     clove: 5500277,
    //     gacha24: 3678165,
    //     iris: 7297747
    // },
    // {
    //     date: new Date('2023/12/29 8:00'),
    //     "ex-toreca": 986589,
    //     dopa: 3109508,
    //     "japan-toreca": 7973193,
    //     clove: 7997621,
    //     gacha24: 7967330,
    //     iris: 1893110
    // },
    // {
    //     date: new Date('2023/12/29 9:00'),
    //     "ex-toreca": 1433893,
    //     dopa: 4418181,
    //     "japan-toreca": 7916398,
    //     clove: 6375390,
    //     gacha24: 1328099,
    //     iris: 4201885
    // },
    // {
    //     date: new Date('2023/12/29 10:00'),
    //     "ex-toreca": 4078284,
    //     dopa: 715624,
    //     "japan-toreca": 5215259,
    //     clove: 7466237,
    //     gacha24: 684105,
    //     iris: 5627111
    // },
    // {
    //     date: new Date('2023/12/29 11:00'),
    //     "ex-toreca": 7235333,
    //     dopa: 1098367,
    //     "japan-toreca": 4127222,
    //     clove: 9580928,
    //     gacha24: 4341086,
    //     iris: 4406293
    // },
    // {
    //     date: new Date('2023/12/29 12:00'),
    //     "ex-toreca": 4198995,
    //     dopa: 2237758,
    //     "japan-toreca": 2578270,
    //     clove: 6685112,
    //     gacha24: 4635477,
    //     iris: 6044035
    // },
    // {
    //     date: new Date('2023/12/29 13:00'),
    //     "ex-toreca": 4892759,
    //     dopa: 70670,
    //     "japan-toreca": 9164606,
    //     clove: 609740,
    //     gacha24: 6553675,
    //     iris: 7440921
    // },
    // {
    //     date: new Date('2023/12/29 14:00'),
    //     "ex-toreca": 530399,
    //     dopa: 1575159,
    //     "japan-toreca": 6975198,
    //     clove: 2646779,
    //     gacha24: 9302157,
    //     iris: 4469105
    // },
    // {
    //     date: new Date('2023/12/29 15:00'),
    //     "ex-toreca": 9294975,
    //     dopa: 5781632,
    //     "japan-toreca": 636193,
    //     clove: 3054664,
    //     gacha24: 2789462,
    //     iris: 9362920
    // },
    // {
    //     date: new Date('2023/12/29 16:00'),
    //     "ex-toreca": 3534095,
    //     dopa: 3983421,
    //     "japan-toreca": 8314763,
    //     clove: 8532978,
    //     gacha24: 1377360,
    //     iris: 6308731
    // },
    // {
    //     date: new Date('2023/12/29 17:00'),
    //     "ex-toreca": 9907391,
    //     dopa: 8438830,
    //     "japan-toreca": 4072423,
    //     clove: 1533936,
    //     gacha24: 377592,
    //     iris: 2963854
    // },
    // {
    //     date: new Date('2023/12/29 18:00'),
    //     "ex-toreca": 3964402,
    //     dopa: 8466532,
    //     "japan-toreca": 9614065,
    //     clove: 9599896,
    //     gacha24: 9728674,
    //     iris: 8856927
    // },
    // {
    //     date: new Date('2023/12/29 19:00'),
    //     "ex-toreca": 3934674,
    //     dopa: 7788441,
    //     "japan-toreca": 7475203,
    //     clove: 548925,
    //     gacha24: 2481638,
    //     iris: 5036034
    // },
    // {
    //     date: new Date('2023/12/29 20:00'),
    //     "ex-toreca": 9346757,
    //     dopa: 2938621,
    //     "japan-toreca": 304045,
    //     clove: 9799215,
    //     gacha24: 8707961,
    //     iris: 8335454
    // },
    // {
    //     date: new Date('2023/12/29 21:00'),
    //     "ex-toreca": 2535680,
    //     dopa: 3266382,
    //     "japan-toreca": 9927723,
    //     clove: 8080392,
    //     gacha24: 9224070,
    //     iris: 5070711
    // },
    // {
    //     date: new Date('2023/12/29 22:00'),
    //     "ex-toreca": 7062138,
    //     dopa: 2589568,
    //     "japan-toreca": 4267710,
    //     clove: 9174157,
    //     gacha24: 3658361,
    //     iris: 1485950
    // },
    // {
    //     date: new Date('2023/12/29 23:00'),
    //     "ex-toreca": 7811555,
    //     dopa: 2047236,
    //     "japan-toreca": 4670808,
    //     clove: 7707570,
    //     gacha24: 7460629,
    //     iris: 488651
    // },
    // {
    //     date: new Date('2023/12/30 0:00'),
    //     "ex-toreca": 4363361,
    //     dopa: 6011204,
    //     "japan-toreca": 360255,
    //     clove: 2877340,
    //     gacha24: 7969486,
    //     iris: 2473105
    // },
    // {
    //     date: new Date('2023/12/30 1:00'),
    //     "ex-toreca": 8730024,
    //     dopa: 3679481,
    //     "japan-toreca": 2110129,
    //     clove: 4690281,
    //     gacha24: 9540309,
    //     iris: 8779919
    // },
    // {
    //     date: new Date('2023/12/30 2:00'),
    //     "ex-toreca": 4883745,
    //     dopa: 860854,
    //     "japan-toreca": 1486472,
    //     clove: 9997786,
    //     gacha24: 591790,
    //     iris: 9560477
    // },
    // {
    //     date: new Date('2023/12/30 3:00'),
    //     "ex-toreca": 3886470,
    //     dopa: 8346825,
    //     "japan-toreca": 1022972,
    //     clove: 8014017,
    //     gacha24: 7835872,
    //     iris: 7985572
    // },
    // {
    //     date: new Date('2023/12/30 4:00'),
    //     "ex-toreca": 9162853,
    //     dopa: 6268415,
    //     "japan-toreca": 4466013,
    //     clove: 2687456,
    //     gacha24: 8056098,
    //     iris: 90841
    // },
    // {
    //     date: new Date('2023/12/30 5:00'),
    //     "ex-toreca": 869569,
    //     dopa: 4125360,
    //     "japan-toreca": 3363939,
    //     clove: 208803,
    //     gacha24: 230033,
    //     iris: 8199852
    // },
    // {
    //     date: new Date('2023/12/30 6:00'),
    //     "ex-toreca": 6192868,
    //     dopa: 2036099,
    //     "japan-toreca": 6208314,
    //     clove: 8286549,
    //     gacha24: 4912135,
    //     iris: 4839545
    // },
    // {
    //     date: new Date('2023/12/30 7:00'),
    //     "ex-toreca": 2711197,
    //     dopa: 4724218,
    //     "japan-toreca": 2040331,
    //     clove: 6611874,
    //     gacha24: 998938,
    //     iris: 2919938
    // },
    // {
    //     date: new Date('2023/12/30 8:00'),
    //     "ex-toreca": 7026800,
    //     dopa: 9938483,
    //     "japan-toreca": 7168910,
    //     clove: 1408884,
    //     gacha24: 7204367,
    //     iris: 6625114
    // },
    // {
    //     date: new Date('2023/12/30 9:00'),
    //     "ex-toreca": 1783907,
    //     dopa: 9361089,
    //     "japan-toreca": 4013588,
    //     clove: 4218921,
    //     gacha24: 8593493,
    //     iris: 2030277
    // },
    // {
    //     date: new Date('2023/12/30 10:00'),
    //     "ex-toreca": 1134856,
    //     dopa: 5118217,
    //     "japan-toreca": 7285751,
    //     clove: 2084127,
    //     gacha24: 1408549,
    //     iris: 6432062
    // },
    // {
    //     date: new Date('2023/12/30 11:00'),
    //     "ex-toreca": 9504776,
    //     dopa: 9743330,
    //     "japan-toreca": 954280,
    //     clove: 2376651,
    //     gacha24: 4930146,
    //     iris: 5141979
    // },
    // {
    //     date: new Date('2023/12/30 12:00'),
    //     "ex-toreca": 532715,
    //     dopa: 7911354,
    //     "japan-toreca": 3902205,
    //     clove: 2984754,
    //     gacha24: 7776414,
    //     iris: 6399140
    // },
    // {
    //     date: new Date('2023/12/30 13:00'),
    //     "ex-toreca": 4289703,
    //     dopa: 4580543,
    //     "japan-toreca": 2364308,
    //     clove: 5489137,
    //     gacha24: 4198997,
    //     iris: 9407889
    // },
    // {
    //     date: new Date('2023/12/30 14:00'),
    //     "ex-toreca": 6574296,
    //     dopa: 1494611,
    //     "japan-toreca": 6449842,
    //     clove: 1319387,
    //     gacha24: 7232888,
    //     iris: 7922102
    // },
    // {
    //     date: new Date('2023/12/30 15:00'),
    //     "ex-toreca": 4328544,
    //     dopa: 4326440,
    //     "japan-toreca": 5067250,
    //     clove: 498867,
    //     gacha24: 5357019,
    //     iris: 7041185
    // },
    // {
    //     date: new Date('2023/12/30 16:00'),
    //     "ex-toreca": 2756097,
    //     dopa: 9912820,
    //     "japan-toreca": 4743098,
    //     clove: 5598899,
    //     gacha24: 9726508,
    //     iris: 294055
    // },
    // {
    //     date: new Date('2023/12/30 17:00'),
    //     "ex-toreca": 9485313,
    //     dopa: 5416984,
    //     "japan-toreca": 8052451,
    //     clove: 8814331,
    //     gacha24: 465169,
    //     iris: 5310837
    // },
    // {
    //     date: new Date('2023/12/30 18:00'),
    //     "ex-toreca": 85587,
    //     dopa: 9739214,
    //     "japan-toreca": 9965344,
    //     clove: 7802324,
    //     gacha24: 1331324,
    //     iris: 6582183
    // },
    // {
    //     date: new Date('2023/12/30 19:00'),
    //     "ex-toreca": 3410581,
    //     dopa: 9791658,
    //     "japan-toreca": 1296511,
    //     clove: 3893398,
    //     gacha24: 8986908,
    //     iris: 6349712
    // },
    // {
    //     date: new Date('2023/12/30 20:00'),
    //     "ex-toreca": 9018641,
    //     dopa: 2743068,
    //     "japan-toreca": 5436057,
    //     clove: 4955601,
    //     gacha24: 8035064,
    //     iris: 2638904
    // },
    // {
    //     date: new Date('2023/12/30 21:00'),
    //     "ex-toreca": 856842,
    //     dopa: 5114223,
    //     "japan-toreca": 4735176,
    //     clove: 2099102,
    //     gacha24: 5298023,
    //     iris: 5562094
    // },
    // {
    //     date: new Date('2023/12/30 22:00'),
    //     "ex-toreca": 6735127,
    //     dopa: 75736,
    //     "japan-toreca": 6507966,
    //     clove: 657512,
    //     gacha24: 9446846,
    //     iris: 6547547
    // },
    // {
    //     date: new Date('2023/12/30 23:00'),
    //     "ex-toreca": 7017663,
    //     dopa: 2900903,
    //     "japan-toreca": 4777520,
    //     clove: 9671329,
    //     gacha24: 3307740,
    //     iris: 7206809
    // },
    // {
    //     date: new Date('2023/12/31 0:00'),
    //     "ex-toreca": 3961954,
    //     dopa: 1118779,
    //     "japan-toreca": 2167240,
    //     clove: 2792695,
    //     gacha24: 6063878,
    //     iris: 3903485
    // },
    // {
    //     date: new Date('2023/12/31 1:00'),
    //     "ex-toreca": 7184861,
    //     dopa: 7216856,
    //     "japan-toreca": 7932564,
    //     clove: 2639822,
    //     gacha24: 984204,
    //     iris: 7830894
    // },
    // {
    //     date: new Date('2023/12/31 2:00'),
    //     "ex-toreca": 7689901,
    //     dopa: 1768768,
    //     "japan-toreca": 4304881,
    //     clove: 1688190,
    //     gacha24: 8928841,
    //     iris: 5260189
    // },
    // {
    //     date: new Date('2023/12/31 3:00'),
    //     "ex-toreca": 8086664,
    //     dopa: 8399747,
    //     "japan-toreca": 8144354,
    //     clove: 937262,
    //     gacha24: 402136,
    //     iris: 5339906
    // },
    // {
    //     date: new Date('2023/12/31 4:00'),
    //     "ex-toreca": 8301801,
    //     dopa: 7284910,
    //     "japan-toreca": 8403903,
    //     clove: 645373,
    //     gacha24: 1357121,
    //     iris: 7493620
    // },
    // {
    //     date: new Date('2023/12/31 5:00'),
    //     "ex-toreca": 3725211,
    //     dopa: 4893531,
    //     "japan-toreca": 4592881,
    //     clove: 2671648,
    //     gacha24: 8175774,
    //     iris: 9799123
    // },
    // {
    //     date: new Date('2023/12/31 6:00'),
    //     "ex-toreca": 1086495,
    //     dopa: 9304282,
    //     "japan-toreca": 879124,
    //     clove: 4988596,
    //     gacha24: 3668382,
    //     iris: 5382659
    // },
    // {
    //     date: new Date('2023/12/31 7:00'),
    //     "ex-toreca": 1924797,
    //     dopa: 7142458,
    //     "japan-toreca": 7873284,
    //     clove: 4297996,
    //     gacha24: 3485204,
    //     iris: 9019509
    // },
    // {
    //     date: new Date('2023/12/31 8:00'),
    //     "ex-toreca": 4967971,
    //     dopa: 590663,
    //     "japan-toreca": 2413804,
    //     clove: 4574199,
    //     gacha24: 1213781,
    //     iris: 3190318
    // },
    // {
    //     date: new Date('2023/12/31 9:00'),
    //     "ex-toreca": 1767728,
    //     dopa: 616486,
    //     "japan-toreca": 4572540,
    //     clove: 3480096,
    //     gacha24: 3184407,
    //     iris: 4748078
    // },
    // {
    //     date: new Date('2023/12/31 10:00'),
    //     "ex-toreca": 3060146,
    //     dopa: 6032688,
    //     "japan-toreca": 4046604,
    //     clove: 4218216,
    //     gacha24: 8238551,
    //     iris: 4509457
    // },
    // {
    //     date: new Date('2023/12/31 11:00'),
    //     "ex-toreca": 9046675,
    //     dopa: 5320700,
    //     "japan-toreca": 9262696,
    //     clove: 1089428,
    //     gacha24: 4820218,
    //     iris: 8526790
    // },
    // {
    //     date: new Date('2023/12/31 12:00'),
    //     "ex-toreca": 539000,
    //     dopa: 286878,
    //     "japan-toreca": 8654111,
    //     clove: 2749112,
    //     gacha24: 7319891,
    //     iris: 3379046
    // },
    // {
    //     date: new Date('2023/12/31 13:00'),
    //     "ex-toreca": 4707634,
    //     dopa: 6913050,
    //     "japan-toreca": 8202361,
    //     clove: 756522,
    //     gacha24: 7450639,
    //     iris: 3631869
    // },
    // {
    //     date: new Date('2023/12/31 14:00'),
    //     "ex-toreca": 5055245,
    //     dopa: 1369990,
    //     "japan-toreca": 5919761,
    //     clove: 9570559,
    //     gacha24: 3272116,
    //     iris: 7615686
    // },
    // {
    //     date: new Date('2023/12/31 15:00'),
    //     "ex-toreca": 230665,
    //     dopa: 1348279,
    //     "japan-toreca": 4998505,
    //     clove: 3583328,
    //     gacha24: 4947893,
    //     iris: 8777659
    // },
    // {
    //     date: new Date('2023/12/31 16:00'),
    //     "ex-toreca": 1986000,
    //     dopa: 4472565,
    //     "japan-toreca": 1808079,
    //     clove: 146624,
    //     gacha24: 2105074,
    //     iris: 8777337
    // },
    // {
    //     date: new Date('2023/12/31 17:00'),
    //     "ex-toreca": 8255237,
    //     dopa: 8769333,
    //     "japan-toreca": 5232195,
    //     clove: 19440,
    //     gacha24: 4455950,
    //     iris: 3441226
    // },
    // {
    //     date: new Date('2023/12/31 18:00'),
    //     "ex-toreca": 906854,
    //     dopa: 9914320,
    //     "japan-toreca": 619956,
    //     clove: 2485634,
    //     gacha24: 9615150,
    //     iris: 1085310
    // },
    // {
    //     date: new Date('2023/12/31 19:00'),
    //     "ex-toreca": 8980458,
    //     dopa: 8359220,
    //     "japan-toreca": 4221487,
    //     clove: 6316613,
    //     gacha24: 2990211,
    //     iris: 5163902
    // },
    // {
    //     date: new Date('2023/12/31 20:00'),
    //     "ex-toreca": 8652622,
    //     dopa: 5271077,
    //     "japan-toreca": 2661940,
    //     clove: 4302783,
    //     gacha24: 2686476,
    //     iris: 689382
    // },
    // {
    //     date: new Date('2023/12/31 21:00'),
    //     "ex-toreca": 6153304,
    //     dopa: 2037952,
    //     "japan-toreca": 8247138,
    //     clove: 7228923,
    //     gacha24: 3917917,
    //     iris: 7556164
    // },
    // {
    //     date: new Date('2023/12/31 22:00'),
    //     "ex-toreca": 7772972,
    //     dopa: 1251349,
    //     "japan-toreca": 4825650,
    //     clove: 1498641,
    //     gacha24: 4783812,
    //     iris: 9883537
    // },
    // {
    //     date: new Date('2023/12/31 23:00'),
    //     "ex-toreca": 1105432,
    //     dopa: 7114415,
    //     "japan-toreca": 2913835,
    //     clove: 5069138,
    //     gacha24: 5160643,
    //     iris: 1101940
    // },
    // {
    //     date: new Date('2024/01/01 0:00'),
    //     "ex-toreca": 835001,
    //     dopa: 9316357,
    //     "japan-toreca": 4822499,
    //     clove: 1498425,
    //     gacha24: 1093704,
    //     iris: 8626235
    // },
    // {
    //     date: new Date('2024/01/01 1:00'),
    //     "ex-toreca": 7805465,
    //     dopa: 7472074,
    //     "japan-toreca": 1308250,
    //     clove: 1779995,
    //     gacha24: 6762905,
    //     iris: 6261993
    // },
    // {
    //     date: new Date('2024/01/01 2:00'),
    //     "ex-toreca": 6811534,
    //     dopa: 874846,
    //     "japan-toreca": 418393,
    //     clove: 2015639,
    //     gacha24: 5589094,
    //     iris: 9457274
    // },
    // {
    //     date: new Date('2024/01/01 3:00'),
    //     "ex-toreca": 1495665,
    //     dopa: 5688491,
    //     "japan-toreca": 2074589,
    //     clove: 2809032,
    //     gacha24: 8799561,
    //     iris: 3223917
    // },
    // {
    //     date: new Date('2024/01/01 4:00'),
    //     "ex-toreca": 6041739,
    //     dopa: 9704852,
    //     "japan-toreca": 1155900,
    //     clove: 271293,
    //     gacha24: 9657403,
    //     iris: 2300352
    // },
    // {
    //     date: new Date('2024/01/01 5:00'),
    //     "ex-toreca": 7794244,
    //     dopa: 3442650,
    //     "japan-toreca": 4319412,
    //     clove: 7410133,
    //     gacha24: 9615753,
    //     iris: 7330305
    // },
    // {
    //     date: new Date('2024/01/01 6:00'),
    //     "ex-toreca": 1283770,
    //     dopa: 7698502,
    //     "japan-toreca": 1695861,
    //     clove: 9656821,
    //     gacha24: 1719321,
    //     iris: 6365343
    // },
    // {
    //     date: new Date('2024/01/01 7:00'),
    //     "ex-toreca": 8047219,
    //     dopa: 693945,
    //     "japan-toreca": 8137508,
    //     clove: 7297138,
    //     gacha24: 7580247,
    //     iris: 7169873
    // },
    // {
    //     date: new Date('2024/01/01 8:00'),
    //     "ex-toreca": 9943550,
    //     dopa: 4957470,
    //     "japan-toreca": 1680639,
    //     clove: 1432259,
    //     gacha24: 8487299,
    //     iris: 2780330
    // },
    // {
    //     date: new Date('2024/01/01 9:00'),
    //     "ex-toreca": 3456148,
    //     dopa: 8533688,
    //     "japan-toreca": 1109592,
    //     clove: 9278171,
    //     gacha24: 3867759,
    //     iris: 3889858
    // },
    // {
    //     date: new Date('2024/01/01 10:00'),
    //     "ex-toreca": 4328379,
    //     dopa: 3995888,
    //     "japan-toreca": 9402372,
    //     clove: 3300568,
    //     gacha24: 7994663,
    //     iris: 4467054
    // },
    // {
    //     date: new Date('2024/01/01 11:00'),
    //     "ex-toreca": 3358880,
    //     dopa: 9618086,
    //     "japan-toreca": 9143184,
    //     clove: 8536784,
    //     gacha24: 8709922,
    //     iris: 5202637
    // },
    // {
    //     date: new Date('2024/01/01 12:00'),
    //     "ex-toreca": 7108514,
    //     dopa: 5623180,
    //     "japan-toreca": 4248026,
    //     clove: 8551899,
    //     gacha24: 5008626,
    //     iris: 9909221
    // },
    // {
    //     date: new Date('2024/01/01 13:00'),
    //     "ex-toreca": 6370379,
    //     dopa: 9291898,
    //     "japan-toreca": 9576854,
    //     clove: 345266,
    //     gacha24: 9555466,
    //     iris: 4269238
    // },
    // {
    //     date: new Date('2024/01/01 14:00'),
    //     "ex-toreca": 8262409,
    //     dopa: 532134,
    //     "japan-toreca": 4270461,
    //     clove: 8940185,
    //     gacha24: 6232543,
    //     iris: 3506239
    // },
    // {
    //     date: new Date('2024/01/01 15:00'),
    //     "ex-toreca": 7110516,
    //     dopa: 507863,
    //     "japan-toreca": 3044270,
    //     clove: 1576974,
    //     gacha24: 6279468,
    //     iris: 397526
    // },
    // {
    //     date: new Date('2024/01/01 16:00'),
    //     "ex-toreca": 2811063,
    //     dopa: 8135522,
    //     "japan-toreca": 7416764,
    //     clove: 8536891,
    //     gacha24: 9980293,
    //     iris: 8469060
    // },
    // {
    //     date: new Date('2024/01/01 17:00'),
    //     "ex-toreca": 6685127,
    //     dopa: 8098086,
    //     "japan-toreca": 4152502,
    //     clove: 5022962,
    //     gacha24: 5866508,
    //     iris: 9497601
    // },
    // {
    //     date: new Date('2024/01/01 18:00'),
    //     "ex-toreca": 2682246,
    //     dopa: 9041591,
    //     "japan-toreca": 6134943,
    //     clove: 700244,
    //     gacha24: 1240564,
    //     iris: 1063114
    // },
    // {
    //     date: new Date('2024/01/01 19:00'),
    //     "ex-toreca": 4913342,
    //     dopa: 4482594,
    //     "japan-toreca": 1050919,
    //     clove: 7682259,
    //     gacha24: 8979715,
    //     iris: 9746512
    // },
    // {
    //     date: new Date('2024/01/01 20:00'),
    //     "ex-toreca": 3904307,
    //     dopa: 7050282,
    //     "japan-toreca": 5228602,
    //     clove: 2056069,
    //     gacha24: 5670068,
    //     iris: 7509276
    // },
    // {
    //     date: new Date('2024/01/01 21:00'),
    //     "ex-toreca": 1999057,
    //     dopa: 1554811,
    //     "japan-toreca": 1289726,
    //     clove: 8187520,
    //     gacha24: 8424558,
    //     iris: 5928758
    // },
    // {
    //     date: new Date('2024/01/01 22:00'),
    //     "ex-toreca": 4853174,
    //     dopa: 3457877,
    //     "japan-toreca": 6665783,
    //     clove: 4242983,
    //     gacha24: 850098,
    //     iris: 608008
    // },
    // {
    //     date: new Date('2024/01/01 23:00'),
    //     "ex-toreca": 910038,
    //     dopa: 7239030,
    //     "japan-toreca": 948632,
    //     clove: 5029907,
    //     gacha24: 6256505,
    //     iris: 3708821
    // },
    // {
    //     date: new Date('2024/01/02 0:00'),
    //     "ex-toreca": 5077796,
    //     dopa: 1088712,
    //     "japan-toreca": 2223991,
    //     clove: 156937,
    //     gacha24: 6373255,
    //     iris: 589027
    // },
    // {
    //     date: new Date('2024/01/02 1:00'),
    //     "ex-toreca": 4641519,
    //     dopa: 5004873,
    //     "japan-toreca": 3716436,
    //     clove: 3118288,
    //     gacha24: 204864,
    //     iris: 4449066
    // },
    // {
    //     date: new Date('2024/01/02 2:00'),
    //     "ex-toreca": 2653803,
    //     dopa: 6542795,
    //     "japan-toreca": 4007607,
    //     clove: 8243779,
    //     gacha24: 8049430,
    //     iris: 5013016
    // },
    // {
    //     date: new Date('2024/01/02 3:00'),
    //     "ex-toreca": 8791828,
    //     dopa: 9839750,
    //     "japan-toreca": 3202783,
    //     clove: 9239988,
    //     gacha24: 7031868,
    //     iris: 6895584
    // },
    // {
    //     date: new Date('2024/01/02 4:00'),
    //     "ex-toreca": 739180,
    //     dopa: 5874267,
    //     "japan-toreca": 2171041,
    //     clove: 78695,
    //     gacha24: 3953841,
    //     iris: 6273107
    // },
    // {
    //     date: new Date('2024/01/02 5:00'),
    //     "ex-toreca": 9089662,
    //     dopa: 8665995,
    //     "japan-toreca": 8924837,
    //     clove: 8262458,
    //     gacha24: 9132595,
    //     iris: 8782830
    // },
    // {
    //     date: new Date('2024/01/02 6:00'),
    //     "ex-toreca": 7892349,
    //     dopa: 1292752,
    //     "japan-toreca": 3088683,
    //     clove: 7417887,
    //     gacha24: 328284,
    //     iris: 1859368
    // },
    // {
    //     date: new Date('2024/01/02 7:00'),
    //     "ex-toreca": 1988251,
    //     dopa: 7050777,
    //     "japan-toreca": 1320550,
    //     clove: 438822,
    //     gacha24: 7815603,
    //     iris: 7171217
    // },
    // {
    //     date: new Date('2024/01/02 8:00'),
    //     "ex-toreca": 4120442,
    //     dopa: 3260037,
    //     "japan-toreca": 536988,
    //     clove: 3971470,
    //     gacha24: 6605803,
    //     iris: 4598283
    // },
    // {
    //     date: new Date('2024/01/02 9:00'),
    //     "ex-toreca": 8165815,
    //     dopa: 9276867,
    //     "japan-toreca": 1038610,
    //     clove: 3065258,
    //     gacha24: 4025785,
    //     iris: 7203419
    // },
    // {
    //     date: new Date('2024/01/02 10:00'),
    //     "ex-toreca": 9857361,
    //     dopa: 7267581,
    //     "japan-toreca": 5575269,
    //     clove: 7403388,
    //     gacha24: 5304195,
    //     iris: 422391
    // },
    // {
    //     date: new Date('2024/01/02 11:00'),
    //     "ex-toreca": 321274,
    //     dopa: 3417090,
    //     "japan-toreca": 6957921,
    //     clove: 9260053,
    //     gacha24: 1879720,
    //     iris: 1840334
    // },
    // {
    //     date: new Date('2024/01/02 12:00'),
    //     "ex-toreca": 2145783,
    //     dopa: 720171,
    //     "japan-toreca": 284606,
    //     clove: 1803450,
    //     gacha24: 2944498,
    //     iris: 9638474
    // },
    // {
    //     date: new Date('2024/01/02 13:00'),
    //     "ex-toreca": 2023087,
    //     dopa: 6064814,
    //     "japan-toreca": 4541999,
    //     clove: 5586943,
    //     gacha24: 8695093,
    //     iris: 5086274
    // },
    // {
    //     date: new Date('2024/01/02 14:00'),
    //     "ex-toreca": 1222460,
    //     dopa: 2116745,
    //     "japan-toreca": 5125287,
    //     clove: 8209156,
    //     gacha24: 9018874,
    //     iris: 4556919
    // },
    // {
    //     date: new Date('2024/01/02 15:00'),
    //     "ex-toreca": 1762220,
    //     dopa: 3726300,
    //     "japan-toreca": 1962163,
    //     clove: 3059058,
    //     gacha24: 6354845,
    //     iris: 917339
    // },
    // {
    //     date: new Date('2024/01/02 16:00'),
    //     "ex-toreca": 9607207,
    //     dopa: 6910140,
    //     "japan-toreca": 604624,
    //     clove: 8805752,
    //     gacha24: 5740237,
    //     iris: 7952598
    // },
    // {
    //     date: new Date('2024/01/02 17:00'),
    //     "ex-toreca": 1887073,
    //     dopa: 5166567,
    //     "japan-toreca": 6670989,
    //     clove: 4273624,
    //     gacha24: 8332802,
    //     iris: 2036695
    // },
    // {
    //     date: new Date('2024/01/02 18:00'),
    //     "ex-toreca": 5667967,
    //     dopa: 3528219,
    //     "japan-toreca": 6998672,
    //     clove: 5400539,
    //     gacha24: 1151870,
    //     iris: 9077566
    // },
    // {
    //     date: new Date('2024/01/02 19:00'),
    //     "ex-toreca": 2828648,
    //     dopa: 289284,
    //     "japan-toreca": 359437,
    //     clove: 5807332,
    //     gacha24: 7661573,
    //     iris: 7209264
    // },
    // {
    //     date: new Date('2024/01/02 20:00'),
    //     "ex-toreca": 7485013,
    //     dopa: 9719222,
    //     "japan-toreca": 4024311,
    //     clove: 4701859,
    //     gacha24: 6137475,
    //     iris: 893664
    // },
    // {
    //     date: new Date('2024/01/02 21:00'),
    //     "ex-toreca": 4867500,
    //     dopa: 2639612,
    //     "japan-toreca": 6991728,
    //     clove: 1798559,
    //     gacha24: 73802,
    //     iris: 8525170
    // },
    // {
    //     date: new Date('2024/01/02 22:00'),
    //     "ex-toreca": 3769461,
    //     dopa: 4014805,
    //     "japan-toreca": 9150194,
    //     clove: 222343,
    //     gacha24: 492833,
    //     iris: 2964530
    // },
    // {
    //     date: new Date('2024/01/02 23:00'),
    //     "ex-toreca": 3183096,
    //     dopa: 6056715,
    //     "japan-toreca": 3951946,
    //     clove: 4698640,
    //     gacha24: 866578,
    //     iris: 3768676
    // },
    // {
    //     date: new Date('2024/01/03 0:00'),
    //     "ex-toreca": 6527444,
    //     dopa: 585801,
    //     "japan-toreca": 2973356,
    //     clove: 3258739,
    //     gacha24: 7326047,
    //     iris: 7858368
    // },
    // {
    //     date: new Date('2024/01/03 1:00'),
    //     "ex-toreca": 2987455,
    //     dopa: 5450725,
    //     "japan-toreca": 1440384,
    //     clove: 793494,
    //     gacha24: 8620888,
    //     iris: 905546
    // },
    // {
    //     date: new Date('2024/01/03 2:00'),
    //     "ex-toreca": 4422067,
    //     dopa: 3675934,
    //     "japan-toreca": 6172612,
    //     clove: 1714470,
    //     gacha24: 7060954,
    //     iris: 8946276
    // },
    // {
    //     date: new Date('2024/01/03 3:00'),
    //     "ex-toreca": 9628717,
    //     dopa: 1751484,
    //     "japan-toreca": 4505010,
    //     clove: 3785884,
    //     gacha24: 1755243,
    //     iris: 4744651
    // },
    // {
    //     date: new Date('2024/01/03 4:00'),
    //     "ex-toreca": 8295334,
    //     dopa: 5117690,
    //     "japan-toreca": 1832893,
    //     clove: 9077364,
    //     gacha24: 6318932,
    //     iris: 5633966
    // },
    // {
    //     date: new Date('2024/01/03 5:00'),
    //     "ex-toreca": 3736177,
    //     dopa: 7288799,
    //     "japan-toreca": 1712039,
    //     clove: 9409731,
    //     gacha24: 5880510,
    //     iris: 8043627
    // },
    // {
    //     date: new Date('2024/01/03 6:00'),
    //     "ex-toreca": 6132808,
    //     dopa: 8615312,
    //     "japan-toreca": 5110568,
    //     clove: 3358229,
    //     gacha24: 9228360,
    //     iris: 3554614
    // },
    // {
    //     date: new Date('2024/01/03 7:00'),
    //     "ex-toreca": 5348205,
    //     dopa: 6525529,
    //     "japan-toreca": 5609535,
    //     clove: 8074567,
    //     gacha24: 7872496,
    //     iris: 9570837
    // },
    // {
    //     date: new Date('2024/01/03 8:00'),
    //     "ex-toreca": 5048502,
    //     dopa: 6892326,
    //     "japan-toreca": 2399028,
    //     clove: 1077034,
    //     gacha24: 6460127,
    //     iris: 5297838
    // },
    // {
    //     date: new Date('2024/01/03 9:00'),
    //     "ex-toreca": 1735680,
    //     dopa: 414788,
    //     "japan-toreca": 5700565,
    //     clove: 4640930,
    //     gacha24: 5437618,
    //     iris: 5975203
    // },
    // {
    //     date: new Date('2024/01/03 10:00'),
    //     "ex-toreca": 8801729,
    //     dopa: 1756560,
    //     "japan-toreca": 5579458,
    //     clove: 2357137,
    //     gacha24: 1099786,
    //     iris: 943093
    // },
    // {
    //     date: new Date('2024/01/03 11:00'),
    //     "ex-toreca": 5071955,
    //     dopa: 9652942,
    //     "japan-toreca": 2014310,
    //     clove: 2873397,
    //     gacha24: 8865750,
    //     iris: 7588925
    // },
    // {
    //     date: new Date('2024/01/03 12:00'),
    //     "ex-toreca": 9709108,
    //     dopa: 8572739,
    //     "japan-toreca": 9268214,
    //     clove: 9460086,
    //     gacha24: 2720502,
    //     iris: 1696940
    // },
    // {
    //     date: new Date('2024/01/03 13:00'),
    //     "ex-toreca": 9831322,
    //     dopa: 7562536,
    //     "japan-toreca": 7486746,
    //     clove: 1231083,
    //     gacha24: 9580461,
    //     iris: 3125858
    // },
    // {
    //     date: new Date('2024/01/03 14:00'),
    //     "ex-toreca": 6876662,
    //     dopa: 4489333,
    //     "japan-toreca": 2674550,
    //     clove: 8770872,
    //     gacha24: 9490627,
    //     iris: 3006927
    // },
    // {
    //     date: new Date('2024/01/03 15:00'),
    //     "ex-toreca": 2016324,
    //     dopa: 5113223,
    //     "japan-toreca": 2160282,
    //     clove: 4159959,
    //     gacha24: 8644839,
    //     iris: 6152820
    // },
    // {
    //     date: new Date('2024/01/03 16:00'),
    //     "ex-toreca": 7005868,
    //     dopa: 2097556,
    //     "japan-toreca": 372531,
    //     clove: 9149102,
    //     gacha24: 3663458,
    //     iris: 5768384
    // },
    // {
    //     date: new Date('2024/01/03 17:00'),
    //     "ex-toreca": 8367849,
    //     dopa: 6303734,
    //     "japan-toreca": 4929681,
    //     clove: 783443,
    //     gacha24: 486604,
    //     iris: 3285074
    // },
    // {
    //     date: new Date('2024/01/03 18:00'),
    //     "ex-toreca": 3329214,
    //     dopa: 6953680,
    //     "japan-toreca": 5232093,
    //     clove: 3736141,
    //     gacha24: 7360314,
    //     iris: 5614238
    // },
    // {
    //     date: new Date('2024/01/03 19:00'),
    //     "ex-toreca": 9124834,
    //     dopa: 6131481,
    //     "japan-toreca": 6679967,
    //     clove: 5245775,
    //     gacha24: 3838353,
    //     iris: 4107336
    // },
    // {
    //     date: new Date('2024/01/03 20:00'),
    //     "ex-toreca": 9588886,
    //     dopa: 7595979,
    //     "japan-toreca": 9482224,
    //     clove: 7805775,
    //     gacha24: 6028203,
    //     iris: 7153549
    // },
    // {
    //     date: new Date('2024/01/03 21:00'),
    //     "ex-toreca": 9720779,
    //     dopa: 9037726,
    //     "japan-toreca": 7071388,
    //     clove: 4409506,
    //     gacha24: 3588628,
    //     iris: 8570228
    // },
    // {
    //     date: new Date('2024/01/03 22:00'),
    //     "ex-toreca": 700627,
    //     dopa: 8454287,
    //     "japan-toreca": 1065498,
    //     clove: 1621191,
    //     gacha24: 2665974,
    //     iris: 4986493
    // },
    // {
    //     date: new Date('2024/01/03 23:00'),
    //     "ex-toreca": 4519025,
    //     dopa: 73917,
    //     "japan-toreca": 6926269,
    //     clove: 8503838,
    //     gacha24: 8013797,
    //     iris: 6655021
    // },
    // {
    //     date: new Date('2024/01/04 0:00'),
    //     "ex-toreca": 4584152,
    //     dopa: 3236021,
    //     "japan-toreca": 5868063,
    //     clove: 5356632,
    //     gacha24: 9950534,
    //     iris: 2925356
    // },
    // {
    //     date: new Date('2024/01/04 1:00'),
    //     "ex-toreca": 2607018,
    //     dopa: 9356444,
    //     "japan-toreca": 9881787,
    //     clove: 6364613,
    //     gacha24: 5800718,
    //     iris: 5203403
    // },
    // {
    //     date: new Date('2024/01/04 2:00'),
    //     "ex-toreca": 2310525,
    //     dopa: 991681,
    //     "japan-toreca": 8523624,
    //     clove: 2128448,
    //     gacha24: 4196322,
    //     iris: 4747919
    // },
    // {
    //     date: new Date('2024/01/04 3:00'),
    //     "ex-toreca": 8850381,
    //     dopa: 2622669,
    //     "japan-toreca": 2355163,
    //     clove: 6719420,
    //     gacha24: 5893460,
    //     iris: 6833499
    // },
    // {
    //     date: new Date('2024/01/04 4:00'),
    //     "ex-toreca": 6869157,
    //     dopa: 1291103,
    //     "japan-toreca": 9054078,
    //     clove: 7858373,
    //     gacha24: 9462492,
    //     iris: 3553983
    // },
    // {
    //     date: new Date('2024/01/04 5:00'),
    //     "ex-toreca": 4182961,
    //     dopa: 3579514,
    //     "japan-toreca": 185526,
    //     clove: 5304162,
    //     gacha24: 9392163,
    //     iris: 8222388
    // },
    // {
    //     date: new Date('2024/01/04 6:00'),
    //     "ex-toreca": 7443856,
    //     dopa: 3879918,
    //     "japan-toreca": 5470816,
    //     clove: 2227267,
    //     gacha24: 2138913,
    //     iris: 2388190
    // },
    // {
    //     date: new Date('2024/01/04 7:00'),
    //     "ex-toreca": 2402480,
    //     dopa: 3366524,
    //     "japan-toreca": 9100422,
    //     clove: 7250385,
    //     gacha24: 6275543,
    //     iris: 693274
    // },
    // {
    //     date: new Date('2024/01/04 8:00'),
    //     "ex-toreca": 6461041,
    //     dopa: 6310594,
    //     "japan-toreca": 59674,
    //     clove: 8854913,
    //     gacha24: 3486425,
    //     iris: 118526
    // },
    // {
    //     date: new Date('2024/01/04 9:00'),
    //     "ex-toreca": 6119790,
    //     dopa: 329745,
    //     "japan-toreca": 5041854,
    //     clove: 1100236,
    //     gacha24: 422255,
    //     iris: 686081
    // },
    // {
    //     date: new Date('2024/01/04 10:00'),
    //     "ex-toreca": 2827782,
    //     dopa: 781553,
    //     "japan-toreca": 256643,
    //     clove: 26898,
    //     gacha24: 5195064,
    //     iris: 6581792
    // },
    // {
    //     date: new Date('2024/01/04 11:00'),
    //     "ex-toreca": 9164258,
    //     dopa: 212040,
    //     "japan-toreca": 5133854,
    //     clove: 5991981,
    //     gacha24: 9630470,
    //     iris: 9591759
    // },
    // {
    //     date: new Date('2024/01/04 12:00'),
    //     "ex-toreca": 1288569,
    //     dopa: 2894474,
    //     "japan-toreca": 3780427,
    //     clove: 3398598,
    //     gacha24: 557068,
    //     iris: 7623049
    // },
    // {
    //     date: new Date('2024/01/04 13:00'),
    //     "ex-toreca": 1164350,
    //     dopa: 5120785,
    //     "japan-toreca": 7964786,
    //     clove: 9459656,
    //     gacha24: 1895797,
    //     iris: 7734833
    // },
    // {
    //     date: new Date('2024/01/04 14:00'),
    //     "ex-toreca": 9301520,
    //     dopa: 1055650,
    //     "japan-toreca": 297714,
    //     clove: 3096069,
    //     gacha24: 6840716,
    //     iris: 636446
    // },
    // {
    //     date: new Date('2024/01/04 15:00'),
    //     "ex-toreca": 3923077,
    //     dopa: 1365667,
    //     "japan-toreca": 7951964,
    //     clove: 8352595,
    //     gacha24: 3756954,
    //     iris: 4811792
    // },
    // {
    //     date: new Date('2024/01/04 16:00'),
    //     "ex-toreca": 7580180,
    //     dopa: 6794497,
    //     "japan-toreca": 4623459,
    //     clove: 7532192,
    //     gacha24: 132521,
    //     iris: 8515187
    // },
    // {
    //     date: new Date('2024/01/04 17:00'),
    //     "ex-toreca": 9140041,
    //     dopa: 3269636,
    //     "japan-toreca": 3236173,
    //     clove: 3445291,
    //     gacha24: 2020873,
    //     iris: 5909637
    // },
    // {
    //     date: new Date('2024/01/04 18:00'),
    //     "ex-toreca": 1022722,
    //     dopa: 7268913,
    //     "japan-toreca": 9586527,
    //     clove: 5243831,
    //     gacha24: 2552086,
    //     iris: 4285322
    // },
    // {
    //     date: new Date('2024/01/04 19:00'),
    //     "ex-toreca": 1278152,
    //     dopa: 5281591,
    //     "japan-toreca": 9215703,
    //     clove: 649909,
    //     gacha24: 25953,
    //     iris: 4464849
    // },
    // {
    //     date: new Date('2024/01/04 20:00'),
    //     "ex-toreca": 5869702,
    //     dopa: 4942193,
    //     "japan-toreca": 5551805,
    //     clove: 1276459,
    //     gacha24: 1611634,
    //     iris: 8669615
    // },
    // {
    //     date: new Date('2024/01/04 21:00'),
    //     "ex-toreca": 4015087,
    //     dopa: 7965358,
    //     "japan-toreca": 8511333,
    //     clove: 4739126,
    //     gacha24: 250492,
    //     iris: 120308
    // },
    // {
    //     date: new Date('2024/01/04 22:00'),
    //     "ex-toreca": 8110933,
    //     dopa: 6073172,
    //     "japan-toreca": 9034482,
    //     clove: 9156505,
    //     gacha24: 7712485,
    //     iris: 2114693
    // },
    // {
    //     date: new Date('2024/01/04 23:00'),
    //     "ex-toreca": 3204164,
    //     dopa: 1092123,
    //     "japan-toreca": 5915097,
    //     clove: 1364713,
    //     gacha24: 8990946,
    //     iris: 8670754
    // },
    // {
    //     date: new Date('2024/01/05 0:00'),
    //     "ex-toreca": 5984489,
    //     dopa: 1468052,
    //     "japan-toreca": 6386327,
    //     clove: 4570941,
    //     gacha24: 231477,
    //     iris: 2319624
    // },
    // {
    //     date: new Date('2024/01/05 1:00'),
    //     "ex-toreca": 4552833,
    //     dopa: 795315,
    //     "japan-toreca": 2663707,
    //     clove: 8109656,
    //     gacha24: 7881884,
    //     iris: 2897797
    // },
    // {
    //     date: new Date('2024/01/05 2:00'),
    //     "ex-toreca": 8931476,
    //     dopa: 9017789,
    //     "japan-toreca": 4977007,
    //     clove: 5596224,
    //     gacha24: 1694773,
    //     iris: 5678873
    // },
    // {
    //     date: new Date('2024/01/05 3:00'),
    //     "ex-toreca": 9089652,
    //     dopa: 2817699,
    //     "japan-toreca": 7902974,
    //     clove: 8641414,
    //     gacha24: 2524726,
    //     iris: 2471750
    // },
    // {
    //     date: new Date('2024/01/05 4:00'),
    //     "ex-toreca": 4151992,
    //     dopa: 9734674,
    //     "japan-toreca": 1719500,
    //     clove: 261054,
    //     gacha24: 5619496,
    //     iris: 1457798
    // },
    // {
    //     date: new Date('2024/01/05 5:00'),
    //     "ex-toreca": 8897657,
    //     dopa: 3639104,
    //     "japan-toreca": 3919364,
    //     clove: 8683670,
    //     gacha24: 2113388,
    //     iris: 132853
    // },
    // {
    //     date: new Date('2024/01/05 6:00'),
    //     "ex-toreca": 9031741,
    //     dopa: 710466,
    //     "japan-toreca": 4440416,
    //     clove: 8250833,
    //     gacha24: 1588670,
    //     iris: 9332469
    // },
    // {
    //     date: new Date('2024/01/05 7:00'),
    //     "ex-toreca": 1475946,
    //     dopa: 6307424,
    //     "japan-toreca": 2623728,
    //     clove: 9954441,
    //     gacha24: 465686,
    //     iris: 8585112
    // },
    // {
    //     date: new Date('2024/01/05 8:00'),
    //     "ex-toreca": 398689,
    //     dopa: 9723078,
    //     "japan-toreca": 9068083,
    //     clove: 3039556,
    //     gacha24: 4985514,
    //     iris: 9412716
    // },
    // {
    //     date: new Date('2024/01/05 9:00'),
    //     "ex-toreca": 6210867,
    //     dopa: 7955727,
    //     "japan-toreca": 1189833,
    //     clove: 2471040,
    //     gacha24: 132243,
    //     iris: 2714859
    // },
    // {
    //     date: new Date('2024/01/05 10:00'),
    //     "ex-toreca": 3794370,
    //     dopa: 3503134,
    //     "japan-toreca": 9034028,
    //     clove: 9522315,
    //     gacha24: 6945666,
    //     iris: 8159798
    // },
    // {
    //     date: new Date('2024/01/05 11:00'),
    //     "ex-toreca": 1183484,
    //     dopa: 9796340,
    //     "japan-toreca": 9725782,
    //     clove: 4072976,
    //     gacha24: 6759252,
    //     iris: 8808929
    // },
    // {
    //     date: new Date('2024/01/05 12:00'),
    //     "ex-toreca": 3828738,
    //     dopa: 4896987,
    //     "japan-toreca": 915368,
    //     clove: 5734116,
    //     gacha24: 6955742,
    //     iris: 1799217
    // },
    // {
    //     date: new Date('2024/01/05 13:00'),
    //     "ex-toreca": 3781909,
    //     dopa: 1963823,
    //     "japan-toreca": 1869787,
    //     clove: 7830029,
    //     gacha24: 5982379,
    //     iris: 6428748
    // },
    // {
    //     date: new Date('2024/01/05 14:00'),
    //     "ex-toreca": 9408792,
    //     dopa: 3462978,
    //     "japan-toreca": 4019870,
    //     clove: 1007360,
    //     gacha24: 8507927,
    //     iris: 5969660
    // },
    // {
    //     date: new Date('2024/01/05 15:00'),
    //     "ex-toreca": 715624,
    //     dopa: 2414747,
    //     "japan-toreca": 4309392,
    //     clove: 6183722,
    //     gacha24: 1814632,
    //     iris: 396917
    // },
    // {
    //     date: new Date('2024/01/05 16:00'),
    //     "ex-toreca": 8124637,
    //     dopa: 2093554,
    //     "japan-toreca": 4006103,
    //     clove: 9679157,
    //     gacha24: 3647947,
    //     iris: 8675378
    // },
    // {
    //     date: new Date('2024/01/05 17:00'),
    //     "ex-toreca": 2189173,
    //     dopa: 2266241,
    //     "japan-toreca": 7823530,
    //     clove: 8011132,
    //     gacha24: 867825,
    //     iris: 1390643
    // },
    // {
    //     date: new Date('2024/01/05 18:00'),
    //     "ex-toreca": 2200455,
    //     dopa: 4304198,
    //     "japan-toreca": 5984464,
    //     clove: 7076073,
    //     gacha24: 1976198,
    //     iris: 8237491
    // },
    // {
    //     date: new Date('2024/01/05 19:00'),
    //     "ex-toreca": 1136393,
    //     dopa: 624833,
    //     "japan-toreca": 4878884,
    //     clove: 8514343,
    //     gacha24: 4941948,
    //     iris: 7898108
    // },
    // {
    //     date: new Date('2024/01/05 20:00'),
    //     "ex-toreca": 9405082,
    //     dopa: 2734084,
    //     "japan-toreca": 6278263,
    //     clove: 8639457,
    //     gacha24: 9351144,
    //     iris: 1604187
    // },
    // {
    //     date: new Date('2024/01/05 21:00'),
    //     "ex-toreca": 1394693,
    //     dopa: 3920905,
    //     "japan-toreca": 3535886,
    //     clove: 7224291,
    //     gacha24: 7862411,
    //     iris: 1818596
    // },
    // {
    //     date: new Date('2024/01/05 22:00'),
    //     "ex-toreca": 7628644,
    //     dopa: 1200131,
    //     "japan-toreca": 8518861,
    //     clove: 5899607,
    //     gacha24: 3982514,
    //     iris: 8502822
    // },
    // {
    //     date: new Date('2024/01/05 23:00'),
    //     "ex-toreca": 8400728,
    //     dopa: 1191291,
    //     "japan-toreca": 8880915,
    //     clove: 4316642,
    //     gacha24: 2397234,
    //     iris: 7456722
    // },
    // {
    //     date: new Date('2024/01/06 0:00'),
    //     "ex-toreca": 1974204,
    //     dopa: 2034085,
    //     "japan-toreca": 4780537,
    //     clove: 8881240,
    //     gacha24: 6209468,
    //     iris: 9670331
    // },
    // {
    //     date: new Date('2024/01/06 1:00'),
    //     "ex-toreca": 8440932,
    //     dopa: 2324416,
    //     "japan-toreca": 8851486,
    //     clove: 6508460,
    //     gacha24: 4915036,
    //     iris: 2218832
    // },
    // {
    //     date: new Date('2024/01/06 2:00'),
    //     "ex-toreca": 5490245,
    //     dopa: 1591084,
    //     "japan-toreca": 1906023,
    //     clove: 9904385,
    //     gacha24: 4908124,
    //     iris: 8504947
    // },
    // {
    //     date: new Date('2024/01/06 3:00'),
    //     "ex-toreca": 418522,
    //     dopa: 6739293,
    //     "japan-toreca": 2731786,
    //     clove: 5635478,
    //     gacha24: 5116316,
    //     iris: 4817233
    // },
    // {
    //     date: new Date('2024/01/06 4:00'),
    //     "ex-toreca": 7983228,
    //     dopa: 5702690,
    //     "japan-toreca": 9358107,
    //     clove: 9140776,
    //     gacha24: 9869198,
    //     iris: 3587621
    // },
    // {
    //     date: new Date('2024/01/06 5:00'),
    //     "ex-toreca": 9933471,
    //     dopa: 6853354,
    //     "japan-toreca": 8911225,
    //     clove: 9055526,
    //     gacha24: 6769702,
    //     iris: 7478807
    // },
    // {
    //     date: new Date('2024/01/06 6:00'),
    //     "ex-toreca": 4362582,
    //     dopa: 3397389,
    //     "japan-toreca": 3732529,
    //     clove: 7976942,
    //     gacha24: 3319333,
    //     iris: 817440
    // },
    // {
    //     date: new Date('2024/01/06 7:00'),
    //     "ex-toreca": 790872,
    //     dopa: 8663676,
    //     "japan-toreca": 2025743,
    //     clove: 2132325,
    //     gacha24: 4469082,
    //     iris: 3586774
    // },
    // {
    //     date: new Date('2024/01/06 8:00'),
    //     "ex-toreca": 2421489,
    //     dopa: 5688302,
    //     "japan-toreca": 2217907,
    //     clove: 1678998,
    //     gacha24: 1031045,
    //     iris: 6228044
    // },
    // {
    //     date: new Date('2024/01/06 9:00'),
    //     "ex-toreca": 6372911,
    //     dopa: 1963769,
    //     "japan-toreca": 5695760,
    //     clove: 7695305,
    //     gacha24: 9817761,
    //     iris: 5662032
    // },
    // {
    //     date: new Date('2024/01/06 10:00'),
    //     "ex-toreca": 4532543,
    //     dopa: 6768103,
    //     "japan-toreca": 2498671,
    //     clove: 3591683,
    //     gacha24: 4282705,
    //     iris: 7197953
    // },
    // {
    //     date: new Date('2024/01/06 11:00'),
    //     "ex-toreca": 6176372,
    //     dopa: 6008994,
    //     "japan-toreca": 6434229,
    //     clove: 8091987,
    //     gacha24: 9362737,
    //     iris: 3397562
    // },
    // {
    //     date: new Date('2024/01/06 12:00'),
    //     "ex-toreca": 7395829,
    //     dopa: 4816779,
    //     "japan-toreca": 4814460,
    //     clove: 3031005,
    //     gacha24: 5615057,
    //     iris: 4868791
    // },
    // {
    //     date: new Date('2024/01/06 13:00'),
    //     "ex-toreca": 8927399,
    //     dopa: 5303520,
    //     "japan-toreca": 7406732,
    //     clove: 6551258,
    //     gacha24: 7343996,
    //     iris: 6217768
    // },
    // {
    //     date: new Date('2024/01/06 14:00'),
    //     "ex-toreca": 610218,
    //     dopa: 8482177,
    //     "japan-toreca": 7344391,
    //     clove: 4069881,
    //     gacha24: 5519694,
    //     iris: 2534892
    // },
    // {
    //     date: new Date('2024/01/06 15:00'),
    //     "ex-toreca": 861110,
    //     dopa: 636495,
    //     "japan-toreca": 4564767,
    //     clove: 6112460,
    //     gacha24: 4099520,
    //     iris: 3990112
    // },
    // {
    //     date: new Date('2024/01/06 16:00'),
    //     "ex-toreca": 1168355,
    //     dopa: 5736583,
    //     "japan-toreca": 7223918,
    //     clove: 8657021,
    //     gacha24: 9727787,
    //     iris: 9152537
    // },
    // {
    //     date: new Date('2024/01/06 17:00'),
    //     "ex-toreca": 7493821,
    //     dopa: 8253551,
    //     "japan-toreca": 189159,
    //     clove: 3177517,
    //     gacha24: 1604811,
    //     iris: 7383651
    // },
    // {
    //     date: new Date('2024/01/06 18:00'),
    //     "ex-toreca": 9968638,
    //     dopa: 3550851,
    //     "japan-toreca": 2936761,
    //     clove: 5481439,
    //     gacha24: 7594815,
    //     iris: 8293296
    // },
    // {
    //     date: new Date('2024/01/06 19:00'),
    //     "ex-toreca": 5433125,
    //     dopa: 3046685,
    //     "japan-toreca": 4159933,
    //     clove: 5115616,
    //     gacha24: 5693253,
    //     iris: 485157
    // },
    // {
    //     date: new Date('2024/01/06 20:00'),
    //     "ex-toreca": 9975856,
    //     dopa: 8087782,
    //     "japan-toreca": 7596187,
    //     clove: 4339929,
    //     gacha24: 1401592,
    //     iris: 6249120
    // },
    // {
    //     date: new Date('2024/01/06 21:00'),
    //     "ex-toreca": 5882694,
    //     dopa: 3829601,
    //     "japan-toreca": 3446900,
    //     clove: 2459823,
    //     gacha24: 3983126,
    //     iris: 508780
    // },
    // {
    //     date: new Date('2024/01/06 22:00'),
    //     "ex-toreca": 3469248,
    //     dopa: 1108593,
    //     "japan-toreca": 8872737,
    //     clove: 1060835,
    //     gacha24: 6389101,
    //     iris: 4755178
    // },
    // {
    //     date: new Date('2024/01/06 23:00'),
    //     "ex-toreca": 8787546,
    //     dopa: 9048913,
    //     "japan-toreca": 1080620,
    //     clove: 9938539,
    //     gacha24: 5061482,
    //     iris: 130587
    // },
    // {
    //     date: new Date('2024/01/07 0:00'),
    //     "ex-toreca": 1347940,
    //     dopa: 7081595,
    //     "japan-toreca": 5611431,
    //     clove: 4020589,
    //     gacha24: 4477326,
    //     iris: 922872
    // },
    // {
    //     date: new Date('2024/01/07 1:00'),
    //     "ex-toreca": 8605629,
    //     dopa: 5876208,
    //     "japan-toreca": 7211883,
    //     clove: 593734,
    //     gacha24: 5668876,
    //     iris: 3606551
    // },
    // {
    //     date: new Date('2024/01/07 2:00'),
    //     "ex-toreca": 5155824,
    //     dopa: 4569885,
    //     "japan-toreca": 6846534,
    //     clove: 7174854,
    //     gacha24: 558745,
    //     iris: 1617298
    // },
    // {
    //     date: new Date('2024/01/07 3:00'),
    //     "ex-toreca": 1333490,
    //     dopa: 274847,
    //     "japan-toreca": 5941642,
    //     clove: 8285433,
    //     gacha24: 1121292,
    //     iris: 7993694
    // },
    // {
    //     date: new Date('2024/01/07 4:00'),
    //     "ex-toreca": 9124574,
    //     dopa: 9095288,
    //     "japan-toreca": 5118927,
    //     clove: 7482097,
    //     gacha24: 3688050,
    //     iris: 7743319
    // },
    // {
    //     date: new Date('2024/01/07 5:00'),
    //     "ex-toreca": 9742968,
    //     dopa: 9112143,
    //     "japan-toreca": 5006715,
    //     clove: 6101883,
    //     gacha24: 3379920,
    //     iris: 1337019
    // },
    // {
    //     date: new Date('2024/01/07 6:00'),
    //     "ex-toreca": 2861194,
    //     dopa: 1544382,
    //     "japan-toreca": 1485753,
    //     clove: 3845105,
    //     gacha24: 2332378,
    //     iris: 9691879
    // },
    // {
    //     date: new Date('2024/01/07 7:00'),
    //     "ex-toreca": 9107561,
    //     dopa: 8397817,
    //     "japan-toreca": 5724049,
    //     clove: 6270988,
    //     gacha24: 254951,
    //     iris: 3289414
    // },
    // {
    //     date: new Date('2024/01/07 8:00'),
    //     "ex-toreca": 7481079,
    //     dopa: 4731897,
    //     "japan-toreca": 4487869,
    //     clove: 2612018,
    //     gacha24: 2695521,
    //     iris: 4118150
    // },
    // {
    //     date: new Date('2024/01/07 9:00'),
    //     "ex-toreca": 2700790,
    //     dopa: 7875194,
    //     "japan-toreca": 5643814,
    //     clove: 3904119,
    //     gacha24: 3880112,
    //     iris: 1765678
    // },
    // {
    //     date: new Date('2024/01/07 10:00'),
    //     "ex-toreca": 9531796,
    //     dopa: 5540491,
    //     "japan-toreca": 6050050,
    //     clove: 4122333,
    //     gacha24: 7620564,
    //     iris: 8462814
    // },
    // {
    //     date: new Date('2024/01/07 11:00'),
    //     "ex-toreca": 3083912,
    //     dopa: 7946484,
    //     "japan-toreca": 7427825,
    //     clove: 2926264,
    //     gacha24: 2324969,
    //     iris: 1355034
    // },
    // {
    //     date: new Date('2024/01/07 12:00'),
    //     "ex-toreca": 233555,
    //     dopa: 8106331,
    //     "japan-toreca": 7634350,
    //     clove: 4013394,
    //     gacha24: 9184584,
    //     iris: 4360026
    // },
    // {
    //     date: new Date('2024/01/07 13:00'),
    //     "ex-toreca": 6555766,
    //     dopa: 4184789,
    //     "japan-toreca": 9478297,
    //     clove: 473639,
    //     gacha24: 8545839,
    //     iris: 2643267
    // },
    // {
    //     date: new Date('2024/01/07 14:00'),
    //     "ex-toreca": 7607648,
    //     dopa: 3786204,
    //     "japan-toreca": 2636066,
    //     clove: 1831506,
    //     gacha24: 4503603,
    //     iris: 2616414
    // },
    // {
    //     date: new Date('2024/01/07 15:00'),
    //     "ex-toreca": 7178874,
    //     dopa: 866715,
    //     "japan-toreca": 9458832,
    //     clove: 1126822,
    //     gacha24: 5097354,
    //     iris: 8021667
    // },
    // {
    //     date: new Date('2024/01/07 16:00'),
    //     "ex-toreca": 1821709,
    //     dopa: 6276474,
    //     "japan-toreca": 5309162,
    //     clove: 8331507,
    //     gacha24: 4832918,
    //     iris: 6040960
    // },
    // {
    //     date: new Date('2024/01/07 17:00'),
    //     "ex-toreca": 9688426,
    //     dopa: 6162118,
    //     "japan-toreca": 7404322,
    //     clove: 2361594,
    //     gacha24: 4234498,
    //     iris: 6814776
    // },
    // {
    //     date: new Date('2024/01/07 18:00'),
    //     "ex-toreca": 1362289,
    //     dopa: 8597031,
    //     "japan-toreca": 5487797,
    //     clove: 5865213,
    //     gacha24: 2738077,
    //     iris: 941060
    // },
    // {
    //     date: new Date('2024/01/07 19:00'),
    //     "ex-toreca": 7294693,
    //     dopa: 4286808,
    //     "japan-toreca": 9556878,
    //     clove: 9109845,
    //     gacha24: 2291010,
    //     iris: 4956658
    // },
    // {
    //     date: new Date('2024/01/07 20:00'),
    //     "ex-toreca": 4083853,
    //     dopa: 4787721,
    //     "japan-toreca": 8859129,
    //     clove: 1335748,
    //     gacha24: 5954099,
    //     iris: 6039259
    // },
    // {
    //     date: new Date('2024/01/07 21:00'),
    //     "ex-toreca": 5707111,
    //     dopa: 9213317,
    //     "japan-toreca": 5416800,
    //     clove: 50990,
    //     gacha24: 5088261,
    //     iris: 364231
    // },
    // {
    //     date: new Date('2024/01/07 22:00'),
    //     "ex-toreca": 4456787,
    //     dopa: 5378268,
    //     "japan-toreca": 5715138,
    //     clove: 7594888,
    //     gacha24: 9732748,
    //     iris: 6959228
    // },
    // {
    //     date: new Date('2024/01/07 23:00'),
    //     "ex-toreca": 1520091,
    //     dopa: 4692502,
    //     "japan-toreca": 3197073,
    //     clove: 8698040,
    //     gacha24: 1291469,
    //     iris: 5691446
    // },
    // {
    //     date: new Date('2024/01/08 0:00'),
    //     "ex-toreca": 2341989,
    //     dopa: 1017099,
    //     "japan-toreca": 1756875,
    //     clove: 1543834,
    //     gacha24: 9030301,
    //     iris: 6892967
    // },
    // {
    //     date: new Date('2024/01/08 1:00'),
    //     "ex-toreca": 2135132,
    //     dopa: 6704239,
    //     "japan-toreca": 420802,
    //     clove: 1477816,
    //     gacha24: 7454662,
    //     iris: 3044783
    // },
    // {
    //     date: new Date('2024/01/08 2:00'),
    //     "ex-toreca": 5333127,
    //     dopa: 1384666,
    //     "japan-toreca": 7999634,
    //     clove: 704436,
    //     gacha24: 7851623,
    //     iris: 5148454
    // },
    // {
    //     date: new Date('2024/01/08 3:00'),
    //     "ex-toreca": 120822,
    //     dopa: 7823394,
    //     "japan-toreca": 2615940,
    //     clove: 7441949,
    //     gacha24: 8319640,
    //     iris: 1997683
    // },
    // {
    //     date: new Date('2024/01/08 4:00'),
    //     "ex-toreca": 1304200,
    //     dopa: 2556483,
    //     "japan-toreca": 9090531,
    //     clove: 8398530,
    //     gacha24: 7773839,
    //     iris: 2084349
    // },
    // {
    //     date: new Date('2024/01/08 5:00'),
    //     "ex-toreca": 2060458,
    //     dopa: 6758215,
    //     "japan-toreca": 8705376,
    //     clove: 2203227,
    //     gacha24: 4272788,
    //     iris: 8290373
    // },
    // {
    //     date: new Date('2024/01/08 6:00'),
    //     "ex-toreca": 9898601,
    //     dopa: 9733733,
    //     "japan-toreca": 3479129,
    //     clove: 5603613,
    //     gacha24: 9837302,
    //     iris: 6488774
    // },
    // {
    //     date: new Date('2024/01/08 7:00'),
    //     "ex-toreca": 861180,
    //     dopa: 1061727,
    //     "japan-toreca": 9177764,
    //     clove: 9516063,
    //     gacha24: 2692273,
    //     iris: 7000789
    // },
    // {
    //     date: new Date('2024/01/08 8:00'),
    //     "ex-toreca": 6547536,
    //     dopa: 8784427,
    //     "japan-toreca": 8240360,
    //     clove: 6009991,
    //     gacha24: 9789156,
    //     iris: 379969
    // },
    // {
    //     date: new Date('2024/01/08 9:00'),
    //     "ex-toreca": 6269657,
    //     dopa: 5531032,
    //     "japan-toreca": 4580636,
    //     clove: 2009383,
    //     gacha24: 72150,
    //     iris: 6589843
    // },
    // {
    //     date: new Date('2024/01/08 10:00'),
    //     "ex-toreca": 7695567,
    //     dopa: 8127996,
    //     "japan-toreca": 659895,
    //     clove: 1840992,
    //     gacha24: 2986305,
    //     iris: 8680364
    // },
    // {
    //     date: new Date('2024/01/08 11:00'),
    //     "ex-toreca": 1261206,
    //     dopa: 5311268,
    //     "japan-toreca": 1767919,
    //     clove: 2592775,
    //     gacha24: 9917114,
    //     iris: 2232369
    // },
    // {
    //     date: new Date('2024/01/08 12:00'),
    //     "ex-toreca": 2500247,
    //     dopa: 8217476,
    //     "japan-toreca": 8586630,
    //     clove: 1366668,
    //     gacha24: 9207167,
    //     iris: 8866254
    // },
    // {
    //     date: new Date('2024/01/08 13:00'),
    //     "ex-toreca": 9016752,
    //     dopa: 7380761,
    //     "japan-toreca": 2500883,
    //     clove: 9641809,
    //     gacha24: 9765673,
    //     iris: 7016926
    // },
    // {
    //     date: new Date('2024/01/08 14:00'),
    //     "ex-toreca": 8760826,
    //     dopa: 788360,
    //     "japan-toreca": 8836233,
    //     clove: 5762052,
    //     gacha24: 2446535,
    //     iris: 1665863
    // },
    // {
    //     date: new Date('2024/01/08 15:00'),
    //     "ex-toreca": 5071994,
    //     dopa: 4239534,
    //     "japan-toreca": 4979316,
    //     clove: 7787651,
    //     gacha24: 6907493,
    //     iris: 2831146
    // },
    // {
    //     date: new Date('2024/01/08 16:00'),
    //     "ex-toreca": 4849132,
    //     dopa: 5148058,
    //     "japan-toreca": 9255239,
    //     clove: 7145881,
    //     gacha24: 7056584,
    //     iris: 3583671
    // },
    // {
    //     date: new Date('2024/01/08 17:00'),
    //     "ex-toreca": 6509297,
    //     dopa: 7539655,
    //     "japan-toreca": 1220222,
    //     clove: 3592638,
    //     gacha24: 296117,
    //     iris: 866846
    // },
    // {
    //     date: new Date('2024/01/08 18:00'),
    //     "ex-toreca": 9323717,
    //     dopa: 4482801,
    //     "japan-toreca": 5066413,
    //     clove: 5796643,
    //     gacha24: 7669703,
    //     iris: 4573944
    // },
    // {
    //     date: new Date('2024/01/08 19:00'),
    //     "ex-toreca": 7040743,
    //     dopa: 8614811,
    //     "japan-toreca": 1894523,
    //     clove: 818698,
    //     gacha24: 5704389,
    //     iris: 9050438
    // },
    // {
    //     date: new Date('2024/01/08 20:00'),
    //     "ex-toreca": 7234824,
    //     dopa: 6016587,
    //     "japan-toreca": 1337654,
    //     clove: 3950910,
    //     gacha24: 2876391,
    //     iris: 2500365
    // },
    // {
    //     date: new Date('2024/01/08 21:00'),
    //     "ex-toreca": 4309762,
    //     dopa: 6119654,
    //     "japan-toreca": 8005817,
    //     clove: 3787190,
    //     gacha24: 6205264,
    //     iris: 4242715
    // },
    // {
    //     date: new Date('2024/01/08 22:00'),
    //     "ex-toreca": 4896543,
    //     dopa: 1739948,
    //     "japan-toreca": 6240597,
    //     clove: 6531009,
    //     gacha24: 2713869,
    //     iris: 3441459
    // },
    // {
    //     date: new Date('2024/01/08 23:00'),
    //     "ex-toreca": 3130364,
    //     dopa: 3236554,
    //     "japan-toreca": 3460255,
    //     clove: 1359104,
    //     gacha24: 8623716,
    //     iris: 3533982
    // },
    // {
    //     date: new Date('2024/01/09 0:00'),
    //     "ex-toreca": 9285332,
    //     dopa: 7010145,
    //     "japan-toreca": 8188952,
    //     clove: 6244656,
    //     gacha24: 9088917,
    //     iris: 7293736
    // },
    // {
    //     date: new Date('2024/01/09 1:00'),
    //     "ex-toreca": 7557693,
    //     dopa: 8529394,
    //     "japan-toreca": 4900650,
    //     clove: 6563451,
    //     gacha24: 9754066,
    //     iris: 3430760
    // },
    // {
    //     date: new Date('2024/01/09 2:00'),
    //     "ex-toreca": 4740754,
    //     dopa: 6643462,
    //     "japan-toreca": 6194760,
    //     clove: 7814334,
    //     gacha24: 4335422,
    //     iris: 4490213
    // },
    // {
    //     date: new Date('2024/01/09 3:00'),
    //     "ex-toreca": 8045374,
    //     dopa: 6609621,
    //     "japan-toreca": 3186040,
    //     clove: 988845,
    //     gacha24: 7927849,
    //     iris: 1113197
    // },
    // {
    //     date: new Date('2024/01/09 4:00'),
    //     "ex-toreca": 8890228,
    //     dopa: 8298109,
    //     "japan-toreca": 4986901,
    //     clove: 179292,
    //     gacha24: 5845608,
    //     iris: 5463896
    // },
    // {
    //     date: new Date('2024/01/09 5:00'),
    //     "ex-toreca": 414855,
    //     dopa: 852094,
    //     "japan-toreca": 7861351,
    //     clove: 5274862,
    //     gacha24: 3193124,
    //     iris: 872317
    // },
    // {
    //     date: new Date('2024/01/09 6:00'),
    //     "ex-toreca": 8057672,
    //     dopa: 5749015,
    //     "japan-toreca": 1621567,
    //     clove: 8432209,
    //     gacha24: 1997464,
    //     iris: 8732860
    // },
    // {
    //     date: new Date('2024/01/09 7:00'),
    //     "ex-toreca": 2493518,
    //     dopa: 9587196,
    //     "japan-toreca": 5192071,
    //     clove: 6240976,
    //     gacha24: 9413674,
    //     iris: 2347323
    // },
    // {
    //     date: new Date('2024/01/09 8:00'),
    //     "ex-toreca": 7859697,
    //     dopa: 6732835,
    //     "japan-toreca": 5036514,
    //     clove: 890111,
    //     gacha24: 8443058,
    //     iris: 5180874
    // },
    // {
    //     date: new Date('2024/01/09 9:00'),
    //     "ex-toreca": 4581887,
    //     dopa: 8417631,
    //     "japan-toreca": 9250503,
    //     clove: 4768354,
    //     gacha24: 7614786,
    //     iris: 557263
    // },
    // {
    //     date: new Date('2024/01/09 10:00'),
    //     "ex-toreca": 1808647,
    //     dopa: 6189079,
    //     "japan-toreca": 4628075,
    //     clove: 6315864,
    //     gacha24: 4114566,
    //     iris: 8293081
    // },
    // {
    //     date: new Date('2024/01/09 11:00'),
    //     "ex-toreca": 9816719,
    //     dopa: 4134766,
    //     "japan-toreca": 9680763,
    //     clove: 1359646,
    //     gacha24: 3363637,
    //     iris: 8367152
    // },
    // {
    //     date: new Date('2024/01/09 12:00'),
    //     "ex-toreca": 6167105,
    //     dopa: 7218722,
    //     "japan-toreca": 7225566,
    //     clove: 9584437,
    //     gacha24: 5438197,
    //     iris: 2462079
    // },
    // {
    //     date: new Date('2024/01/09 13:00'),
    //     "ex-toreca": 9632280,
    //     dopa: 4366217,
    //     "japan-toreca": 1902407,
    //     clove: 1865258,
    //     gacha24: 3118975,
    //     iris: 3871809
    // },
    // {
    //     date: new Date('2024/01/09 14:00'),
    //     "ex-toreca": 6637605,
    //     dopa: 9935380,
    //     "japan-toreca": 1762512,
    //     clove: 7419659,
    //     gacha24: 480837,
    //     iris: 7075044
    // },
    // {
    //     date: new Date('2024/01/09 15:00'),
    //     "ex-toreca": 7433137,
    //     dopa: 3498157,
    //     "japan-toreca": 7068177,
    //     clove: 4338970,
    //     gacha24: 4930819,
    //     iris: 6986355
    // },
    // {
    //     date: new Date('2024/01/09 16:00'),
    //     "ex-toreca": 6678129,
    //     dopa: 4922271,
    //     "japan-toreca": 7108291,
    //     clove: 1191776,
    //     gacha24: 4010669,
    //     iris: 3253369
    // },
    // {
    //     date: new Date('2024/01/09 17:00'),
    //     "ex-toreca": 6611057,
    //     dopa: 9232331,
    //     "japan-toreca": 2028636,
    //     clove: 4075285,
    //     gacha24: 4115067,
    //     iris: 5403234
    // },
    // {
    //     date: new Date('2024/01/09 18:00'),
    //     "ex-toreca": 9796270,
    //     dopa: 4999613,
    //     "japan-toreca": 9372553,
    //     clove: 5878615,
    //     gacha24: 5637578,
    //     iris: 7263463
    // },
    // {
    //     date: new Date('2024/01/09 19:00'),
    //     "ex-toreca": 3495956,
    //     dopa: 2705932,
    //     "japan-toreca": 7563024,
    //     clove: 5777022,
    //     gacha24: 7240915,
    //     iris: 6845931
    // },
    // {
    //     date: new Date('2024/01/09 20:00'),
    //     "ex-toreca": 9023486,
    //     dopa: 3536181,
    //     "japan-toreca": 4949819,
    //     clove: 6160140,
    //     gacha24: 2992649,
    //     iris: 9655541
    // },
    // {
    //     date: new Date('2024/01/09 21:00'),
    //     "ex-toreca": 8410743,
    //     dopa: 3471623,
    //     "japan-toreca": 3323041,
    //     clove: 3513873,
    //     gacha24: 4368841,
    //     iris: 2079708
    // },
    // {
    //     date: new Date('2024/01/09 22:00'),
    //     "ex-toreca": 8271774,
    //     dopa: 6999401,
    //     "japan-toreca": 2745887,
    //     clove: 8393954,
    //     gacha24: 5058552,
    //     iris: 7858708
    // },
    // {
    //     date: new Date('2024/01/09 23:00'),
    //     "ex-toreca": 8043225,
    //     dopa: 1231487,
    //     "japan-toreca": 473750,
    //     clove: 7573622,
    //     gacha24: 5743423,
    //     iris: 3959242
    // },
    // {
    //     date: new Date('2024/01/10 0:00'),
    //     "ex-toreca": 8720797,
    //     dopa: 2729462,
    //     "japan-toreca": 9854302,
    //     clove: 9944394,
    //     gacha24: 5031638,
    //     iris: 1805801
    // },
    // {
    //     date: new Date('2024/01/10 1:00'),
    //     "ex-toreca": 2451292,
    //     dopa: 5648801,
    //     "japan-toreca": 8509086,
    //     clove: 7031836,
    //     gacha24: 33276,
    //     iris: 2263781
    // },
    // {
    //     date: new Date('2024/01/10 2:00'),
    //     "ex-toreca": 3866257,
    //     dopa: 5417442,
    //     "japan-toreca": 1120604,
    //     clove: 6492063,
    //     gacha24: 815632,
    //     iris: 9060897
    // },
    // {
    //     date: new Date('2024/01/10 3:00'),
    //     "ex-toreca": 6424817,
    //     dopa: 8928895,
    //     "japan-toreca": 5770282,
    //     clove: 193643,
    //     gacha24: 3959699,
    //     iris: 9522601
    // },
    // {
    //     date: new Date('2024/01/10 4:00'),
    //     "ex-toreca": 3010294,
    //     dopa: 1494271,
    //     "japan-toreca": 7688223,
    //     clove: 6497562,
    //     gacha24: 8578043,
    //     iris: 6742053
    // },
    // {
    //     date: new Date('2024/01/10 5:00'),
    //     "ex-toreca": 8415341,
    //     dopa: 4566442,
    //     "japan-toreca": 7814765,
    //     clove: 8731070,
    //     gacha24: 2054680,
    //     iris: 7347595
    // },
    // {
    //     date: new Date('2024/01/10 6:00'),
    //     "ex-toreca": 6739661,
    //     dopa: 8060553,
    //     "japan-toreca": 6017937,
    //     clove: 1715887,
    //     gacha24: 6358189,
    //     iris: 7492192
    // },
    // {
    //     date: new Date('2024/01/10 7:00'),
    //     "ex-toreca": 9207167,
    //     dopa: 2726848,
    //     "japan-toreca": 8156942,
    //     clove: 4155852,
    //     gacha24: 5782796,
    //     iris: 6794288
    // },
    // {
    //     date: new Date('2024/01/10 8:00'),
    //     "ex-toreca": 2535515,
    //     dopa: 4839394,
    //     "japan-toreca": 9851466,
    //     clove: 1082986,
    //     gacha24: 1983657,
    //     iris: 3580511
    // },
    // {
    //     date: new Date('2024/01/10 9:00'),
    //     "ex-toreca": 3327287,
    //     dopa: 6841159,
    //     "japan-toreca": 4435904,
    //     clove: 2208277,
    //     gacha24: 4528037,
    //     iris: 8915420
    // },
    // {
    //     date: new Date('2024/01/10 10:00'),
    //     "ex-toreca": 622346,
    //     dopa: 7326995,
    //     "japan-toreca": 9442635,
    //     clove: 3052453,
    //     gacha24: 4470702,
    //     iris: 1456616
    // },
    // {
    //     date: new Date('2024/01/10 11:00'),
    //     "ex-toreca": 8155706,
    //     dopa: 2252269,
    //     "japan-toreca": 5227209,
    //     clove: 5966051,
    //     gacha24: 8666919,
    //     iris: 5055899
    // },
    // {
    //     date: new Date('2024/01/10 12:00'),
    //     "ex-toreca": 7173698,
    //     dopa: 4027014,
    //     "japan-toreca": 8234965,
    //     clove: 2239300,
    //     gacha24: 9625097,
    //     iris: 5776959
    // },
    // {
    //     date: new Date('2024/01/10 13:00'),
    //     "ex-toreca": 161310,
    //     dopa: 2495966,
    //     "japan-toreca": 6111493,
    //     clove: 1973401,
    //     gacha24: 7349546,
    //     iris: 7075712
    // },
    // {
    //     date: new Date('2024/01/10 14:00'),
    //     "ex-toreca": 8272346,
    //     dopa: 4995566,
    //     "japan-toreca": 145634,
    //     clove: 2258657,
    //     gacha24: 5297997,
    //     iris: 7402886
    // },
    // {
    //     date: new Date('2024/01/10 15:00'),
    //     "ex-toreca": 5354415,
    //     dopa: 1008752,
    //     "japan-toreca": 2396276,
    //     clove: 7986123,
    //     gacha24: 7643951,
    //     iris: 2983829
    // },
    // {
    //     date: new Date('2024/01/10 16:00'),
    //     "ex-toreca": 8563188,
    //     dopa: 7324371,
    //     "japan-toreca": 5225058,
    //     clove: 9294437,
    //     gacha24: 9278790,
    //     iris: 2365876
    // },
    // {
    //     date: new Date('2024/01/10 17:00'),
    //     "ex-toreca": 8789018,
    //     dopa: 4358286,
    //     "japan-toreca": 3313533,
    //     clove: 1407326,
    //     gacha24: 4490669,
    //     iris: 8973680
    // },
    // {
    //     date: new Date('2024/01/10 18:00'),
    //     "ex-toreca": 3065555,
    //     dopa: 2112223,
    //     "japan-toreca": 6089014,
    //     clove: 5906721,
    //     gacha24: 531446,
    //     iris: 7603964
    // },
    // {
    //     date: new Date('2024/01/10 19:00'),
    //     "ex-toreca": 4289637,
    //     dopa: 8253137,
    //     "japan-toreca": 6634585,
    //     clove: 5460826,
    //     gacha24: 3218533,
    //     iris: 4682442
    // },
    // {
    //     date: new Date('2024/01/10 20:00'),
    //     "ex-toreca": 7346747,
    //     dopa: 1012523,
    //     "japan-toreca": 8467671,
    //     clove: 7469211,
    //     gacha24: 5190683,
    //     iris: 358711
    // },
    // {
    //     date: new Date('2024/01/10 21:00'),
    //     "ex-toreca": 9357575,
    //     dopa: 6141824,
    //     "japan-toreca": 3728527,
    //     clove: 1914493,
    //     gacha24: 1667002,
    //     iris: 5704150
    // },
    // {
    //     date: new Date('2024/01/10 22:00'),
    //     "ex-toreca": 8227998,
    //     dopa: 4551431,
    //     "japan-toreca": 6468086,
    //     clove: 7715269,
    //     gacha24: 2427217,
    //     iris: 9518713
    // },
    // {
    //     date: new Date('2024/01/10 23:00'),
    //     "ex-toreca": 2150236,
    //     dopa: 4995336,
    //     "japan-toreca": 4526787,
    //     clove: 6580307,
    //     gacha24: 1517870,
    //     iris: 4732313
    // },
    // {
    //     date: new Date('2024/01/11 0:00'),
    //     "ex-toreca": 3262566,
    //     dopa: 1567801,
    //     "japan-toreca": 2593653,
    //     clove: 4646771,
    //     gacha24: 1860697,
    //     iris: 4332758
    // },
    // {
    //     date: new Date('2024/01/11 1:00'),
    //     "ex-toreca": 9728401,
    //     dopa: 9771548,
    //     "japan-toreca": 175732,
    //     clove: 6102470,
    //     gacha24: 709157,
    //     iris: 4641774
    // },
    // {
    //     date: new Date('2024/01/11 2:00'),
    //     "ex-toreca": 6716743,
    //     dopa: 4159608,
    //     "japan-toreca": 2119091,
    //     clove: 5981229,
    //     gacha24: 2835626,
    //     iris: 7074011
    // },
    // {
    //     date: new Date('2024/01/11 3:00'),
    //     "ex-toreca": 8063108,
    //     dopa: 4587298,
    //     "japan-toreca": 9889124,
    //     clove: 9603576,
    //     gacha24: 8828640,
    //     iris: 8999903
    // },
    // {
    //     date: new Date('2024/01/11 4:00'),
    //     "ex-toreca": 3026208,
    //     dopa: 4400358,
    //     "japan-toreca": 9716793,
    //     clove: 6140693,
    //     gacha24: 5176964,
    //     iris: 5654136
    // },
    // {
    //     date: new Date('2024/01/11 5:00'),
    //     "ex-toreca": 7119011,
    //     dopa: 504424,
    //     "japan-toreca": 6147603,
    //     clove: 3243309,
    //     gacha24: 9043442,
    //     iris: 4685388
    // },
    // {
    //     date: new Date('2024/01/11 6:00'),
    //     "ex-toreca": 7978297,
    //     dopa: 9340166,
    //     "japan-toreca": 3200482,
    //     clove: 8214656,
    //     gacha24: 5357270,
    //     iris: 168775
    // },
    // {
    //     date: new Date('2024/01/11 7:00'),
    //     "ex-toreca": 2531811,
    //     dopa: 7781556,
    //     "japan-toreca": 7413104,
    //     clove: 9164236,
    //     gacha24: 7251931,
    //     iris: 7686731
    // },
    // {
    //     date: new Date('2024/01/11 8:00'),
    //     "ex-toreca": 1582579,
    //     dopa: 2562298,
    //     "japan-toreca": 1075964,
    //     clove: 1568897,
    //     gacha24: 6796139,
    //     iris: 7160118
    // },
    // {
    //     date: new Date('2024/01/11 9:00'),
    //     "ex-toreca": 6181153,
    //     dopa: 1519705,
    //     "japan-toreca": 5598977,
    //     clove: 6784184,
    //     gacha24: 400143,
    //     iris: 5260748
    // },
    // {
    //     date: new Date('2024/01/11 10:00'),
    //     "ex-toreca": 7383773,
    //     dopa: 8605452,
    //     "japan-toreca": 7918245,
    //     clove: 1741965,
    //     gacha24: 2905914,
    //     iris: 3170516
    // },
    // {
    //     date: new Date('2024/01/11 11:00'),
    //     "ex-toreca": 8030905,
    //     dopa: 1784411,
    //     "japan-toreca": 2387574,
    //     clove: 3725003,
    //     gacha24: 2960751,
    //     iris: 1385263
    // },
    // {
    //     date: new Date('2024/01/11 12:00'),
    //     "ex-toreca": 4732515,
    //     dopa: 3507957,
    //     "japan-toreca": 5521921,
    //     clove: 6782252,
    //     gacha24: 4663806,
    //     iris: 6976487
    // },
    // {
    //     date: new Date('2024/01/11 13:00'),
    //     "ex-toreca": 2013474,
    //     dopa: 1887269,
    //     "japan-toreca": 9083417,
    //     clove: 4082893,
    //     gacha24: 1471114,
    //     iris: 3593643
    // },
    // {
    //     date: new Date('2024/01/11 14:00'),
    //     "ex-toreca": 2359264,
    //     dopa: 1341709,
    //     "japan-toreca": 565226,
    //     clove: 5715353,
    //     gacha24: 772956,
    //     iris: 9714325
    // },
    // {
    //     date: new Date('2024/01/11 15:00'),
    //     "ex-toreca": 8528238,
    //     dopa: 7471427,
    //     "japan-toreca": 8870795,
    //     clove: 3795986,
    //     gacha24: 7854621,
    //     iris: 1880002
    // },
    // {
    //     date: new Date('2024/01/11 16:00'),
    //     "ex-toreca": 6889718,
    //     dopa: 1294241,
    //     "japan-toreca": 5312768,
    //     clove: 7832388,
    //     gacha24: 1986174,
    //     iris: 6594188
    // },
    // {
    //     date: new Date('2024/01/11 17:00'),
    //     "ex-toreca": 5681507,
    //     dopa: 2644546,
    //     "japan-toreca": 4698623,
    //     clove: 3124159,
    //     gacha24: 3543804,
    //     iris: 407386
    // },
    // {
    //     date: new Date('2024/01/11 18:00'),
    //     "ex-toreca": 1505989,
    //     dopa: 4432897,
    //     "japan-toreca": 9737749,
    //     clove: 5263624,
    //     gacha24: 6283734,
    //     iris: 4748670
    // },
    // {
    //     date: new Date('2024/01/11 19:00'),
    //     "ex-toreca": 3990704,
    //     dopa: 4129648,
    //     "japan-toreca": 1094820,
    //     clove: 8985169,
    //     gacha24: 3834035,
    //     iris: 6629583
    // },
    // {
    //     date: new Date('2024/01/11 20:00'),
    //     "ex-toreca": 5582810,
    //     dopa: 2937669,
    //     "japan-toreca": 8974583,
    //     clove: 8301609,
    //     gacha24: 2893798,
    //     iris: 500581
    // },
    // {
    //     date: new Date('2024/01/11 21:00'),
    //     "ex-toreca": 7579988,
    //     dopa: 3645220,
    //     "japan-toreca": 155041,
    //     clove: 9762648,
    //     gacha24: 1061355,
    //     iris: 5608254
    // },
    // {
    //     date: new Date('2024/01/11 22:00'),
    //     "ex-toreca": 4818300,
    //     dopa: 7353515,
    //     "japan-toreca": 6086862,
    //     clove: 6593436,
    //     gacha24: 6455086,
    //     iris: 6535054
    // },
    // {
    //     date: new Date('2024/01/11 23:00'),
    //     "ex-toreca": 8104667,
    //     dopa: 6478535,
    //     "japan-toreca": 4260288,
    //     clove: 3543968,
    //     gacha24: 4055410,
    //     iris: 4217296
    // },
    // {
    //     date: new Date('2024/01/12 0:00'),
    //     "ex-toreca": 362873,
    //     dopa: 5042760,
    //     "japan-toreca": 5930626,
    //     clove: 3201018,
    //     gacha24: 2592612,
    //     iris: 4343235
    // },
    // {
    //     date: new Date('2024/01/12 1:00'),
    //     "ex-toreca": 5025141,
    //     dopa: 6105558,
    //     "japan-toreca": 5431053,
    //     clove: 5930990,
    //     gacha24: 998453,
    //     iris: 6257009
    // },
    // {
    //     date: new Date('2024/01/12 2:00'),
    //     "ex-toreca": 5018058,
    //     dopa: 958064,
    //     "japan-toreca": 2578218,
    //     clove: 2910163,
    //     gacha24: 1411558,
    //     iris: 8740225
    // },
    // {
    //     date: new Date('2024/01/12 3:00'),
    //     "ex-toreca": 180922,
    //     dopa: 7628702,
    //     "japan-toreca": 6758261,
    //     clove: 4124944,
    //     gacha24: 9364618,
    //     iris: 7674787
    // },
    // {
    //     date: new Date('2024/01/12 4:00'),
    //     "ex-toreca": 7807969,
    //     dopa: 9597513,
    //     "japan-toreca": 4518319,
    //     clove: 5891601,
    //     gacha24: 3806900,
    //     iris: 7079827
    // },
    // {
    //     date: new Date('2024/01/12 5:00'),
    //     "ex-toreca": 9028807,
    //     dopa: 2626949,
    //     "japan-toreca": 8337828,
    //     clove: 5828079,
    //     gacha24: 957957,
    //     iris: 857135
    // },
    // {
    //     date: new Date('2024/01/12 6:00'),
    //     "ex-toreca": 8967002,
    //     dopa: 7062966,
    //     "japan-toreca": 8390604,
    //     clove: 181928,
    //     gacha24: 1002155,
    //     iris: 7814609
    // },
    // {
    //     date: new Date('2024/01/12 7:00'),
    //     "ex-toreca": 5726608,
    //     dopa: 6586906,
    //     "japan-toreca": 8881100,
    //     clove: 6424778,
    //     gacha24: 2139748,
    //     iris: 8619469
    // },
    // {
    //     date: new Date('2024/01/12 8:00'),
    //     "ex-toreca": 8898525,
    //     dopa: 8929010,
    //     "japan-toreca": 4610070,
    //     clove: 1234157,
    //     gacha24: 5721367,
    //     iris: 5440019
    // },
    // {
    //     date: new Date('2024/01/12 9:00'),
    //     "ex-toreca": 7693738,
    //     dopa: 5099134,
    //     "japan-toreca": 9951190,
    //     clove: 5802805,
    //     gacha24: 8573000,
    //     iris: 3828716
    // },
    // {
    //     date: new Date('2024/01/12 10:00'),
    //     "ex-toreca": 7543809,
    //     dopa: 9038453,
    //     "japan-toreca": 9200273,
    //     clove: 9207878,
    //     gacha24: 7819542,
    //     iris: 3596995
    // },
    // {
    //     date: new Date('2024/01/12 11:00'),
    //     "ex-toreca": 7666680,
    //     dopa: 8810204,
    //     "japan-toreca": 5842223,
    //     clove: 4086269,
    //     gacha24: 6141851,
    //     iris: 4920478
    // },
    // {
    //     date: new Date('2024/01/12 12:00'),
    //     "ex-toreca": 4971487,
    //     dopa: 3764209,
    //     "japan-toreca": 3018089,
    //     clove: 3323835,
    //     gacha24: 7143280,
    //     iris: 2930329
    // },
    // {
    //     date: new Date('2024/01/12 13:00'),
    //     "ex-toreca": 8638078,
    //     dopa: 847589,
    //     "japan-toreca": 7592366,
    //     clove: 1319511,
    //     gacha24: 9456818,
    //     iris: 6961264
    // },
    // {
    //     date: new Date('2024/01/12 14:00'),
    //     "ex-toreca": 5705870,
    //     dopa: 3959934,
    //     "japan-toreca": 1063193,
    //     clove: 7664132,
    //     gacha24: 8752750,
    //     iris: 9951380
    // },
    // {
    //     date: new Date('2024/01/12 15:00'),
    //     "ex-toreca": 6526206,
    //     dopa: 2459514,
    //     "japan-toreca": 2918382,
    //     clove: 9046304,
    //     gacha24: 4184177,
    //     iris: 3046987
    // },
    // {
    //     date: new Date('2024/01/12 16:00'),
    //     "ex-toreca": 4626445,
    //     dopa: 7238605,
    //     "japan-toreca": 3650121,
    //     clove: 4076944,
    //     gacha24: 9218308,
    //     iris: 4736646
    // },
    // {
    //     date: new Date('2024/01/12 17:00'),
    //     "ex-toreca": 5534703,
    //     dopa: 4065186,
    //     "japan-toreca": 9574029,
    //     clove: 6157191,
    //     gacha24: 4613204,
    //     iris: 6297062
    // },
    // {
    //     date: new Date('2024/01/12 18:00'),
    //     "ex-toreca": 4806450,
    //     dopa: 8648764,
    //     "japan-toreca": 7922972,
    //     clove: 6442115,
    //     gacha24: 4376517,
    //     iris: 810454
    // },
    // {
    //     date: new Date('2024/01/12 19:00'),
    //     "ex-toreca": 892099,
    //     dopa: 2580095,
    //     "japan-toreca": 7154919,
    //     clove: 2078481,
    //     gacha24: 7040129,
    //     iris: 9839815
    // },
    // {
    //     date: new Date('2024/01/12 20:00'),
    //     "ex-toreca": 6229136,
    //     dopa: 8215137,
    //     "japan-toreca": 5818531,
    //     clove: 9667414,
    //     gacha24: 8564174,
    //     iris: 5946592
    // },
    // {
    //     date: new Date('2024/01/12 21:00'),
    //     "ex-toreca": 9227386,
    //     dopa: 703245,
    //     "japan-toreca": 7917065,
    //     clove: 4730137,
    //     gacha24: 6781627,
    //     iris: 7249987
    // },
    // {
    //     date: new Date('2024/01/12 22:00'),
    //     "ex-toreca": 441717,
    //     dopa: 7876881,
    //     "japan-toreca": 7896326,
    //     clove: 7086460,
    //     gacha24: 7614697,
    //     iris: 6091196
    // },
    // {
    //     date: new Date('2024/01/12 23:00'),
    //     "ex-toreca": 488282,
    //     dopa: 8871652,
    //     "japan-toreca": 2870680,
    //     clove: 417551,
    //     gacha24: 701548,
    //     iris: 9248625
    // },
    // {
    //     date: new Date('2024/01/13 0:00'),
    //     "ex-toreca": 2890897,
    //     dopa: 9694029,
    //     "japan-toreca": 8901774,
    //     clove: 3938101,
    //     gacha24: 7402796,
    //     iris: 261504
    // },
    // {
    //     date: new Date('2024/01/13 1:00'),
    //     "ex-toreca": 1930685,
    //     dopa: 8697616,
    //     "japan-toreca": 8077786,
    //     clove: 3867071,
    //     gacha24: 8314316,
    //     iris: 9904077
    // },
    // {
    //     date: new Date('2024/01/13 2:00'),
    //     "ex-toreca": 3322463,
    //     dopa: 5371451,
    //     "japan-toreca": 4113834,
    //     clove: 4122183,
    //     gacha24: 1062792,
    //     iris: 4806358
    // },
    // {
    //     date: new Date('2024/01/13 3:00'),
    //     "ex-toreca": 1560276,
    //     dopa: 6081000,
    //     "japan-toreca": 2420538,
    //     clove: 5653901,
    //     gacha24: 217713,
    //     iris: 8373703
    // },
    // {
    //     date: new Date('2024/01/13 4:00'),
    //     "ex-toreca": 1476354,
    //     dopa: 4758106,
    //     "japan-toreca": 1766577,
    //     clove: 9227664,
    //     gacha24: 2395453,
    //     iris: 4689050
    // },
    // {
    //     date: new Date('2024/01/13 5:00'),
    //     "ex-toreca": 4460519,
    //     dopa: 1601542,
    //     "japan-toreca": 6916401,
    //     clove: 2858159,
    //     gacha24: 6105480,
    //     iris: 3659101
    // },
    // {
    //     date: new Date('2024/01/13 6:00'),
    //     "ex-toreca": 9840867,
    //     dopa: 4836837,
    //     "japan-toreca": 802501,
    //     clove: 2845004,
    //     gacha24: 5999568,
    //     iris: 9559191
    // },
    // {
    //     date: new Date('2024/01/13 7:00'),
    //     "ex-toreca": 3619975,
    //     dopa: 5242116,
    //     "japan-toreca": 4644730,
    //     clove: 6773969,
    //     gacha24: 1030940,
    //     iris: 2877954
    // },
    // {
    //     date: new Date('2024/01/13 8:00'),
    //     "ex-toreca": 2646729,
    //     dopa: 9548509,
    //     "japan-toreca": 3017272,
    //     clove: 9088037,
    //     gacha24: 2870267,
    //     iris: 2823852
    // },
    // {
    //     date: new Date('2024/01/13 9:00'),
    //     "ex-toreca": 8551786,
    //     dopa: 6165902,
    //     "japan-toreca": 7680617,
    //     clove: 5220236,
    //     gacha24: 4965380,
    //     iris: 1725876
    // },
    // {
    //     date: new Date('2024/01/13 10:00'),
    //     "ex-toreca": 166941,
    //     dopa: 1267329,
    //     "japan-toreca": 9479584,
    //     clove: 2712315,
    //     gacha24: 9875243,
    //     iris: 3155009
    // },
    // {
    //     date: new Date('2024/01/13 11:00'),
    //     "ex-toreca": 2101704,
    //     dopa: 353831,
    //     "japan-toreca": 5959893,
    //     clove: 4844486,
    //     gacha24: 9611263,
    //     iris: 5879949
    // },
    // {
    //     date: new Date('2024/01/13 12:00'),
    //     "ex-toreca": 630297,
    //     dopa: 7983905,
    //     "japan-toreca": 2986453,
    //     clove: 1094512,
    //     gacha24: 6143590,
    //     iris: 8514025
    // },
    // {
    //     date: new Date('2024/01/13 13:00'),
    //     "ex-toreca": 5898732,
    //     dopa: 5350020,
    //     "japan-toreca": 8739544,
    //     clove: 1186171,
    //     gacha24: 9993866,
    //     iris: 3228395
    // },
    // {
    //     date: new Date('2024/01/13 14:00'),
    //     "ex-toreca": 947977,
    //     dopa: 6563801,
    //     "japan-toreca": 4241199,
    //     clove: 9070246,
    //     gacha24: 3411540,
    //     iris: 5599164
    // },
    // {
    //     date: new Date('2024/01/13 15:00'),
    //     "ex-toreca": 9510878,
    //     dopa: 8473384,
    //     "japan-toreca": 4452521,
    //     clove: 7710313,
    //     gacha24: 3232680,
    //     iris: 4758959
    // },
    // {
    //     date: new Date('2024/01/13 16:00'),
    //     "ex-toreca": 4084651,
    //     dopa: 1600874,
    //     "japan-toreca": 2797491,
    //     clove: 1601976,
    //     gacha24: 5693401,
    //     iris: 7775353
    // },
    // {
    //     date: new Date('2024/01/13 17:00'),
    //     "ex-toreca": 2017008,
    //     dopa: 7572170,
    //     "japan-toreca": 5276040,
    //     clove: 8128011,
    //     gacha24: 2341465,
    //     iris: 6190630
    // },
    // {
    //     date: new Date('2024/01/13 18:00'),
    //     "ex-toreca": 1778230,
    //     dopa: 2215522,
    //     "japan-toreca": 9476180,
    //     clove: 934564,
    //     gacha24: 7732753,
    //     iris: 2865569
    // },
    // {
    //     date: new Date('2024/01/13 19:00'),
    //     "ex-toreca": 8129824,
    //     dopa: 118500,
    //     "japan-toreca": 2337630,
    //     clove: 9706634,
    //     gacha24: 1952329,
    //     iris: 8628268
    // },
    // {
    //     date: new Date('2024/01/13 20:00'),
    //     "ex-toreca": 5456355,
    //     dopa: 1934441,
    //     "japan-toreca": 5545850,
    //     clove: 6146678,
    //     gacha24: 1178281,
    //     iris: 8699005
    // },
    // {
    //     date: new Date('2024/01/13 21:00'),
    //     "ex-toreca": 7845534,
    //     dopa: 4711973,
    //     "japan-toreca": 4105819,
    //     clove: 6310164,
    //     gacha24: 6403714,
    //     iris: 3891685
    // },
    // {
    //     date: new Date('2024/01/13 22:00'),
    //     "ex-toreca": 9474249,
    //     dopa: 7866094,
    //     "japan-toreca": 9953184,
    //     clove: 9151785,
    //     gacha24: 6458859,
    //     iris: 9052345
    // },
    // {
    //     date: new Date('2024/01/13 23:00'),
    //     "ex-toreca": 8770278,
    //     dopa: 9792551,
    //     "japan-toreca": 5944629,
    //     clove: 3671488,
    //     gacha24: 5295743,
    //     iris: 3720211
    // },
    // {
    //     date: new Date('2024/01/14 0:00'),
    //     "ex-toreca": 4662476,
    //     dopa: 8134467,
    //     "japan-toreca": 6855812,
    //     clove: 7187887,
    //     gacha24: 6957496,
    //     iris: 5931707
    // },
    // {
    //     date: new Date('2024/01/14 1:00'),
    //     "ex-toreca": 7816710,
    //     dopa: 9769785,
    //     "japan-toreca": 7778820,
    //     clove: 7111827,
    //     gacha24: 7600151,
    //     iris: 8404444
    // },
    // {
    //     date: new Date('2024/01/14 2:00'),
    //     "ex-toreca": 6023519,
    //     dopa: 7900838,
    //     "japan-toreca": 9112779,
    //     clove: 8189521,
    //     gacha24: 6916516,
    //     iris: 7205941
    // },
    // {
    //     date: new Date('2024/01/14 3:00'),
    //     "ex-toreca": 4852669,
    //     dopa: 2590221,
    //     "japan-toreca": 3408214,
    //     clove: 6146473,
    //     gacha24: 2750112,
    //     iris: 7756330
    // },
    // {
    //     date: new Date('2024/01/14 4:00'),
    //     "ex-toreca": 4791202,
    //     dopa: 2139544,
    //     "japan-toreca": 1221569,
    //     clove: 1094156,
    //     gacha24: 6554028,
    //     iris: 3913694
    // },
    // {
    //     date: new Date('2024/01/14 5:00'),
    //     "ex-toreca": 5465964,
    //     dopa: 994088,
    //     "japan-toreca": 8515460,
    //     clove: 4482497,
    //     gacha24: 4542845,
    //     iris: 3045125
    // },
    // {
    //     date: new Date('2024/01/14 6:00'),
    //     "ex-toreca": 9203363,
    //     dopa: 8234779,
    //     "japan-toreca": 711124,
    //     clove: 3004632,
    //     gacha24: 5584386,
    //     iris: 4732782
    // },
    // {
    //     date: new Date('2024/01/14 7:00'),
    //     "ex-toreca": 3366610,
    //     dopa: 6637248,
    //     "japan-toreca": 8639872,
    //     clove: 252709,
    //     gacha24: 4424060,
    //     iris: 5419482
    // },
    // {
    //     date: new Date('2024/01/14 8:00'),
    //     "ex-toreca": 3212897,
    //     dopa: 3831605,
    //     "japan-toreca": 3238050,
    //     clove: 6854218,
    //     gacha24: 4162487,
    //     iris: 5405580
    // },
    // {
    //     date: new Date('2024/01/14 9:00'),
    //     "ex-toreca": 775867,
    //     dopa: 242689,
    //     "japan-toreca": 7331178,
    //     clove: 5016335,
    //     gacha24: 7233095,
    //     iris: 7356699
    // },
    // {
    //     date: new Date('2024/01/14 10:00'),
    //     "ex-toreca": 9384085,
    //     dopa: 342785,
    //     "japan-toreca": 6929227,
    //     clove: 8765578,
    //     gacha24: 4200598,
    //     iris: 3410461
    // },
    // {
    //     date: new Date('2024/01/14 11:00'),
    //     "ex-toreca": 2985836,
    //     dopa: 1373371,
    //     "japan-toreca": 7869040,
    //     clove: 2848462,
    //     gacha24: 1069193,
    //     iris: 1761311
    // },
    // {
    //     date: new Date('2024/01/14 12:00'),
    //     "ex-toreca": 4604203,
    //     dopa: 225102,
    //     "japan-toreca": 6239904,
    //     clove: 7905448,
    //     gacha24: 1259875,
    //     iris: 867753
    // },
    // {
    //     date: new Date('2024/01/14 13:00'),
    //     "ex-toreca": 6784790,
    //     dopa: 5922499,
    //     "japan-toreca": 3765286,
    //     clove: 6952079,
    //     gacha24: 7445552,
    //     iris: 2012930
    // },
    // {
    //     date: new Date('2024/01/14 14:00'),
    //     "ex-toreca": 8168490,
    //     dopa: 4633928,
    //     "japan-toreca": 8375554,
    //     clove: 6852350,
    //     gacha24: 7405556,
    //     iris: 940151
    // },
    // {
    //     date: new Date('2024/01/14 15:00'),
    //     "ex-toreca": 2836990,
    //     dopa: 5633104,
    //     "japan-toreca": 6867066,
    //     clove: 4754969,
    //     gacha24: 4629469,
    //     iris: 6223864
    // },
    // {
    //     date: new Date('2024/01/14 16:00'),
    //     "ex-toreca": 3512990,
    //     dopa: 4370958,
    //     "japan-toreca": 4263341,
    //     clove: 4584436,
    //     gacha24: 1266070,
    //     iris: 3040911
    // },
    // {
    //     date: new Date('2024/01/14 17:00'),
    //     "ex-toreca": 7130949,
    //     dopa: 236427,
    //     "japan-toreca": 1175579,
    //     clove: 5238987,
    //     gacha24: 1636427,
    //     iris: 3653068
    // },
    // {
    //     date: new Date('2024/01/14 18:00'),
    //     "ex-toreca": 8626456,
    //     dopa: 4170763,
    //     "japan-toreca": 6669192,
    //     clove: 3989064,
    //     gacha24: 7121573,
    //     iris: 7314990
    // },
    // {
    //     date: new Date('2024/01/14 19:00'),
    //     "ex-toreca": 5314681,
    //     dopa: 8260109,
    //     "japan-toreca": 9487502,
    //     clove: 9769078,
    //     gacha24: 5329267,
    //     iris: 2412432
    // },
    // {
    //     date: new Date('2024/01/14 20:00'),
    //     "ex-toreca": 7608414,
    //     dopa: 9102608,
    //     "japan-toreca": 6012913,
    //     clove: 9673748,
    //     gacha24: 1520734,
    //     iris: 1362688
    // },
    // {
    //     date: new Date('2024/01/14 21:00'),
    //     "ex-toreca": 9309377,
    //     dopa: 2756346,
    //     "japan-toreca": 496700,
    //     clove: 381673,
    //     gacha24: 918546,
    //     iris: 1435220
    // },
    // {
    //     date: new Date('2024/01/14 22:00'),
    //     "ex-toreca": 7937778,
    //     dopa: 7594782,
    //     "japan-toreca": 1658566,
    //     clove: 5006081,
    //     gacha24: 2237431,
    //     iris: 5279890
    // },
    // {
    //     date: new Date('2024/01/14 23:00'),
    //     "ex-toreca": 2338463,
    //     dopa: 4407982,
    //     "japan-toreca": 5084288,
    //     clove: 5717323,
    //     gacha24: 7999409,
    //     iris: 5249866
    // },
    // {
    //     date: new Date('2024/01/15 0:00'),
    //     "ex-toreca": 8761679,
    //     dopa: 2745691,
    //     "japan-toreca": 8259945,
    //     clove: 5846478,
    //     gacha24: 4523836,
    //     iris: 4588265
    // }
],
  effects_UNSTABLE: [persistAtom]
})
