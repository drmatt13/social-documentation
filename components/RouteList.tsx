// components
import DocumentationSection from "./DocumentationSection";

const RouteList = () => {
  return (
    <div className="pt-2 pb-5 lg:py-0">
      <DocumentationSection
        title="Site Design"
        routes={[
          "The Idea",
          "Tech Stack",
          "Site Layout",
          // "Frontend Deisgn",
          "Eventbus",
          "API Services",
        ]}
      />
      <DocumentationSection
        title="User Authentication"
        routes={[
          "HttpOnly Cookies",
          "AWS Cognito",
          "Registration",
          "Login",
          "Cognito Tokens",
          "Refresh Session",
        ]}
      />
      <DocumentationSection
        title="Push Notifications"
        routes={[
          "Socketed Connection",
          "AWS API Gateway",
          "AWS Lambda",
          "AWS DynamoDB",
          "Notification Component",
        ]}
      />
      <DocumentationSection
        title="News Feed"
        routes={[
          "Post Object",
          "Post Context",
          "Post Component",
          "Post Button",
          "News Feed Component",
        ]}
      />

      <DocumentationSection title="Messager" routes={[""]} />
    </div>
  );
};

export default RouteList;
