from flask import Flask, request, jsonify, render_template
import folium
from folium.plugins import HeatMap

app = Flask(__name__)

@app.route('/')
def index():
    # Create a map centered on Kerala, India with zoom level 50
    m = folium.Map(location=[10.8505, 76.2711], zoom_start=50)

    # Sample data points (latitude, longitude) in Kerala - you can replace this with your own data
    data = [
        [8.5488412, 76.9390087],  # Center point in Kerala
        [10.5951, 76.6412],  # Sample point 1
        [10.5276, 76.2144],  # Sample point 2
        [11.2588, 75.7804],  # Sample point 3
        [11.2588, 75.9384],  # Sample point 4
        [10.3560, 76.1822],  # Sample point 5
        [11.3140, 75.9271],  # Sample point 6
        [11.0000, 76.5000],  # Sample point 7
        [10.0670, 76.4962],  # Sample point 8
        [9.9312, 76.2673],   # Sample point 9
        [10.5324, 76.2144],  # Sample point 10
        [10.8505, 76.2711],  # Sample point 11
    ]

    # Add heatmap layer
    HeatMap(data).add_to(m)

    return m._repr_html_()

@app.route('/current-location', methods=['POST'])
def set_current_location():
    data = request.json
    latitude = data.get('latitude')
    longitude = data.get('longitude')

    # Update the map center to the current location with zoom level 50
    m = folium.Map(location=[latitude, longitude], zoom_start=50)

    # Sample data points (latitude, longitude) in Kerala - you can replace this with your own data
    data = [
        [latitude, longitude],  # Current location
        [10.5951, 76.6412],  # Sample point 1
        [10.5276, 76.2144],  # Sample point 2
        [11.2588, 75.7804],  # Sample point 3
        [11.2588, 75.9384],  # Sample point 4
        [10.3560, 76.1822],  # Sample point 5
        [11.3140, 75.9271],  # Sample point 6
        [11.0000, 76.5000],  # Sample point 7
        [10.0670, 76.4962],  # Sample point 8
        [9.9312, 76.2673],   # Sample point 9
        [10.5324, 76.2144],  # Sample point 10
        [latitude, longitude],  # Current location
    ]

    # Add heatmap layer
    HeatMap(data).add_to(m)

    return jsonify({"message": "Current location set successfully."})

if __name__ == '__main__':
    app.run(debug=True)
