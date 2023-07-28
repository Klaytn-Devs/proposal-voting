// SPDX-License-Identifier: GPL-3.0
pragma experimental ABIEncoderV2;
pragma solidity >=0.4.25 <0.9.0;

abstract contract InitData {

    struct Image {
        string name;
        string photoBy;
        string url;
        string description;
        uint256 amountVote;
    }

    mapping(uint256 => address) public artistId;
    mapping(uint256 => Image) public imageId;

    string public baseURI;

    /**
     * Dummy data for event
     * In the future, we can accept the same from construction,
     * which will be called at the time of deployment
     */
    function _initializeData() internal {

        imageId[1] = Image({
            name: "Green Earth Concept Leavesvector Illustration Stock Vector (Royalty Free) 209259865 | Shutterstock",
            photoBy: "9comeback",
            url: "https://i.pinimg.com/564x/17/b1/25/17b1255cec4c23f89450353df18b4718.jpg",
            description: "Find Green Earth Concept Leavesvector Illustration stock images in HD and millions of other royalty-free stock photos, illustrations and vectors in the Shutterstock collection. Thousands of new, high-quality pictures added every day.",
            amountVote: 0
        });
        artistId[1] = 0x7e43f90bED8fD75BfF186Ae199c77F8dF55fD898;

        imageId[2] = Image({
            name: "Free Healthy, Leaves, Healing Background Images, Seedling Leaf Plant Fresh Background Photo Background PNG and Vectors",
            photoBy: "pngtree",
            url: "https://i.pinimg.com/564x/ad/9e/ad/ad9ead53d9e962e27730dc2dece53793.jpg",
            description: "Search for free healthy, leaves, healing background images? Pngtree provide collection of HD backgrounds about Seedling Leaf Plant Fresh Background. You can download the background in PSD, AI and EPS file format.",
            amountVote: 0
        });
        artistId[2] = 0x895d54c0C99de41b31bc9B1e0b4a92Bc3190d256;

        imageId[3] = Image({
            name: "Children holding young plant in hands",
            photoBy: "photodune.net",
            url:  "https://i.pinimg.com/564x/e2/7b/72/e27b72235e0e8f93093cfb3f4bfb8a24.jpg",
            description: "Children holding young plant in hands against green spring background. Earth day ecology holiday concept",
            amountVote: 0
        });
        artistId[3] = 0xA84937C6F5f6ad83d885E977262d8d7A237D012A;

        imageId[4] = Image({
            name: "Pengertian dari Ekosistem",
            photoBy: "diariodopassageiro",
            url: "https://i.pinimg.com/564x/1c/2e/93/1c2e936ee32b48e4a265451d2a684c1b.jpg",
            description: "Pada tips ini mengenai pengertian dari ekosistem. Kehadiran, kelimpahan Asosiasi distribusi Nursingd spesies dalam skema ditentukan oleh penyediaan sumber daya yang sama sebagai kondisi kimia dan fisik dari faktor-faktor yang seharusnya dalam beragam yang akan ditoleransi oleh spesies, ini sering dikenal sebagai hukum toleransi. Misalnya: Panda termasuk toleransi yang luas terhadap suhu, namun mencakup toleransi ramping untuk makanan, terutama bambu. Dengan demikian, panda akan naik skema dengan kondisi apapun asalkan ada bambu dalam ekosistem sebagai pasokan makanannya.Berbeda dengan makhluk hidup alternatif, manusia akan memperluas bervariasi toleransi disebabkan kemampuannya untuk berasumsi, untuk mengembangkan teknologi dan memanipulasi alam. Abiotik atau bagian bawah sadar ukuran persegi bagian fisik dan kimia yang mengukur media persegi atau substrat di mana pun kelangsungan hidup, atau pengaturan di mana untuk mengukur. Sebagian besar bagian abiotik bervariasi di daerah dan waktu. Bagian abiotik akan, senyawa anorganik organik, dan juga faktor-faktor yang berpengaruh terhadap distribusi organisme. Sumber : http://woocara.blogspot.com/2015/02/pengertian-ekosistem-komponen-dan-tipe.html Fansapage kami : https://www.facebook.com/woocara Posted by Unknown Tweet",
            amountVote: 0
        });
        artistId[4] = 0xb28B3C557a3D0CE38CA0dDfe988ab355473C4130;

        imageId[5] = Image({
            name: "Group Interview: Client Based Photo Manipulation Process",
            photoBy: "psd.tutsplus",
            url: "https://i.pinimg.com/564x/38/5c/a5/385ca5a03aa67833d27ed7996df9f698.jpg",
            description: "It's not possible to imagine advertisements, and designs, without photo manipulation - but in most cases, the work done by a designer isn't even mentioned. However, you all know that it's highly...",
            amountVote: 0
        });
        artistId[5] = 0x9C5232D1db9EAa4B87c8b8D1846A9bBC2A7AF91E;

        imageId[5] = Image({
            name: "World Soil Day",
            photoBy: "AiPlex Digital",
            url: "https://i.pinimg.com/564x/12/39/6c/12396cfc0a47ebbd86706d0be8fcb32a.jpg",
            description: "Soil is where our food grows, take care of it! AiPlex wishes you a happy World Soil Day. #WorldSoilDay #ForNature #worldsoilday",
            amountVote: 0
        });
        artistId[5] = 0x6c1D115B14c28bc2D01f95E2B30358Ae9F0Ab815;
    }
}