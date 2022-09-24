new WOW().init();
// home
$(document).on('click','.btn_home',function(){
    $('.tab_menu').hide()
    $('.home').hide()
});
$(document).on('click','.home',function(){
    $('.tab_menu').hide()
    $('.home').hide()
});
// toggle
$(document).on('click','.toggle',function(){
    $('.tab_menu',).show()
    $('.home',).show()
});
$(document).on('click','.toggle_end',function(){
    $('.tab_menu',).show()
    $('.home',).show()
});
//type_language
$(document).on('click','.fa-language',function(){
    $('.tab_menu_language-child').show();
});
$(document).on('click','li',function(){
    $('.tab_menu_language-child').hide();
});
$(document).on('click','.fa-bars',function(){
    $('.tab_menu_language-child').hide();
});

let products = [
    {
        id: 1,
        background: "./Design/Layer1-section1.png"
    },
    {
        id: 2,
        background: "./Design/Layer2-section1.png"
    },
    {
        id: 3,
        background: "./Design/Layer3-section1.png"
    },
    {
        id: 4,
        background: "./Design/Layer1-section1.png"
    },
    {
        id: 5,
        background: "./Design/Layer2-section1.png"
    },
    {
        id: 6,
        background: "./Design/Layer3-section1.png"
    },
    {
        id: 7,
        background: "./Design/Layer2-section1.png"
    },
    
]

let viewProducts = '';
for(let i = 0; i < products.length; i++){

    let obj = products[i]
    let row = `
                <div class="introduce_image-child" style="background-image: url('${obj.background}')"></div>
    `;
    viewProducts += row;
}
$('.introduce_image-slider').html(viewProducts);

$('.introduce_image-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay:true,
    autoplaySpeed: 1000,
    dots:true,
    responsive: [
        {
            breakpoint: 992,
            settings:{
                slidesToShow: 2,
                slidesToScroll: 1,
                dost: true,
                infinite: true,
            }
        },
        {
            breakpoint: 576,
            settings:{
                slidesToShow: 1,
                slidesToScroll:1,
                dost:true,
                infinite: true,
            }
        }
    ]  
});
// footer
// choose
let choose = [
    {
        id: 1,
        background:"./Design/choose/layer1_section3.png",
        image: "./Design/choose/childlayer1_section3.png",
        title: "Process Ineffiency",
        content: "Slow and expensive reconciliation processes. Manual operation of interbusiness relationaships. Redundant processes across supplies, customers, peers.",
    },
    {
        id: 2,
        background:"./Design/choose/layer2_section3.png",
        image: "./Design/choose/childlayer2_section3.png",
        title: "Lack of Look-Though",
        content: "Limited transparency both up and down my supply chain prevening data driven insights. Difficulty in tracking procurement, diliveries and inventory",
    },
    {
        id: 3,
        background:"./Design/choose/layer3_section3.png",
        image: "./Design/choose/childlayer3_section3.png",
        title: "Competitive Relevance",
        content: "Need to remain relevant and need to understand technological disruption risk. Need to leverage my assets to create or enter new markets",
    },
]
let viewChoose = '';
for(let i = 0; i < choose.length; i++){
    let obj = choose[i];
    let row = `
                <div class="reasons_choose_box-left col-md-4 col-10">
                    <div class="reasons_choose_box-leftImage animate__animated animate__flip wow" style="background-image: url('${obj.background}');">
                        <img src="${obj.image}" alt="">
                    </div>
                    <div class="reasons_choose_box-leftContent">
                        <span><b>${obj.title}</b></span>
                        <p>
                            ${obj.content}
                        </p>
                    </div>
                </div>
    `;
    viewChoose += row;
}
$('.reasons_choose_box').html(viewChoose);

