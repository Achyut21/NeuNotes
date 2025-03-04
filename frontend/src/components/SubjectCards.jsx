import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "./ui/Card";

const SubjectCard = ({ subject }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/subjects/${subject.name.toLowerCase()}`} className="block group">
      <Card 
        className="h-full transform transition-transform duration-300 hover:-translate-y-1"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Card Header with an image */}
        <Card.Header className="p-0 relative">
          <img
            src={subject.image}
            alt={subject.name}
            className="w-full h-48 object-cover rounded-t-lg transition-transform duration-500 ease-out transform"
            style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Card.Header>

        {/* Main content area */}
        <Card.Content>
          <div className="flex items-center justify-between">
            <Card.Title className="group-hover:text-primary transition-colors">{subject.name}</Card.Title>
            <Card.Badge color="primary">New</Card.Badge>
          </div>
          <p className="text-sm text-text-light mt-2">
            Explore notes, questions, and resources for {subject.name}
          </p>
        </Card.Content>

        <Card.Footer className="flex items-center justify-between text-sm text-text-light">
          <span>100+ Notes</span>
          <span className="text-primary font-medium group-hover:translate-x-1 transition-transform inline-flex items-center">
            Explore
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </span>
        </Card.Footer>
      </Card>
    </Link>
  );
};

export default SubjectCard;