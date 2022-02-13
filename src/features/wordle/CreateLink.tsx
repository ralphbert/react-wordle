import {Link} from 'react-router-dom';
import {t} from '../../lib/lang';
import {Button} from '../../ui/Button';

export function CreateLink() {
    return (
        <Link to="/"><Button>{t('createYourOwn')}</Button></Link>
    )
}
