"use client";

import { useRef, useState } from "react";
import {
  Button,
  Input,
  TextArea,
  Select,
  Label,
  ListBox,
  toast,
} from "@heroui/react";

import {
  FiUploadCloud,
  FiMapPin,
} from "react-icons/fi";
import { createCompany } from "@/app/lib/action/companies";
import Image from "next/image";

const industries = [
  "Technology",
  "Software",
  "Marketing",
  "Finance",
  "Healthcare",
  "Education",
  "E-Commerce",
  "Construction",
  "Real Estate",
];

const employeeRanges = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "201-500 employees",
  "501-1000 employees",
  "1000+ employees",
];

export default function CompanyForm({ onClose, recruiter }) {
  const fileInputRef = useRef(null);

  const [logo, setLogo] = useState(null);

  const [formData, setFormData] = useState({
    companyName: "",
    industry: "Technology",
    website: "",
    location: "",
    employeeCount: "1-10 employees",
    description: "",
    recruiterId: recruiter?.id
  });

  const uploadImageToImageBB = async (imageFile) => {
    const formData = new FormData();

    formData.append("image", imageFile);

    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (!data.success) {
      throw new Error("Image upload failed");
    }

    return data.data.url;
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleLogoChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setLogo({
      file,
      preview: URL.createObjectURL(file),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let logoUrl = "";

      if (logo?.file) {
        logoUrl = await uploadImageToImageBB(logo.file);
      }

      const companyData = {
        ...formData,
        logo: logoUrl,
        status: "pending",
        createdAt: new Date(),
      };

      const payload = await createCompany(companyData);

      if (payload.insertedId) {
        toast.success("Company Profile Created Successfully");
        onClose?.();
      }
    } catch (error) {
      // console.error(error);
    alert("Failed to create company profile");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="space-y-7"
      >
        {/* Row 1 */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Company Name */}
          <div>
            <label className="mb-3 block text-base font-medium text-white">
              Company Name
            </label>

            <Input
              value={formData.companyName}
              onChange={(e) =>
                handleChange(
                  "companyName",
                  e.target.value
                )
              }
              placeholder="Acme Corp"
              className="w-full"
            />
          </div>

          {/* Industry */}
          <div>
            <label className="mb-3 block text-base font-medium text-white">
              Industry / Category
            </label>

            <Select
              selectedKeys={[formData.industry]}
              onChange={(keys) =>
                handleChange(
                  "industry",
                  Array.from(keys)[0]
                )
              }
            >
              <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>

              <Select.Popover>
                <ListBox>
                  {industries.map((industry) => (
                    <ListBox.Item
                      key={industry}
                      id={industry}
                    >
                      <Label>{industry}</Label>
                    </ListBox.Item>
                  ))}
                </ListBox>
              </Select.Popover>
            </Select>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Website */}
          <div>
            <label className="mb-3 block text-base font-medium text-white">
              Website URL
            </label>

            <Input
              value={formData.website}
              onChange={(e) =>
                handleChange(
                  "website",
                  e.target.value
                )
              }
              placeholder="https://company.com"
            />
          </div>

          {/* Location */}
          <div>
            <label className="mb-3 block text-base font-medium text-white">
              Location
            </label>

            <Input
              value={formData.location}
              onChange={(e) =>
                handleChange(
                  "location",
                  e.target.value
                )
              }
              placeholder="City, Country"

            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Employee Count */}
          <div>
            <label className="mb-3 block text-base font-medium text-white">
              Employee Count Range
            </label>

            <Select
              selectedKeys={[formData.employeeCount]}
              onChange={(keys) =>
                handleChange(
                  "employeeCount",
                  Array.from(keys)[0]
                )
              }
            >
              <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>

              <Select.Popover>
                <ListBox>
                  {employeeRanges.map((item) => (
                    <ListBox.Item
                      key={item}
                      id={item}
                    >
                      <Label>{item}</Label>
                    </ListBox.Item>
                  ))}
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          {/* Logo Upload */}
          <div>
            <label className="mb-3 block text-base font-medium text-white">
              Company Logo
            </label>

            <button
              type="button"
              onClick={() =>
                fileInputRef.current?.click()
              }
              className="flex items-center gap-4"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-xl border border-dashed border-zinc-600 bg-zinc-900">
                {logo ? (
                  <Image
                    src={logo.preview}
                    width={80}
                    height={80}
                    alt="Logo Preview"
                    className="h-full w-full rounded-xl object-cover"
                  />
                ) : (
                  <FiUploadCloud className="text-2xl text-zinc-400" />
                )}
              </div>

              <div className="text-left">
                <p className="font-medium text-white">
                  Upload image
                </p>

                <p className="text-sm text-zinc-500">
                  PNG, JPG up to 5MB
                </p>
              </div>
            </button>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              hidden
              onChange={handleLogoChange}
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="mb-3 block text-base font-medium text-white">
            Brief Description
          </label>

          <TextArea
            value={formData.description}
            onChange={(e) =>
              handleChange(
                "description",
                e.target.value
              )
            }
            placeholder="Tell us about your company's mission and culture..."
            className="w-full"
          />
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-4 border-t border-white/10 pt-6">
          <Button
            type="button"
            variant="outline"
            onPress={onClose}

          >
            Cancel
          </Button>

          <Button
            type="submit"
            color="primary"
          >
            Register Company
          </Button>
        </div>
      </form>
    </div>
  );
}