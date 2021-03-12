import Banner from '../Components/Banner/Banner';
import BannerCard from '../Components/Banner/BannerCard';

function Homepage() {
    return (
        <div >
            <Banner bURL="https://img-lcwaikiki.mncdn.com/Resource/Images/Other/_web_banner_ust_bant.gif" bAlt="top banner" />
            <Banner bURL="https://dummyimage.com/1833x802" bAlt="Slider" />
            <div className="block ml:flex justify-around">
                <BannerCard
                    imgSrc="https://img-lcwaikiki1.mncdn.com/mnresize/1024/-/Resource/Images/Banner/11032021-busweat.jpg"
                    header="KAPÜŞONLU SWEATSHIRT"
                    desc="Vazgeçilmez Pratik Rahatlık"
                    linkText="Erkeklere Özel"
                    linkURL="some-page"
                />
                <BannerCard
                    imgSrc="https://img-lcwaikiki1.mncdn.com/mnresize/1024/-/Resource/Images/Banner/11032021-casual.jpg"
                    header="24,99 TL'DEN İTİBAREN"
                    desc="Bahar Gardıroplarında Trend Alarmı"
                    linkText="Kadınlara Özel"
                    linkURL="some-page"
                />
                <BannerCard
                    imgSrc="https://img-lcwaikiki1.mncdn.com/mnresize/1024/-/Resource/Images/Banner/11032021-vision.jpg"
                    header="LCW VISION YENİ SEZON"
                    desc="Konforlu ve Şık Kombinler"
                    linkText="Kadın & Erkek"
                    linkURL="some-page"
                />
            </div>
            <Banner
                bURL="https://img-lcwaikiki1.mncdn.com/mnresize/1024/-/Resource/Images/Banner/11032021-elbise-d.jpg"
                bAlt="center banner"
            />
            <div className="flex justify-around">
                <BannerCard
                    imgSrc="https://img-lcwaikiki1.mncdn.com/mnresize/1024/-/Resource/Images/Banner/11032021-z1z4indirim.jpg"
                    header="HEPSİ İNDİRİMLİ"
                    desc="Tükenmeden Yakala"
                    linkText="Tükenmeden Yakala"
                    linkURL="some-page"
                />
                <BannerCard
                    imgSrc="https://img-lcwaikiki1.mncdn.com/mnresize/1024/-/Resource/Images/Banner/11032021-z1zedenimsweat.jpg"
                    header="DENİM SNEAKER"
                    desc="Günün Favorileri"
                    linkText="Çocuk & Bebek"
                    linkURL="some-page"
                />
                <BannerCard
                    imgSrc="https://img-lcwaikiki1.mncdn.com/mnresize/1024/-/Resource/Images/Banner/11032021-z1z4ijama.jpg"
                    header="PİJAMA ÇEŞİTLERİ"
                    desc="Bahar Havasına Uygun"
                    linkText="Çocuk & Bebek"
                    linkURL="some-page"
                />
                <BannerCard
                    imgSrc="https://img-lcwaikiki1.mncdn.com/mnresize/1024/-/Resource/Images/Banner/11032021-z1z4oulerkombin.jpg"
                    header="POPÜLER KOMBİNLER"
                    desc="Güneşli Günlere Yakışanlar"
                    linkText="Çocuk & Bebek"
                    linkURL="some-page"
                />
            </div>
            <Banner
                bURL="https://img-lcwaikiki1.mncdn.com/mnresize/1024/-/Resource/Images/Banner/01032021-markalar-d.jpg"
                bAlt="kampanya banner"
            />
            <div className="homepage-divider pt-4">
                <span>
                    <p>
                        EN TAZE KAMPANYALAR
                    </p>
                </span>
            </div>
            <div className="flex justify-around pt-5">
                <Banner
                    className="mx-3"
                    bURL="https://img-lcwaikiki1.mncdn.com/Resource/Images/Banner/11032021-taze-1-ke-aktif.jpg"
                    bAlt="kampanya1"
                />
                <Banner
                    className="mx-3"
                    bURL="https://img-lcwaikiki1.mncdn.com/Resource/Images/Banner/11032021-taze-1-ke-aktif.jpg"
                    bAlt="kampanya1"
                />
                <Banner
                    className="mx-3"
                    bURL="https://img-lcwaikiki1.mncdn.com/Resource/Images/Banner/11032021-taze-1-ke-aktif.jpg"
                    bAlt="kampanya1"
                />
            </div>
        </div>
    )
}

export default Homepage
