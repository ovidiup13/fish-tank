import React from 'react';
import { Formik, Field, Form, useField, useFormikContext } from 'formik';
import * as Yup from 'yup';
import { enGB } from 'date-fns/locale';
import { DatePicker } from 'react-nice-dates';
import { useHistory } from 'react-router-dom';
import classnames from 'classnames';

import Button from '../../components/Button/Button';
import { DATE_FORMAT, SPECIES, TIME_UNITS } from '../../constants';
import { capitalize } from '../../utils';

import styles from './AddFish.module.css';
import 'react-nice-dates/build/style.css';

import dayjs from 'dayjs';
var customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);

const AddFishSchema = Yup.object().shape({
  name: Yup.string()
    .max(15, 'Keep it short!')
    .required('Enter a name for your new fish'),
  species: Yup.string().required("What's your fish species?"),
  dob: Yup.string()
    .test('is-dob', 'Please enter a valid date', (value) =>
      dayjs(value, DATE_FORMAT).isValid()
    )
    .required('When was your fish born?'),
  lifetime: Yup.number().required("What's the usual lifetime of this fish?"),
  unit: Yup.string().required('Well... how many what?'),
});

const AddFish = ({ onFishAdded }) => {
  const history = useHistory();

  const initialValues = {
    name: '',
    species: SPECIES[0],
    dob: dayjs().format(DATE_FORMAT).toString(),
    lifetime: 10,
    unit: TIME_UNITS[4],
  };

  const onSubmit = async (values) => {
    await new Promise((r) => setTimeout(r, 500));
    onFishAdded({
      // TODO: sort out a unique ID
      id: Math.round(Math.random() * 10000000),
      // TODO: allow a user to choose avatar
      avatar: Math.floor(Math.random() * 25),
      name: values.name,
      species: values.species,

      dob: dayjs(values.dob, DATE_FORMAT).unix() * 1000,
      lifetime: {
        value: values.lifetime,
        unit: values.unit,
      },
      isAlive: true,
    });
    history.push('/');
  };

  const validateForm = ({ dob, lifetime, unit }) => {
    const errors = {};
    const dateOfBirth = dayjs(dob, DATE_FORMAT);

    if (dateOfBirth.add(lifetime, unit) - dayjs() <= 0) {
      errors.lifetime = 'Looks like your fish is past its lifetime.';
    }

    return errors;
  };

  return (
    <div className={styles.page}>
      <h1>Add new fish</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={AddFishSchema}
        validate={validateForm}
      >
        {({ errors, touched }) => (
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
              {errors.name && touched.name ? (
                <small className={styles.error}>{errors.name}</small>
              ) : null}
            </div>

            <div className={styles.control}>
              <label className={styles.label} htmlFor='species'>
                Species
              </label>
              <Field
                className={`${styles.field} ${styles.select}`}
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
              {errors.species && touched.species ? (
                <small className={styles.error}>{errors.species}</small>
              ) : null}
            </div>

            <div className={styles.control}>
              <label className={styles.label} htmlFor='dob'>
                Date of birth
              </label>
              <Picker name='dob' />
              {errors.dob && touched.dob ? (
                <small className={styles.error}>{errors.dob}</small>
              ) : null}
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
                  className={`${styles.field} ${styles.select}`}
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
              {errors.lifetime &&
              (touched.dob || touched.lifetime || touched.unit) ? (
                <small className={styles.error}>{errors.lifetime}</small>
              ) : null}
            </div>

            <Button className={styles.submit} type='submit'>
              Submit
            </Button>
          </Form>
        )}
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
        setFieldValue(field.name, dayjs(date).format(DATE_FORMAT));
      }}
      locale={enGB}
    >
      {({ inputProps, focused }) => {
        const inputClassName = classnames({
          [styles.field]: true,
          input: !focused,
          'input-focused': focused,
        });
        console.log({ inputProps });
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
