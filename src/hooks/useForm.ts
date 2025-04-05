/**
 * A custom hook for handling forms with TypeScript support
 *
 * @example Cursor AI Prompt
 * "Create a form handling hook that:
 * - Is fully typed with TypeScript
 * - Handles validation
 * - Manages form state
 * - Provides error handling
 * - Includes loading states"
 */

import { useState, useCallback, useEffect } from "react";

export type ValidationRule<T> = {
  validate: (value: T) => boolean;
  message: string;
};

export type FieldConfig<T> = {
  initialValue: T;
  required?: boolean;
  rules?: ValidationRule<T>[];
};

export type FormConfig<T extends Record<string, any>> = {
  [K in keyof T]: FieldConfig<T[K]>;
};

export type FormErrors<T> = {
  [K in keyof T]?: string[];
};

export type UseFormResult<T> = {
  values: T;
  errors: FormErrors<T>;
  touched: { [K in keyof T]?: boolean };
  isValid: boolean;
  isSubmitting: boolean;
  handleChange: (field: keyof T, value: T[keyof T]) => void;
  handleBlur: (field: keyof T) => void;
  handleSubmit: (
    onSubmit: (values: T) => Promise<void>
  ) => (e: React.FormEvent) => Promise<void>;
  reset: () => void;
  setFieldValue: (field: keyof T, value: T[keyof T]) => void;
  setFieldError: (field: keyof T, error: string) => void;
};

/**
 * Custom hook for form handling with TypeScript support
 * @param config - Form configuration object
 * @returns Form handling utilities and state
 */
export function useForm<T extends Record<string, any>>(
  config: FormConfig<T>
): UseFormResult<T> {
  // Initialize form state
  const initialValues = Object.entries(config).reduce((acc, [key, field]) => {
    acc[key as keyof T] = field.initialValue;
    return acc;
  }, {} as T);

  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<FormErrors<T>>({});
  const [touched, setTouched] = useState<{ [K in keyof T]?: boolean }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validate a single field
  const validateField = useCallback(
    (field: keyof T, value: T[keyof T]): string[] => {
      const fieldConfig = config[field];
      const fieldErrors: string[] = [];

      if (fieldConfig.required && !value) {
        fieldErrors.push("This field is required");
      }

      if (fieldConfig.rules) {
        fieldConfig.rules.forEach((rule) => {
          if (!rule.validate(value)) {
            fieldErrors.push(rule.message);
          }
        });
      }

      return fieldErrors;
    },
    [config]
  );

  // Validate all fields
  const validateForm = useCallback((): FormErrors<T> => {
    const formErrors: FormErrors<T> = {};
    let hasErrors = false;

    Object.keys(config).forEach((key) => {
      const field = key as keyof T;
      const fieldErrors = validateField(field, values[field]);

      if (fieldErrors.length > 0) {
        formErrors[field] = fieldErrors;
        hasErrors = true;
      }
    });

    return hasErrors ? formErrors : {};
  }, [config, values, validateField]);

  // Handle field change
  const handleChange = useCallback(
    (field: keyof T, value: T[keyof T]) => {
      setValues((prev) => ({ ...prev, [field]: value }));
      setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
    },
    [validateField]
  );

  // Handle field blur
  const handleBlur = useCallback(
    (field: keyof T) => {
      setTouched((prev) => ({ ...prev, [field]: true }));
      setErrors((prev) => ({
        ...prev,
        [field]: validateField(field, values[field]),
      }));
    },
    [validateField, values]
  );

  // Handle form submission
  const handleSubmit = useCallback(
    (onSubmit: (values: T) => Promise<void>) => {
      return async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
          try {
            await onSubmit(values);
          } catch (error) {
            console.error("Form submission error:", error);
            if (error instanceof Error) {
              setErrors((prev) => ({ ...prev, submit: [error.message] }));
            }
          }
        } else {
          setErrors(formErrors);
          // Mark all fields as touched on failed submit
          setTouched(
            Object.keys(config).reduce(
              (acc, key) => {
                acc[key as keyof T] = true;
                return acc;
              },
              {} as { [K in keyof T]: boolean }
            )
          );
        }

        setIsSubmitting(false);
      };
    },
    [config, validateForm, values]
  );

  // Reset form to initial state
  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, [initialValues]);

  // Set field value manually
  const setFieldValue = useCallback((field: keyof T, value: T[keyof T]) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  }, []);

  // Set field error manually
  const setFieldError = useCallback((field: keyof T, error: string) => {
    setErrors((prev) => ({ ...prev, [field]: [error] }));
  }, []);

  // Check form validity
  const isValid = Object.keys(errors).length === 0;

  return {
    values,
    errors,
    touched,
    isValid,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    setFieldValue,
    setFieldError,
  };
}
