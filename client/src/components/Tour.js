import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

import "../App.css";
import imgCard1 from "../img/img-card (1).jpg";
import imgCard2 from "../img/img-card (2).jpg";
import imgCard3 from "../img/img-card (3).jpg";
import imgCard4 from "../img/img-card (4).jpg";
import imgCard5 from "../img/img-card (5).jpg";
import imgCard6 from "../img/img-card (6).jpg";
import imgCard7 from "../img/img-card (7).jpg";
import imgCard8 from "../img/img-card (8).jpg";
import imgCard9 from "../img/img-card (9).jpg";
import imgBarobaybay from "../img/barobaybay.jpg";
import sajek from "../img/sajek.jpg";
import amiyakhum from "../img/amiyakhum.jpg";
import bogalake from "../img/bogalake.jpg";
const tours = [{},
  {
    id: 1,
    category: ["resort", "honeymoon"],
    img: imgCard1,
    alt: "blah blah",
    title: "Saint-martin",
    route: "saint-martin",
    subtitle: "Beach",
    info:"dsfdfdsfsdf"
    
  },
  {
    id: 2,
    category: ["beach", "mountain"],
    img: sajek,
    alt: "blah blah",
    title: "Sajek",
    route: "sajek",
    subtitle: "king of cloud",
    info:"সাজেক ট্যুর ( দুই দিন একরাত)মোট সদস্যঃ ১৮ জন।মোট খরচঃ ৩২০০ টাকা ( জনপ্রতি)১ম রাত ও ১ম দি১৪ নভেম্বর, ২০১৯, বৃহস্পতিবার। রাত ১০.৩০ এর বাসে আমরা সায়েদাবাদ থেকে যাত্রা শুরু করি। শান্তি পরিবহনের বাসে। ভাড়া ৫৮০ টাকা। সাজেক যাওয়ার জন্য খাগড়াছড়ি নামলেও হয় আবার দীঘিনালা নামলেও হয়। সব বাস খাগড়াছড়ি শহরে যায় ভাড়া ৫২০ টাকা। আর দীঘিনালা যায় শুধু ‘শান্তি পরিবহন’ ভাড়া ৫৮০ টাকা। শান্তি পরিবহনে ভ্রমনের অভিজ্ঞতা খুব খারাপ। আমরা যে বাসে গিয়েছিলাম সেটার সীটের অবস্থা খুব বাজে ছিল। রাতে দুই একজন বাদে কেউ ঘুমাইতে পারে নাই। আর সীট পিছনে হলে তো কথাই নাই। তবে হ্যাঁ বাস খুব ভাল টানে। বাসের টিকিট অবশ্যই আগেই কেটে রাখা উচিত। এখন সিজন তাই কমপক্ষে ১৫ দিন আগে টিকেট কেটে রাখা উচিত যদি আমাদের মত বড় টিম হয়। আমাদের ভোর ৫ টায় নামিয়ে দিয়েছিল দীঘিনালায়। অন্যান্য বাস খাগড়াছড়ি শহরে পৌঁছায় প্রায় একই সময়ে। বাস শাপলা চত্বরে নামায়, যেখানে চান্দের গাড়ির কাউন্টার। আর ওটাই লাস্ট স্টপেজ। আর যদি বাস শাপলা চত্ত্বর না যায় তবে ওদের কাউন্টারের সামনে নামাবে, ওখান থেকে হেটে শাপলা চত্ত্বর যেতে হবে, মাত্র ৩/৪ মিনিট এর রাস্তা। দীঘিনালা থেকে সাজেকের দুরত্ব কম। খাগড়াছড়ি শহর থেকে সাজেকের দূরত্ব ৬৫ কিমি, দিঘিনালা থেকে ৪৪ আর বাঘাইছড়ি থেকে ৩২ কিমি। আমরা যখন বাস থেকে নামি তখন অন্ধকার। ফজরের আযান দিচ্ছে। নামাজ পরে দেখি হোটেল খুলতে শুরু করেছে। দীঘিনালাতেই শান্তি পরিবহনের টিকেট কাউন্টার আছে। আপনারা চাইলে রিটার্ন টিকেট কেটে ফেলতে পারেন। আমাদের শান্তি পরিবহনের অভিজ্ঞতা খুব খারাপ হওয়ায় আমরা টিকেট যাওয়ায় দিন কাটার সিদ্ধান্ত নেই। সকালের খাবার খেয়ে শান্তি পরিবহনের পাশেই চান্দের গাড়ির কাউন্টার থেকেই চান্দের গাড়ি রিজার্ভ করি। সকালের খাবারে ছিল খিচুড়ি ( ৫০ টাকা) / রুটি (১০ টাকা) ,ডিম (২০ টাকা) ,সবজি (২০ টাকা)। সব মিলিয়ে ১৮ জনে ১০০০ টাকা খরচ। দীঘিনালা থেকে চান্দের গাড়ির ভাড়া ৭১০০/= ( দুই দিন একরাতের প্যাকেজ) চান্দের গাড়ির ড্রাইভার, হেলপারের থাকা খাওয়ার ব্যবস্হা ওদের নিজেদের। এই প্যাকেজে আছে সাজেকে একরাত খাগড়াছড়ির আলুটিলা গুহা, রিচাং ঝর্না,ঝুলন্ত ব্রিজ, তারেং। এসব আগে থেকে বলে নিবেন ৷ চাঁদের গাড়িতে ১০ থেকে ১২ জন বসা যায়। আমরা দুইটা চান্দের গাড়ি নিয়েছিলাম। সব মিলিয়ে পরেছিল ১৪৬০০ (৪০০ টাকা বকশিস। এর মাঝে ২০০০ টাকা এডভান্স আর বাকি টাকা ট্যুর শেষে। পানি, টয়লেট টিস্যু, সাবান শ্যম্পু ৪৫০ টাকার কিনে যাত্রা শুরু করলাম সাজেকের উদ্দেশ্যে।মাঝে ৩ জায়গায় বিজিবি চেকপোস্টে এন্ট্রি করতে হয়। যাওয়ার পথে বাঘাইহাট নামক জায়গায় যেয়ে সব গাড়ি/সিএনজি কে বাধ্যতামূলক ভাবে দাঁড়াতে হয়, সকাল ১০.০০ এর মধ্যে যত জিপ বা সিএনজি বাঘাইহাট পৌঁছাবে সেসব গাড়িগুলোকে নিরাপত্তা জনিত কারণে সামনে ও পিছনে প্রটেকশন দিয়ে পুলিশ বা আর্মি সাজেক পর্যন্ত পৌঁছায় দেয়। ঠিক ১২.১৫ তে সাজেকে।বাংলাদেশ সেনাবাহিনীর তত্ত্বাবধানে দুটো এস্কর্টে গাড়ি সাজেক ঢুকে।প্রথমটা সকাল ১০টায়।দ্বিতীয় টা বিকেল ৩টায়। সাজেকে প্রবেশ মূল্য জনপ্রতি ২০/= ও গাড়ি রাখার ভাড়া ১০০/=বাঘাইহাট বাজারে ৩৩০ টাকার নাস্তা করেছিলাম অপেক্ষা করতে গিয়ে। (এক ছড়ি কলা মাত্র ১৮০ টাকা নিয়েছিল)। ১২.৩০ আমরা সাজেকে পৌছাই। প্রবেশের জন্য আমাদের মোট ৫৬০ টাকা লেগেছে।পূর্ব দিকের রিসোর্টগুলোতে সব থেকে সুন্দর ভিউ পাওয়া যায়। আর রিসোর্ট থেকে বের হলে সাজেক সবার জন্য এক। সবগুলো রিসোর্টের রেন্ট একই। আগে ফোন করে রিসোর্ট বুক করলে এডভান্সড ২০০০ টাকা দিতে হয়।এসব রিসোর্টে বলতে গেলে তেমন কিছুই নেই। তাই প্রয়োজনীয় সবকিছু ঢাকা থেকে নিয়ে যেতে হবে। যেমন-ব্রাশ-পেস্ট, মিনিপ্যাক শ্যাম্পু, সাবান, টাওয়াল। সাজেকে কারেন্ট সাপ্লাই নেই। সবকিছু সোলার বিদ্যুৎ এ চলে। তাই দিনে হয়তো একবার এবং সন্ধ্যা থেকে রাত সাড়ে ১০ টা পর্যন্ত একবার পাওয়ার সাপ্লাই দেয়া হয়। তবে রুমে আর টয়লেটে দুটো লাইট সার্বক্ষণিক জ্বলবে। আমরা এবার যাওয়ার সময় দেখলাম সাজেকে কারেন্ট নেয়ার প্রস্তুতি চলছে। কারেন্ট নিলে হয়ত সাজেকের সৌন্দর্যের মাঝে একটা কৃত্রিমতা চলে আসবে৷ যাই হোক, প্রতিটা রুমে এক্সট্রা বেডিং আর বালিশ দেয়া থাকে অনেকজনের গ্রুপ গেলে যেন থাকা যায় সেভাবে। রুম আর টয়লেট মোটামুটি পরিষ্কার । বারান্দায় চেয়ার থাকে। এক্সট্রা বেডিং বিছিয়ে আড্ডাও দেয়া যায়।সাধারণ রিসোর্ট এর ভাড়া ১৫০০-২০০০ এর মধ্যে(শুক্র,শনি ও ছুটির দিনগুলোতে ভাড়া ২৫০০-৩০০০)।বেস্ট ভিউ রিসোর্ট গুলো ৩০০০-৪৫০০ টাকা ভাড়া নেবে।আগে থেকে বুকিং দিয়ে যাওয়া ভাল।বারটার মধ্যে রিসোর্ট চেকআউট করবার নিয়ম।পানি খাগড়াছড়ি থেকে নিয়ে যাওয়া ভাল। দাম অনেক বেশি সাজেকে ।আমরা ছিলাম হিমালয় হোটেলে। হোটেলটা ভালই৷ প্রতিরুমে ৪ জন করে। দুইটা বেড প্রতিরুমে। ৫ জন অনায়াসে থাকা যায়। আমাদের প্রতিরুম ২৫০০ টাকায় ৪ রুম মোট ১০০০০ টাকা। ( দুই হাজার টাকা এডভ্যান্স দিয়েছিলাম বুকিং এর জন্য) শুক্র শনি গেলে অবশ্যই হোটেল বুক দিয়ে যাবেন। হোটেলে চেকইন করে ফ্রেশ হয়ে নিলাম প্রথমেই। সাজেকে নিয়ম হচ্ছে আপনি অর্ডার দিবেন তারপর ওরা রান্না করবে। কিন্তু আমাদের অর্ডার দেয়া ছিল না। কিন্তু মনটানা হোটেলে গিয়ে দেখলাম তারা ব্যাবস্থা করা পারবে। আর দেরী না করে খেয়ে নিলাম।খাবারের দোকানগুলো প্যাকেজ সিস্টেম যেমন --১. ভাত+ডাল+আলুভর্তা+সবজি+দেশি মুরগী দাম ১৮০/=২. ভাত+ডাল+আলুভর্তা+সবজি+ফার্মের মুরগী দাম ১৪০/=৩.ভাত+ডাল+আলুভর্তা+ সবজি দাম ১২০/=ব্যাগে যা যা নিতে হবেঃশার্ট,প্যান্ট,টি শার্ট বা পরিধেয় কাপড় প্রয়োজনমত, গামছা, মান্টিপ্লাগ বা থ্রি পিন, পাওয়ার ব্যাংক, ফোন চার্জার, ব্রাশ-পেস্ট,পলিথিন,সানগ্লাস, নিক্যাব বা এংলেট (যদি লাগে), ছাতা, প্রসাধনী ( বডি স্প্রে, ফেসওয়াশ, চিরুনি), ক্যাপ, হেডফোন, মোবাইল, মোবাইল রিচার্জ, সাবান,স্যালাইন, গ্লুকোজ,শীতের সময় গেলে শীতের কাপড়,প্রয়োজনীয় ঔষধ- নাপা, এলাট্রল, স্যাভলন, অমিডন, মুভ,টর্চলাইট ( আলুটিলা গুহার জন্য), স্যান্ডেল।মোট খরচঃবাস ভাড়া ১০৪৪০ টাকা ( জনপ্রতি ৫৮০ টাকা) + সকালের হোটেলে নাস্তা ১০০০ টাকা + চাদের গাড়ি ভাড়া জনপ্রতি ১৪৬০০ টাকা + সাজেক এন্ট্রি ফী ৫৬০ টাকা+ খাগড়াছড়ি থেকে প্রয়োজনীয় জিনিস ৪৫০ টাকা+হোটেল ভাড়া ১০০০০ টাকা + দুপুরের খাবার ২২০০ টাকা + বাশ ক্রয় আর যাবতীয় নাস্তা ১০০০ টাকা + রাতের খাবার ২৭০০ ( ব্যম্বো চিকেন)+ সকালের নাস্তা ১৩০০ টাকা + দুপুরের খাবার ২২০০ টাকা + আলুটিলা গুহা ৩৬০ টাকা+ রাতের খাবার ১১৪০ টাকা + বাস ভাড়া ৯৪০০ টাকা = মোট ৫৭৩৫০ টাকা।/ ১৮ = ৩১৮৬ টাকা জনপ্রতি বা ৩২০০ টাকা।"
  },
    
  {
    id: 3,
    category: ["resort", "honeymoon"],
    img: imgCard3,
    alt: "blah blah",
    title: "Sunamganj",
    subtitle: "King of River",
    info: "sunamganj is a great place. <br /> new line"
  },
  {
    id: 4,
    category: ["climbing", "mountain"],
    img: imgCard4,
    alt: "blah blah",
    title: "Nilgiri",
    subtitle: "King of Hill",
    info:"fdsfsdfewq"
  },
  {
    id: 5,
    category: ["resort", "honeymoon", "beach"],
    img: amiyakhum,
    alt: "blah blah",
    title: "AMIYAKHUM",
    subtitle: "waterfall",
    info:"বান্দরবান জেলার থানচি উপজেলার রেমাক্রি স্থানটি সাঙ্গু নদীর উজানে একটি মারমা বসতী। মারমা ভাষায় ‘খুম’ মানে হচ্ছে জলপ্রপাত। রেমাক্রি থেকে তিন ঘন্টার হাঁটা পথ পাড়ি দিয়ে যেতে হয় আশ্চর্য সুন্দর সেই জলপ্রপাতে, যার নাম ‘নাফাখুম’।রেমাক্রি খালের পানি প্রবাহ এই নাফাখুম, নাফাখুমে এসে বাঁক খেয়ে নেমে গেছে প্রায় ২৫-৩০ ফুট, প্রকৃতির খেয়ালে সৃষ্টি হয়েছে চমৎকার এক জলপ্রপাত! সূর্যের আলোয় যেখানে নিত্য খেলা করে বর্ণিল রংধনু! ভরা বর্ষায় রেমাক্রি খালের জলপ্রবাহ নিতান্ত কম নয়। প্রায় যেন উজানের সাঙ্গু নদীর মতই।পানি প্রবাহের ভলিউমের দিক থেকে নাফাখুম-ই বাংলাদেশের সবচেয়ে বড় জলপ্রপাত।"
  },
  {
    id: 6,
    category: ["climbing", "mountain"],
    img: imgCard6,
    alt: "blah blah",
    title: "Sundaraban",
    subtitle: "FOREST",
    info: "saqfgergter"
  },
  {
    id: 7,
    category: ["beach", "climbing"],
    img: imgCard7,
    alt: "blah blah",
    title: "khoiyachora",
    subtitle: "waterfall",
    info :"fsdfdsfsd"
    
  },
  {
    id: 8,
    category: ["honeymoon", "beach", "resort"],
    img: imgCard8,
    alt: "blah blah",
    title: "Chandranath hill",
    subtitle: "Danger area",
    info : "iojsfq"
  },
  {
    id: 9,
    category: ["beach", "resort"],
    img: imgCard9,
    alt: "blah blah",
    title: "Cox's Bazar",
    subtitle: "Largest sea-beach",
    info: "dsadsadq"
  },
  {
    id: 10,
    category: ["camping", "beach"],
    img: bogalake,
    alt: "camping in the lake",
    title: "Bogalake Camp Site",
    subtitle: "Bandarban",
    info : "বগাকাইন লেক বা বগালেক (Bogalake) বান্দরবান জেলার রুমা উপজেলা থেকে ১৭ কিলোমিটার দূরে কেওক্রাডং পাহাড়ের কোল ঘেসে সমুদ্রপৃষ্ট থেকে প্রায় ১২০০ ফুট উচ্চতায় ২০০০ বছর আগে প্রাকৃতিক ভাবে সৃষ্ট এক হ্রদ। ভূ-তত্ত্ববিদগনের মতে এটি মৃত কোন আগ্নেয়গিরির জ্বালামুখ অথবা উল্কাপিণ্ডের পতনের ফলে এই লেক তৈরী হয়েছে"
  }
];

