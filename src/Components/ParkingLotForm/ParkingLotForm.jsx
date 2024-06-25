import React from "react";
import { Form, Button } from "reactstrap";
import "./ParkingLotForm.css";

const PRIORITIES = {
  Low: "Low",
  Medium: "Medium",
  High: "High",
};

export default function ParkingLotForm() {
  const [date, setDate] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(PRIORITIES.Medium);

  return (
    <Form data-bs-theme="dark" className="parking-lot-form">
      <FormGroup className="parking-lot-row">
        <Label htmlFor="link-date">Date</Label>
        <Input id="link-date" name="date" type="date" required />
      </FormGroup>
      <FormGroup className="parking-lot-row">
        <Label htmlFor="link-url">Link</Label>
        <Input id="link-url" name="url" type="url" required />
      </FormGroup>
      <FormGroup className="parking-lot-row">
        <Label htmlFor="link-description">Description</Label>
        <Input id="link-description" name="description" type="text" required />
      </FormGroup>
      <FormGroup className="parking-lot-row">
        <Input name="radio-priority" type="radio" value="High" id="prio-high" />{" "}
        <Label htmlFor="prio-high" className="me-3">
          High
        </Label>
        <Input
          name="radio-priority"
          type="radio"
          value="Medium"
          id="prio-medium"
        />{" "}
        <Label htmlFor="prio-medium" className="me-3">
          Medium
        </Label>
        <Input name="radio-priority" type="radio" value="Low" id="prio-low" />{" "}
        <Label htmlFor="prio-low" className="me-3">
          Low
        </Label>
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
