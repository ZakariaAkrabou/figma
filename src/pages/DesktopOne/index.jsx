import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading, Slider, RatingBar } from "../../components";

const data = [
  { explorenature: "images/img_line_3.svg", explorenature1: "Explore Nature" },
  { explorenature: "images/img_line_8.svg", explorenature1: "Explore Cities" },
];
const data1 = [
  {
    circleimage: "images/img_ellipse_625.png",
    description:
      "<>Private guided tours<br /><br />No strangers on your tour.<br />It’s just you and your local host.</>",
  },
  {
    circleimage: "images/img_ellipse_626.png",
    description: "<>Responsible<br /><br />Our tours are designed with<br />people, places & the planet in mind</>",
  },
  {
    circleimage: "images/img_ellipse_627.png",
    description:
      "<>100% Customizable<br /><br />Let your local host tailor the tour<br />completely to your wishes.</>",
  },
];

export default function DesktopOnePage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      <Helmet>
        <title>Explore Tours - Discover Your Next Adventure</title>
        <meta
          name="description"
          content="Dive into a world of adventure with our exclusive tour packages. From breathtaking views to cultural experiences, find the perfect tour tailored to your wishes. Book your next memorable trip today!"
        />
      </Helmet>
      <div className="w-full bg-white-A700 pb-3">
        <div className="flex flex-col items-center">
          {/* navigation header section */}
          <div className="relative h-[976px] self-stretch bg-[url(/public/images/img_header.png)] bg-cover bg-no-repeat pb-[55px] pr-[55px] shadow-xs md:pb-5 md:pr-5">
            <div className="absolute bottom-0 left-[0.00px] top-0 my-auto h-[920px] w-[85%]">
              <Img
                src="images/img_ellipse_621.png"
                alt="image"
                className="absolute left-[0.00px] top-[0.00px] m-auto h-[207px] w-[23%] rounded-[103px] object-cover"
              />
              <div className="absolute right-[0.00px] top-[7%] m-auto h-[226px] w-[53%]">
                <header className="absolute left-0 right-0 top-[0.00px] m-auto flex h-[58px] w-full items-center bg-[url(/public/images/img_group_34.svg)] bg-cover bg-no-repeat p-[23px] md:h-auto sm:p-5">
                  <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="ml-[237px] h-[7px] self-end" />
                </header>
                <div className="absolute bottom-[0.01px] left-[0.00px] m-auto flex w-[95%] flex-col items-start gap-[13px]">
                  <div className="flex items-start justify-between gap-5 self-stretch sm:flex-col">
                    <div className="flex w-[56%] justify-between gap-5 sm:w-full sm:flex-col sm:p-5">
                      <div className="flex flex-wrap self-start">
                        <Heading size="s" as="h1" className="!font-inter">
                          Home
                        </Heading>
                        <Heading size="s" as="h2" className="ml-[42px] !font-inter">
                          About
                        </Heading>
                        <Heading size="s" as="h3" className="ml-[30px] !font-inter">
                          Services
                        </Heading>
                      </div>
                      <Heading size="s" as="h4" className="self-end !font-inter">
                        Become a guide
                      </Heading>
                    </div>
                    <a href="LOGIN" target="_blank" rel="noreferrer" className="sm:p-5">
                      <Heading size="lg" as="h5">
                        LOGIN
                      </Heading>
                    </a>
                  </div>
                  <div className="ml-[177px] flex h-[182px] w-[44%] flex-col items-start justify-center gap-[25px] bg-[url(/public/images/img_services.svg)] bg-cover bg-no-repeat p-[13px] md:ml-0 md:h-auto md:w-full">
                    <Text size="s" as="p" className="mt-[21px] !text-white-A700">
                      Tours Packages
                    </Text>
                    <Text size="s" as="p" className="!text-white-A700">
                      Camping Packages
                    </Text>
                    <Text size="s" as="p" className="mb-[21px] !text-white-A700">
                      Get offers from locals
                    </Text>
                  </div>
                </div>
              </div>

              {/* hero banner section */}
              <div className="absolute bottom-[0.00px] left-[20%] m-auto flex w-[53%] flex-col">
                <div className="flex flex-col items-start">
                  <Heading size="6xl" as="h6" className="w-[75%] !text-[58.51px] leading-[67px] md:w-full md:p-5">
                    No matter where you’re going to, we’ll take you there
                  </Heading>
                  <div className="relative mt-[-28px] flex items-end self-center rounded-[5px] bg-gray-100_99 p-[22px] md:flex-col sm:p-5">
                    <Text size="lg" as="p" className="mb-[11px] !text-[18.81px] !text-white-A700">
                      Where to?
                    </Text>
                    <div className="ml-[51px] h-[48px] w-[3px] rounded-[1px] bg-blue_gray-100_01 md:ml-0 md:h-[3px] md:w-[48px] md:p-5" />
                    <Text size="lg" as="p" className="mb-[9px] ml-[52px] !text-[18.81px] !text-white-A700 md:ml-0">
                      Travel Type
                    </Text>
                    <Img
                      src="images/img_arrow_down_white_a700_6x12.svg"
                      alt="arrowdown_three"
                      className="mb-[22px] ml-[21px] h-[6px] md:ml-0 md:w-full"
                    />
                    <div className="ml-14 h-[48px] w-[3px] rounded-[1px] bg-blue_gray-100_01 md:ml-0 md:h-[3px] md:w-[48px] md:p-5" />
                    <Text size="lg" as="p" className="mb-[11px] ml-10 !text-[18.81px] !text-white-A700 md:ml-0">
                      Duration
                    </Text>
                    <Img
                      src="images/img_arrow_down_white_a700_6x12.svg"
                      alt="arrowdown_five"
                      className="mb-[22px] ml-[19px] h-[6px] md:ml-0 md:w-full"
                    />
                    <Button
                      size="2xl"
                      className="ml-[55px] min-w-[176px] rounded-[10px] font-semibold !shadow-sm md:ml-0 md:p-5 sm:px-5"
                    >
                      Submit
                    </Button>
                  </div>
                </div>
                <div className="mt-7 flex w-[67%] items-center gap-[13px] md:w-full md:p-5 sm:flex-col">
                  <div className="flex h-[36px] w-[33%] items-center justify-end bg-[url(/public/images/img_group_10.png)] bg-cover bg-no-repeat p-2 md:h-auto sm:w-full">
                    <Text size="xs" as="p" className="mr-1 !text-[12.54px] !font-medium !text-white-A700 md:mr-0">
                      +
                    </Text>
                  </div>
                  <Text size="xs" as="p" className="mb-[5px] self-end !text-[12.54px] !font-medium !text-white-A700">
                    2,500 people booked Tommorowland Event in last 24 hours
                  </Text>
                </div>
                <div className="mr-[140px] mt-[181px] flex h-px w-[127px] self-end md:mr-0" />
              </div>
            </div>
          </div>

          {/* about section */}
          <div className="mx-auto mt-[29px] flex w-full max-w-[1718px] items-start justify-between gap-5 self-end md:flex-col md:p-5">
            <Img
              src="images/img_rectangle_19367.png"
              alt="image_one"
              className="h-[764px] w-[32%] rounded-[50px] object-cover md:w-full"
            />
            <div className="mt-[170px] flex w-[59%] flex-col items-start md:w-full">
              <Heading size="md" as="h2" className="ml-[11px] uppercase tracking-[1.80px] !text-blue-300 md:ml-0">
                Information
              </Heading>
              <Heading size="4xl" as="h3" className="mt-[33px] !font-volkhov !text-blue_gray-900">
                What is “website name” guide?
              </Heading>
              <Text size="2xl" as="p" className="ml-1.5 !text-black-900 md:ml-0">
                We believe interaction with the local people is what makes a trip memorable. No matter what cultural
                background, religion, race or belief, there will always be overlapping interests. By interacting with
                locals, our perspectives on the world will broaden, a better understanding emerges and friends will be
                made.
              </Text>
              <Button
                color="blue_300_e8"
                size="xl"
                className="mt-[77px] min-w-[193px] rounded-[10px] font-semibold sm:px-5"
              >
                Red More
              </Button>
            </div>
          </div>

          {/* features section */}
          <div className="mt-[30px] flex flex-col items-center gap-[66px] self-stretch bg-gray-400_33 p-[54px] md:p-5 sm:gap-[33px]">
            <Text size="4xl" as="p" className="mt-[42px] capitalize !text-black-900">
              Why you should book a ”our website name” tour
            </Text>
            <div className="container-xs flex gap-[127px] md:flex-col">
              {data1.map((d, index) => (
                <div
                  key={"listdescription" + index}
                  className="flex w-full flex-col items-end gap-[83px] md:gap-[62px] sm:gap-[41px]"
                >
                  <Img
                    src={d.circleimage}
                    alt="circleimage"
                    className="mr-[123px] h-[150px] w-[150px] rounded-[50%] md:mr-0"
                  />
                  <Text size="2xl" as="p" className="text-center capitalize !text-black-900">
                    {d.description}
                  </Text>
                </div>
              ))}
            </div>
          </div>

          {/* explore packages section */}
          <div className="flex gap-px self-stretch md:flex-col">
            {data.map((d, index) => (
              <div
                key={"listexplore" + index}
                className="flex h-[399px] w-full items-center bg-[url(/public/images/img_explore_nature.png)] bg-cover bg-no-repeat md:h-auto md:p-5"
              >
                <div className="flex h-[399px] w-full items-end justify-center bg-[url(/public/images/img_group_8.png)] bg-cover bg-no-repeat px-14 py-[103px] md:h-auto md:p-5">
                  <div className="mt-5 flex w-[48%] flex-col items-start gap-[18px] md:w-full">
                    <div className="relative h-[96px] self-stretch">
                      <Img
                        src={d.explorenature}
                        alt="explore_nature"
                        className="absolute bottom-[-0.85px] right-[0.00px] m-auto h-[19px] w-[46%]"
                      />
                      <div className="absolute left-[0.00px] top-[0.00px] m-auto flex flex-col items-center">
                        <Heading size="md" as="h2" className="relative z-[1] uppercase tracking-[1.80px]">
                          Promotion
                        </Heading>
                        <Heading size="4xl" as="h3" className="!font-volkhov">
                          {d.explorenature1}
                        </Heading>
                      </div>
                    </div>
                    <Button
                      color="blue_300_e8"
                      size="2xl"
                      className="ml-[91px] min-w-[193px] rounded-[10px] font-semibold md:ml-0 sm:pr-5"
                    >
                      View Packages
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* promotion section */}
          <div className="container-xs relative mt-32 h-[734px] md:p-5">
            <div className="absolute left-[0.00px] top-[8%] m-auto flex w-[56%] flex-col items-start">
              <Heading size="md" as="h2" className="ml-2 uppercase tracking-[1.80px] !text-red-400 md:ml-0">
                Promotion
              </Heading>
              <Heading size="4xl" as="h3" className="mt-[18px] !font-volkhov leading-[71px] !text-blue_gray-900">
                We Provide You Best Morocco Sightseeing Tours
              </Heading>
              <Text as="p" className="ml-2 w-[72%] leading-[26px] !text-black-900 md:ml-0 md:w-full">
                Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.
                Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus
                illum aut optio quibusdam!
              </Text>
              <Button
                color="blue_300_e8"
                size="2xl"
                className="ml-2 mt-[30px] min-w-[193px] rounded-[10px] font-semibold md:ml-0 sm:pr-5"
              >
                View Packages
              </Button>
            </div>
            <div className="absolute bottom-[0.00px] left-[4%] m-auto flex w-[70%] gap-[62px] md:relative md:flex-col">
              <div className="flex flex-1 flex-col">
                <div className="relative h-[237px] md:h-auto">
                  <Img
                    src="images/img_rectangle_19295.png"
                    alt="image"
                    className="h-[237px] w-full rounded-[10px] object-cover"
                  />
                  <Button
                    size="xs"
                    variant="gradient"
                    color="blue_300_blue_300"
                    className="absolute right-[16.00px] top-[15.00px] m-auto min-w-[83px] rounded-[17px] font-light sm:px-5"
                  >
                    $700
                  </Button>
                </div>
                <Img
                  src="images/img_group_81.png"
                  alt="image_one"
                  className="relative z-[3] mt-[-17px] h-[33px] w-[47%] object-cover"
                />
              </div>
              <div className="relative h-[237px] flex-1 md:h-auto md:w-full md:flex-none">
                <Img
                  src="images/img_rectangle_19297.png"
                  alt="image"
                  className="h-[237px] w-full rounded-[10px] object-cover"
                />
                <Button
                  size="xs"
                  variant="gradient"
                  color="blue_300_blue_300"
                  className="absolute right-[0.00px] top-[15.00px] m-auto min-w-[83px] rounded-[17px] font-light sm:px-5"
                >
                  $500
                </Button>
              </div>
              <Img
                src="images/img_group_1000001726.png"
                alt="image"
                className="h-[38px] w-[35%] object-cover md:w-full"
              />
              <div className="relative h-[237px] flex-1 md:h-auto md:w-full md:flex-none">
                <Img
                  src="images/img_rectangle_19296.png"
                  alt="image"
                  className="h-[237px] w-full rounded-[10px] object-cover"
                />
                <Button
                  size="xs"
                  variant="gradient"
                  color="blue_300_blue_300"
                  className="absolute right-[13.00px] top-[21.00px] m-auto min-w-[83px] rounded-[17px] font-light sm:px-5"
                >
                  $800
                </Button>
              </div>
              <div className="relative h-[237px] flex-1 md:h-auto md:w-full md:flex-none">
                <Img
                  src="images/img_rectangle_19297_237x231.png"
                  alt="image"
                  className="h-[237px] w-full rounded-[10px] object-cover"
                />
                <div className="absolute right-[12.00px] top-[15.00px] m-auto flex w-[36%] justify-center rounded-[17px] bg-gradient1 p-1">
                  <Text as="p" className="self-end !font-light !text-white-A700">
                    $500
                  </Text>
                </div>
              </div>
              <Img
                src="images/img_close_white_a700.png"
                alt="close_one"
                className="h-[33px] w-[6%] object-cover md:w-full"
              />
            </div>
            <div className="absolute bottom-0 right-[0.00px] top-0 my-auto h-[723px] w-[35%]">
              <Img
                src="images/img_rectangle_19299.png"
                alt="image_two"
                className="absolute bottom-0 left-[0.00px] top-0 my-auto h-[710px] w-[86%] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full items-center justify-center gap-[7px] sm:relative sm:flex-col">
                <Img
                  src="images/img_image_50.png"
                  alt="imagefifty_one"
                  className="mb-3 h-[690px] w-[89%] rounded-tl-[238px] rounded-tr-[238px] object-cover sm:w-full"
                />
                <Heading size="5xl" as="h4" className="rotate-[90deg] self-end !text-[51.19px] !text-black-900_19">
                  Breath Taking Viewes
                </Heading>
              </div>
            </div>
          </div>
          <Heading size="md" as="h2" className="mt-[69px] text-center uppercase tracking-[1.80px] !text-red-400">
            trendy
          </Heading>
          <Heading
            size="4xl"
            as="h2"
            className="w-[33%] text-center !font-volkhov leading-[71px] !text-blue_gray-900 md:w-full md:p-5"
          >
            Our Trending Tour Packages
          </Heading>

          {/* trending tours section */}
          <div className="relative mt-[61px] h-[2958px] self-stretch md:h-auto">
            <Img
              src="images/img_rectangle_19294.png"
              alt="image_three"
              className="absolute left-0 right-0 top-[29%] m-auto h-[474px] w-full object-cover"
            />
            <div className="flex w-full max-w-[1382px] flex-col md:p-5">
              <div className="flex items-start md:flex-col">
                <Button
                  size="sm"
                  shape="round"
                  className="relative z-[6] mt-[753px] min-w-[196px] font-semibold sm:px-5"
                >
                  View All Tours &gt;&gt;
                </Button>
                <div className="relative ml-[-141px] flex flex-1 items-start md:ml-0 md:flex-col md:self-stretch">
                  <div className="flex flex-1 items-start md:flex-col md:self-stretch">
                    <Heading size="4xl" as="h2" className="mt-[121px] w-[47%] !font-volkhov capitalize md:w-full">
                      <>
                        Let’s make your <br />
                        next Tour amazing
                      </>
                    </Heading>
                    <div className="relative ml-[-127px] flex flex-1 flex-col items-start gap-[1110px] md:ml-0 md:gap-[832px] md:self-stretch sm:gap-[555px]">
                      <div className="flex w-[70%] flex-col items-start md:w-full">
                        <div className="ml-[7px] flex flex-col self-stretch md:ml-0">
                          <div className="relative h-[377px]">
                            <Img
                              src="images/img_rectangle_19305.png"
                              alt="image_four"
                              className="absolute left-[0.29px] top-[0.00px] m-auto h-[312px] w-[91%] rounded-[10px] object-cover"
                            />
                            <div className="absolute bottom-[-0.07px] left-[0.00px] m-auto flex flex-wrap items-center">
                              <Img
                                src="images/img_uil_calender.svg"
                                alt="uilcalender_one"
                                className="relative z-[4] h-[24px] w-[24px]"
                              />
                              <Text
                                as="p"
                                className="relative ml-[-1px] self-start text-center !text-[16.81px] capitalize"
                              >
                                4 houres
                              </Text>
                              <Img
                                src="images/img_ooui_user_avatar_outline.svg"
                                alt="oouiuser_one"
                                className="ml-[27px] h-[20px] w-[20px]"
                              />
                              <Text as="p" className="ml-2 self-end text-center !text-[16.81px] capitalize">
                                30 People going
                              </Text>
                            </div>
                            <Img
                              src="images/img_ellipse_630.png"
                              alt="circleimage"
                              className="absolute bottom-[1.00px] right-[0.00px] m-auto h-[141px] w-[141px] rounded-[50%]"
                            />
                          </div>
                          <div className="ml-[5px] flex w-[88%] items-center justify-between gap-5 md:ml-0 md:w-full">
                            <Heading as="h3" className="text-center !text-[29.03px] capitalize !text-blue_gray-900_01">
                              David Brown
                            </Heading>
                            <RatingBar
                              value={5}
                              isEditable={true}
                              color="#ffba09"
                              activeColor="#ffba09"
                              size={16}
                              className="mb-1.5 flex justify-between self-end"
                            />
                          </div>
                          <div className="mt-[7px] flex items-center gap-[5px]">
                            <Img src="images/img_ep_location.svg" alt="eplocation_one" className="h-[27px] w-[27px]" />
                            <Text as="p" className="!text-[16.81px] capitalize">
                              Fes,Riad
                            </Text>
                          </div>
                        </div>
                        <Text
                          size="3xl"
                          as="p"
                          className="mt-[9px] text-center !text-[29.03px] capitalize !text-red-400"
                        >
                          1,223 DH
                        </Text>
                        <div className="ml-[7px] flex w-[91%] flex-col items-start gap-6 md:ml-0 md:w-full">
                          <Text
                            size="xs"
                            as="p"
                            className="!text-[12.22px] leading-6 tracking-[0.61px] !text-black-900"
                          >
                            Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod
                            eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a
                            laudantium internos.
                          </Text>
                          <Button size="sm" shape="round" className="min-w-[134px] font-semibold sm:pr-5">
                            Explore Now
                          </Button>
                        </div>
                      </div>
                      <Text as="p" className="self-end text-center !text-[16.81px] capitalize">
                        4 houres
                      </Text>
                    </div>
                  </div>
                  <div className="relative z-[5] ml-[-134px] flex w-[27%] flex-col items-start md:ml-0 md:w-full">
                    <Img
                      src="images/img_rectangle_19305_312x392.png"
                      alt="image_five"
                      className="h-[312px] w-full rounded-[10px] object-cover md:h-auto"
                    />
                    <div className="mt-[39px] flex flex-wrap items-start">
                      <Img src="images/img_uil_calender.svg" alt="uilcalender" className="h-[24px] w-[24px]" />
                      <Text as="p" className="ml-2 text-center !text-[16.81px] capitalize">
                        8 days
                      </Text>
                      <Img
                        src="images/img_ooui_user_avatar_outline.svg"
                        alt="oouiuser_three"
                        className="ml-[35px] h-[20px] w-[20px]"
                      />
                      <Text as="p" className="ml-[5px] text-center !text-[16.81px] capitalize">
                        155 People going
                      </Text>
                    </div>
                    <div className="ml-[9px] mt-[9px] flex items-center justify-between gap-5 self-stretch md:ml-0">
                      <Heading as="h4" className="text-center !text-[29.03px] capitalize !text-blue_gray-900_01">
                        Emily Jones
                      </Heading>
                      <RatingBar
                        value={5}
                        isEditable={true}
                        color="#ffba09"
                        activeColor="#ffba09"
                        size={16}
                        className="flex justify-between"
                      />
                    </div>
                    <div className="flex items-center gap-[5px]">
                      <Img src="images/img_ep_location.svg" alt="eplocation" className="h-[27px] w-[27px] self-start" />
                      <Text as="p" className="self-end !text-[16.81px] capitalize">
                        Merzouga ,Comping In Sahara
                      </Text>
                    </div>
                    <Text
                      size="3xl"
                      as="p"
                      className="ml-1.5 mt-[9px] text-center !text-[29.03px] capitalize !text-red-400 md:ml-0"
                    >
                      4,000 DH
                    </Text>
                    <Text size="xs" as="p" className="!text-[12.22px] leading-6 tracking-[0.61px] !text-black-900">
                      Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et
                      labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.
                    </Text>
                    <Button size="sm" shape="round" className="mt-6 min-w-[134px] font-semibold sm:pr-5">
                      Explore Now
                    </Button>
                  </div>
                </div>
              </div>
              <div className="relative z-[7] ml-[23px] mt-[-82px] h-[839px] w-[44%] md:ml-0 md:h-auto">
                <div className="flex w-full items-start justify-center md:flex-col">
                  <Img
                    src="images/img_close_white_a700_36x90.png"
                    alt="close_one"
                    className="relative z-[8] h-[36px] w-[13%] object-cover md:w-full"
                  />
                  <Img
                    src="images/img_group_1000001728.png"
                    alt="image_six"
                    className="relative ml-[-85px] h-[839px] w-[87%] object-cover md:ml-0 md:w-full"
                  />
                </div>
                <Img
                  src="images/img_close_white_a700.png"
                  alt="close_three"
                  className="absolute bottom-[2.00px] right-[30.00px] m-auto h-[33px] w-[11%] object-cover"
                />
                <Text size="xl" as="p" className="absolute left-[22%] top-[21%] m-auto text-center capitalize">
                  2 person{" "}
                </Text>
                <Text as="p" className="absolute left-[27.00px] top-[7%] m-auto text-center !text-[16.81px] capitalize">
                  4 houres
                </Text>
              </div>
            </div>
            <div className="absolute left-[13%] top-[0.00px] z-[9] m-auto flex w-full max-w-[1276px] items-center justify-between gap-5 md:relative md:flex-col md:p-5">
              <div className="flex w-[59%] items-center justify-between gap-5 md:w-full sm:flex-col">
                <div className="flex w-[59%] flex-col items-start sm:w-full">
                  <div className="relative ml-3 h-[421px] self-stretch md:ml-0">
                    <Img
                      src="images/img_rectangle_19305_1.png"
                      alt="image_seven"
                      className="absolute left-[0.29px] top-[0.00px] m-auto h-[312px] w-[90%] rounded-[10px] object-cover"
                    />
                    <div className="absolute bottom-[0.12px] left-[0.00px] m-auto flex flex-col items-start">
                      <div className="relative z-10 flex flex-wrap items-center">
                        <Img src="images/img_uil_calender.svg" alt="uilcalender" className="h-[24px] w-[24px]" />
                        <Text as="p" className="ml-[9px] self-start text-center !text-[16.81px] capitalize">
                          3 houres
                        </Text>
                        <Img
                          src="images/img_ooui_user_avatar_outline.svg"
                          alt="oouiuser_five"
                          className="ml-[18px] h-[20px] w-[20px]"
                        />
                        <Text as="p" className="ml-2 self-end text-center !text-[16.81px] capitalize">
                          25 People going
                        </Text>
                      </div>
                      <Heading as="h5" className="text-center !text-[29.03px] capitalize !text-blue_gray-900_01">
                        Maria Ahemed
                      </Heading>
                    </div>
                    <RatingBar
                      value={5}
                      isEditable={true}
                      color="#ffba09"
                      activeColor="#ffba09"
                      size={16}
                      className="absolute bottom-[4.00px] right-[12%] m-auto flex justify-between"
                    />
                    <Img
                      src="images/img_ellipse_631.png"
                      alt="circleimage_one"
                      className="absolute bottom-[8%] right-[0.00px] m-auto h-[141px] w-[141px] rounded-[50%]"
                    />
                  </div>
                  <div className="ml-2.5 mt-[9px] flex items-center gap-[9px] md:ml-0">
                    <Img
                      src="images/img_ep_location.svg"
                      alt="eplocation_five"
                      className="h-[27px] w-[27px] self-start"
                    />
                    <Text as="p" className="self-end text-center !text-[16.81px] capitalize">
                      Chefchaouen,Blue City
                    </Text>
                  </div>
                  <div className="mt-1.5 flex flex-wrap items-center gap-[25px]">
                    <Text size="3xl" as="p" className="text-center !text-[29.03px] capitalize !text-red-400">
                      1,000 DH
                    </Text>
                    <Text size="xl" as="p" className="self-end text-center capitalize">
                      per person
                    </Text>
                  </div>
                  <Text
                    size="xs"
                    as="p"
                    className="ml-3 w-[90%] !text-[12.22px] leading-6 tracking-[0.61px] !text-black-900 md:ml-0 md:w-full"
                  >
                    Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et
                    labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.
                  </Text>
                  <Button size="sm" shape="round" className="ml-3 mt-6 min-w-[134px] font-semibold md:ml-0 sm:pr-5">
                    Explore Now
                  </Button>
                </div>
                <Text size="xl" as="p" className="mb-[191px] self-end text-center capitalize">
                  per person
                </Text>
              </div>
              <Text size="xl" as="p" className="mb-[188px] self-end text-center capitalize">
                per person
              </Text>
            </div>
            <div className="absolute bottom-[27%] left-[14%] z-[11] m-auto flex w-[21%] flex-col items-start">
              <div className="ml-[9px] flex flex-col items-start self-stretch md:ml-0">
                <Img
                  src="images/img_rectangle_19305_2.png"
                  alt="image_eight"
                  className="h-[312px] w-full rounded-[10px] object-cover md:h-auto"
                />
                <Img src="images/img_uil_calender.svg" alt="uilcalender" className="mt-[39px] h-[24px] w-[24px]" />
                <div className="mt-[11px] flex items-center justify-between gap-5 self-stretch">
                  <Heading as="h6" className="text-center !text-[29.03px] capitalize !text-blue_gray-900_01">
                    Tangia
                  </Heading>
                  <RatingBar
                    value={5}
                    isEditable={true}
                    color="#ffba09"
                    activeColor="#ffba09"
                    size={16}
                    className="flex justify-between"
                  />
                </div>
                <div className="flex items-center gap-3.5">
                  <Img src="images/img_ep_location.svg" alt="eplocation" className="h-[27px] w-[27px]" />
                  <Text as="p" className="text-center !text-[16.81px] capitalize">
                    Marrakech
                  </Text>
                </div>
              </div>
              <Text size="3xl" as="p" className="mt-[9px] text-center !text-[29.03px] capitalize !text-red-400">
                1,000 DH
              </Text>
              <div className="ml-3 flex flex-col items-start gap-6 self-stretch md:ml-0">
                <Text size="xs" as="p" className="!text-[12.22px] leading-6 tracking-[0.61px] !text-black-900">
                  Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et
                  labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.
                </Text>
                <Button shape="round" className="min-w-[134px] font-semibold sm:pr-5">
                  Explore Now
                </Button>
              </div>
            </div>
            <div className="absolute bottom-[27%] left-0 right-0 z-[12] m-auto flex w-[21%] flex-col items-start">
              <Img
                src="images/img_rectangle_19305_3.png"
                alt="image_nine"
                className="ml-[9px] h-[312px] w-full rounded-[10px] object-cover md:ml-0 md:h-auto"
              />
              <div className="relative z-[13] ml-[9px] mt-[39px] flex items-center gap-2.5 md:ml-0">
                <Img src="images/img_uil_calender.svg" alt="uilcalender" className="h-[24px] w-[24px] self-start" />
                <Text as="p" className="text-center !text-[16.81px] capitalize">
                  1 days
                </Text>
              </div>
              <div className="flex items-center justify-between gap-5 self-stretch">
                <Heading as="h3" className="text-center !text-[29.03px] capitalize !text-blue_gray-900_01">
                  Marrocain tea{" "}
                </Heading>
                <RatingBar
                  value={5}
                  isEditable={true}
                  color="#ffba09"
                  activeColor="#ffba09"
                  size={16}
                  className="flex justify-between self-end"
                />
              </div>
              <div className="ml-[7px] mt-[9px] flex items-center gap-[5px] md:ml-0">
                <Img src="images/img_ep_location.svg" alt="eplocation_nine" className="h-[27px] w-[27px]" />
                <Text as="p" className="!text-[16.81px] capitalize">
                  Fes
                </Text>
              </div>
              <div className="mt-[9px] flex w-[60%] flex-wrap items-center justify-between gap-5 md:w-full md:p-5">
                <Text size="3xl" as="p" className="text-center !text-[29.03px] capitalize !text-red-400">
                  1,223 DH
                </Text>
                <Text size="xl" as="p" className="text-center capitalize">
                  2 person{" "}
                </Text>
              </div>
              <Text
                size="xs"
                as="p"
                className="ml-[9px] !text-[12.22px] leading-6 tracking-[0.61px] !text-black-900 md:ml-0"
              >
                Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore
                harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.
              </Text>
              <Button shape="round" className="ml-[9px] mt-6 min-w-[134px] font-semibold md:ml-0 sm:pr-5">
                Explore Now
              </Button>
            </div>
            <div className="absolute bottom-[27%] right-[14%] m-auto flex w-[21%] flex-col">
              <div className="ml-[9px] flex flex-col md:ml-0">
                <div className="flex flex-col items-start">
                  <Img
                    src="images/img_rectangle_19305_4.png"
                    alt="image_ten"
                    className="h-[312px] w-full rounded-[10px] object-cover md:h-auto"
                  />
                  <Img
                    src="images/img_close_white_a700_36x90.png"
                    alt="close_five"
                    className="relative ml-3.5 mt-[-18px] h-[36px] w-[24%] object-cover md:ml-0"
                  />
                </div>
                <Img src="images/img_uil_calender.svg" alt="uilcalender" className="mt-6 h-[24px] w-[24px]" />
                <div className="mt-[17px] flex items-start justify-between gap-5">
                  <Heading as="h3" className="text-center !text-[29.03px] capitalize !text-blue_gray-900_01">
                    Tagin,bastilla
                  </Heading>
                  <RatingBar
                    value={5}
                    isEditable={true}
                    color="#ffba09"
                    activeColor="#ffba09"
                    size={16}
                    className="mt-[7px] flex justify-between"
                  />
                </div>
                <div className="relative mt-[-3px] flex items-center gap-[5px]">
                  <Img src="images/img_ep_location.svg" alt="eplocation" className="h-[27px] w-[27px]" />
                  <Text as="p" className="self-end !text-[16.81px] capitalize">
                    Fes
                  </Text>
                </div>
              </div>
              <div className="mt-[9px] flex flex-wrap items-start gap-[25px]">
                <Text size="3xl" as="p" className="text-center !text-[29.03px] capitalize !text-red-400">
                  1,200 DH
                </Text>
                <Text size="xl" as="p" className="text-center capitalize">
                  2 person{" "}
                </Text>
              </div>
              <div className="ml-[9px] flex flex-col items-start gap-6 md:ml-0">
                <Text size="xs" as="p" className="!text-[12.22px] leading-6 tracking-[0.61px] !text-black-900">
                  Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et
                  labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.
                </Text>
                <Button shape="round" className="min-w-[134px] font-semibold sm:pr-5">
                  Explore Now
                </Button>
              </div>
            </div>
            <Heading
              size="4xl"
              as="h1"
              className="absolute left-0 right-0 top-[34%] m-auto w-[33%] !font-volkhov capitalize"
            >
              <>
                Let’s make your amazing
                <br /> Destination for foodies
              </>
            </Heading>
            <div className="absolute bottom-[0.00px] left-0 right-0 z-[14] m-auto flex w-full max-w-[1383px] gap-[97px] md:relative md:flex-col md:p-5">
              <div className="flex w-full flex-col items-start">
                <Img
                  src="images/img_rectangle_19305_5.png"
                  alt="image"
                  className="h-[312px] w-full rounded-[10px] object-cover md:h-auto"
                />
                <div className="mt-[39px] flex flex-wrap items-start">
                  <Img src="images/img_uil_calender.svg" alt="8_days_one" className="h-[24px] w-[24px]" />
                  <Text as="p" className="ml-2 text-center !text-[16.81px] capitalize">
                    8 days
                  </Text>
                  <Img
                    src="images/img_ooui_user_avatar_outline.svg"
                    alt="8_days_three"
                    className="ml-[35px] h-[20px] w-[20px]"
                  />
                  <Text as="p" className="ml-2 text-center !text-[16.81px] capitalize">
                    25 People going
                  </Text>
                </div>
                <div className="mt-1.5 flex items-center justify-between gap-5 self-stretch">
                  <Heading as="h3" className="text-center !text-[29.03px] capitalize !text-blue_gray-900_01">
                    couscous
                  </Heading>
                  <RatingBar
                    value={5}
                    isEditable={true}
                    color="#ffba09"
                    activeColor="#ffba09"
                    size={16}
                    className="mb-[11px] flex justify-between self-end"
                  />
                </div>
                <div className="flex items-center">
                  <Img src="images/img_ep_location.svg" alt="image_one" className="h-[27px] w-[27px]" />
                  <Text as="p" className="self-start text-center !text-[16.81px] capitalize">
                    Chefchaouen
                  </Text>
                </div>
                <div className="mt-[7px] flex flex-wrap items-center gap-5">
                  <Text size="3xl" as="p" className="text-center !text-[29.03px] capitalize !text-red-400">
                    400 DH
                  </Text>
                  <Text size="xl" as="p" className="self-end text-center capitalize">
                    2 person{" "}
                  </Text>
                </div>
                <Text size="xs" as="p" className="mt-1 !text-[12.22px] leading-6 tracking-[0.61px] !text-black-900">
                  Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et
                  labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.
                </Text>
                <Button shape="round" className="mt-6 min-w-[134px] font-semibold sm:pr-5">
                  Explore Now
                </Button>
              </div>
              <div className="flex w-full flex-col items-start">
                <Img
                  src="images/img_rectangle_19305_6.png"
                  alt="image"
                  className="h-[312px] w-full rounded-[10px] object-cover md:h-auto"
                />
                <div className="mt-[39px] flex flex-wrap items-start">
                  <Img src="images/img_uil_calender.svg" alt="uilcalender_one" className="h-[24px] w-[24px]" />
                  <Text as="p" className="ml-2 text-center !text-[16.81px] capitalize">
                    8 days
                  </Text>
                  <Img
                    src="images/img_ooui_user_avatar_outline.svg"
                    alt="oouiuser_one"
                    className="ml-[35px] h-[20px] w-[20px]"
                  />
                  <Text as="p" className="ml-2 text-center !text-[16.81px] capitalize">
                    30 People going
                  </Text>
                </div>
                <div className="flex items-center justify-between gap-5 self-stretch">
                  <Heading as="h3" className="text-center !text-[29.03px] capitalize !text-blue_gray-900_01">
                    Breakfest
                  </Heading>
                  <RatingBar
                    value={5}
                    isEditable={true}
                    color="#ffba09"
                    activeColor="#ffba09"
                    size={16}
                    className="mb-2 flex justify-between self-end"
                  />
                </div>
                <div className="mt-[5px] flex items-center gap-[5px]">
                  <Img src="images/img_ep_location.svg" alt="eplocation_one" className="h-[27px] w-[27px]" />
                  <Text as="p" className="!text-[16.81px] capitalize">
                    Taroudanet
                  </Text>
                </div>
                <div className="mt-[7px] flex flex-wrap items-center gap-3">
                  <Text size="3xl" as="p" className="text-center !text-[29.03px] capitalize !text-red-400">
                    500 DH
                  </Text>
                  <Text size="xl" as="p" className="self-end text-center capitalize">
                    per person
                  </Text>
                </div>
                <Text size="xs" as="p" className="mt-1 !text-[12.22px] leading-6 tracking-[0.61px] !text-black-900">
                  Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et
                  labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.
                </Text>
                <Button shape="round" className="mt-6 min-w-[134px] font-semibold sm:pr-5">
                  Explore Now
                </Button>
              </div>
              <div className="flex w-full flex-col items-start">
                <div className="flex flex-col items-start self-stretch">
                  <Img
                    src="images/img_rectangle_19305_7.png"
                    alt="image"
                    className="h-[312px] w-full rounded-[10px] object-cover md:h-auto"
                  />
                  <Img
                    src="images/img_close_white_a700.png"
                    alt="close_one"
                    className="relative ml-[17px] mt-[-15px] h-[33px] w-[17%] object-cover md:ml-0"
                  />
                </div>
                <div className="mt-[23px] flex flex-wrap items-start">
                  <Img src="images/img_uil_calender.svg" alt="uilcalender_one" className="h-[24px] w-[24px]" />
                  <Text as="p" className="ml-2 text-center !text-[16.81px] capitalize">
                    8 days
                  </Text>
                  <Img
                    src="images/img_ooui_user_avatar_outline.svg"
                    alt="oouiuser_one"
                    className="ml-[35px] h-[20px] w-[20px]"
                  />
                  <Text as="p" className="ml-[5px] text-center !text-[16.81px] capitalize">
                    155 People going
                  </Text>
                </div>
                <div className="mt-[5px] flex w-[75%] items-center justify-between gap-5 self-end md:w-full">
                  <Heading as="h3" className="text-center !text-[29.03px] capitalize !text-blue_gray-900_01">
                    Snails
                  </Heading>
                  <RatingBar
                    value={5}
                    isEditable={true}
                    color="#ffba09"
                    activeColor="#ffba09"
                    size={16}
                    className="mb-2.5 flex justify-between self-end"
                  />
                </div>
                <div className="flex items-center gap-[5px]">
                  <Img src="images/img_ep_location.svg" alt="eplocation_one" className="h-[27px] w-[27px]" />
                  <Text as="p" className="self-end !text-[16.81px] capitalize">
                    Djemaa El Fna
                  </Text>
                </div>
                <div className="mt-[7px] flex flex-wrap items-center gap-[27px]">
                  <Text size="3xl" as="p" className="text-center !text-[29.03px] capitalize !text-red-400">
                    100 DH
                  </Text>
                  <Text size="xl" as="p" className="text-center capitalize">
                    2 person
                  </Text>
                </div>
                <Text size="xs" as="p" className="mt-1 !text-[12.22px] leading-6 tracking-[0.61px] !text-black-900">
                  Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et
                  labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.
                </Text>
                <Button shape="round" className="mt-6 min-w-[134px] font-semibold sm:pr-5">
                  Explore Now
                </Button>
              </div>
            </div>
            <Img
              src="images/img_ellipse_2.png"
              alt="circleimage_two"
              className="absolute right-[13%] top-[8%] z-[15] m-auto h-[141px] w-[141px] rounded-[50%]"
            />
          </div>

          {/* testimonials section */}
          <div className="mt-[83px] flex h-[768px] items-end justify-center self-stretch bg-[url(/public/images/img_group_5.png)] bg-cover bg-no-repeat px-14 py-[66px] md:h-auto md:p-5">
            <div className="mt-[59px] flex w-[35%] flex-col items-center gap-[33px] md:w-full">
              <div className="flex flex-col items-center self-stretch">
                <Heading size="md" as="h2" className="text-center uppercase tracking-[1.80px] !text-red-400">
                  Promotion
                </Heading>
                <Heading size="4xl" as="h3" className="text-center !font-volkhov leading-[71px] !text-blue_gray-900">
                  See What Our Clients Say About Us
                </Heading>
              </div>
              <div className="flex w-[94%] items-center md:w-full md:flex-col">
                <Button
                  color="gray_600"
                  size="3xl"
                  shape="circle"
                  className="relative z-[18] mb-[113px] w-[62px] rotate-[180deg] self-end !rounded-[31px]"
                >
                  <Img src="images/img_arrow_down_white_a700.svg" />
                </Button>
                <div className="relative ml-[-31px] flex flex-1 items-center md:ml-0 md:self-stretch sm:flex-col">
                  <div className="flex w-full flex-1 sm:flex-col sm:self-stretch">
                    <Slider
                      autoPlay
                      autoPlayInterval={2000}
                      responsive={{ 0: { items: 1 }, 550: { items: 1 }, 1050: { items: 2 } }}
                      renderDotsItem={(props) => {
                        return props?.isActive ? (
                          <div className="mr-[17px] h-px w-[31px] rounded-[1px] bg-red-400" />
                        ) : (
                          <div className="mr-[17px] h-px w-[31px] rounded-[1px] bg-white-A700" />
                        );
                      }}
                      activeIndex={sliderState}
                      onSlideChanged={(e) => {
                        setSliderState(e?.item);
                      }}
                      ref={sliderRef}
                      items={[...Array(6)].map(() => (
                        <React.Fragment key={Math.random()}>
                          <div className="mx-2.5 flex flex-1 justify-center rounded-[17px] bg-white-A700 p-[34px] sm:mx-0 sm:self-stretch sm:p-5">
                            <div className="mt-4 flex w-[90%] flex-col items-end gap-[9px] md:w-full">
                              <div className="relative h-[163px] self-stretch">
                                <div className="absolute bottom-[0.00px] right-[0.00px] m-auto h-[122px] w-[93%] md:h-auto">
                                  <Text
                                    size="xs"
                                    as="p"
                                    className="text-center !text-[12.22px] leading-6 tracking-[0.61px] !text-black-900"
                                  >
                                    Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae
                                    molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus
                                    impedit vel doloremque obcaecati qui ullam consectetur et ipsum omnis.
                                  </Text>
                                  <Img
                                    src="images/img_ri_double_quotes_l.svg"
                                    alt="ridouble_one"
                                    className="absolute bottom-[14.00px] right-[33%] m-auto h-[12px] w-[12px]"
                                  />
                                </div>
                                <Img
                                  src="images/img_ri_double_quotes_l_black_900.svg"
                                  alt="ridouble_three"
                                  className="absolute left-[0.00px] top-[0.00px] m-auto h-[82px] w-[82px]"
                                />
                              </div>
                              <Heading
                                size="xs"
                                as="h4"
                                className="mr-[99px] text-center !text-[12.22px] tracking-[0.61px] !text-black-900 md:mr-0"
                              >
                                Christine Beckam - Designer
                              </Heading>
                            </div>
                          </div>
                        </React.Fragment>
                      ))}
                    />
                  </div>
                  <Button
                    color="gray_600"
                    size="3xl"
                    shape="circle"
                    className="relative z-[17] mb-[113px] ml-[-31px] w-[62px] self-end !rounded-[31px] sm:ml-0"
                  >
                    <Img src="images/img_arrow_left.svg" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* footer section */}
          <footer className="mt-[51px] w-[82%] md:w-full md:p-5">
            <div className="relative h-[506px] md:h-auto">
              <div className="relative z-20 flex w-full max-w-[1542px] items-center justify-center md:flex-col md:p-5">
                <div className="relative z-[21] mb-[105px] h-[2px] flex-1 self-end bg-gray-300 md:self-stretch" />
                <Img
                  src="images/img_footer_img.png"
                  alt="footerimg_one"
                  className="relative ml-[-235px] h-[484px] w-[32%] object-cover opacity-0.07 md:ml-0 md:w-full"
                />
              </div>
              <div className="absolute left-[20%] top-[28%] z-[23] m-auto flex w-[23%] items-start justify-between gap-5">
                <div className="flex flex-col items-start gap-5">
                  <Heading size="xl" as="h5" className="!font-manrope !text-gray-900">
                    Company
                  </Heading>
                  <ul className="flex flex-col items-start gap-3.5">
                    <li>
                      <a href="#">
                        <Text as="p" className="!font-manrope !font-medium !text-gray-900">
                          About Us
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!font-manrope !font-medium !text-gray-900">
                          Careers
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!font-manrope !font-medium !text-gray-900">
                          Blog
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!font-manrope !font-medium !text-gray-900">
                          Pricing
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col items-start gap-5">
                  <Heading size="xl" as="h5" className="!font-manrope !text-gray-900">
                    Destinations
                  </Heading>
                  <ul className="ml-[19px] flex flex-col items-start gap-3.5 md:ml-0">
                    <li>
                      <a href="#">
                        <Text as="p" className="!font-manrope !font-medium !text-gray-900">
                          Marrkech
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!font-manrope !font-medium !text-gray-900">
                          Tanger
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!font-manrope !font-medium !text-gray-900">
                          Fes
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!font-manrope !font-medium !text-gray-900">
                          Marzouga
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <Heading
                size="xl"
                as="h5"
                className="absolute right-[34%] top-[28%] z-[24] m-auto !font-manrope !text-gray-900"
              >
                Join Our Newsletter
              </Heading>
              <div className="absolute right-[22%] top-[38%] z-[25] m-auto flex w-[25%] items-center justify-between gap-5 bg-deep_purple-50 pl-[15px]">
                <Text as="p" className="!font-manrope !font-medium tracking-[-0.32px] !text-gray-900_33">
                  Your email address
                </Text>
                <Button
                  size="lg"
                  className="min-w-[149px] rounded-[10px] font-manrope font-medium tracking-[-0.32px] !shadow-sm sm:px-5"
                >
                  Subscribe
                </Button>
              </div>
              <Text
                as="p"
                className="absolute bottom-[38%] right-1/4 z-[26] m-auto w-[21%] !font-manrope !font-medium leading-[26px] tracking-[-0.32px] !text-gray-900_7f"
              >
                <>
                  * Will send you weekly updates for your better
                  <br />
                  tour packages.
                </>
              </Text>
              <div className="absolute left-[0.00px] top-[0.00px] m-auto flex w-[15%] flex-col items-end">
                <Img
                  src="images/img_ellipse_621.png"
                  alt="image_eleven"
                  className="relative z-[19] h-[207px] w-full rounded-[103px] object-cover md:h-auto"
                />
                <Text
                  as="p"
                  className="relative mt-[-20px] w-[88%] !font-manrope !font-medium leading-7 tracking-[-0.32px] !text-blue_gray-500 md:w-full"
                >
                  Travel helps companies manage payments easily.
                </Text>
              </div>
              <div className="absolute bottom-[42%] left-[30.00px] z-[22] m-auto flex gap-[15px]">
                <Img src="images/img_link.svg" alt="link_one" className="h-[20px] w-[20px]" />
                <Img src="images/img_close.svg" alt="close_seven" className="h-[20px] w-[20px]" />
                <Img src="images/img_096_twitter.svg" alt="096twitter_one" className="h-[20px] w-[20px]" />
                <Img src="images/img_097_twoo.svg" alt="097twoo_one" className="h-[20px] w-[20px]" />
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
