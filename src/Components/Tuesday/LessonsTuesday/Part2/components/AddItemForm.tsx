import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type InputPropsType = {
    callBack:(title:string)=>void

}
export const AddItemForm = (props:InputPropsType) => {
    const [title,setTitle]=useState('')
    const [error,setError] = useState<string|null>(null)
    const callBackStarter = () => {
        if (title.trim() !==''){
            props.callBack(title)
            setTitle('')
        }
        else{
            setError('Введите текст')
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setTitle(e.currentTarget.value)
    }

    const onKeyDownHandler = (e:KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            callBackStarter()
        }
    }
    return (
        <div>
            <input value={title}
                   className={error ? 'error' : ''}
                   onChange={onChangeHandler}
                   onKeyDown={onKeyDownHandler}
            />

            <button onClick={callBackStarter}>+</button>
            {error && <div className={'error-message'}>{error}</div>}
        </div>
    );
};
