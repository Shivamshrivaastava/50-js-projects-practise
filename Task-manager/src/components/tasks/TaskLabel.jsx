import { CircleFill } from "react-bootstrap-icons";
import Badge from "react-bootstrap/Badge";

function TaskLabel({ label, short }) {
  switch (label) {
    case "documentation":
      return short ? (
        <Badge pill bg="primary" className="me-2">
          <span>documentation</span>
        </Badge>
      ) : (
        <>
          <CircleFill className="text-primary ms-2" />
          <span className="ms-2">documentation</span>
          <p className="fw-lighter mb-0">
            Improvements or additions to documentation
          </p>
        </>
      );
    case "enhancement":
      return short ? (
        <Badge pill bg="info" className="me-2">
          <span>enhancement</span>
        </Badge>
      ) : (
        <>
          <CircleFill className="text-info ms-2" />
          <span className="ms-2">enhancement</span>
          <p className="fw-lighter mb-0">New feature or request </p>
        </>
      );
    case "bug":
      return short ? (
        <Badge pill bg="danger" className="me-2">
          <span>bug</span>
        </Badge>
      ) : (
        <>
          <CircleFill className="text-danger ms-2" />
          <span className="ms-2">bug</span>
          <p className="fw-lighter mb-0">Something isn't working</p>
        </>
      );
    case "duplicate":
      return short ? (
        <Badge pill bg="secondary" className="me-2">
          <span>duplicate</span>
        </Badge>
      ) : (
        <>
          <CircleFill className="text-secondary ms-2" />
          <span className="ms-2">duplicate</span>
          <p className="fw-lighter mb-0">
            This issue or pull request already exists
          </p>
        </>
      );
    case "good first issue":
      return short ? (
        <Badge pill bg="primary" className="me-2">
          <span>good first issue</span>
        </Badge>
      ) : (
        <>
          <CircleFill className="text-primary ms-2" />
          <span className="ms-2">good first issue</span>
          <p className="fw-lighter mb-0">Good for newcomers</p>
        </>
      );
    case "help wanted":
      return short ? (
        <Badge pill bg="success" className="me-2">
          <span>help wanted</span>
        </Badge>
      ) : (
        <>
          <CircleFill className="text-success ms-2" />
          <span className="ms-2">help wanted</span>
          <p className="fw-lighter mb-0">Extra attention is needed</p>
        </>
      );
    case "invalid":
      return short ? (
        <Badge pill bg="warning" className="me-2">
          <span>invalid</span>
        </Badge>
      ) : (
        <>
          <CircleFill className="text-warning ms-2" />
          <span className="ms-2">invalid</span>
          <p className="fw-lighter mb-0">This doesn't seem right</p>
        </>
      );
    case "question":
      return short ? (
        <Badge pill bg="secondary" className="me-2">
          <span>question</span>
        </Badge>
      ) : (
        <>
          <CircleFill className="text-secondary ms-2" />
          <span className="ms-2">question</span>
          <p className="fw-lighter mb-0">Further information is requested</p>
        </>
      );
    default:
      return short ? (
        <Badge pill bg="secondary" className="me-2">
          <span>all others</span>
        </Badge>
      ) : (
        <>
          <CircleFill className="text-secondary ms-2" />
          <span className="ms-2">all others</span>
          <p className="fw-lighter">Everything else</p>
        </>
      );
  }
}

export default TaskLabel;
