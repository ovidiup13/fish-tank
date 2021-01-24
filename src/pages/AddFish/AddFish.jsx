import React from 'react';
import { Formik, Field, Form, useField, useFormikContext } from 'formik';
import { enGB } from 'date-fns/locale';
import { DatePicker } from 'react-nice-dates';
import classnames from 'classnames';
import dayjs from 'dayjs';

import { SPECIES, TIME_UNITS } from '../../constants';
import { capitalize } from '../../utils';

import styles from './AddFish.module.css';
import 'react-nice-dates/build/style.css';

const DATE_FORMAT = 'DD/MM/YYYY';

const AddFish = () => {
  const initialValues = {
    name: '',
    species: '',
    dob: dayjs().format(DATE_FORMAT).toString(),
    lifetime: 10,
    unit: TIME_UNITS[4],
  };

  const onSubmit = async (values) => {
    await new Promise((r) => setTimeout(r, 500));
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div className={styles.page}>
      <h1>Add new fish</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className={styles.form}>
          <div className={styles.control}>
            <label className={styles.label} htmlFor='name'>
              Fish Name
            </label>
            <Field
              className={styles.field}
              id='name'
              name='name'
              placeholder='Fishy'
              autoComplete='off'
            />
          </div>

          <div className={styles.control}>
            <label className={styles.label} htmlFor='species'>
              Species
            </label>
            <Field
              className={styles.field}
              id='species'
              as='select'
              name='species'
              placeholder='Fish'
            >
              {SPECIES.map((sp) => (
                <option key={sp} value={sp}>
                  {capitalize(sp)}
                </option>
              ))}
            </Field>
          </div>

          <div className={styles.control}>
            <label className={styles.label} htmlFor='dob'>
              Date of birth
            </label>
            <Picker name='dob' />
          </div>

          <div className={styles.control}>
            <label className={styles.label} htmlFor='dob'>
              Lifetime
            </label>
            <div className={styles.lifetime}>
              <Field
                className={`${styles.field} ${styles.lifetime_value}`}
                type='number'
                name='lifetime'
              />
              <Field
                className={styles.field}
                id='unit'
                as='select'
                name='unit'
                placeholder='Time Unit'
              >
                {TIME_UNITS.map((unit) => (
                  <option key={unit} value={unit}>
                    {capitalize(unit)}
                  </option>
                ))}
              </Field>
            </div>
          </div>

          <button className={styles.submit} type='submit'>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

const Picker = (props) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  return (
    <DatePicker
      minimumDate={dayjs().subtract(3, 'years').toDate()}
      maximumDate={dayjs().toDate()}
      onDateChange={(date) => {
        setFieldValue(field.name, dayjs(date).format(DATE_FORMAT).toString());
      }}
      locale={enGB}
    >
      {({ inputProps, focused }) => {
        const inputClassName = classnames({
          [styles.field]: true,
          input: !focused,
          'input-focused': focused,
        });
        return (
          <input
            className={inputClassName}
            {...inputProps}
            {...field}
            {...props}
          />
        );
      }}
    </DatePicker>
  );
};

export default AddFish;
