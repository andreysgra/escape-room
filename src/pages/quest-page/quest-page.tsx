import {useParams} from 'react-router-dom';
import Quest from '../../components/quest/quest';

function QuestPage() {
  const id = useParams().id as string;

  return (
    <main className="decorated-page quest-page">
      <Quest id={id} />
    </main>
  );
}

export default QuestPage;
