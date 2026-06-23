"use client";

import { Table, Chip, Button } from "@heroui/react";

export default function ApplicationTable({ jobs }) {
  
  // Helper to format the MongoDB date object safely
  const formatDate = (dateInput) => {
    if (!dateInput) return "N/A";
    const dateStr = dateInput.$date || dateInput;
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // Status mapping to replicate the color badges from your uploaded image
  const getStatusColor = (status) => {
    const cleanStatus = status?.toLowerCase();
    if (cleanStatus === "review") return "warning";
    if (cleanStatus === "shortlisted") return "success";
    if (cleanStatus === "rejected") return "danger";
    if (cleanStatus === "offered") return "secondary";
    return "default"; // For "Applied" or any fallback
  };

  return (
    <Table aria-label="Applications Tracker Table" className="mt-4">
      <Table.ScrollContainer>
        <Table.Content>
          <Table.Header>
            <Table.Column isRowHeader>Job Title</Table.Column>
            <Table.Column>Company</Table.Column>
            <Table.Column>Applied</Table.Column>
            <Table.Column>Status</Table.Column>
            <Table.Column align="end">Action</Table.Column>
          </Table.Header>

          <Table.Body emptyContent="No applications found.">
            {jobs?.map((job) => (
              <Table.Row key={job._id?.$oid || job._id}>
                {/* Job Title & Type */}
                <Table.Cell>
                  <div>
                    <p className="font-semibold">{job.jobTitle}</p>
                    <p className="text-xs text-default-500">Full-time • Remote</p>
                  </div>
                </Table.Cell>

                {/* Company Name */}
                <Table.Cell className="text-sm font-medium">
                  {job.companyName}
                </Table.Cell>

                {/* Date Applied */}
                <Table.Cell className="text-default-500 text-sm">
                  {formatDate(job.createdAt)}
                </Table.Cell>

                {/* Application Pipeline Status Badge */}
                <Table.Cell>
                  <Chip
                    color={getStatusColor(job.status || "Applied")}
                    variant="flat"
                    size="sm"
                    className="capitalize"
                  >
                    {job.status || "Applied"}
                  </Chip>
                </Table.Cell>

                {/* Details Button Trigger */}
                <Table.Cell>
                  <div className="flex justify-end">
                    <Button 
                      size="sm" 
                      variant="light" 
                      className="text-neutral-200 font-medium hover:text-white"
                    >
                      Details
                    </Button>
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
}