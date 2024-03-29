import React, { useState, useEffect } from 'react';
import LessonSidebar from '../components/LessonSidebar';
import {
    Cloud, Check, Copy, Play, AlertCircle, Code, BookOpen,
    Target, ArrowRight, ArrowLeft, Terminal, Lightbulb, HelpCircle,
    Info, Sparkles, Award, Thermometer, Droplets, Wind, Sun,
    Moon, Sunrise, Sunset, Compass, MapPin, Navigation, Zap,
    Clock, Calendar, RefreshCw, Settings, Download, Upload,
    Search, Filter, Eye, EyeOff, Shield, BatteryCharging,
    Wifi, Smartphone, Monitor, Globe, Database, Server, CheckCircle, Star, ChevronLeft, ChevronRight
} from 'lucide-react';

export default function Project2() {
    const [copied, setCopied] = useState(false);
    const [output, setOutput] = useState('');
    const [showSolution, setShowSolution] = useState(false);
    const [userCode, setUserCode] = useState('');
    const [practiceOutput, setPracticeOutput] = useState('');
    const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'requirements', 'implementation'
    const [isExpanded, setIsExpanded] = useState(false);
    const [typingEffect, setTypingEffect] = useState('');
    const [pulseAnimation, setPulseAnimation] = useState(false);

    // Weather App State
    const [city, setCity] = useState('New York');
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [unit, setUnit] = useState('metric'); // 'metric' or 'imperial'
    const [forecastData, setForecastData] = useState([]);
    const [location, setLocation] = useState({ lat: 40.7128, lon: -74.0060 });
    const [searchHistory, setSearchHistory] = useState([]);

    // Typing effect for title
    useEffect(() => {
        const text = "Weather App Project";
        let i = 0;
        const typing = setInterval(() => {
            setTypingEffect(text.slice(0, i));
            i++;
            if (i > text.length) clearInterval(typing);
        }, 50);
        return () => clearInterval(typing);
    }, []);

    // Mock weather data for demo
    useEffect(() => {
        const mockWeatherData = {
            location: {
                name: "New York",
                country: "US",
                localtime: new Date().toISOString()
            },
            current: {
                temp_c: 22,
                temp_f: 72,
                condition: {
                    text: "Partly cloudy",
                    icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
                    code: 1003
                },
                wind_kph: 15,
                wind_mph: 9,
                wind_degree: 180,
                wind_dir: "S",
                humidity: 65,
                feelslike_c: 24,
                feelslike_f: 75,
                uv: 6,
                pressure_mb: 1013,
                pressure_in: 29.92,
                precip_mm: 0,
                precip_in: 0,
                cloud: 40,
                is_day: 1
            },
            forecast: {
                forecastday: [
                    {
                        date: new Date().toISOString().split('T')[0],
                        day: {
                            maxtemp_c: 24,
                            maxtemp_f: 75,
                            mintemp_c: 18,
                            mintemp_f: 64,
                            avgtemp_c: 21,
                            avgtemp_f: 70,
                            condition: {
                                text: "Sunny",
                                icon: "//cdn.weatherapi.com/weather/64x64/day/113.png"
                            },
                            maxwind_kph: 20,
                            maxwind_mph: 12,
                            totalprecip_mm: 0,
                            totalprecip_in: 0,
                            avghumidity: 60,
                            uv: 7
                        },
                        hour: Array.from({ length: 24 }, (_, i) => ({
                            time: `${i.toString().padStart(2, '0')}:00`,
                            temp_c: 20 + Math.sin(i * Math.PI / 12) * 4,
                            temp_f: 68 + Math.sin(i * Math.PI / 12) * 7,
                            condition: {
                                text: i < 6 || i > 18 ? "Clear" : "Sunny",
                                icon: i < 6 || i > 18
                                    ? "//cdn.weatherapi.com/weather/64x64/night/113.png"
                                    : "//cdn.weatherapi.com/weather/64x64/day/113.png"
                            },
                            wind_kph: 10 + Math.random() * 10,
                            wind_mph: 6 + Math.random() * 6,
                            humidity: 50 + Math.random() * 30,
                            chance_of_rain: i > 12 && i < 18 ? 30 : 0,
                            chance_of_snow: 0,
                            cloud: i > 12 && i < 18 ? 40 : 10
                        }))
                    },
                    {
                        date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
                        day: {
                            maxtemp_c: 22,
                            maxtemp_f: 72,
                            mintemp_c: 16,
                            mintemp_f: 61,
                            avgtemp_c: 19,
                            avgtemp_f: 66,
                            condition: {
                                text: "Partly cloudy",
                                icon: "//cdn.weatherapi.com/weather/64x64/day/116.png"
                            },
                            maxwind_kph: 25,
                            maxwind_mph: 16,
                            totalprecip_mm: 0.5,
                            totalprecip_in: 0.02,
                            avghumidity: 70,
                            uv: 5
                        }
                    },
                    {
                        date: new Date(Date.now() + 172800000).toISOString().split('T')[0],
                        day: {
                            maxtemp_c: 19,
                            maxtemp_f: 66,
                            mintemp_c: 14,
                            mintemp_f: 57,
                            avgtemp_c: 17,
                            avgtemp_f: 63,
                            condition: {
                                text: "Light rain",
                                icon: "//cdn.weatherapi.com/weather/64x64/day/296.png"
                            },
                            maxwind_kph: 30,
                            maxwind_mph: 19,
                            totalprecip_mm: 5,
                            totalprecip_in: 0.2,
                            avghumidity: 85,
                            uv: 3
                        }
                    }
                ]
            }
        };

        setWeatherData(mockWeatherData);

        // Mock forecast data
        setForecastData([
            { day: 'Mon', high: 24, low: 18, icon: '☀️', condition: 'Sunny', precip: 0 },
            { day: 'Tue', high: 22, low: 16, icon: '⛅', condition: 'Partly Cloudy', precip: 10 },
            { day: 'Wed', high: 19, low: 14, icon: '🌧️', condition: 'Light Rain', precip: 80 },
            { day: 'Thu', high: 21, low: 15, icon: '☀️', condition: 'Sunny', precip: 0 },
            { day: 'Fri', high: 23, low: 17, icon: '⛅', condition: 'Partly Cloudy', precip: 20 },
        ]);

        // Load search history from localStorage
        const savedHistory = localStorage.getItem('weatherSearchHistory');
        if (savedHistory) {
            setSearchHistory(JSON.parse(savedHistory));
        }
    }, []);

    // Solution Code
    const solutionCode = `// Complete Weather App Implementation
class WeatherApp {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.weatherapi.com/v1';
        this.currentUnit = 'metric';
        this.favorites = this.loadFavorites();
        this.searchHistory = this.loadSearchHistory();
        this.init();
    }

    // Initialize the app
    init() {
        this.setupEventListeners();
        this.getUserLocation();
        this.renderSearchHistory();
        this.renderFavorites();
    }

    // Setup event listeners
    setupEventListeners() {
        // Search form
        document.getElementById('searchForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const city = document.getElementById('cityInput').value;
            if (city) this.searchWeather(city);
        });

        // Unit toggle
        document.getElementById('unitToggle').addEventListener('change', (e) => {
            this.currentUnit = e.target.checked ? 'imperial' : 'metric';
            if (this.currentWeather) this.renderWeather(this.currentWeather);
        });

        // Geolocation button
        document.getElementById('geolocationBtn').addEventListener('click', () => {
            this.getUserLocation();
        });

        // Favorite button
        document.getElementById('favoriteBtn').addEventListener('click', () => {
            if (this.currentWeather) this.toggleFavorite(this.currentWeather.location);
        });
    }

    // Get user's current location
    getUserLocation() {
        if (!navigator.geolocation) {
            this.showError('Geolocation is not supported by your browser');
            return;
        }

        this.showLoading();

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                this.fetchWeatherByCoords(latitude, longitude);
            },
            (error) => {
                this.showError('Unable to retrieve your location');
                console.error('Geolocation error:', error);
                // Fallback to default city
                this.searchWeather('London');
            }
        );
    }

    // Search weather by city name
    async searchWeather(city) {
        if (!city.trim()) return;

        this.showLoading();
        this.addToSearchHistory(city);

        try {
            const response = await fetch(
                \`\${this.baseUrl}/current.json?key=\${this.apiKey}&q=\${encodeURIComponent(city)}&aqi=no\`
            );

            if (!response.ok) {
                throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
            }

            const data = await response.json();
            this.currentWeather = data;
            this.renderWeather(data);
            this.saveSearchHistory();
            
            // Also fetch forecast
            this.fetchForecast(city);
        } catch (error) {
            this.showError(\`Failed to fetch weather data: \${error.message}\`);
            console.error('Weather API error:', error);
        } finally {
            this.hideLoading();
        }
    }

    // Fetch weather by coordinates
    async fetchWeatherByCoords(lat, lon) {
        try {
            const response = await fetch(
                \`\${this.baseUrl}/current.json?key=\${this.apiKey}&q=\${lat},\${lon}&aqi=no\`
            );

            if (!response.ok) throw new Error(\`HTTP \${response.status}\`);

            const data = await response.json();
            this.currentWeather = data;
            this.renderWeather(data);
            this.fetchForecast(\`\${lat},\${lon}\`);
        } catch (error) {
            this.showError('Failed to fetch weather by coordinates');
        }
    }

    // Fetch 3-day forecast
    async fetchForecast(query) {
        try {
            const response = await fetch(
                \`\${this.baseUrl}/forecast.json?key=\${this.apiKey}&q=\${encodeURIComponent(query)}&days=3&aqi=no&alerts=no\`
            );

            if (!response.ok) throw new Error(\`HTTP \${response.status}\`);

            const data = await response.json();
            this.renderForecast(data.forecast);
        } catch (error) {
            console.error('Forecast API error:', error);
        }
    }

    // Render current weather
    renderWeather(data) {
        const { location, current } = data;
        const unitSymbol = this.currentUnit === 'metric' ? '°C' : '°F';
        const temp = this.currentUnit === 'metric' ? current.temp_c : current.temp_f;
        const feelsLike = this.currentUnit === 'metric' ? current.feelslike_c : current.feelslike_f;
        const windSpeed = this.currentUnit === 'metric' ? current.wind_kph : current.wind_mph;
        const windUnit = this.currentUnit === 'metric' ? 'km/h' : 'mph';

        document.getElementById('location').textContent = \`\${location.name}, \${location.country}\`;
        document.getElementById('temperature').textContent = \`\${temp}\${unitSymbol}\`;
        document.getElementById('condition').textContent = current.condition.text;
        document.getElementById('weatherIcon').src = \`https:\${current.condition.icon}\`;
        document.getElementById('feelsLike').textContent = \`Feels like: \${feelsLike}\${unitSymbol}\`;
        document.getElementById('humidity').textContent = \`Humidity: \${current.humidity}%\`;
        document.getElementById('wind').textContent = \`Wind: \${windSpeed} \${windUnit} \${current.wind_dir}\`;
        document.getElementById('pressure').textContent = \`Pressure: \${current.pressure_mb} hPa\`;
        document.getElementById('uvIndex').textContent = \`UV Index: \${current.uv}\`;
        document.getElementById('visibility').textContent = \`Visibility: \${current.vis_km || 'N/A'} km\`;

        // Update time
        const localTime = new Date(location.localtime);
        document.getElementById('localTime').textContent = localTime.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
        });

        // Update favorite button
        const isFavorite = this.favorites.some(fav => 
            fav.name === location.name && fav.country === location.country
        );
        document.getElementById('favoriteBtn').textContent = isFavorite ? '★' : '☆';
    }

    // Render forecast
    renderForecast(forecastData) {
        const forecastContainer = document.getElementById('forecast');
        const unitSymbol = this.currentUnit === 'metric' ? '°C' : '°F';

        forecastContainer.innerHTML = forecastData.forecastday.map(day => {
            const date = new Date(day.date);
            const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
            const maxTemp = this.currentUnit === 'metric' ? day.day.maxtemp_c : day.day.maxtemp_f;
            const minTemp = this.currentUnit === 'metric' ? day.day.mintemp_c : day.day.mintemp_f;

            return \`
                <div class="forecast-day">
                    <div class="forecast-day-name">\${dayName}</div>
                    <img src="https:\${day.day.condition.icon}" alt="\${day.day.condition.text}" class="forecast-icon">
                    <div class="forecast-temp">
                        <span class="forecast-high">\${maxTemp}\${unitSymbol}</span>
                        <span class="forecast-low">\${minTemp}\${unitSymbol}</span>
                    </div>
                    <div class="forecast-condition">\${day.day.condition.text}</div>
                    <div class="forecast-precip">\${day.day.daily_chance_of_rain}%</div>
                </div>
            \`;
        }).join('');
    }

    // Search history management
    addToSearchHistory(city) {
        const entry = {
            city,
            timestamp: new Date().toISOString(),
            id: Date.now()
        };

        // Remove duplicates and keep only last 10 searches
        this.searchHistory = [
            entry,
            ...this.searchHistory.filter(item => item.city.toLowerCase() !== city.toLowerCase())
        ].slice(0, 10);

        this.renderSearchHistory();
    }

    renderSearchHistory() {
        const historyContainer = document.getElementById('searchHistory');
        
        if (this.searchHistory.length === 0) {
            historyContainer.innerHTML = '<div class="empty-history">No search history</div>';
            return;
        }

        historyContainer.innerHTML = this.searchHistory.map(item => \`
            <div class="history-item" data-city="\${item.city}">
                <span class="history-city">\${item.city}</span>
                <span class="history-time">\${new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                <button class="history-delete" data-id="\${item.id}">×</button>
            </div>
        \`).join('');

        // Add click event to history items
        historyContainer.querySelectorAll('.history-item').forEach(item => {
            item.addEventListener('click', (e) => {
                if (!e.target.classList.contains('history-delete')) {
                    const city = item.dataset.city;
                    this.searchWeather(city);
                }
            });
        });

        // Add delete event to delete buttons
        historyContainer.querySelectorAll('.history-delete').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = parseInt(button.dataset.id);
                this.removeFromSearchHistory(id);
            });
        });
    }

    removeFromSearchHistory(id) {
        this.searchHistory = this.searchHistory.filter(item => item.id !== id);
        this.renderSearchHistory();
        this.saveSearchHistory();
    }

    // Favorites management
    toggleFavorite(location) {
        const favorite = {
            name: location.name,
            country: location.country,
            lat: location.lat,
            lon: location.lon,
            id: \`\${location.name}-\${location.country}\`
        };

        const existingIndex = this.favorites.findIndex(fav => fav.id === favorite.id);
        
        if (existingIndex > -1) {
            // Remove from favorites
            this.favorites.splice(existingIndex, 1);
        } else {
            // Add to favorites
            this.favorites.push(favorite);
        }

        this.saveFavorites();
        this.renderFavorites();
        
        // Update favorite button
        document.getElementById('favoriteBtn').textContent = existingIndex > -1 ? '☆' : '★';
    }

    renderFavorites() {
        const favoritesContainer = document.getElementById('favorites');
        
        if (this.favorites.length === 0) {
            favoritesContainer.innerHTML = '<div class="empty-favorites">No favorites yet</div>';
            return;
        }

        favoritesContainer.innerHTML = this.favorites.map(fav => \`
            <div class="favorite-item" data-city="\${fav.name}">
                <span class="favorite-name">\${fav.name}, \${fav.country}</span>
                <button class="favorite-remove" data-id="\${fav.id}">×</button>
            </div>
        \`).join('');

        // Add click event to favorite items
        favoritesContainer.querySelectorAll('.favorite-item').forEach(item => {
            item.addEventListener('click', (e) => {
                if (!e.target.classList.contains('favorite-remove')) {
                    const city = item.dataset.city;
                    this.searchWeather(city);
                }
            });
        });

        // Add remove event to remove buttons
        favoritesContainer.querySelectorAll('.favorite-remove').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = button.dataset.id;
                this.removeFromFavorites(id);
            });
        });
    }

    removeFromFavorites(id) {
        this.favorites = this.favorites.filter(fav => fav.id !== id);
        this.saveFavorites();
        this.renderFavorites();
    }

    // Local storage management
    saveSearchHistory() {
        localStorage.setItem('weatherSearchHistory', JSON.stringify(this.searchHistory));
    }

    loadSearchHistory() {
        const saved = localStorage.getItem('weatherSearchHistory');
        return saved ? JSON.parse(saved) : [];
    }

    saveFavorites() {
        localStorage.setItem('weatherFavorites', JSON.stringify(this.favorites));
    }

    loadFavorites() {
        const saved = localStorage.getItem('weatherFavorites');
        return saved ? JSON.parse(saved) : [];
    }

    // UI helper methods
    showLoading() {
        document.getElementById('loading').style.display = 'block';
        document.getElementById('weatherInfo').style.opacity = '0.5';
    }

    hideLoading() {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('weatherInfo').style.opacity = '1';
    }

    showError(message) {
        const errorContainer = document.getElementById('error');
        errorContainer.textContent = message;
        errorContainer.style.display = 'block';
        
        setTimeout(() => {
            errorContainer.style.display = 'none';
        }, 5000);
    }
}

// Initialize the app with your API key
const weatherApp = new WeatherApp('YOUR_API_KEY_HERE');

// Note: You need to sign up for a free API key at https://www.weatherapi.com/`;

    const codeExamples = {
        apiIntegration: `// Weather API Integration Examples
// Using WeatherAPI.com (Free tier available)

class WeatherAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.weatherapi.com/v1';
    }

    // 1. Get current weather by city
    async getCurrentWeather(city) {
        try {
            const response = await fetch(
                \`\${this.baseUrl}/current.json?key=\${this.apiKey}&q=\${encodeURIComponent(city)}&aqi=no\`
            );

            if (!response.ok) {
                throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
            }

            const data = await response.json();
            return {
                location: {
                    name: data.location.name,
                    country: data.location.country,
                    localtime: data.location.localtime,
                    lat: data.location.lat,
                    lon: data.location.lon
                },
                current: {
                    temp_c: data.current.temp_c,
                    temp_f: data.current.temp_f,
                    condition: data.current.condition,
                    wind_kph: data.current.wind_kph,
                    wind_mph: data.current.wind_mph,
                    wind_degree: data.current.wind_degree,
                    wind_dir: data.current.wind_dir,
                    humidity: data.current.humidity,
                    feelslike_c: data.current.feelslike_c,
                    feelslike_f: data.current.feelslike_f,
                    uv: data.current.uv,
                    pressure_mb: data.current.pressure_mb,
                    pressure_in: data.current.pressure_in,
                    precip_mm: data.current.precip_mm,
                    precip_in: data.current.precip_in,
                    cloud: data.current.cloud,
                    is_day: data.current.is_day,
                    vis_km: data.current.vis_km,
                    vis_miles: data.current.vis_miles
                }
            };
        } catch (error) {
            console.error('Weather API error:', error);
            throw new Error(\`Failed to fetch weather: \${error.message}\`);
        }
    }

    // 2. Get forecast (3 days free tier)
    async getForecast(city, days = 3) {
        try {
            const response = await fetch(
                \`\${this.baseUrl}/forecast.json?key=\${this.apiKey}&q=\${encodeURIComponent(city)}&days=\${days}&aqi=no&alerts=no\`
            );

            if (!response.ok) {
                throw new Error(\`HTTP \${response.status}\`);
            }

            const data = await response.json();
            return {
                location: data.location,
                current: data.current,
                forecast: data.forecast
            };
        } catch (error) {
            console.error('Forecast API error:', error);
            throw error;
        }
    }

    // 3. Search for cities (autocomplete)
    async searchCities(query) {
        try {
            const response = await fetch(
                \`\${this.baseUrl}/search.json?key=\${this.apiKey}&q=\${encodeURIComponent(query)}\`
            );

            if (!response.ok) throw new Error(\`HTTP \${response.status}\`);

            const data = await response.json();
            return data.map(city => ({
                name: city.name,
                country: city.country,
                region: city.region,
                lat: city.lat,
                lon: city.lon
            }));
        } catch (error) {
            console.error('Search API error:', error);
            return [];
        }
    }

    // 4. Get weather by coordinates
    async getWeatherByCoords(lat, lon) {
        try {
            const response = await fetch(
                \`\${this.baseUrl}/current.json?key=\${this.apiKey}&q=\${lat},\${lon}&aqi=no\`
            );

            if (!response.ok) throw new Error(\`HTTP \${response.status}\`);

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Coords API error:', error);
            throw error;
        }
    }

    // 5. Get historical weather
    async getHistoricalWeather(city, date) {
        try {
            const response = await fetch(
                \`\${this.baseUrl}/history.json?key=\${this.apiKey}&q=\${encodeURIComponent(city)}&dt=\${date}\`
            );

            if (!response.ok) throw new Error(\`HTTP \${response.status}\`);

            return await response.json();
        } catch (error) {
            console.error('History API error:', error);
            throw error;
        }
    }
}

// Alternative: OpenWeatherMap API
class OpenWeatherMapAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.openweathermap.org/data/2.5';
    }

    async getCurrentWeather(city) {
        const response = await fetch(
            \`\${this.baseUrl}/weather?q=\${city}&appid=\${this.apiKey}&units=metric\`
        );
        
        if (!response.ok) throw new Error(\`HTTP \${response.status}\`);
        
        const data = await response.json();
        return {
            name: data.name,
            weather: data.weather[0],
            main: data.main,
            wind: data.wind,
            sys: data.sys,
            dt: data.dt
        };
    }

    async getForecast(city) {
        const response = await fetch(
            \`\${this.baseUrl}/forecast?q=\${city}&appid=\${this.apiKey}&units=metric\`
        );
        
        if (!response.ok) throw new Error(\`HTTP \${response.status}\`);
        
        return await response.json();
    }

    async getWeatherByCoords(lat, lon) {
        const response = await fetch(
            \`\${this.baseUrl}/weather?lat=\${lat}&lon=\${lon}&appid=\${this.apiKey}&units=metric\`
        );
        
        if (!response.ok) throw new Error(\`HTTP \${response.status}\`);
        
        return await response.json();
    }
}

// Usage example
const weatherAPI = new WeatherAPI('your_api_key_here');

// Get current weather
weatherAPI.getCurrentWeather('London')
    .then(weather => {
        console.log('Current weather:', weather);
        console.log(\`Temperature: \${weather.current.temp_c}°C\`);
        console.log(\`Condition: \${weather.current.condition.text}\`);
    })
    .catch(error => {
        console.error('Error:', error);
        // Show user-friendly error message
        alert('Unable to fetch weather data. Please try again.');
    });`,

        geolocation: `// Geolocation and User Location
class LocationService {
    constructor() {
        this.currentPosition = null;
        this.watchId = null;
        this.callbacks = {
            onSuccess: [],
            onError: [],
            onPermissionDenied: []
        };
    }

    // Request user's current location
    getCurrentLocation(options = {}) {
        return new Promise((resolve, reject) => {
            if (!navigator.geolocation) {
                reject(new Error('Geolocation is not supported by this browser'));
                return;
            }

            const geolocationOptions = {
                enableHighAccuracy: true,
                timeout: 10000, // 10 seconds
                maximumAge: 60000, // 1 minute cache
                ...options
            };

            navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.currentPosition = position;
                    this.processPosition(position);
                    resolve(position);
                },
                (error) => {
                    const errorMessage = this.getErrorMessage(error);
                    console.error('Geolocation error:', error);
                    
                    // Call error callbacks
                    this.callbacks.onError.forEach(callback => callback(errorMessage));
                    
                    if (error.code === error.PERMISSION_DENIED) {
                        this.callbacks.onPermissionDenied.forEach(callback => callback());
                    }
                    
                    reject(new Error(errorMessage));
                },
                geolocationOptions
            );
        });
    }

    // Watch position (continuous updates)
    watchPosition(onSuccess, onError, options = {}) {
        if (!navigator.geolocation) {
            onError('Geolocation not supported');
            return null;
        }

        const watchOptions = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 3000,
            ...options
        };

        this.watchId = navigator.geolocation.watchPosition(
            (position) => {
                this.currentPosition = position;
                this.processPosition(position);
                onSuccess(position);
            },
            (error) => {
                const errorMessage = this.getErrorMessage(error);
                onError(errorMessage);
            },
            watchOptions
        );

        return this.watchId;
    }

    // Stop watching position
    stopWatching() {
        if (this.watchId !== null) {
            navigator.geolocation.clearWatch(this.watchId);
            this.watchId = null;
        }
    }

    // Process position data
    processPosition(position) {
        const { latitude, longitude, accuracy, altitude, altitudeAccuracy, heading, speed } = position.coords;
        const timestamp = new Date(position.timestamp);

        this.currentPosition = {
            coords: {
                lat: latitude,
                lon: longitude,
                accuracy,
                altitude,
                altitudeAccuracy,
                heading,
                speed
            },
            timestamp
        };

        // Reverse geocoding (get address from coordinates)
        this.reverseGeocode(latitude, longitude)
            .then(address => {
                this.currentPosition.address = address;
                // Update UI with location name
                this.updateLocationDisplay(address);
            })
            .catch(error => {
                console.error('Reverse geocoding failed:', error);
            });
    }

    // Reverse geocoding using Nominatim (free)
    async reverseGeocode(lat, lon) {
        try {
            const response = await fetch(
                \`https://nominatim.openstreetmap.org/reverse?format=json&lat=\${lat}&lon=\${lon}&zoom=10\`
            );

            if (!response.ok) {
                throw new Error(\`HTTP \${response.status}\`);
            }

            const data = await response.json();
            return {
                display_name: data.display_name,
                address: data.address,
                osm_id: data.osm_id
            };
        } catch (error) {
            console.error('Reverse geocoding error:', error);
            return null;
        }
    }

    // Get city name from coordinates
    async getCityFromCoords(lat, lon) {
        try {
            const response = await fetch(
                \`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=\${lat}&longitude=\${lon}&localityLanguage=en\`
            );

            if (!response.ok) {
                throw new Error(\`HTTP \${response.status}\`);
            }

            const data = await response.json();
            return data.city || data.locality || 'Unknown location';
        } catch (error) {
            console.error('City lookup error:', error);
            return \`\${lat.toFixed(2)}, \${lon.toFixed(2)}\`;
        }
    }

    // Error message handling
    getErrorMessage(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                return 'Location permission denied. Please enable location services in your browser settings.';
            case error.POSITION_UNAVAILABLE:
                return 'Location information is unavailable.';
            case error.TIMEOUT:
                return 'The request to get your location timed out.';
            default:
                return 'An unknown error occurred while getting your location.';
        }
    }

    // UI updates
    updateLocationDisplay(address) {
        const locationElement = document.getElementById('currentLocation');
        if (locationElement && address) {
            locationElement.textContent = address.display_name || 
                                        address.city || 
                                        'Your current location';
        }
    }

    // Permission management
    async requestPermission() {
        if (!navigator.permissions) {
            return 'prompt'; // Can't determine, assume prompt
        }

        try {
            const permission = await navigator.permissions.query({ name: 'geolocation' });
            return permission.state;
        } catch (error) {
            console.error('Permission query error:', error);
            return 'prompt';
        }
    }

    // Fallback: Get approximate location via IP
    async getLocationByIP() {
        try {
            const response = await fetch('https://ipapi.co/json/');
            if (!response.ok) throw new Error(\`HTTP \${response.status}\`);
            
            const data = await response.json();
            return {
                coords: {
                    lat: data.latitude,
                    lon: data.longitude
                },
                city: data.city,
                country: data.country_name,
                ip: data.ip
            };
        } catch (error) {
            console.error('IP location error:', error);
            return null;
        }
    }

    // Add event listeners
    onSuccess(callback) {
        this.callbacks.onSuccess.push(callback);
    }

    onError(callback) {
        this.callbacks.onError.push(callback);
    }

    onPermissionDenied(callback) {
        this.callbacks.onPermissionDenied.push(callback);
    }
}

// Usage example
const locationService = new LocationService();

// Get current location
locationService.getCurrentLocation()
    .then(position => {
        console.log('Position:', position);
        console.log(\`Latitude: \${position.coords.latitude}\`);
        console.log(\`Longitude: \${position.coords.longitude}\`);
        
        // Use coordinates for weather API
        fetchWeatherByCoords(position.coords.latitude, position.coords.longitude);
    })
    .catch(error => {
        console.error('Location error:', error);
        // Fallback to IP-based location or default city
        locationService.getLocationByIP()
            .then(ipLocation => {
                if (ipLocation) {
                    fetchWeatherByCoords(ipLocation.coords.lat, ipLocation.coords.lon);
                } else {
                    fetchWeatherByCity('London'); // Default city
                }
            });
    });

// Watch for location changes (for moving users)
const watchId = locationService.watchPosition(
    (position) => {
        console.log('Position updated:', position);
        // Update weather for new location
        fetchWeatherByCoords(position.coords.latitude, position.coords.longitude);
    },
    (error) => {
        console.error('Watch error:', error);
    }
);

// Stop watching when needed
// locationService.stopWatching();`,

        uiComponents: `// Weather App UI Components
class WeatherUI {
    constructor() {
        this.elements = {
            currentWeather: document.getElementById('currentWeather'),
            forecast: document.getElementById('forecast'),
            searchInput: document.getElementById('searchInput'),
            unitToggle: document.getElementById('unitToggle'),
            loading: document.getElementById('loading'),
            error: document.getElementById('error')
        };
    }

    // Render current weather
    renderCurrentWeather(weatherData, unit = 'metric') {
        const { location, current } = weatherData;
        const unitSymbol = unit === 'metric' ? '°C' : '°F';
        const temp = unit === 'metric' ? current.temp_c : current.temp_f;
        const feelsLike = unit === 'metric' ? current.feelslike_c : current.feelslike_f;
        const windSpeed = unit === 'metric' ? current.wind_kph : current.wind_mph;
        const windUnit = unit === 'metric' ? 'km/h' : 'mph';

        const html = \`
            <div class="weather-card">
                <div class="weather-header">
                    <div class="location">
                        <h2 class="city">\${location.name}</h2>
                        <p class="country">\${location.country}</p>
                        <p class="time">\${new Date(location.localtime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                    </div>
                    <div class="temperature">
                        <span class="temp-value">\${temp}</span>
                        <span class="temp-unit">\${unitSymbol}</span>
                    </div>
                </div>

                <div class="weather-body">
                    <div class="condition">
                        <img src="https:\${current.condition.icon}" 
                             alt="\${current.condition.text}" 
                             class="weather-icon">
                        <p class="condition-text">\${current.condition.text}</p>
                    </div>

                    <div class="weather-details">
                        <div class="detail-item">
                            <span class="detail-label">Feels Like</span>
                            <span class="detail-value">\${feelsLike}\${unitSymbol}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Humidity</span>
                            <span class="detail-value">\${current.humidity}%</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Wind</span>
                            <span class="detail-value">\${windSpeed} \${windUnit} \${current.wind_dir}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Pressure</span>
                            <span class="detail-value">\${current.pressure_mb} hPa</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">UV Index</span>
                            <span class="detail-value">\${current.uv}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Visibility</span>
                            <span class="detail-value">\${current.vis_km || 'N/A'} km</span>
                        </div>
                    </div>
                </div>
            </div>
        \`;

        this.elements.currentWeather.innerHTML = html;
    }

    // Render forecast
    renderForecast(forecastData, unit = 'metric') {
        const { forecastday } = forecastData;
        const unitSymbol = unit === 'metric' ? '°C' : '°F';

        const html = \`
            <div class="forecast-container">
                <h3 class="forecast-title">3-Day Forecast</h3>
                <div class="forecast-days">
                    \${forecastday.map(day => {
                        const date = new Date(day.date);
                        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
                        const maxTemp = unit === 'metric' ? day.day.maxtemp_c : day.day.maxtemp_f;
                        const minTemp = unit === 'metric' ? day.day.mintemp_c : day.day.mintemp_f;
                        
                        return \`
                            <div class="forecast-day">
                                <div class="forecast-date">\${dayName}</div>
                                <img src="https:\${day.day.condition.icon}" 
                                     alt="\${day.day.condition.text}" 
                                     class="forecast-icon">
                                <div class="forecast-temps">
                                    <span class="forecast-high">\${maxTemp}\${unitSymbol}</span>
                                    <span class="forecast-low">\${minTemp}\${unitSymbol}</span>
                                </div>
                                <div class="forecast-condition">\${day.day.condition.text}</div>
                                <div class="forecast-precip">
                                    <span class="precip-icon">💧</span>
                                    <span class="precip-value">\${day.day.daily_chance_of_rain}%</span>
                                </div>
                            </div>
                        \`;
                    }).join('')}
                </div>
            </div>
        \`;

        this.elements.forecast.innerHTML = html;
    }

    // Render hourly forecast
    renderHourlyForecast(hourlyData, unit = 'metric') {
        const unitSymbol = unit === 'metric' ? '°C' : '°F';
        
        const html = \`
            <div class="hourly-forecast">
                <h3 class="hourly-title">24-Hour Forecast</h3>
                <div class="hourly-slider">
                    \${hourlyData.slice(0, 24).map(hour => {
                        const time = new Date(hour.time);
                        const hourString = time.getHours().toString().padStart(2, '0') + ':00';
                        const temp = unit === 'metric' ? hour.temp_c : hour.temp_f;
                        
                        return \`
                            <div class="hourly-item">
                                <div class="hourly-time">\${hourString}</div>
                                <img src="https:\${hour.condition.icon}" 
                                     alt="\${hour.condition.text}" 
                                     class="hourly-icon">
                                <div class="hourly-temp">\${temp}\${unitSymbol}</div>
                                <div class="hourly-precip">
                                    \${hour.chance_of_rain > 0 ? \`💧 \${hour.chance_of_rain}%\` : ''}
                                </div>
                            </div>
                        \`;
                    }).join('')}
                </div>
            </div>
        \`;

        return html;
    }

    // Show loading state
    showLoading() {
        this.elements.loading.style.display = 'flex';
        this.elements.currentWeather.style.opacity = '0.5';
    }

    // Hide loading state
    hideLoading() {
        this.elements.loading.style.display = 'none';
        this.elements.currentWeather.style.opacity = '1';
    }

    // Show error message
    showError(message) {
        this.elements.error.textContent = message;
        this.elements.error.style.display = 'block';
        
        setTimeout(() => {
            this.elements.error.style.display = 'none';
        }, 5000);
    }

    // Update search suggestions
    updateSearchSuggestions(suggestions) {
        const suggestionsContainer = document.getElementById('searchSuggestions');
        
        if (suggestions.length === 0) {
            suggestionsContainer.style.display = 'none';
            return;
        }

        const html = suggestions.map(city => \`
            <div class="suggestion-item" data-city="\${city.name}">
                <span class="suggestion-name">\${city.name}, \${city.country}</span>
                <span class="suggestion-region">\${city.region}</span>
            </div>
        \`).join('');

        suggestionsContainer.innerHTML = html;
        suggestionsContainer.style.display = 'block';

        // Add click event to suggestions
        suggestionsContainer.querySelectorAll('.suggestion-item').forEach(item => {
            item.addEventListener('click', () => {
                const city = item.dataset.city;
                this.elements.searchInput.value = city;
                suggestionsContainer.style.display = 'none';
                // Trigger search
                document.dispatchEvent(new CustomEvent('citySelected', { detail: city }));
            });
        });
    }

    // Render weather map
    renderWeatherMap(lat, lon, zoom = 8) {
        // Using Leaflet.js or OpenLayers for maps
        return \`
            <div class="weather-map" id="weatherMap">
                <iframe 
                    width="100%" 
                    height="300"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=\${lon-1}%2C\${lat-1}%2C\${lon+1}%2C\${lat+1}&layer=mapnik&marker=\${lat}%2C\${lon}">
                </iframe>
            </div>
        \`;
    }

    // Create weather icon based on condition code
    getWeatherIcon(conditionCode, isDay = true) {
        const icons = {
            // Clear
            1000: isDay ? '☀️' : '🌙',
            // Partly cloudy
            1003: isDay ? '⛅' : '☁️',
            // Cloudy
            1006: '☁️',
            // Overcast
            1009: '☁️',
            // Mist
            1030: '🌫️',
            // Patchy rain
            1063: '🌦️',
            // Patchy snow
            1066: '🌨️',
            // Patchy sleet
            1069: '🌨️',
            // Patchy freezing drizzle
            1072: '🌨️',
            // Thundery outbreaks
            1087: '⛈️',
            // Blowing snow
            1114: '🌨️',
            // Blizzard
            1117: '❄️',
            // Fog
            1135: '🌫️',
            // Freezing fog
            1147: '🌫️',
            // Light drizzle
            1150: '🌦️',
            // Moderate drizzle
            1153: '🌧️',
            // Heavy drizzle
            1156: '🌧️',
            // Light rain
            1180: '🌦️',
            // Moderate rain
            1183: '🌧️',
            // Heavy rain
            1186: '🌧️',
            // Light snow
            1210: '🌨️',
            // Moderate snow
            1213: '🌨️',
            // Heavy snow
            1216: '❄️',
            // Light sleet
            1249: '🌨️',
            // Moderate sleet
            1252: '🌨️',
            // Heavy sleet
            1255: '🌨️',
            // Light freezing rain
            1279: '🌨️',
            // Moderate freezing rain
            1282: '🌨️'
        };

        return icons[conditionCode] || '🌈';
    }

    // Animate weather changes
    animateWeatherChange(oldTemp, newTemp, oldCondition, newCondition) {
        const tempElement = document.querySelector('.temp-value');
        const conditionElement = document.querySelector('.condition-text');
        
        // Temperature animation
        if (tempElement) {
            const duration = 1000; // 1 second
            const startTemp = oldTemp;
            const endTemp = newTemp;
            const startTime = Date.now();
            
            const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing function for smooth animation
                const easeOutCubic = 1 - Math.pow(1 - progress, 3);
                const currentTemp = startTemp + (endTemp - startTemp) * easeOutCubic;
                
                tempElement.textContent = Math.round(currentTemp);
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };
            
            animate();
        }
        
        // Condition fade animation
        if (conditionElement && oldCondition !== newCondition) {
            conditionElement.style.opacity = '0.5';
            conditionElement.style.transition = 'opacity 0.5s ease';
            
            setTimeout(() => {
                conditionElement.textContent = newCondition;
                conditionElement.style.opacity = '1';
            }, 500);
        }
    }
}

// Initialize UI
const weatherUI = new WeatherUI();

// Example usage
weatherUI.showLoading();
// After fetching data...
weatherUI.renderCurrentWeather(weatherData, 'metric');
weatherUI.renderForecast(forecastData, 'metric');
weatherUI.hideLoading();`
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const runPracticeCode = () => {
        try {
            const logs = [];
            const originalLog = console.log;

            console.log = (...args) => {
                logs.push(args.join(' '));
            };

            eval(userCode);

            console.log = originalLog;

            if (logs.length === 0) {
                setPracticeOutput(" Code executed successfully (no console output)");
            } else {
                setPracticeOutput(" Output:\n" + logs.join("\n"));
            }
        } catch (error) {
            setPracticeOutput(" Error: " + error.message);
        }
    };

    const clearPractice = () => {
        setUserCode('');
        setPracticeOutput('');
    };

    const runCode = (code) => {
        setPulseAnimation(true);
        setTimeout(() => setPulseAnimation(false), 300);

        try {
            const logs = [];
            const originalLog = console.log;
            console.log = (...args) => {
                logs.push(args.join(' '));
            };

            eval(code);

            console.log = originalLog;
            setOutput(logs.join('\n'));
        } catch (error) {
            setOutput(` Error: ${error.message}`);
        }
    };

    // Weather App Functions
    const handleSearch = (e) => {
        e?.preventDefault();
        if (!city.trim()) return;

        setLoading(true);
        setError('');

        // Simulate API call
        setTimeout(() => {
            const mockData = {
                ...weatherData,
                location: {
                    ...weatherData.location,
                    name: city
                }
            };

            setWeatherData(mockData);
            setLoading(false);

            // Add to search history
            const newEntry = {
                city,
                timestamp: new Date().toISOString(),
                id: Date.now()
            };

            const updatedHistory = [
                newEntry,
                ...searchHistory.filter(item => item.city.toLowerCase() !== city.toLowerCase())
            ].slice(0, 5);

            setSearchHistory(updatedHistory);
            localStorage.setItem('weatherSearchHistory', JSON.stringify(updatedHistory));

        }, 1000);
    };

    const handleGeolocation = () => {
        if (!navigator.geolocation) {
            setError('Geolocation is not supported by your browser');
            return;
        }

        setLoading(true);
        setError('');

        // Mock geolocation
        setTimeout(() => {
            const mockCoords = {
                lat: 51.5074,
                lon: -0.1278
            };

            setLocation(mockCoords);
            setCity('London');

            const mockData = {
                ...weatherData,
                location: {
                    ...weatherData.location,
                    name: 'London',
                    country: 'UK'
                }
            };

            setWeatherData(mockData);
            setLoading(false);
        }, 1500);
    };

    const clearHistory = () => {
        setSearchHistory([]);
        localStorage.removeItem('weatherSearchHistory');
    };

    const getTemperature = () => {
        if (!weatherData) return { temp: 0, feelsLike: 0 };
        return unit === 'metric'
            ? { temp: weatherData.current.temp_c, feelsLike: weatherData.current.feelslike_c }
            : { temp: weatherData.current.temp_f, feelsLike: weatherData.current.feelslike_f };
    };

    const getWindSpeed = () => {
        if (!weatherData) return { speed: 0, unit: '' };
        return unit === 'metric'
            ? { speed: weatherData.current.wind_kph, unit: 'km/h' }
            : { speed: weatherData.current.wind_mph, unit: 'mph' };
    };

    // Tab Content
    const tabContents = {
        overview: (
            <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 p-6 rounded-2xl border border-blue-200 dark:border-blue-800">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <Cloud className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        Project Overview
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                        Build a fully-featured Weather application that fetches real-time data from weather APIs. This project will teach you <span className="font-bold text-blue-600 dark:text-blue-400">API integration</span>, <span className="font-bold text-green-600 dark:text-green-400">async JavaScript</span>, <span className="font-bold text-purple-600 dark:text-purple-400">geolocation</span>, and <span className="font-bold text-yellow-600 dark:text-yellow-400">dynamic UI updates</span>.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl">
                            <div className="text-2xl font-bold text-blue-600 mb-2">Real API Data</div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Fetch live weather data from external APIs</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl">
                            <div className="text-2xl font-bold text-cyan-600 mb-2">Location Services</div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Use browser geolocation for automatic detection</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-900/10 dark:to-teal-900/10 p-6 rounded-2xl border border-cyan-200 dark:border-cyan-800">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                        Skills You'll Learn
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
                            <div className="font-bold text-blue-600 dark:text-blue-400">API Integration</div>
                            <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Fetch & parse JSON data</div>
                        </div>
                        <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg border border-green-200 dark:border-green-800">
                            <div className="font-bold text-green-600 dark:text-green-400">Async/Await</div>
                            <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Handle asynchronous operations</div>
                        </div>
                        <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg border border-purple-200 dark:border-purple-800">
                            <div className="font-bold text-purple-600 dark:text-purple-400">Geolocation API</div>
                            <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Get user location</div>
                        </div>
                        <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg border border-yellow-200 dark:border-yellow-800">
                            <div className="font-bold text-yellow-600 dark:text-yellow-400">Error Handling</div>
                            <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Graceful API failures</div>
                        </div>
                    </div>
                </div>
            </div>
        ),
        requirements: (
            <div className="space-y-6">
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/10 dark:to-amber-900/10 p-6 rounded-2xl border border-orange-200 dark:border-orange-800">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <Target className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                        Project Requirements
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                        Your Weather app must implement all core features and at least 2 advanced features:
                    </p>

                    <div className="space-y-4">
                        <div>
                            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                Core Features (Required):
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    <span>Search weather by city name</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    <span>Display current weather with temperature, condition, humidity, wind</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    <span>Toggle between Celsius/Fahrenheit</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    <span>Use geolocation to get weather for current location</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    <span>Show 3-day forecast</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    <span>Handle API errors gracefully</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-2">
                                <Star className="w-4 h-4 text-yellow-500" />
                                Advanced Features (Choose 2+):
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                    <span>Search history with localStorage</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                    <span>Favorite locations</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                    <span>Hourly forecast (24 hours)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                    <span>Weather maps integration</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                    <span>Air quality index (AQI)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                    <span>Weather alerts and warnings</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                    <span>Animated weather icons</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                    <span>Offline mode with cached data</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 p-6 rounded-2xl border border-purple-200 dark:border-purple-800">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <Globe className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        API Options (Free Tiers Available)
                    </h3>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg">
                            <div>
                                <span className="font-medium">WeatherAPI.com</span>
                                <div className="text-xs text-slate-500">1M calls/month free</div>
                            </div>
                            <span className="px-2 py-1 bg-green-500/20 text-green-500 rounded-full text-xs">Recommended</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg">
                            <div>
                                <span className="font-medium">OpenWeatherMap</span>
                                <div className="text-xs text-slate-500">1K calls/day free</div>
                            </div>
                            <span className="px-2 py-1 bg-blue-500/20 text-blue-500 rounded-full text-xs">Alternative</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg">
                            <div>
                                <span className="font-medium">Weatherbit.io</span>
                                <div className="text-xs text-slate-500">500 calls/day free</div>
                            </div>
                            <span className="px-2 py-1 bg-purple-500/20 text-purple-500 rounded-full text-xs">Good for Forecast</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg">
                            <div>
                                <span className="font-medium">AccuWeather</span>
                                <div className="text-xs text-slate-500">50 calls/day free</div>
                            </div>
                            <span className="px-2 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-xs">Limited Free</span>
                        </div>
                    </div>
                </div>
            </div>
        ),
        implementation: (
            <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10 p-6 rounded-2xl border border-indigo-200 dark:border-indigo-800">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <Code className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        Implementation Guide
                    </h3>

                    <div className="space-y-4">
                        <div>
                            <h4 className="font-bold mb-2 text-slate-800 dark:text-slate-200">Step 1: Get API Key & Setup</h4>
                            <div className="bg-slate-900 p-4 rounded-lg">
                                <pre className="text-slate-300 text-sm">
                                    {`// 1. Sign up for WeatherAPI.com (free)
// 2. Get your API key from dashboard
// 3. Project structure:
📁 weather-app/
├── 📄 index.html
├── 📄 style.css
├── 📄 app.js           # Main app
├── 📄 weatherApi.js    # API service
├── 📄 geolocation.js   # Location service
└── 📄 ui.js           # UI components

// 4. HTML Structure
<!DOCTYPE html>
<html>
<head>
    <title>Weather App</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <div class="container">
        <!-- Header with search -->
        <header class="header">
            <form id="searchForm">
                <input type="text" id="cityInput" placeholder="Search city...">
                <button type="submit">Search</button>
                <button type="button" id="locationBtn">
                    <i class="fas fa-location-arrow"></i>
                </button>
            </form>
            <div class="unit-toggle">
                <label>
                    <input type="checkbox" id="unitToggle">
                    <span class="toggle-slider"></span>
                </label>
                <span>°C / °F</span>
            </div>
        </header>
        
        <!-- Main weather display -->
        <main id="weatherDisplay">
            <div id="loading" class="loading">Loading...</div>
            <div id="currentWeather"></div>
            <div id="forecast"></div>
        </main>
        
        <!-- Footer with additional info -->
        <footer>
            <div id="searchHistory"></div>
            <div id="favorites"></div>
        </footer>
    </div>
    
    <script src="app.js"></script>
</body>
</html>`}
                                </pre>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold mb-2 text-slate-800 dark:text-slate-200">Step 2: Architecture Pattern</h4>
                            <div className="bg-slate-900 p-4 rounded-lg">
                                <pre className="text-slate-300 text-sm">
                                    {`// Recommended: Service-Oriented Architecture

// SERVICES (Data Layer)
class WeatherService {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.weatherapi.com/v1';
    }
    
    async getCurrentWeather(city) { /* API call */ }
    async getForecast(city, days) { /* API call */ }
    async getWeatherByCoords(lat, lon) { /* API call */ }
}

class LocationService {
    async getCurrentLocation() { /* Geolocation */ }
    async reverseGeocode(lat, lon) { /* Get city name */ }
}

class StorageService {
    saveSearchHistory(history) { /* localStorage */ }
    loadSearchHistory() { /* localStorage */ }
    saveFavorites(favorites) { /* localStorage */ }
    loadFavorites() { /* localStorage */ }
}

// MANAGERS (Business Logic)
class WeatherManager {
    constructor(weatherService, locationService) {
        this.weatherService = weatherService;
        this.locationService = locationService;
        this.currentWeather = null;
        this.unit = 'metric';
    }
    
    async searchWeather(city) {
        try {
            const weather = await this.weatherService.getCurrentWeather(city);
            const forecast = await this.weatherService.getForecast(city, 3);
            this.currentWeather = { ...weather, forecast };
            return this.currentWeather;
        } catch (error) {
            throw new Error(\`Weather search failed: \${error.message}\`);
        }
    }
    
    async getLocationWeather() {
        try {
            const location = await this.locationService.getCurrentLocation();
            const weather = await this.weatherService.getWeatherByCoords(
                location.lat, 
                location.lon
            );
            this.currentWeather = weather;
            return weather;
        } catch (error) {
            throw new Error(\`Location weather failed: \${error.message}\`);
        }
    }
    
    toggleUnit() {
        this.unit = this.unit === 'metric' ? 'imperial' : 'metric';
        return this.unit;
    }
}

// UI COMPONENTS (Presentation Layer)
class WeatherUI {
    constructor() {
        this.elements = { /* DOM elements */ };
    }
    
    renderWeather(weatherData, unit) { /* Update UI */ }
    renderForecast(forecastData, unit) { /* Update UI */ }
    showLoading() { /* Show spinner */ }
    hideLoading() { /* Hide spinner */ }
    showError(message) { /* Show error */ }
    updateSearchHistory(history) { /* Update history list */ }
}

// APP (Coordination)
class WeatherApp {
    constructor() {
        this.weatherService = new WeatherService('YOUR_API_KEY');
        this.locationService = new LocationService();
        this.storageService = new StorageService();
        this.weatherManager = new WeatherManager(
            this.weatherService, 
            this.locationService
        );
        this.ui = new WeatherUI();
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.loadFromStorage();
        this.autoDetectLocation();
    }
    
    setupEventListeners() {
        // Search form, unit toggle, location button, etc.
    }
    
    async autoDetectLocation() {
        try {
            await this.weatherManager.getLocationWeather();
            this.ui.renderWeather(
                this.weatherManager.currentWeather,
                this.weatherManager.unit
            );
        } catch (error) {
            console.error('Auto-detection failed:', error);
            // Fallback to default city
            this.searchWeather('London');
        }
    }
    
    // ... other methods
}

// Initialize
const app = new WeatherApp();`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-500/30">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl"></div>
            </div>

            <LessonSidebar currentLesson="project2" />

            <main className="relative z-10 transition-all duration-300 w-full lg:pl-80">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">

                    {/* Header */}
                    <div className="mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
                        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-4 font-mono">
                            <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold animate-pulse">
                                PROJECT 2: REAL-WORLD APPLICATION
                            </span>
                            <span className="hidden sm:inline">•</span>
                            <span className="flex items-center gap-2">
                                <Cloud className="w-4 h-4" /> Weather App
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tighter">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-500 to-sky-500 animate-gradient">
                                {typingEffect}
                            </span>
                            <span className="block text-2xl md:text-3xl mt-4 text-slate-600 dark:text-slate-400">
                                Build a Real-Time Weather Application with APIs
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-4xl leading-relaxed font-light">
                            Create a professional weather app that fetches live data, uses geolocation, and provides beautiful visualizations of weather conditions.
                        </p>

                        {/* Quick Stats */}
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                <Clock className="w-4 h-4 text-blue-500" />
                                <span className="text-sm font-medium">5-8 hours</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                <Target className="w-4 h-4 text-cyan-500" />
                                <span className="text-sm font-medium">API Integration</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                                <Award className="w-4 h-4 text-sky-500" />
                                <span className="text-sm font-medium">Portfolio Ready</span>
                            </div>
                        </div>
                    </div>

                    {/* Learning Tabs */}
                    <div className="mb-10">
                        <div className="flex flex-wrap gap-2 mb-6">
                            {['overview', 'requirements', 'implementation'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 ${activeTab === tab
                                        ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg shadow-blue-500/30'
                                        : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                                        }`}
                                >
                                    {tab === 'overview' && <BookOpen className="w-4 h-4" />}
                                    {tab === 'requirements' && <Target className="w-4 h-4" />}
                                    {tab === 'implementation' && <Code className="w-4 h-4" />}
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </div>

                        <div className="animate-in fade-in duration-500">
                            {tabContents[activeTab]}
                        </div>
                    </div>

                    {/* Live Weather App Demo */}
                    <section className="mb-16">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
                                    Live Weather App Demo
                                </span>
                            </h2>
                            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                                <Globe className="w-4 h-4" />
                                <span className="hidden sm:inline">Interactive Demo</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Weather App Interface */}
                            <div className="lg:col-span-2">
                                <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 rounded-3xl overflow-hidden border border-slate-300 dark:border-slate-700 shadow-2xl">
                                    <div className="p-6 border-b border-slate-300 dark:border-slate-700">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                                <Cloud className="w-5 h-5 text-blue-500" />
                                                Weather Dashboard
                                            </h3>

                                            <div className="flex items-center gap-3">
                                                {/* Unit Toggle */}
                                                <div className="flex items-center gap-2">
                                                    <span className="text-sm text-slate-600 dark:text-slate-400">°C</span>
                                                    <button
                                                        onClick={() => setUnit(unit === 'metric' ? 'imperial' : 'metric')}
                                                        className={`relative w-12 h-6 rounded-full transition-colors ${unit === 'imperial' ? 'bg-blue-500' : 'bg-slate-300 dark:bg-slate-700'}`}
                                                    >
                                                        <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${unit === 'imperial' ? 'left-7' : 'left-1'}`} />
                                                    </button>
                                                    <span className="text-sm text-slate-600 dark:text-slate-400">°F</span>
                                                </div>

                                                {/* Geolocation Button */}
                                                <button
                                                    onClick={handleGeolocation}
                                                    className="p-2 rounded-lg bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 transition-colors"
                                                    title="Use my location"
                                                >
                                                    <Navigation className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Search Form */}
                                        <form onSubmit={handleSearch} className="mb-6">
                                            <div className="flex gap-2">
                                                <input
                                                    type="text"
                                                    value={city}
                                                    onChange={(e) => setCity(e.target.value)}
                                                    placeholder="Search city or location..."
                                                    className="flex-1 p-3 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                                <button
                                                    type="submit"
                                                    disabled={loading}
                                                    className={`px-6 py-3 rounded-lg font-bold transition-all ${loading
                                                        ? 'bg-slate-300 dark:bg-slate-700 text-slate-400 cursor-not-allowed'
                                                        : 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:shadow-lg hover:shadow-blue-500/30'
                                                        }`}
                                                >
                                                    {loading ? 'Searching...' : 'Search'}
                                                </button>
                                            </div>
                                        </form>

                                        {/* Error Message */}
                                        {error && (
                                            <div className="mb-4 p-3 rounded-lg bg-red-500/10 text-red-500 text-sm">
                                                {error}
                                            </div>
                                        )}

                                        {/* Search History */}
                                        {searchHistory.length > 0 && (
                                            <div className="mb-4">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Recent Searches:</span>
                                                    <button
                                                        onClick={clearHistory}
                                                        className="text-xs text-red-500 hover:text-red-700"
                                                    >
                                                        Clear All
                                                    </button>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {searchHistory.map((item, index) => (
                                                        <button
                                                            key={item.id}
                                                            onClick={() => {
                                                                setCity(item.city);
                                                                handleSearch();
                                                            }}
                                                            className="px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 text-sm transition-colors"
                                                        >
                                                            {item.city}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Current Weather */}
                                    {weatherData && (
                                        <div className="p-6">
                                            {loading ? (
                                                <div className="text-center py-12">
                                                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                                                    <p className="mt-4 text-slate-500">Fetching weather data...</p>
                                                </div>
                                            ) : (
                                                <>
                                                    {/* Location Header */}
                                                    <div className="mb-8">
                                                        <div className="flex items-center justify-between">
                                                            <div>
                                                                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                                                                    {weatherData.location.name}, {weatherData.location.country}
                                                                </h2>
                                                                <p className="text-slate-600 dark:text-slate-400">
                                                                    {new Date(weatherData.location.localtime).toLocaleDateString('en-US', {
                                                                        weekday: 'long',
                                                                        year: 'numeric',
                                                                        month: 'long',
                                                                        day: 'numeric'
                                                                    })}
                                                                </p>
                                                                <p className="text-slate-500 dark:text-slate-500 text-sm">
                                                                    Last updated: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                                </p>
                                                            </div>
                                                            <div className="text-right">
                                                                <div className="text-6xl font-bold text-blue-600 dark:text-blue-400">
                                                                    {getTemperature().temp}°{unit === 'metric' ? 'C' : 'F'}
                                                                </div>
                                                                <p className="text-slate-600 dark:text-slate-400">
                                                                    Feels like {getTemperature().feelsLike}°{unit === 'metric' ? 'C' : 'F'}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Weather Condition */}
                                                    <div className="mb-8 flex items-center gap-4 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                                                        <div className="text-5xl">
                                                            {weatherData.current.is_day ? '☀️' : '🌙'}
                                                        </div>
                                                        <div>
                                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                                                {weatherData.current.condition.text}
                                                            </h3>
                                                            <p className="text-slate-600 dark:text-slate-400">
                                                                {weatherData.current.is_day ? 'Daytime' : 'Nighttime'}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* Weather Details Grid */}
                                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                                        <div className="p-4 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700">
                                                            <div className="flex items-center gap-2 mb-2">
                                                                <Wind className="w-4 h-4 text-blue-500" />
                                                                <span className="text-sm text-slate-600 dark:text-slate-400">Wind</span>
                                                            </div>
                                                            <div className="text-xl font-bold text-slate-900 dark:text-white">
                                                                {getWindSpeed().speed} {getWindSpeed().unit}
                                                            </div>
                                                            <div className="text-sm text-slate-500">
                                                                {weatherData.current.wind_dir}
                                                            </div>
                                                        </div>

                                                        <div className="p-4 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700">
                                                            <div className="flex items-center gap-2 mb-2">
                                                                <Droplets className="w-4 h-4 text-cyan-500" />
                                                                <span className="text-sm text-slate-600 dark:text-slate-400">Humidity</span>
                                                            </div>
                                                            <div className="text-xl font-bold text-slate-900 dark:text-white">
                                                                {weatherData.current.humidity}%
                                                            </div>
                                                            <div className="text-sm text-slate-500">
                                                                {weatherData.current.humidity > 80 ? 'High' :
                                                                    weatherData.current.humidity > 50 ? 'Moderate' : 'Low'}
                                                            </div>
                                                        </div>

                                                        <div className="p-4 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700">
                                                            <div className="flex items-center gap-2 mb-2">
                                                                <Thermometer className="w-4 h-4 text-orange-500" />
                                                                <span className="text-sm text-slate-600 dark:text-slate-400">Pressure</span>
                                                            </div>
                                                            <div className="text-xl font-bold text-slate-900 dark:text-white">
                                                                {weatherData.current.pressure_mb} hPa
                                                            </div>
                                                            <div className="text-sm text-slate-500">
                                                                {weatherData.current.pressure_mb > 1020 ? 'High' :
                                                                    weatherData.current.pressure_mb < 1000 ? 'Low' : 'Normal'}
                                                            </div>
                                                        </div>

                                                        <div className="p-4 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700">
                                                            <div className="flex items-center gap-2 mb-2">
                                                                <Sun className="w-4 h-4 text-yellow-500" />
                                                                <span className="text-sm text-slate-600 dark:text-slate-400">UV Index</span>
                                                            </div>
                                                            <div className="text-xl font-bold text-slate-900 dark:text-white">
                                                                {weatherData.current.uv}
                                                            </div>
                                                            <div className="text-sm text-slate-500">
                                                                {weatherData.current.uv > 8 ? 'Very High' :
                                                                    weatherData.current.uv > 6 ? 'High' :
                                                                        weatherData.current.uv > 3 ? 'Moderate' : 'Low'}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Forecast */}
                                                    <div className="mb-6">
                                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                                                            5-Day Forecast
                                                        </h3>
                                                        <div className="grid grid-cols-5 gap-2">
                                                            {forecastData.map((day, index) => (
                                                                <div key={index} className="p-3 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 text-center">
                                                                    <div className="font-medium text-slate-900 dark:text-white">
                                                                        {day.day}
                                                                    </div>
                                                                    <div className="text-2xl my-2">
                                                                        {day.icon}
                                                                    </div>
                                                                    <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                                                                        {day.condition}
                                                                    </div>
                                                                    <div className="flex justify-center gap-2">
                                                                        <span className="font-bold text-slate-900 dark:text-white">
                                                                            {day.high}°
                                                                        </span>
                                                                        <span className="text-slate-500">
                                                                            {day.low}°
                                                                        </span>
                                                                    </div>
                                                                    <div className="text-xs text-blue-500 mt-1">
                                                                        {day.precip}% 💧
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Hourly Forecast */}
                                                    <div>
                                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                                                            24-Hour Forecast
                                                        </h3>
                                                        <div className="overflow-x-auto">
                                                            <div className="flex gap-4 pb-4 min-w-max">
                                                                {weatherData.forecast.forecastday[0].hour.map((hour, index) => (
                                                                    <div key={index} className="flex-shrink-0 w-20 p-3 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 text-center">
                                                                        <div className="font-medium text-slate-900 dark:text-white">
                                                                            {hour.time}
                                                                        </div>
                                                                        <div className="text-2xl my-2">
                                                                            {hour.time < '06:00' || hour.time > '18:00' ? '🌙' : '☀️'}
                                                                        </div>
                                                                        <div className="font-bold text-slate-900 dark:text-white">
                                                                            {unit === 'metric' ? hour.temp_c : hour.temp_f}°
                                                                        </div>
                                                                        {hour.chance_of_rain > 0 && (
                                                                            <div className="text-xs text-blue-500 mt-1">
                                                                                {hour.chance_of_rain}%
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Code Examples Panel */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl h-fit">
                                <div className="flex justify-between items-center px-6 py-4 bg-slate-900/50 border-b border-slate-800">
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-1">
                                            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <div className="text-sm font-mono text-slate-400">weather_app.js</div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => runCode(codeExamples.apiIntegration)}
                                            className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-sm transition-all hover:shadow-lg hover:shadow-blue-500/30 ${pulseAnimation ? 'animate-pulse' : ''}`}
                                        >
                                            <Play className="w-4 h-4 fill-current" />
                                            Run Code
                                        </button>
                                        <button
                                            onClick={() => copyToClipboard(codeExamples.apiIntegration)}
                                            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
                                        >
                                            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                                        </button>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex gap-2 mb-4">
                                        <button
                                            onClick={() => runCode(codeExamples.apiIntegration)}
                                            className="px-3 py-1 rounded-lg bg-blue-900/50 hover:bg-blue-800 text-blue-300 hover:text-white text-xs font-mono border border-blue-800"
                                        >
                                            API Integration
                                        </button>
                                        <button
                                            onClick={() => runCode(codeExamples.geolocation)}
                                            className="px-3 py-1 rounded-lg bg-green-900/50 hover:bg-green-800 text-green-300 hover:text-white text-xs font-mono border border-green-800"
                                        >
                                            Geolocation
                                        </button>
                                        <button
                                            onClick={() => runCode(codeExamples.uiComponents)}
                                            className="px-3 py-1 rounded-lg bg-purple-900/50 hover:bg-purple-800 text-purple-300 hover:text-white text-xs font-mono border border-purple-800"
                                        >
                                            UI Components
                                        </button>
                                    </div>
                                    <pre className="font-mono text-slate-300 text-sm overflow-x-auto max-h-96">
                                        <code>{codeExamples.apiIntegration}</code>
                                    </pre>
                                </div>

                                {/* Output Console */}
                                {output && (
                                    <div className="border-t border-slate-800 bg-black/50">
                                        <div className="flex items-center justify-between px-6 py-3 bg-slate-900/30">
                                            <div className="flex items-center gap-2">
                                                <Terminal className="w-4 h-4 text-green-500" />
                                                <span className="text-sm font-bold text-slate-400">CODE OUTPUT</span>
                                            </div>
                                            <button
                                                onClick={() => setOutput('')}
                                                className="text-xs text-slate-500 hover:text-slate-300"
                                            >
                                                Clear
                                            </button>
                                        </div>
                                        <pre className="p-6 text-green-400 font-mono text-sm whitespace-pre-wrap">
                                            {output}
                                        </pre>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>

                    {/* Practice Exercise */}
                    <div className="relative bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 dark:from-blue-950/20 dark:via-cyan-950/20 dark:to-sky-950/20 rounded-3xl p-6 md:p-8 mb-12 border border-blue-200 dark:border-blue-900/50 overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 animate-gradient-x"></div>

                        <div className="relative">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-600 shadow-lg shadow-blue-500/30 animate-bounce">
                                        <Target className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Project Implementation</h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">Build Your Own Weather App</p>
                                    </div>
                                </div>
                                <div className="hidden md:flex items-center gap-2">
                                    <Wifi className="w-4 h-4 text-green-500 animate-pulse" />
                                    <BatteryCharging className="w-4 h-4 text-green-500" />
                                    <span className="text-xs text-slate-500">API Integration Mode</span>
                                </div>
                            </div>

                            {/* Exercise Description */}
                            <div className="mb-6 bg-white/50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                                <p className="text-slate-700 dark:text-slate-300 mb-3">
                                    <span className="font-bold text-blue-600 dark:text-blue-400">Challenge:</span> Implement the Weather app according to the requirements. Use the code editor below to write your solution.
                                </p>
                                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        <span>Create a <span className="font-bold text-blue-600">WeatherAPI class</span> to handle API calls</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                                        <span>Implement <span className="font-bold text-cyan-600">geolocation</span> with fallbacks</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                                        <span>Add <span className="font-bold text-sky-600">search history</span> with localStorage</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        <span>Include <span className="font-bold text-green-600">error handling</span> for API failures</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Code Editor */}
                            <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl mb-6">
                                <div className="flex justify-between items-center px-4 py-3 bg-slate-900">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                        <span className="text-xs text-slate-400 font-mono">my_weather_app.js</span>
                                    </div>
                                    <button
                                        onClick={() => setShowSolution(!showSolution)}
                                        className="text-xs px-3 py-1 rounded-lg bg-blue-500/20 text-blue-500 hover:bg-blue-500/30 transition-colors"
                                    >
                                        {showSolution ? 'Hide Solution' : 'Show Solution'}
                                    </button>
                                </div>

                                <textarea
                                    value={userCode}
                                    onChange={(e) => setUserCode(e.target.value)}
                                    className="w-full h-48 bg-slate-950 text-slate-300 font-mono p-4 resize-none focus:outline-none text-sm leading-relaxed"
                                    placeholder={`// Implement your Weather App here
class WeatherApp {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.weatherapi.com/v1';
        this.currentUnit = 'metric';
        this.searchHistory = [];
        this.favorites = [];
        this.init();
    }

    // Initialize the app
    init() {
        // Your code here
    }

    // Get current weather by city
    async getCurrentWeather(city) {
        // Your code here
    }

    // Get forecast
    async getForecast(city, days = 3) {
        // Your code here
    }

    // Get user's current location
    async getCurrentLocation() {
        // Your code here
    }

    // Get weather by coordinates
    async getWeatherByCoords(lat, lon) {
        // Your code here
    }

    // Render weather data to UI
    renderWeather(data) {
        // Your code here
    }

    // Render forecast
    renderForecast(data) {
        // Your code here
    }

    // Handle search
    async handleSearch(city) {
        // Your code here
    }

    // Handle geolocation
    async handleGeolocation() {
        // Your code here
    }

    // Toggle temperature unit
    toggleUnit() {
        // Your code here
    }

    // Save search history
    saveSearchHistory(city) {
        // Your code here
    }

    // Load search history
    loadSearchHistory() {
        // Your code here
    }

    // Error handling
    showError(message) {
        // Your code here
    }

    // Loading states
    showLoading() {
        // Your code here
    }

    hideLoading() {
        // Your code here
    }

    // ADVANCED FEATURES (choose 2+)
    // 1. Search suggestions/autocomplete
    async getSearchSuggestions(query) {
        // Your code here
    }

    // 2. Favorite locations
    toggleFavorite(location) {
        // Your code here
    }

    // 3. Weather maps
    showWeatherMap(lat, lon) {
        // Your code here
    }

    // 4. Hourly forecast
    renderHourlyForecast(data) {
        // Your code here
    }

    // 5. Air quality
    async getAirQuality(city) {
        // Your code here
    }

    // 6. Weather alerts
    async getAlerts(city) {
        // Your code here
    }
}

// Initialize the app with your API key
const weatherApp = new WeatherApp('YOUR_API_KEY_HERE');`}
                                />

                                {/* Solution Reveal */}
                                {showSolution && (
                                    <div className="border-t border-slate-800 bg-green-950/20 animate-in slide-in-from-top-4">
                                        <div className="px-4 py-2 bg-green-900/30 border-b border-green-900/50 flex items-center gap-2">
                                            <Check className="w-4 h-4 text-green-400" />
                                            <span className="text-xs font-bold text-green-400">Complete Solution</span>
                                        </div>
                                        <pre className="p-4 font-mono text-sm text-green-400 whitespace-pre-wrap">
                                            {solutionCode}
                                        </pre>
                                    </div>
                                )}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                                <button
                                    onClick={runPracticeCode}
                                    className="flex-1 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold hover:shadow-2xl hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-3 group"
                                >
                                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    <span>Test My Implementation</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>

                                <button
                                    onClick={clearPractice}
                                    className="px-6 py-4 rounded-xl border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                                >
                                    <RefreshCw className="w-4 h-4" />
                                    Reset
                                </button>
                            </div>

                            {/* Output Display */}
                            {practiceOutput && (
                                <div className="bg-gradient-to-r from-slate-900 to-slate-950 rounded-2xl p-5 border border-slate-800 animate-in fade-in">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-2">
                                            <Terminal className="w-5 h-5 text-green-500" />
                                            <span className="font-bold text-slate-300">Project Output</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Cloud className="w-4 h-4 text-slate-500" />
                                            <span className="text-xs text-slate-500">Weather API</span>
                                        </div>
                                    </div>
                                    <pre className="text-green-400 text-sm whitespace-pre-wrap overflow-x-auto p-4 bg-black/30 rounded-lg">
                                        {practiceOutput}
                                    </pre>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Project Submission & Next Steps */}
                    <div className="mb-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-800">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <Upload className="w-5 h-5 text-emerald-600" />
                                    Project Submission
                                </h3>
                                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>Sign up for a free Weather API key</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>Deploy to GitHub Pages (free hosting)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>Add your API key as an environment variable</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>Test on mobile devices for responsiveness</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 p-6 rounded-2xl border border-purple-200 dark:border-purple-800">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-purple-600" />
                                    Next Project: E-commerce Cart
                                </h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                                    Ready for your final challenge? The E-commerce Cart project will teach you:
                                </p>
                                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                        <span>Shopping cart state management</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                                        <span>Product filtering and sorting</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                                        <span>Checkout process with validation</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        <span>Payment simulation and order confirmation</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Footer */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-slate-200 dark:border-slate-800">
                        <a
                            href="/project1"
                            className="w-full md:w-auto px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group"
                        >
                            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span>To-Do App Project</span>
                        </a>

                        <div className="text-center">
                            <div className="text-xs text-slate-500 dark:text-slate-400 mb-2 font-bold uppercase tracking-wider">
                                Project Progress
                            </div>
                            <div className="w-64 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
                                <div className="h-full w-2/3 bg-gradient-to-r from-blue-400 via-cyan-500 to-sky-500 rounded-full animate-gradient-x"></div>
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                                Project 2 • 2 of 3 Projects
                            </div>
                        </div>

                        <a
                            href="/project3"
                            className="w-full md:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold hover:shadow-2xl hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 group"
                        >
                            <span>E-commerce Cart Project</span>
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </main>

            {/* Add CSS Animations */}
            <style jsx>{`
                @keyframes gradient-x {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                .animate-gradient-x {
                    animation: gradient-x 3s ease infinite;
                    background-size: 200% 200%;
                }
                .animate-gradient {
                    background-size: 300% 300%;
                    animation: gradient-x 5s ease infinite;
                }
            `}</style>
        </div>
    );
}