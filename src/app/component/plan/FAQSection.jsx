import { Accordion } from "@heroui/react";

const FAQSection = ({ faqItems }) => {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-default-500">
            Everything you need to know about HireLoop pricing.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion>
          {faqItems.map((item) => (
            <Accordion.Item
              key={item.question}
              id={item.question}
              className="border-b"
            >
              <Accordion.Heading>
                <Accordion.Trigger className="flex w-full items-center justify-between py-5 text-left font-semibold">
                  {item.question}

                  <Accordion.Indicator />
                </Accordion.Trigger>
              </Accordion.Heading>

              <Accordion.Panel>
                <Accordion.Body className="pb-5 text-default-500">
                  {item.answer}
                </Accordion.Body>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;