let service = [
    {
        id: 1,
        image: "./Design/choose/Layer1_section4.png",
        image1: "./Design/choose/Layer4_section4.png",
        title: "cost efficiency",
        title1: "REDUCE TIME TO MARKET",
        content: "Outsourcing enabies companies to reduce their costs on resource management, overhead cost, labor, working space,etc.",
        content1: "The huge pool of IT workforce and infrastructure that the offshore IT.",
    },
    {
        id: 2,
        image: "./Design/choose/Layer2_section4.png",
        image1: "./Design/choose/Layer5_section4.png",
        title: "RISK REDUCTION",
        title1: "REDUCE TIME TO MARKET",
        content: "Outsourcing it a way of risk sharing. By outsourcing your software development tasks, you are minimizing the risk.",
        content1: "Outsourcing will allow operations that have seasonal or cyclical demands to bring.",
    },
    {
        id: 3,
        image: "./Design/choose/Layer3_section4.png",
        image1: "./Design/choose/Layer6_section4.png",
        title: "SOCUS ON CORE BUSINESS",
        title1: "DIVERSE TECHNOLOGIES",
        content: "Outsourcing enable customers to divert their attention from supplementary tasks to focusing on their core functions.",
        content1: "Outsourcing vendors have focus on paticular services and play in volume.",
    },
]
let viewService = '';
for(let i = 0; i < service.length; i++){
    let obj = service[i];
    let row = `
                <div class="service_choose-box col-10 col-md-4">
                    <div class="service_choose_box-top1 d-flex justify-content-around">
                        <div class="image animate__animated animate__hinge wow"><img src="${obj.image}" alt=""></div>
                        <div class="content col-9 col-md-8">
                            <div>
                                <b>${obj.title}</b>
                            </div>
                            <p>
                                ${obj.content}
                            </p>
                        </div>
                    </div>
                    <div class="service_choose_box-top1 d-flex justify-content-around">
                        <div class="image animate__animated animate__rotateIn wow"><img src="${obj.image1}" alt=""></div>
                        <div class="content col-9 col-md-8">
                            <div>
                                <b>${obj.title1}</b>
                            </div>
                            <p>
                                ${obj.content1}
                            </p>
                        </div>
                    </div>
                </div>
    `;
    viewService += row;
}
$('.service_choose_box-top').html(viewService);
let projects = [
    {
        id: 1,
        background: "./Design/choose/Layer1_section5.png",
    },
    {
        id: 2,
        background: "./Design/choose/Layer2_section5.png",
    },
    {
        id: 3,
        background: "./Design/choose/Layer3_section5.png",
    },
];
let viewProjects = '';
for(let i = 0; i < projects.length; i++){
    let obj = projects[i];
    let row = `
                <div class="projects_choose_img" style="background-image: url('${obj.background}');">
                    <div class="projects_choose_imgchild text-center">
                        <div class="animate__animated animate__tada wow">
                            <img src="./Design/choose/Layerchild-section5.png" alt="">
                        </div>
                        <h3>abcxyz</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of <br>the printing and typesetting industry
                        </p>
                    </div>
                </div>
    `;
    viewProjects += row;
}
$('.projects_choose_box').html(viewProjects)
// industries
let industries = [
    {
        id: 1,
        backgroundtop: "./Design/industries/Layer2.png",
        backgroundbottom: "./Design/industries/Layer3.png",
        titletop: "Consumer electronics",
        titlebottom: "Fintech"
    },
    {
        id: 1,
        backgroundtop: "./Design/industries/Layer4.png",
        backgroundbottom: "./Design/industries/Layer5.png",
        titletop: "Healthcare",
        titlebottom: "Insurance"
    },
    {
        id: 1,
        backgroundtop: "./Design/industries/Layer6.png",
        backgroundbottom: "./Design/industries/Layer7.png",
        titletop: "Logistics",
        titlebottom: "Manufacturing"
    },
    {
        id: 1,
        backgroundtop: "./Design/industries/Layer8.png",
        backgroundbottom: "./Design/industries/Layer9.png",
        titletop: "Travel",
        titlebottom: "Startup"
    },
];
let viewIndustries = '';
for(let i = 0; i < industries.length;i++){
    let obj = industries[i];
    let row = `
                <div class="ourIndustries_box-top d-flex justify-content-around">
                    <div class="ourIndustries_boxImage col-5 animate__animated animate__fadeInLeft wow" style="background-image: url('${obj.backgroundtop}');">
                        <img src="" alt="">
                    </div>
                    <div class="ourIndustries_boxContent col-5 animate__animated animate__fadeInRight wow">
                        <div class="title"><p>our <b>industries</b></p></div>
                        <div class="title_child"><h3><b>${obj.titletop}</b></h3></div>
                        <div class="content"><p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Nisl tincidunt eget nullam non.
                            Quis hendrerit dolor magna eget.
                        </p></div>
                        <div class="btn animate__animated animate__hinge wow">
                            <button><a href="">lean more</a></button>
                        </div>
                    </div>
                </div>
                <div class="ourIndustries_box-bottom d-flex justify-content-around">
                    <div class="ourIndustries_boxContent text-right col-5 animate__animated animate__fadeInLeft wow">
                        <div class="title"><p>our <b>industries</b></p></div>
                        <div class="title_child"><h3><b>${obj.titlebottom}</b></h3></div>
                        <div class="content"><p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Nisl tincidunt eget nullam non.
                            Quis hendrerit dolor magna eget.
                        </p></div>
                        <div class="btn animate__animated animate__rotateIn wow">
                            <button><a href="">lean more</a></button>
                        </div>
                    </div>
                    <div class="ourIndustries_boxImage col-5 animate__animated animate__fadeInRight wow" style="background-image: url('${obj.backgroundbottom}');">
                        <img src="" alt="">
                    </div>
                </div>
    `;
    viewIndustries += row;
}
$('.ourIndustries').html(viewIndustries);
//work
let work = [
    {
        id: 1,
        image1: "./Design/work/layer1_section2.png", 
        image2: "./Design/work/layer4_section2.png",
        note: "Blockchain· Supply Chain· Drug Supply",
    },
    {
        id: 2,
        image1: "./Design/work/layer2_section2.png", 
        image2: "./Design/work/layer5_section2.png",
        note: "Tracking· Solution· Interprise",
    },
    {
        id: 3,
        image1: "./Design/work/layer3_section2.png", 
        image2: "./Design/work/layer6_section2.png",
        note: "Robot· Machine· IoT/Fimware· AI",
    },
];
let viewWork = '';
for(let i = 0; i < work.length; i++){
    let obj = work[i];
    let row = `
                <div class="recentProjects_box-child col-10 col-md-4">
                    <div class="recentProjects_box-top_content ">
                        <div class="img col-6 col-md-12" style="background-image: url('${obj.image1}');"></div>
                        <div class="btn_content col-6 col-md-12">
                            <div class="note animate__animated animate__fadeInLeft wow">${obj.note}</div>
                            <div class="content animate__animated animate__fadeInDown wow">
                                <p>
                                    Blockchain based Pharma <br> 
                                    Supply Chain Solution for <br>
                                    International Aid Distribution
                                </p>
                            </div>
                            <div class="more animate__animated animate__fadeInLeft wow">
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="recentProjects_box-bottom_content">
                        <div class="img col-6 col-md-12" style="background-image: url('${obj.image2}');"></div>
                        <div class="btn_content col-6 col-md-12">
                            <div class="note animate__animated animate__fadeInLeft wow">${obj.note}</div>
                            <div class="content animate__animated animate__fadeInDown wow">
                                <p>
                                    Blockchain based Pharma <br> 
                                    Supply Chain Solution for <br>
                                    International Aid Distribution
                                </p>
                            </div>
                            <div class="more animate__animated animate__fadeInLeft wow">
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>

    `;
    viewWork += row;
};
$('.recentProjects_box').html(viewWork)