const Tour = props => {
  const id = Number(props.location.pathname.split("/")[2])
  const {img, title, info, subtitle} = tours[id]
  
  return (
    <div className="subComponent">
      <Container>
        <section className="tour-cover item-center">
          <img src={img} alt="" />
  <h1>{title}</h1>
  <h4>{subtitle}</h4>
        </section>
        <section className="tour-info">
          <Row>
            <Col sm="8">
              <div className="tour-desc">
              <div dangerouslySetInnerHTML={{__html: info}} />
              </div>
            </Col>
            <Col sm="4">
              <div className="tour-gallery">
                <a href={imgCard1}>
                  <img src={imgCard1} alt="" />
                </a>
                <a href={imgCard2}>
                  <img src={imgCard2} alt="" />
                </a>
                <a href={imgCard3}>
                  <img src={imgCard3} alt="" />
                </a>
                <a href={imgCard4}>
                  <img src={imgCard4} alt="" />
                </a>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
      <section className="reviews">
        <Container>
          <section className="tour-msg text-center">
            <h1>Reviews and Suggestions</h1>
            <p>We're glad to hear something from you.</p>
            <form action="">
              <Row>
                <Col sm="6">
                  <input
                    type="text"
                    name="Name"
                    id="reviewer-name"
                    placeholder="Your Name"
                    required
                  />
                  <br />
                  <input
                    type="email"
                    name="Email"
                    id="reviewer-email"
                    placeholder="Your email"
                    required
                  />
                </Col>
                <Col>
                  <textarea
                    name="Message"
                    id="reviewer-message"
                    rows="4"
                    placeholder="Your Message"
                  />
                </Col>
              </Row>
              <Button outline color="secondary" className="float-right">
                Submit
              </Button>
            </form>
          </section>
        </Container>
      </section>
    </div>
  );
};

export default Tour;
