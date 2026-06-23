import {
  Card,
  Button,
  Chip,
} from "@heroui/react";

const PricingCard = ({ plan, type }) => {
  return (
    <Card
      className={`h-full ${plan.popular
          ? "border-2 border-primary"
          : "border"
        }`}
    >
      <div className="p-6">
        {plan.popular && (
          <Chip color="primary" className="mb-4">
            Most Popular
          </Chip>
        )}

        <h3 className="text-2xl font-bold">
          {plan.name}
        </h3>

        <div className="mt-4">
          <span className="text-5xl font-bold">
            ${plan.price}
          </span>

          {plan.price > 0 && (
            <span className="text-default-500">
              /month
            </span>
          )}
        </div>

        <div className="mt-6 space-y-2">
          {type === "seeker" ? (
            <>
              <p>
                Applications: {plan.applications}
              </p>

              <p>
                Saved Jobs: {plan.savedJobs}
              </p>
            </>
          ) : (
            <>
              <p>
                Active Posts: {plan.activeJobPosts}
              </p>

              <p>
                Analytics: {plan.analytics}
              </p>
            </>
          )}
        </div>

        <ul className="mt-6 space-y-2">
          {plan.features.map((feature) => (
            <li key={feature}>
              ✓ {feature}
            </li>
          ))}
        </ul>


        <form action="/api/checkout_sessions" method="POST">
        <input type="hidden" name="plan_id" value={plan.id}></input>
          <section>
            <Button 
              type="submit" 
              role="link" 
              variant={plan.popular ? "primary" : "outline"}
              className="mt-8"
              fullWidth
            >

              Checkout

            </Button>
          </section>
        </form>

        {/* <Button
          variant={plan.popular ? "primary" : "outline"}
          className="mt-8"
          fullWidth
        >
          Choose Plan
        </Button> */}
      </div>
    </Card>
  );
};

export default PricingCard;