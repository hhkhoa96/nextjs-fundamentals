'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './styles.module.css';
import classNames from 'classnames';
import { useRouter } from 'next/navigation';

interface FormValue {
  title: string;
  description: string
}


export default function CreatePostForm() {
  const [submitting, setSubmitting] = useState(false)
  const router = useRouter();
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormValue>();

  const submit = handleSubmit(form => {
    const formData = new FormData();
    formData.append('title', form.title)
    formData.append('description', form.description)

    setSubmitting(true)
    fetch('/api/post/create', {
      method: 'POST',
      body: formData,
    }).then(res => res.json())
      .then(res => {
        router.push('/post/1')
      }).catch(error => {
        console.log({ error })
      }).finally(() => {
        setSubmitting(false);
      })
  })

  return (
    <form onSubmit={submit} className={styles.form}>
      <label className={styles.formLabel} htmlFor="title">Post title</label>
      <div className="form-group">
        <input className="form-control" id="title" {...register('title', {
          required: true
        })} />
        <p className={classNames(styles.errorMessage, {
          [styles.error]: errors.title
        })}>* Required</p>
      </div>

      <label className={styles.formLabel} htmlFor="description">Post description</label>
      <div className="form-group">
        <input className="form-control" id="description" {...register('description', {
          required: true
        })} />
        <p className={classNames(styles.errorMessage, {
          [styles.error]: errors.description
        })}>* Required</p>
      </div>

      <label className={styles.formLabel} htmlFor="description">Select a thumbnail</label>
      <div className="form-group">
        <input type="file" className="form-control" id="description" />
      </div>

      <div className={styles.formFooter}>
        <button type="submit" className={classNames('btn', 'btn-default', styles.submit)} disabled={submitting || !isValid}>Submit</button>
      </div>
    </form>
  )
}