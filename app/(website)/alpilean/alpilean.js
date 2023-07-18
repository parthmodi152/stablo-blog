"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import va from "@vercel/analytics";

export default function Alpilean() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const affiliateLink =
    "https://hop.clickbank.net/?affiliate=pmodi152&vendor=alpilean&pg=vid";

  const trackEvent = async (url, eventName, email) => {
    try {
      // Send a "hop" event to Vercel
      await va.track(eventName, {
        url,
        source: "facebook",
        campaign: "Alpilean Traffic 7.17",
        client_user_agent: navigator.userAgent,
        email: email
      });
    } catch (error) {
      console.error("Failed to send event to Vercel", error);
    }

    // Redirect to the affiliate link
    window.location.href = url;
  };

  const createContact = async email => {
    try {
      await fetch(`/api/getResponse?email=${email}`, {
        method: "POST"
      });
    } catch (error) {
      console.error("Failed to send contact to GetResponse", error);
    }
  };

  const handleEmailSubmit = async e => {
    e.preventDefault();
    if (email) {
      setShowModal(false);
      await createContact(email);
      await trackEvent(affiliateLink, "hop", email);
    } else {
      alert("Please provide a valid email");
    }
  };

  return (
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
          <a
            onClick={e => {
              e.preventDefault();
              trackEvent(affiliateLink, "hop", "");
            }}
            href="#">
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
            onClick={e => {
              e.preventDefault();
              trackEvent(affiliateLink, "hop", "");
            }}
            href="#"
            className="block rounded-lg bg-yellow-300 px-6 py-3 text-center font-bold text-blue-900 shadow-lg transition duration-200 hover:bg-yellow-400">
            Click Here To Watch The Video
          </a>
        </div>
        <div className="mt-5">
          <div className="rounded-lg bg-blue-900 px-6 py-3 text-center text-3xl font-bold text-white dark:bg-blue-700">
            Ever heard about the 5 second Ice Hack?&nbsp;
          </div>
          <p className="mt-6 text-left text-xl text-gray-900 dark:text-gray-200">
            More people are beginning to use this ice hack that has
            been going viral all around the world! This new method is
            literally taking the weight loss industry by storm and
            making us rethink everything we thought we knew about body
            fat and obesity.&nbsp; Harvard studies have discovered
            this ONE THING that could be the difference between losing
            pounds or gaining it.&nbsp; Big diet corporations are
            trying everything in their power to get this presentation
            removed from the internet
          </p>
          <a
            onClick={e => {
              e.preventDefault();
              trackEvent(affiliateLink, "hop", "");
            }}
            href="#"
            className="mt-10 block text-center text-lg text-red-600 hover:text-red-700 dark:text-red-400">
            Tap Here To See The Video For Yourself (right now it is
            free to watch)
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
            onClick={e => {
              e.preventDefault();
              trackEvent(affiliateLink, "hop", "");
            }}
            href="#"
            className="block rounded-lg bg-yellow-300 px-6 py-3 text-center font-bold text-blue-900 shadow-lg transition duration-200 hover:bg-yellow-400">
            Click Here To Watch The Video
          </a>
        </div>
      </div>
      {showModal && (
        <div
          className="fixed inset-0 z-10 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true">
          <div className="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"></div>
            <span
              className="hidden sm:inline-block sm:h-screen sm:align-middle"
              aria-hidden="true">
              &#8203;
            </span>
            <div className="inline-block transform overflow-hidden rounded-lg border-4 border-red-600 bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3
                      className="text-center text-2xl font-bold leading-6 text-red-600"
                      id="modal-title">
                      WAIT!
                    </h3>
                    <p className="mt-2 text-center text-xl font-bold text-blue-600">
                      I'll Reveal My Bizarre Ice Hack To Dissolve Fat
                      Every 24 Hours!
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-center">
                  <div className="sm:w-2/5">
                    That made Sarah Miller, a 47-year-old mom of 3
                    from Texas, suddenly melt lbs of thick, wobbly fat
                    from her butt, hips, and face!
                  </div>
                  <div className="mt-5 sm:ml-6 sm:mt-0 sm:w-3/5">
                    <iframe
                      src="https://fast.wistia.net/embed/iframe/szui8wui42?seo=false"
                      title=""
                      allowTransparency={true}
                      allowFullScreen
                      frameBorder="0"
                      scrolling="no"
                      className="h-56 w-full sm:h-auto"
                      name="wistia_embed"></iframe>
                  </div>
                </div>
                <div className="mt-5 text-gray-700">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:justify-center sm:px-6">
                <button
                  type="button"
                  className="inline-flex w-full animate-pulse justify-center rounded-lg border border-blue-600 bg-yellow-500 px-6 py-3 text-lg font-semibold text-blue-800 shadow-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto sm:text-base"
                  onClick={handleEmailSubmit}>
                  Start Watching To Discover Fast-Melting Ice Hack
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
