import FeedbackCounter from "./FeedbackCounter/FeedbackCounter";

export const App = () => {
  return (
    <div style={{
        height: '100%',
        padding: '30px',
        backgroundColor: '#e1e5f5'
      }}>
      <FeedbackCounter />
    </div>
  );
};
