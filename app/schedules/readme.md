# Modal template
Cron run on bot ready

```javascript
module.exports = {
    active: true,
    runAtStart: true,
    timezone: 'Europe/Paris', // Default Europe/Paris
    cron: '*/1 * * * *',
    task: async () => {
        // Your code here
    }
}
```