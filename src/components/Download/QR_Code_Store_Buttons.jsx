import React from "react";

const QR_Code_Store_Buttons = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-900 mb-4">
              Download Our App
            </h2>
            <p className="text-gray-700 mb-6">
              Scan the QR code or choose your preferred store to download the
              app instantly.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#" className="inline-block">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="h-12"
                />
              </a>

              <a href="#" className="inline-block">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  className="h-12"
                />
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl shadow">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=yourapp-url-here"
                alt="App QR Code"
                className="w-40 h-40 object-cover mx-auto"
              />
              <p className="text-center text-gray-700 mt-4 font-medium">
                Scan to Download
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QR_Code_Store_Buttons;
