---
path: /blog/form-submission-canceled-error
date: 2021-02-10T08:43:04.255Z
title: Solving Form submission canceled error when submitting in Formik
thumbnail: /assets/form-not-connected.png
tags:
  - web development
  - tutorial
---
Long time since I last posted here. 
I just want to share a problem I had when using a form inside a modal, and the button doesn't want to submit properly!

I got this error: `Form submission canceled because the form is not connected`

Here's what my code looked like:

```
<Formik
    enableReinitialize
    initialValues={{
        keyHere: '',
    }}
    onSubmit={async (values) => {
        //get your values here
    }}
>
    {(props) => {
        const { handleChange, values } = props;

        return (
            <Form>
                <div className={styles.SearchBoxContainer}>
                <input
                    type="text"
                    name="keyHere"
                    onChange={handleChange}
                    value={values.keyHere}
                />
                </div>

                <div className={styles.ButtonsContainer}>
                    <button type="button">{cancelButtonText}</button>
                    <button type="submit" onClick={closeModal}>{primaryButtonText}</button>
                </div>
            </Form>
        );
    }}
</Formik>
```

At first I thought this was a Formik problem. But no, as you can see my primary button has type="submit" and has onClick that closes the modal. How will a form submit if the modal is gone? :P That's what I think about it, so **deleting the onClick** to close the modal fixes the problem. Thus, executes the Formik onSubmit function. 

Cheers
