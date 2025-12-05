import React from "react";

const Article_Content = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="prose prose-amber max-w-none">
          <h1 className="text-4xl font-extrabold text-amber-900">
            Article Title Goes Here
          </h1>

          <p className="text-gray-700 leading-relaxed">
            This is the introduction paragraph of the article. You can display
            detailed information, spiritual knowledge, or any content related to
            puja, daan, temples, or rituals here.
          </p>

          <h2 className="text-2xl font-bold text-amber-800">
            Subheading Section
          </h2>

          <p>
            Add rich article content including explanations, traditions,
            benefits, mythological references, or detailed descriptions. This
            section supports long-form text.
          </p>

          <h3 className="text-xl font-semibold text-amber-800">Key Points</h3>

          <ul className="list-disc list-inside text-gray-700">
            <li>Important explanation point one</li>
            <li>Deep information about rituals or beliefs</li>
            <li>Useful guidance for users</li>
          </ul>

          <blockquote className="border-l-4 border-amber-600 pl-4 italic text-gray-700">
            "A meaningful quote or spiritual message can be highlighted like
            this."
          </blockquote>

          <p>
            Continue article flow with additional paragraphs, images, videos, or
            embedded content as required.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Article_Content;
