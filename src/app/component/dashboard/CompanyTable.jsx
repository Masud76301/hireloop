"use client";

import React from "react";
import { Table, Chip, Button, toast } from "@heroui/react";
import { FiCheck, FiX } from "react-icons/fi";
import { updateCompany } from "@/app/lib/action/companies";

const CompanyTable = ({ companies }) => {

  // Action Handlers for Admin Approvals
  const handleApprove = async (companyId) => {
    // You can replace this alert with your server action or API call later
    const result = await updateCompany(companyId, { status: 'approved' })
    if (result.modifiedCount) {
      toast.success("Company Approved Successfully");
    }

  };

  const handleReject = async (companyId) => {
    // You can replace this alert with your server action or API call later

    const result = await updateCompany(companyId, { status: 'rejected' })
    if (result.modifiedCount) {
      toast.success("Company rejected Successfully");
    }
  };

  // Helper to safely render status chips matching your admin UI design
  const getStatusChip = (status) => {
    const cleanStatus = status?.toLowerCase() || "pending";

    if (cleanStatus === "approved" || cleanStatus === "active") {
      return (
        <Chip color="success" variant="flat" size="sm" className="capitalize">
          Approved
        </Chip>
      );
    }
    if (cleanStatus === "rejected") {
      return (
        <Chip color="danger" variant="flat" size="sm" className="capitalize">
          Rejected
        </Chip>
      );
    }
    return (
      <Chip color="warning" variant="flat" size="sm" className="capitalize">
        Pending
      </Chip>
    );
  };

  return (
    <Table aria-label="Admin Companies Management Table" className="mt-4">
      <Table.ScrollContainer>
        <Table.Content>
          <Table.Header>
            <Table.Column isRowHeader>Company Name</Table.Column>
            <Table.Column>Email</Table.Column>
            <Table.Column>Location</Table.Column>
            <Table.Column>Status</Table.Column>
            <Table.Column align="end">Actions</Table.Column>
          </Table.Header>

          <Table.Body emptyContent="No companies found.">
            {companies?.map((company) => {
              // Extracting the ID string safely whether it comes as a plain string or MongoDB $oid object
              const companyId = company._id?.$oid || company._id;

              return (
                <Table.Row key={companyId}>
                  {/* Company Name & Website info block */}
                  <Table.Cell>
                    <div>
                      <p className="font-semibold text-sm">{company.companyName}</p>
                      {company.website && (
                        <p className="text-xs text-default-500">{company.website}</p>
                      )}
                    </div>
                  </Table.Cell>

                  {/* Corporate Contact Email */}
                  <Table.Cell className="text-sm">
                    {company.companyEmail || company.email || "N/A"}
                  </Table.Cell>

                  {/* Location field */}
                  <Table.Cell className="text-sm text-default-500">
                    {company.location || "Remote"}
                  </Table.Cell>

                  {/* Status Badge */}
                  <Table.Cell>
                    {getStatusChip(company.status)}
                  </Table.Cell>

                  {/* Functional Admin Action Triggers */}
                  <Table.Cell>
                    <div className="flex gap-2 justify-end">
                      <Button
                        isIconOnly
                        size="sm"
                        color="success"
                        variant="light"
                        title="Approve Company"
                        onClick={() => handleApprove(companyId)}
                      >
                        <FiCheck className="text-lg text-success" />
                      </Button>

                      <Button
                        isIconOnly
                        size="sm"
                        color="danger"
                        variant="light"
                        title="Reject Company"
                        onClick={() => handleReject(companyId)}
                      >
                        <FiX className="text-lg text-danger" />
                      </Button>
                    </div>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
};

export default CompanyTable;