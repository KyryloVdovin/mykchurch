
const photoAlbumData = {
    photos: [
        {
            id: 1, src: "https://nikchurch.files.wordpress.com/2017/04/10575326_10207740641170649_4568157565143207826_o.jpg?w=2000&h=",
            width: 2000, height: 1500,
            // srcSet: [
            //     { src: "https://nikchurch.files.wordpress.com/2017/04/10575326_10207740641170649_4568157565143207826_o.jpg?w=414&resize=414%2C311&h=311#038;h=311", width: 400, height: 300 },
            //     { src: "https://nikchurch.files.wordpress.com/2017/04/10575326_10207740641170649_4568157565143207826_o.jpg?w=414&resize=414%2C311&h=311#038;h=311", width: 200, height: 150 }
            // ]
        },
        {
            id: 2, src: "https://scontent.fnlv1-1.fna.fbcdn.net/v/t39.30808-6/303294152_4982924178479901_1060597662852927667_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_ohc=uDFanACF-GkAX95-49Q&_nc_oc=AQkiW1n8e36qytVbmLA41B3YdsIOP6h7TgTL4LvrFvFmI04O94tIMBUoziSkMq6uH8M&_nc_ht=scontent.fnlv1-1.fna&oh=00_AfDbLmht3KsJerifMjbBdDGYGz_QwUnVm8R8Qnp-SS-Xdg&oe=6497FE2D",
            width: 960, height: 720,
        },
        {
            id: 3, src: "https://scontent.fnlv1-1.fna.fbcdn.net/v/t39.30808-6/307276980_5021708601268125_3357103687425508556_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=7byrgZg_rkkAX-XiOMz&_nc_ht=scontent.fnlv1-1.fna&oh=00_AfCiuTcuUnO9ZR4JZElUUMBOYHW5GMZ3kdvxrOyB_vLEpg&oe=64980F37",
            width: 960, height: 720,
        },
        {
            id: 4, src: "https://scontent.fnlv1-1.fna.fbcdn.net/v/t39.30808-6/307430064_5021708501268135_4651214811318024751_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=NicqKiObzKwAX9nNaj7&_nc_ht=scontent.fnlv1-1.fna&oh=00_AfC8sOVqKseeanIZcsKfHU-KOxujKUq4sYc8m50jR9F8Gw&oe=64987C20",
            width: 608, height: 608,
        },
        {
            id: 5, src: "https://scontent.fnlv1-1.fna.fbcdn.net/v/t39.30808-6/313408936_2939362946367855_55024569116328923_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=-Yl7IzYkSgAAX8d0RZW&_nc_ht=scontent.fnlv1-1.fna&oh=00_AfDw0Cg9b-qR89poYU2pUy7CQicWi1JKlfUS711auC0l-g&oe=6499C433",
            width: 2048, height: 1497,
        },
        {
            id: 6, src: "https://scontent.fnlv1-1.fna.fbcdn.net/v/t39.30808-6/306184965_4996788050426847_6551936561192946231_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=cPPh03_mDJoAX82zVr4&_nc_oc=AQmwIy0PUL1SKKl0vl_6Wi5TXeicY0YcOkwn3hfzIELtRG7CqBYAUq797Ruhp5XZPbQ&_nc_ht=scontent.fnlv1-1.fna&oh=00_AfC_BeXGPFXYT3PBiNnEWPshhxtusCPyhgzLqmJKReXtzg&oe=6498796D",
            width: 1280, height: 960,
        },
        {
            id: 7, src: "https://scontent.fnlv1-1.fna.fbcdn.net/v/t39.30808-6/306436604_4996787040426948_579542906350219397_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=AUaNPdWO3PEAX8k0XUb&_nc_ht=scontent.fnlv1-1.fna&oh=00_AfCHkEyHzy3Iyo9KRYwnZClCKXOJVp0YYncv7RJkoqG05w&oe=64990AB4",
            width: 1565, height: 880,
        },
        {
            id: 8, src: "https://scontent.fnlv1-1.fna.fbcdn.net/v/t39.30808-6/271665998_4299863413452651_2226626669387968104_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=U1aIB6w2OyYAX9QB2FF&_nc_ht=scontent.fnlv1-1.fna&oh=00_AfBgEhzdeiXwm4vdNgH9XTGXxXn7KbD9aBEdmvM7ieFcAw&oe=6497FE56",
            width: 1662, height: 937,
        },
        {
            id: 9, src: "https://scontent.fnlv1-1.fna.fbcdn.net/v/t1.6435-9/153115806_3347135015392167_8554055287707490648_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=pUrlk0vn5g4AX8492ra&_nc_ht=scontent.fnlv1-1.fna&oh=00_AfACzAZPrqiGjGQiyl2R7Djr2wrjd2yZamRkT8eWXKaGQg&oe=64BB6B6F",
            width: 2048, height: 1497,
        },
        {
            id: 10, src: "https://scontent.fnlv1-1.fna.fbcdn.net/v/t39.30808-6/347403811_10217790084822161_2240252153961248887_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=w1Mmzup2yuQAX9ZW-SW&_nc_ht=scontent.fnlv1-1.fna&oh=00_AfDAZY8Qo8g4oKGIXY1t7sCxIzFVJkfQy-3rSJIkdmrIiQ&oe=6498D01C",
            width: 1565, height: 880,
        },
        {
            id: 11, src: "https://scontent.fnlv1-1.fna.fbcdn.net/v/t39.30808-6/347558625_10217790089022266_2154416654936877403_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=L3V0NHNaadMAX99MgIZ&_nc_ht=scontent.fnlv1-1.fna&oh=00_AfCslfO7He4niQWBZxfDXTWO_ugQQaHM5_rrnvbbbu7Qfg&oe=649839A3",
            width: 1565, height: 880,
        },
        {
            id: 12, src: "https://scontent.fnlv1-1.fna.fbcdn.net/v/t39.30808-6/343926823_626928238870144_3837650160077272529_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=cK-ZsMWRq90AX894Rgw&_nc_ht=scontent.fnlv1-1.fna&oh=00_AfBwKn68CDRUuu7jbCAwo810OGS7xEFis2JGPWCKKc0Ltw&oe=6498FF7A",
            width: 1280, height: 960,
        },
        {
            id: 13, src: "https://scontent.fnlv1-1.fna.fbcdn.net/v/t39.30808-6/342902324_784875476495016_3654753083428935705_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=wPQY19TQ5fEAX-8zYM-&_nc_ht=scontent.fnlv1-1.fna&oh=00_AfAIjdyrwlApe9ROLZbg7L4_UYr5hA0WXbUKvfU4utUPpQ&oe=6498DB9B",
            width: 1280, height: 590,
        },
        {
            id: 14, src: "https://scontent.fnlv1-1.fna.fbcdn.net/v/t39.30808-6/341757123_886226772466541_8410245230597641649_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=biSxaO_FUVQAX9GIhfo&_nc_ht=scontent.fnlv1-1.fna&oh=00_AfD4n_at01-oB-ZHOAn9d3FhDiMk3hmig9yFwM8neuExxw&oe=64997ADA",
            width: 2048, height: 1153,
        },
        {
            id: 15, src: "https://scontent.fnlv1-1.fna.fbcdn.net/v/t39.30808-6/310314004_10216571188750521_7905664526414913966_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=OCae7iRIuakAX-fEwVQ&_nc_ht=scontent.fnlv1-1.fna&oh=00_AfBNWJvL1zPI0nNbEebAWXjqkvBwSh-Mn5CRVHcWJ1NWKA&oe=64991CBD",
            width: 1565, height: 880,
        },
        {
            id: 16, src: "https://scontent.fnlv1-1.fna.fbcdn.net/v/t39.30808-6/340842602_1408979246595403_6666601984605907121_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=yxM3gyPHUx0AX9oC26w&_nc_ht=scontent.fnlv1-1.fna&oh=00_AfBUmBM980VqWV9LvrmO5TkHxUqTz6OeBn29pqo_SkenTQ&oe=6499E9A7",
            width: 495, height: 880,
        },
        {
            id: 17, src: "https://scontent.fnlv1-1.fna.fbcdn.net/v/t39.30808-6/336785196_585322316857535_4996384827260020907_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=7GVGkfIbmhQAX8lKSt8&_nc_ht=scontent.fnlv1-1.fna&oh=00_AfBGF558gy17lV32fp_3hqKQym28PYz_VCXKQKlEyJvI1Q&oe=6499CEE2",
            width: 1565, height: 880,
        },
        {
            id: 18, src: "https://scontent.fnlv1-1.fna.fbcdn.net/v/t39.30808-6/327917534_1378352809605001_2587721141134169543_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=CoJy7U_LIZQAX89Ibdy&_nc_oc=AQkU7nh2yDJuhLb5ddrFv_QRpBSh3R3zVecEe6hZFdy6hQXHyb_YSA7Q0uQloZlwgo8&_nc_ht=scontent.fnlv1-1.fna&oh=00_AfBQUoPS6FAuTPtDvgFk_1KxCdFRaKza4V5F44R63tCU5Q&oe=64981F72",
            width: 1565, height: 880,
        },
        {
            id: 19, src: "https://scontent.fnlv1-1.fna.fbcdn.net/v/t39.30808-6/327694593_3465747246987189_1825201721299979833_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=llZK5oo4diYAX-t2oY1&_nc_ht=scontent.fnlv1-1.fna&oh=00_AfBLrEpCNki-Cy-FLVML3nVSoYod-nCfYiFGCP-r7PVYIQ&oe=64984165",
            width: 1565, height: 880,
        },
        {
            id: 20, src: "https://scontent.fnlv1-1.fna.fbcdn.net/v/t39.30808-6/321485108_542030581138169_163759230784705762_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=CQHZWnUKRS0AX-gZSpN&_nc_ht=scontent.fnlv1-1.fna&oh=00_AfDDHa2tE6pvp-Ws4zM1ZW0xJgyiQt1bHJELlQCLL2GGug&oe=64981D38",
            width: 1280, height: 960,
        },
    ],
    entryTitle: 'Фотоальбом'
};

export default photoAlbumData;