import { Window } from './Window';
import { stack } from '@/lib/profile';

const groups = [...new Set(stack.map(item => item.group))];

function Group({ name }: { name: string }) {
  return (
    <div className="stack-group">
      <h3>{name}</h3>
      <ul className="stack-list">
        {stack.filter(item => item.group === name).map(item => (
          <li key={item.name}>
            <span className="stack-mark" aria-hidden="true">{item.mark}</span>
            <div>
              <strong>{item.name}</strong>
              <span className="mono">{item.file}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Board({ stacked = false }: { stacked?: boolean }) {
  const columns = stacked ? [groups] : [groups.slice(0, 1), groups.slice(1)];
  return (
    <div className={stacked ? 'stack-board stacked' : 'stack-board'}>
      {columns.map(column => (
        <div className="stack-col" key={column[0]}>
          {column.map(group => <Group key={group} name={group} />)}
        </div>
      ))}
    </div>
  );
}

export function TechStack({ placement = 'home' }: { placement?: 'home' | 'about' }) {
  const status = <div className="window-status"><span>{stack.length} TOOLS</span><span>{groups.length} GROUPS</span></div>;
  if (placement === 'about') {
    return (
      <Window title="Toolbox/" meta={`${stack.length} TOOLS`}>
        <div className="stack-intro" id="stack"><h2>Tech stack</h2></div>
        <Board stacked/>
        {status}
      </Window>
    );
  }
  return (
    <section className="section" id="stack" aria-labelledby="stack-heading">
      <div className="section-heading"><h2 id="stack-heading">Tech stack</h2></div>
      <Window title="Toolbox/" meta={`${stack.length} TOOLS`}>
        <Board/>
        {status}
      </Window>
    </section>
  );
}
