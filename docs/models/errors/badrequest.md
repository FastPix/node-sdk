# BadRequest

Bad Request – Stream is either already enabled or cannot be enabled on trial plan.


## Supported Types

### `errors.TrialPlanRestrictionError`

```typescript
const value: errors.TrialPlanRestrictionError = {
  success: false,
  error: {
    code: 400,
    message: "stream cannot be enabled on trial plan",
    description:
      "The requested stream cannot be enabled while on a trial plan. Please upgrade your plan.",
  },
};
```

### `errors.StreamAlreadyEnabledError`

```typescript
const value: errors.StreamAlreadyEnabledError = {
  success: false,
  error: {
    code: 400,
    message: "stream is already enabled",
    description: "The requested stream is already in an enabled state.",
  },
};
```

