import QuestFilterType from '../quest-filter-type/quest-filter-type';
import QuestFilterLevel from '../quest-filter-level/quest-filter-level';

function QuestsFilters() {
  return (
    <form className="filter" action="#" method="get">
      <fieldset className="filter__section">
        <legend className="visually-hidden">Тематика</legend>
        <QuestFilterType />
      </fieldset>
      <fieldset className="filter__section">
        <legend className="visually-hidden">Сложность</legend>
        <QuestFilterLevel />
      </fieldset>
    </form>
  );
}

export default QuestsFilters;
