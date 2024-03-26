const files: string[] = Array.from('ABCDEFGH');
const rows: string[] = Array.from('12345678');

const Squares = ({ asViewedByWhite = true }: { asViewedByWhite: boolean }) => {
  const [firstRow, firstCol] = asViewedByWhite ? [0, 0] : [7, 7];

  return files.map((file, i) => {
    return (
      <div key={i} className={`flex flex-col${asViewedByWhite ? '-reverse' : ''}`}>
        {rows.map((row, j) => {
          return (
            <div
              key={j}
              id={`${file}${row}`}
              className={`size-24 ${(i % 2 === 0 && j % 2 === 0) || (i % 2 !== 0 && j % 2 !== 0) ? 'bg-yellow-600' : 'bg-orange-100'}`}
            >
              <div className="relative min-h-full">
                {j === firstRow ? (
                  <sub className="absolute right-1 bottom-1 text-xs">{file}</sub>
                ) : null}
                {i === firstCol ? (
                  <sup className="absolute left-1 top-1 text-xs">{row}</sup>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    );
  });
};

export default Squares;
