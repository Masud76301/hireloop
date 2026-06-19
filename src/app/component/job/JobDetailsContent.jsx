import { Card } from "@heroui/react";

export default function JobDetailsContent({ job }) {
    return (
        <div className="w-[80%] mr-10">
            <Card className="border">
                <Card.Content className="p-8 space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">
                            Responsibilities
                        </h2>

                        <p className="text-default-600">
                            {job.responsibilities}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">
                            Requirements
                        </h2>

                        <p className="text-default-600">
                            {job.requirements}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-3">
                            Benefits
                        </h2>

                        <p className="text-default-600">
                            {job.benefits}
                        </p>
                    </section>
                </Card.Content>
            </Card>
        </div>

    );
}