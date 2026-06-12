import { Table, Chip, Button } from "@heroui/react";
import { FiEye, FiEdit2, FiTrash2 } from "react-icons/fi";

export default function JobTable({ jobs }) {
  return (
    <Table>
      <Table.ScrollContainer>
        <Table.Content
          aria-label="Company Jobs"
          className="min-w-225"
        >
          <Table.Header>
            <Table.Column isRowHeader>Job Title</Table.Column>
            <Table.Column>Category</Table.Column>
            <Table.Column>Location</Table.Column>
            <Table.Column>Status</Table.Column>
            <Table.Column >Actions</Table.Column>
          </Table.Header>

          <Table.Body>
            {jobs.map((job) => (
              <Table.Row key={job._id}>
                <Table.Cell>
                  <div>
                    <p className="font-semibold">
                      {job.jobTitle}
                    </p>
                    <p className="text-xs text-default-500">
                      {job.jobType}
                    </p>
                  </div>
                </Table.Cell>

                <Table.Cell>{job.category}</Table.Cell>

                <Table.Cell>{job.location}</Table.Cell>

                <Table.Cell>
                  <Chip
                    color={
                      job.status === "active"
                        ? "success"
                        : "danger"
                    }
                    variant="flat"
                    size="sm"
                  >
                    {job.status}
                  </Chip>
                </Table.Cell>

                <Table.Cell>
                  <div className="flex gap-2">
                    <Button
                      isIconOnly
                      size="sm"
                      variant="light"
                    >
                      <FiEye />
                    </Button>

                    <Button
                      isIconOnly
                      size="sm"
                      color="primary"
                      variant="light"
                    >
                      <FiEdit2 />
                    </Button>

                    <Button
                      isIconOnly
                      size="sm"
                      color="danger"
                      variant="light"
                    >
                      <FiTrash2 />
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