import { useEffect, useState } from "react";

//styles
import styles from './SearchForm.module.scss';

function SearchForm({onSearch, onEditColor}) {
    const [value, setValue] = useState('');

    useEffect(() => {
        onSearch(value)
    }, [value])

    const [isCheck, setIsCheck] = useState(true);
    
    return (
        <div className={styles['options']}>
            <form className={styles['search_form']}>
                <input 
                    className={styles['search_form_input']}
                    type="text"
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                />
            </form>
            <div className={styles['toggle-switch']}>
                <label className={styles['switch']}>
                    <input 
                    type="checkbox" 
                    checked={isCheck} 
                    onChange={(e) => {
                        setIsCheck(!isCheck);
                        onEditColor(e.target.checked);
                    }} />
                    <span className={`${styles['slider']} ${styles['round']}`} ></span>
                </label>
            </div>
        </div>
      
    );

}
export default SearchForm;