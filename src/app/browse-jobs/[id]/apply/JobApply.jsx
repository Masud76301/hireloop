
'use client'
import { submitApplication } from "@/app/lib/action/application";
import {
    Button,
    TextField,
    Label,
    Input,
    Description,
    FieldError,
    TextArea,
    Card,
    toast,
} from "@heroui/react";

const JobApply = ({job, applicant}) => {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const applicationData = {
            resumeLink: formData.get("resumeLink"),
            portfolio: formData.get("portfolio"),
            message: formData.get("message"),
            jobId:job?._id,
            jobTitle:job?.jobTitle,
            companyName: job?.company,
            applicantName:applicant?.name,
            applicantEmail:applicant?.email,
            applicantId:applicant?.id,
        };

        console.log(applicationData);
        const res = await submitApplication(applicationData);
        if(res.insertedId){
            toast.success("Application Submitted Successfully!");
        }
    };
    return (
        <div className="max-w-2xl mx-auto my-10">
            <h1 className="text-2xl font-semibold mb-6">
                Please fill up the form below
            </h1>

            <Card className="border border-zinc-200">
                <form onSubmit={handleSubmit}  className="space-y-6">
                    {/* Resume Link */}
                    <TextField isRequired>
                        <Label>Resume Link</Label>
                        <Input
                            name="resumeLink"
                            type="url"
                            placeholder="https://drive.google.com/your-resume"
                        />
                        <Description>
                            Provide a public link to your resume.
                        </Description>
                        <FieldError />
                    </TextField>

                    {/* Portfolio Website */}
                    <TextField>
                        <Label>Portfolio Website</Label>
                        <Input
                            name="portfolio"
                            type="url"
                            placeholder="https://yourportfolio.com"
                        />
                        <Description>
                            Optional: Share your portfolio or personal website.
                        </Description>
                        <FieldError />
                    </TextField>

                    {/* Short Message */}
                    <div className="">
                        <Label>Short Message / Note</Label>
                        <TextArea
                            name="message"
                            aria-label="Short Message"
                            placeholder="Tell the recruiter why you're a good fit for this role..."
                            className="min-h-32 w-full mt-2"
                        />
                        <p className="text-[12px] text-gray-400">
                            Optional: Add a short message for the recruiter.
                        </p>
                    </div>

                    <Button color="primary" type="submit">
                        Submit Application
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default JobApply;