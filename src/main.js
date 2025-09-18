console.log('asdasdasd');
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM загружен, скрипт запущен'); // ← добавить эту строку
    const themeButtons = document.querySelectorAll('.theme-toggle-btn');
    
    if (themeButtons.length === 0) {
        console.error('Кнопки переключения темы не найдены!');
        return;
    }
    
    function toggleTheme() {
        // Анимация зеленой подложки
        this.classList.add('active');
        
        // Переключение темы
        document.body.classList.toggle('dark-theme');
        
        // Сохраняем выбор пользователя
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        // Убираем класс active после анимации
        setTimeout(() => {
            this.classList.remove('active');
        }, 400);
    }
    
    // Добавляем обработчики для всех кнопок
    themeButtons.forEach(btn => {
        btn.addEventListener('click', toggleTheme);
        btn.setAttribute('title', 'Нажмите для смены темы');
    });
    
    // Проверяем сохраненную тему при загрузке
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
});
