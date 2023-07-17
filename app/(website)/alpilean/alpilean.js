import React from "react";

export default function Alpilean() {
  const affiliateLink =
    "https://hop.clickbank.net/?affiliate=pmodi152&vendor=alpilean&pg=vid";

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-200 dark:bg-gray-800">
        <div className="w-full bg-blue-900 py-4 text-center text-white shadow-lg">
          <h1 className="text-2xl font-bold">
            Say YES to a Scientific Miracle?
          </h1>
        </div>
        <div className="container mx-auto mt-10 max-w-4xl bg-white px-6 py-8 shadow-md dark:bg-gray-900">
          <div>
            <h1 className="text-center text-6xl font-bold text-blue-900 dark:text-blue-400">
              Secret Revealed:&nbsp;
            </h1>
            <h2 className="mt-3 text-center text-3xl font-bold text-blue-900 dark:text-blue-400">
              Do This With Your&nbsp;Ice Cubes Now
            </h2>
            <a href={affiliateLink}>
              <img
                src="//www.bestbod1.com/hosted/images/3f/58871921d54748b45f6eb73df59cd2/Landing-page-image.png"
                alt=""
                className="mx-auto mt-6 w-full md:w-auto"
              />
            </a>
          </div>
          <div
            className="mt-5 flex h-24 items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url(//www.bestbod1.com/hosted/images/83/ea66e0537b11e8a1b2b70d43e2bd08/ButtonCircle.png)",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat"
            }}>
            <a
              href={affiliateLink}
              className="block rounded-lg bg-yellow-300 px-6 py-3 text-center font-bold text-blue-900 shadow-lg transition duration-200 hover:bg-yellow-400">
              {" "}
              Click Here To Watch The Video
            </a>
          </div>
          <div className="mt-5">
            <div className="rounded-lg bg-blue-900 px-6 py-3 text-center text-3xl font-bold text-white dark:bg-blue-700">
              Ever heard about the 5 second Ice Hack?&nbsp;
            </div>
            <p className="mt-6 text-left text-xl text-gray-900 dark:text-gray-200">
              More people are beginning to use this ice hack that has
              been going viral all around the world! This new method
              is literally taking the weight loss industry by storm
              and making us rethink everything we thought we knew
              about body fat and obesity.&nbsp; Harvard studies have
              discovered this ONE THING that could be the difference
              between losing pounds or gaining it.&nbsp; Big diet
              corporations are trying everything in their power to get
              this presentation removed from the internet
            </p>
            <a
              href={affiliateLink}
              className="mt-10 block text-center text-lg text-red-600 hover:text-red-700 dark:text-red-400">
              Tap Here To See The Video For Yourself
            </a>
            <a
              href={affiliateLink}
              className="block text-center text-lg text-red-600 hover:text-red-700 dark:text-red-400">
              (right now it is free to watch)
            </a>
          </div>
          <div
            className="mt-5 flex h-24 items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url(//www.bestbod1.com/hosted/images/83/ea66e0537b11e8a1b2b70d43e2bd08/ButtonCircle.png)",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat"
            }}>
            <a
              href={affiliateLink}
              className="block rounded-lg bg-yellow-300 px-6 py-3 text-center font-bold text-blue-900 shadow-lg transition duration-200 hover:bg-yellow-400">
              {" "}
              Click Here To Watch The Video
            </a>
          </div>
        </div>
      </div>
    </>
  );
}