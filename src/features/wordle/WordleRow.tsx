import {WordleGuessRow} from './store/wordleSlice';
import {WordleBox} from './WordleBox';

export function WordleRow({row}: { row: WordleGuessRow }) {
    const style = {};

    return (
        <div className={'wordle-row flex justify-center gap-1 mb-1 ' + row.state}
             style={style}>
            {
                row.chars.map(
                    (char, i) => (
                        <WordleBox animated={row.animated} guess={char} key={i}/>
                    )
                )
            }
        </div>
    );
}