let proprietary = [
    {
        id: 1,
        backgroundtop: "./Design/work/layer1_section3.png",
        backgroundbottom: "./Design/work/layer5_section3.png",
    },
    {
        id: 2,
        backgroundtop: "./Design/work/layer2_section3.png",
        backgroundbottom: "./Design/work/layer6_section3.png",
    },
    {
        id: 3,
        backgroundtop: "./Design/work/layer3_section3.png",
        backgroundbottom: "./Design/work/layer7_section3.png",
    },
    {
        id: 4,
        backgroundtop: "./Design/work/layer4_section3.png",
        backgroundbottom: "./Design/work/layer8_section3.png",
    },
];
let viewProprietary = '';
for(let i = 0; i < proprietary.length; i++){
    let obj = proprietary[i];
    let row = `
                <div class="proprietaryProjects_box-top col-6 col-md-3">
                    <div class="proprietaryProjects_box-topchild">
                        <div class="img col-6 col-md-12" style="background-image: url('${obj.backgroundtop}');">
                            <div class="img_child">

                                <div class="contasctUs">
                                    <span>For more information</span>
                                    <div class="d-flex">
                                        <div><p><a href="http://127.0.0.1:5500/contact.html">Contasct Us</a> </p></div>
                                        <div>
                                            <a href="http://127.0.0.1:5500/contact.html"><img src="./Design/work/layerchild1_section3.png" alt=""></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="content col-6 col-md-12 animate__animated animate__zoomIn wow">
                            <span>
                                Lorem ipsum dolor sit
                                amet, sectetur piscing elit,
                                sed do eiusmod tempor 
                                incididunt ut.
                            </span>
                        </div>
                    </div>
                    <div class="proprietaryProjects_box-topchild">
                        <div class="img col-6 col-md-12" style="background-image: url('${obj.backgroundbottom}');">
                            <div class="img_child">
                                <div class="contasctUs">
                                    <span>For more information</span>
                                    <div class="d-flex">
                                        <div><p><a href="http://127.0.0.1:5500/contact.html">Contasct Us</a> </p></div>
                                        <div>
                                            <a href="http://127.0.0.1:5500/contact.html"><img src="./Design/work/layerchild1_section3.png" alt=""></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="content col-6 col-md-12 animate__animated animate__zoomIn wow">
                            <span>
                                Lorem ipsum dolor sit
                                amet, sectetur piscing elit,
                                sed do eiusmod tempor
                                incididunt ut.
                            </span>
                        </div>
                    </div>
                </div>
    `;
    viewProprietary += row;
}
$('.box_proprietary').html(viewProprietary)

