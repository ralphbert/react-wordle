import {Link} from 'react-router-dom';
import {t} from '../../lib/lang';

export function CreateLink() {
    return (
        <Link to="/">{t('createYourOwn')}</Link>
    )
}
