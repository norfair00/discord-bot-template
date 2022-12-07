# Modal template
Cron run on bot ready

```javascript
module.exports = {
    active: true,
    runAtStart: true,
    cron: '*/1 * * * *',
    task: async () => {
        // Your code here
    }
}
```