//team
let team = [
    {
        id: 1,
        image: "./Design/team/layer1_section1.png",
        content: "TVM Blockchain is accelerating the development of decentralised applications. We build and grow blockchain companies by leveraging our network, expertise and access to capital."
    },
    {
        id: 2,
        image: "./Design/team/layer2_section1.png",
        content: "We joint venture with leading companies and domain experts to incubate innovative applications. These<br>applications transform business models and disrupt industries, using blockchain technology"
    },
    {
        id: 3,
        image: "./Design/team/layer3_section1.png",
        content: "We leverage our deep experience in blockchains and Ethereum smart contracts to architect platforms and applications that creates new digital business models"
    }
];
let viewTeam = '';
for(let i = 0; i < team.length; i++){
    let obj = team[i];
    let row = `
                <div class="introduce_box-left col-md-4 col-10">
                    <div class="img${obj.id}  animate__animated animate__hinge wow" style="background-image: url('${obj.image}');"></div>
                    <div class="content">
                        <p>
                            ${obj.content}
                        </p>
                    </div>
                </div>  
    `;
    viewTeam += row;
}
$('.introduce_box').html(viewTeam)
let leaderTeam = [
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 3,
    },
    {
        id: 4,
    },
];
let viewLeaderTeam = '';
for(let i = 0; i < leaderTeam.length; i++){
    let obj = leaderTeam[i];
    let row = `
                <div class="leaderTeam_box-infor col-12 col-sm-6 col-md-3">
                    <div class="infor">
                        <div class="img animate__animated animate__flip wow"><img src="./Design/team/layer1_section2.png" alt=""></div>
                        <div class="name"><h2>Alan Burt</h2></div>
                        <div class="content"><p>
                            Co-Founder and<br>
                            Chairperson
                        </p></div>
                        <div class="link">
                            <button class="btn1">
                                <img src="./Design/team/image_footer4.png" alt="">
                            </button>
                            <button class="btn2">
                                <img src="./Design/team/image_footer.png" alt="">
                            </button>
                        </div>
                    </div>
                    <div class="infor">
                        <div class="img animate__animated animate__flip wow"><img src="./Design/team/layer1_section2.png" alt=""></div>
                        <div class="name"><h2>Alan Burt</h2></div>
                        <div class="content"><p>
                            Co-Founder and<br>
                            Chairperson
                        </p></div>
                        <div class="link">
                            <button class="btn1">
                                <img src="./Design/team/image_footer4.png" alt="">
                            </button>
                            <button class="btn2">
                                <img src="./Design/team/image_footer.png" alt="">
                            </button>
                        </div>
                    </div>
                </div>
    `;
    viewLeaderTeam += row;
}
$('.leaderTeam_box').html(viewLeaderTeam)

