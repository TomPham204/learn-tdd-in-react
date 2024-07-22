export default function MessageList({ data }) {
   return (
      <ul>
         {data.map((message, index) => (
            <li key={index}>{message}</li>
         ))}
      </ul>
   );
}